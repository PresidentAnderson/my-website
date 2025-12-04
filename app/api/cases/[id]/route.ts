/**
 * JAIC Case API - Individual Case Operations
 * GET: Retrieve specific case details
 * PUT: Update case status/notes/assignment
 * DELETE: Archive case (soft delete)
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCaseById, updateCase, deleteCase } from '@/lib/data-storage';
import { Case } from '@/lib/types';

/**
 * GET /api/cases/[id]
 * Retrieve specific case details
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const caseData = await getCaseById(id);

    if (!caseData) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(caseData, { status: 200 });
  } catch (error) {
    console.error('Error fetching case:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/cases/[id]
 * Update case details
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updates: Partial<Case> = await request.json();

    // Prevent updating immutable fields
    delete updates.id;
    delete updates.caseNumber;
    delete updates.createdAt;
    delete updates.submittedAt;
    delete updates.submittedBy;

    const updatedCase = await updateCase(id, updates);

    if (!updatedCase) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // TODO: In production:
    // - Log changes to audit trail
    // - Trigger notifications for status changes
    // - Update search indexes

    return NextResponse.json(
      {
        success: true,
        case: updatedCase,
        message: 'Case updated successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating case:', error);
    return NextResponse.json(
      { error: 'Failed to update case', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/cases/[id]
 * Archive case (soft delete)
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const success = await deleteCase(id);

    if (!success) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // TODO: In production:
    // - Log deletion to audit trail
    // - Archive associated evidence
    // - Send notifications

    return NextResponse.json(
      {
        success: true,
        message: 'Case archived successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting case:', error);
    return NextResponse.json(
      { error: 'Failed to archive case', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
