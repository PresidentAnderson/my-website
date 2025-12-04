/**
 * JAIC Evidence API - Upload Evidence
 * POST: Upload encrypted evidence file
 */

import { NextRequest, NextResponse } from 'next/server';
import { createEvidence, getCaseById } from '@/lib/data-storage';
import { createCustodyEntry } from '@/lib/chain-of-custody';
import { hashFile } from '@/lib/chain-of-custody';
import { Evidence } from '@/lib/types';

/**
 * POST /api/evidence
 * Upload encrypted evidence file
 *
 * Body should contain:
 * - caseId: string
 * - caseNumber: string
 * - encrypted: EncryptedFile object
 * - metadata: EncryptionMetadata object
 * - encryptionKeyId: string
 * - category: evidence category
 * - description?: string
 * - tags?: string[]
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.caseId || !body.caseNumber || !body.encrypted || !body.metadata) {
      return NextResponse.json(
        { error: 'Missing required fields: caseId, caseNumber, encrypted, metadata' },
        { status: 400 }
      );
    }

    // Verify case exists
    const caseExists = await getCaseById(body.caseId);
    if (!caseExists) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // Calculate hash of encrypted data for integrity verification
    const encryptedBuffer = Buffer.from(body.encrypted.encryptedData, 'base64');
    const originalHash = await hashFile(encryptedBuffer.buffer);

    // Create initial chain of custody entry
    const custodyEntry = createCustodyEntry(
      body.caseNumber,
      'PENDING', // Will be updated with actual evidence ID
      'RECEIVED',
      body.metadata.encryptedBy || 'SYSTEM',
      {
        uploadedVia: 'API',
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      }
    );

    // Create evidence record
    const evidenceData: Omit<Evidence, 'id' | 'uploadedAt'> = {
      caseId: body.caseId,
      caseNumber: body.caseNumber,

      originalName: body.metadata.originalName,
      fileType: body.metadata.mimeType,
      fileSize: body.metadata.size,

      encrypted: body.encrypted,
      metadata: body.metadata,
      encryptionKeyId: body.encryptionKeyId || 'DEFAULT_KEY',

      originalHash,
      currentHash: originalHash,
      integrityVerified: true,
      lastVerified: new Date().toISOString(),

      chainOfCustody: [],

      category: body.category || 'OTHER',
      description: body.description,
      tags: body.tags || [],

      uploadedBy: body.metadata.encryptedBy || 'SYSTEM',
    };

    const evidence = await createEvidence(evidenceData);

    // Update custody entry with actual evidence ID
    custodyEntry.evidenceId = evidence.id;
    evidence.chainOfCustody.push(custodyEntry);

    // TODO: In production:
    // - Store encrypted file in secure blob storage (S3, etc.)
    // - Store encryption key in key management service
    // - Add evidence ID to case's evidenceIds array
    // - Trigger integrity verification job
    // - Log to audit trail

    return NextResponse.json(
      {
        success: true,
        evidence: {
          id: evidence.id,
          caseId: evidence.caseId,
          originalName: evidence.originalName,
          fileSize: evidence.fileSize,
          uploadedAt: evidence.uploadedAt,
          integrityVerified: evidence.integrityVerified,
        },
        message: 'Evidence uploaded successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error uploading evidence:', error);
    return NextResponse.json(
      { error: 'Failed to upload evidence', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/evidence
 * List all evidence (optionally filtered by caseId)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const caseId = searchParams.get('caseId');

    // Import the function
    const { getAllEvidence } = await import('@/lib/data-storage');

    const evidenceList = await getAllEvidence(caseId || undefined);

    // Return minimal data for list view
    const sanitizedList = evidenceList.map(e => ({
      id: e.id,
      caseId: e.caseId,
      caseNumber: e.caseNumber,
      originalName: e.originalName,
      fileType: e.fileType,
      fileSize: e.fileSize,
      category: e.category,
      description: e.description,
      tags: e.tags,
      uploadedAt: e.uploadedAt,
      uploadedBy: e.uploadedBy,
      integrityVerified: e.integrityVerified,
      lastVerified: e.lastVerified,
    }));

    return NextResponse.json(sanitizedList, { status: 200 });
  } catch (error) {
    console.error('Error fetching evidence:', error);
    return NextResponse.json(
      { error: 'Failed to fetch evidence', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
