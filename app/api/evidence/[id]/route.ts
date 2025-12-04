/**
 * JAIC Evidence API - Individual Evidence Operations
 * GET: Retrieve evidence metadata and encrypted data
 * DELETE: Remove evidence (with chain of custody log)
 */

import { NextRequest, NextResponse } from 'next/server';
import { getEvidenceById, deleteEvidence, updateEvidence } from '@/lib/data-storage';
import { createCustodyEntry } from '@/lib/chain-of-custody';

/**
 * GET /api/evidence/[id]
 * Retrieve evidence metadata and encrypted data
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const evidence = await getEvidenceById(id);

    if (!evidence) {
      return NextResponse.json(
        { error: 'Evidence not found' },
        { status: 404 }
      );
    }

    // Log access in chain of custody
    const accessEntry = createCustodyEntry(
      evidence.caseNumber,
      evidence.id,
      'ACCESSED',
      'ADMIN_USER', // TODO: Get from authentication context
      {
        method: 'API',
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      }
    );

    // Update evidence with new custody entry
    evidence.chainOfCustody.push(accessEntry);
    await updateEvidence(evidence.id, { chainOfCustody: evidence.chainOfCustody });

    // TODO: In production:
    // - Fetch actual encrypted file from blob storage
    // - Verify file integrity before serving
    // - Log access to audit trail
    // - Implement rate limiting

    return NextResponse.json(evidence, { status: 200 });
  } catch (error) {
    console.error('Error fetching evidence:', error);
    return NextResponse.json(
      { error: 'Failed to fetch evidence', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/evidence/[id]
 * Remove evidence (soft delete with chain of custody log)
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const evidence = await getEvidenceById(id);

    if (!evidence) {
      return NextResponse.json(
        { error: 'Evidence not found' },
        { status: 404 }
      );
    }

    // Create custody entry for destruction
    const destructionEntry = createCustodyEntry(
      evidence.caseNumber,
      evidence.id,
      'DESTROYED',
      'ADMIN_USER', // TODO: Get from authentication context
      {
        reason: 'Manual deletion via admin',
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        timestamp: new Date().toISOString(),
      }
    );

    // Update evidence with destruction entry before soft delete
    evidence.chainOfCustody.push(destructionEntry);
    await updateEvidence(evidence.id, { chainOfCustody: evidence.chainOfCustody });

    // Soft delete
    const success = await deleteEvidence(id);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete evidence' },
        { status: 500 }
      );
    }

    // TODO: In production:
    // - Mark file for deletion in blob storage (don't delete immediately)
    // - Update case's evidenceIds array
    // - Log to audit trail
    // - Send notifications if required
    // - Implement retention policy checks

    return NextResponse.json(
      {
        success: true,
        message: 'Evidence deleted successfully',
        chainOfCustody: evidence.chainOfCustody,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting evidence:', error);
    return NextResponse.json(
      { error: 'Failed to delete evidence', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
