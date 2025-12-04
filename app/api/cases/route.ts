/**
 * JAIC Cases API - List and Create
 * GET: List all cases with filtering and pagination
 * POST: Create new case from intake submission
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAllCases, createCase } from '@/lib/data-storage';
import { generateCaseNumber, getCategoryFromDomain } from '@/lib/case-number';
import { Case, CaseFilters, PaginationParams, IntakeSubmission } from '@/lib/types';

/**
 * GET /api/cases
 * List all cases with optional filtering and pagination
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Parse filters
    const filters: CaseFilters = {};

    const status = searchParams.get('status');
    if (status) {
      filters.status = status.split(',') as any[];
    }

    const domain = searchParams.get('domain');
    if (domain) {
      filters.domain = domain.split(',') as any[];
    }

    const priority = searchParams.get('priority');
    if (priority) {
      filters.priority = priority.split(',') as any[];
    }

    const assignedTo = searchParams.get('assignedTo');
    if (assignedTo) {
      filters.assignedTo = assignedTo;
    }

    const search = searchParams.get('search');
    if (search) {
      filters.search = search;
    }

    const dateStart = searchParams.get('dateStart');
    const dateEnd = searchParams.get('dateEnd');
    if (dateStart && dateEnd) {
      filters.dateRange = { start: dateStart, end: dateEnd };
    }

    // Parse pagination
    const pagination: PaginationParams = {
      page: parseInt(searchParams.get('page') || '1'),
      pageSize: parseInt(searchParams.get('pageSize') || '10'),
    };

    // Fetch cases
    const result = await getAllCases(filters, pagination);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error fetching cases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cases', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/cases
 * Create new case from intake submission
 */
export async function POST(request: NextRequest) {
  try {
    const submission: IntakeSubmission = await request.json();

    // Validate submission
    if (!submission.identity || !submission.caseType || !submission.statement) {
      return NextResponse.json(
        { error: 'Invalid submission: missing required fields' },
        { status: 400 }
      );
    }

    // Generate case number
    const category = getCategoryFromDomain(submission.caseType.domain);
    const caseNumber = generateCaseNumber(category);

    // Create case object
    const newCase: Omit<Case, 'id' | 'createdAt' | 'updatedAt'> = {
      caseNumber: caseNumber.full,
      status: 'NEW',
      priority: 'MEDIUM', // Default priority, can be updated later
      domain: category,

      submittedAt: submission.submittedAt || new Date().toISOString(),
      submittedBy: {
        name: submission.identity.name,
        email: submission.identity.email,
        phone: submission.identity.phone,
        entityType: submission.identity.entityType,
        organization: submission.identity.organization,
      },

      title: submission.statement.title,
      summary: submission.statement.summary,
      detailedStatement: submission.statement.detailedStatement,

      incidentDate: submission.statement.incidentDate,
      discoveryDate: submission.statement.discoveryDate,

      parties: submission.statement.parties,

      evidenceIds: [], // Evidence will be uploaded separately
      notes: [],
      tags: [category],
    };

    // Save to database
    const createdCase = await createCase(newCase);

    // TODO: In production, trigger notifications:
    // - Email confirmation to submitter
    // - Internal notification to case managers
    // - Log to audit trail

    return NextResponse.json(
      {
        success: true,
        case: createdCase,
        message: 'Case created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating case:', error);
    return NextResponse.json(
      { error: 'Failed to create case', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
