/**
 * JAIC Case Notes API
 * GET: Retrieve all notes for a case
 * POST: Add a new note to a case
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCaseNotes, createCaseNote, getCaseById } from '@/lib/data-storage';
import { CaseNote } from '@/lib/types';

/**
 * GET /api/cases/[id]/notes
 * Retrieve all notes for a case
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {

    // Verify case exists
    const caseExists = await getCaseById(id);
    if (!caseExists) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    const notes = await getCaseNotes(id);

    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error('Error fetching case notes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case notes', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/cases/[id]/notes
 * Add a new note to a case
 *
 * Body should contain:
 * - content: string
 * - author: string
 * - type: 'GENERAL' | 'INVESTIGATION' | 'LEGAL' | 'INTERNAL'
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.content || !body.author || !body.type) {
      return NextResponse.json(
        { error: 'Missing required fields: content, author, type' },
        { status: 400 }
      );
    }

    // Verify case exists
    const caseExists = await getCaseById(id);
    if (!caseExists) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // Create note
    const noteData: Omit<CaseNote, 'id' | 'timestamp'> = {
      caseId: id,
      author: body.author,
      content: body.content,
      type: body.type,
    };

    const note = await createCaseNote(noteData);

    // TODO: In production:
    // - Add note to case's notes array
    // - Update case's updatedAt timestamp
    // - Log to audit trail
    // - Trigger notifications if needed

    return NextResponse.json(
      {
        success: true,
        note,
        message: 'Note added successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding case note:', error);
    return NextResponse.json(
      { error: 'Failed to add case note', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
