/**
 * JAIC Chain of Custody API
 * GET: Retrieve full chain of custody for case
 * POST: Add custody entry
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCaseById, getAllEvidence, updateEvidence } from '@/lib/data-storage';
import { createCustodyEntry, verifyCustodyChain } from '@/lib/chain-of-custody';
import { ChainOfCustodyEntry } from '@/lib/chain-of-custody';

/**
 * GET /api/custody/[caseId]
 * Retrieve full chain of custody for all evidence in a case
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ caseId: string }> }
) {
  try {
    const { caseId } = await params;

    // Verify case exists
    const caseData = await getCaseById(caseId);
    if (!caseData) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // Get all evidence for this case
    const evidence = await getAllEvidence(caseId);

    // Compile chain of custody from all evidence
    const custodyRecords: {
      evidenceId: string;
      originalName: string;
      chain: ChainOfCustodyEntry[];
      verification: {
        valid: boolean;
        errors: string[];
      };
    }[] = [];

    for (const ev of evidence) {
      const verification = verifyCustodyChain(ev.chainOfCustody);

      custodyRecords.push({
        evidenceId: ev.id,
        originalName: ev.originalName,
        chain: ev.chainOfCustody,
        verification,
      });
    }

    return NextResponse.json(
      {
        caseId,
        caseNumber: caseData.caseNumber,
        evidenceCount: evidence.length,
        custodyRecords,
        generatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching chain of custody:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chain of custody', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/custody/[caseId]
 * Add a new custody entry to evidence
 *
 * Body should contain:
 * - evidenceId: string
 * - action: CustodyAction
 * - actor: string
 * - metadata?: object
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ caseId: string }> }
) {
  try {
    const { caseId } = await params;
    const body = await request.json();

    // Validate required fields
    if (!body.evidenceId || !body.action || !body.actor) {
      return NextResponse.json(
        { error: 'Missing required fields: evidenceId, action, actor' },
        { status: 400 }
      );
    }

    // Verify case exists
    const caseData = await getCaseById(caseId);
    if (!caseData) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // Get evidence
    const { getEvidenceById } = await import('@/lib/data-storage');
    const evidence = await getEvidenceById(body.evidenceId);

    if (!evidence) {
      return NextResponse.json(
        { error: 'Evidence not found' },
        { status: 404 }
      );
    }

    if (evidence.caseId !== caseId) {
      return NextResponse.json(
        { error: 'Evidence does not belong to this case' },
        { status: 400 }
      );
    }

    // Create custody entry
    const custodyEntry = createCustodyEntry(
      caseData.caseNumber,
      evidence.id,
      body.action,
      body.actor,
      {
        ...body.metadata,
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      }
    );

    // Add to evidence chain
    evidence.chainOfCustody.push(custodyEntry);

    // Update evidence
    await updateEvidence(evidence.id, {
      chainOfCustody: evidence.chainOfCustody,
    });

    // Verify chain integrity
    const verification = verifyCustodyChain(evidence.chainOfCustody);

    return NextResponse.json(
      {
        success: true,
        entry: custodyEntry,
        verification,
        message: 'Custody entry added successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding custody entry:', error);
    return NextResponse.json(
      { error: 'Failed to add custody entry', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
