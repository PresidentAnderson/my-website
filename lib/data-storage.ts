/**
 * JAIC Data Storage Module
 * In-memory storage for development
 * TODO: Replace with Supabase/PostgreSQL in production
 */

import { Case, Evidence, CaseNote, CaseFilters, PaginationParams, PaginatedResponse } from './types';

// In-memory storage (will be replaced with database)
let cases: Case[] = [];
let evidence: Evidence[] = [];
let caseNotes: CaseNote[] = [];

/**
 * Cases CRUD operations
 */

export async function getAllCases(
  filters?: CaseFilters,
  pagination?: PaginationParams
): Promise<PaginatedResponse<Case>> {
  let filtered = [...cases];

  // Apply filters
  if (filters) {
    if (filters.status) {
      filtered = filtered.filter(c => filters.status!.includes(c.status));
    }
    if (filters.domain) {
      filtered = filtered.filter(c => filters.domain!.includes(c.domain));
    }
    if (filters.priority) {
      filtered = filtered.filter(c => filters.priority!.includes(c.priority));
    }
    if (filters.assignedTo) {
      filtered = filtered.filter(c => c.assignedTo === filters.assignedTo);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(c =>
        c.caseNumber.toLowerCase().includes(searchLower) ||
        c.title.toLowerCase().includes(searchLower) ||
        c.summary.toLowerCase().includes(searchLower)
      );
    }
    if (filters.dateRange) {
      filtered = filtered.filter(c => {
        const caseDate = new Date(c.submittedAt);
        const start = new Date(filters.dateRange!.start);
        const end = new Date(filters.dateRange!.end);
        return caseDate >= start && caseDate <= end;
      });
    }
  }

  // Sort by most recent
  filtered.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

  // Apply pagination
  const page = pagination?.page || 1;
  const pageSize = pagination?.pageSize || 10;
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const data = filtered.slice(start, end);

  return {
    data,
    pagination: {
      page,
      pageSize,
      total,
      totalPages,
    },
  };
}

export async function getCaseById(id: string): Promise<Case | null> {
  return cases.find(c => c.id === id) || null;
}

export async function getCaseByCaseNumber(caseNumber: string): Promise<Case | null> {
  return cases.find(c => c.caseNumber === caseNumber) || null;
}

export async function createCase(caseData: Omit<Case, 'id' | 'createdAt' | 'updatedAt'>): Promise<Case> {
  const now = new Date().toISOString();
  const newCase: Case = {
    ...caseData,
    id: generateId('CASE'),
    createdAt: now,
    updatedAt: now,
  };

  cases.push(newCase);
  return newCase;
}

export async function updateCase(id: string, updates: Partial<Case>): Promise<Case | null> {
  const index = cases.findIndex(c => c.id === id);
  if (index === -1) return null;

  cases[index] = {
    ...cases[index],
    ...updates,
    id: cases[index].id, // Preserve ID
    createdAt: cases[index].createdAt, // Preserve creation time
    updatedAt: new Date().toISOString(),
  };

  return cases[index];
}

export async function deleteCase(id: string): Promise<boolean> {
  const index = cases.findIndex(c => c.id === id);
  if (index === -1) return false;

  // Soft delete - set archived date
  cases[index].status = 'ARCHIVED';
  cases[index].archivedAt = new Date().toISOString();
  cases[index].updatedAt = new Date().toISOString();

  return true;
}

/**
 * Evidence CRUD operations
 */

export async function getAllEvidence(caseId?: string): Promise<Evidence[]> {
  if (caseId) {
    return evidence.filter(e => e.caseId === caseId && !e.deletedAt);
  }
  return evidence.filter(e => !e.deletedAt);
}

export async function getEvidenceById(id: string): Promise<Evidence | null> {
  return evidence.find(e => e.id === id && !e.deletedAt) || null;
}

export async function createEvidence(evidenceData: Omit<Evidence, 'id' | 'uploadedAt'>): Promise<Evidence> {
  const newEvidence: Evidence = {
    ...evidenceData,
    id: generateId('EVID'),
    uploadedAt: new Date().toISOString(),
  };

  evidence.push(newEvidence);
  return newEvidence;
}

export async function updateEvidence(id: string, updates: Partial<Evidence>): Promise<Evidence | null> {
  const index = evidence.findIndex(e => e.id === id);
  if (index === -1) return null;

  evidence[index] = {
    ...evidence[index],
    ...updates,
    id: evidence[index].id, // Preserve ID
    uploadedAt: evidence[index].uploadedAt, // Preserve upload time
  };

  return evidence[index];
}

export async function deleteEvidence(id: string): Promise<boolean> {
  const index = evidence.findIndex(e => e.id === id);
  if (index === -1) return false;

  // Soft delete
  evidence[index].deletedAt = new Date().toISOString();

  return true;
}

/**
 * Case Notes CRUD operations
 */

export async function getCaseNotes(caseId: string): Promise<CaseNote[]> {
  return caseNotes
    .filter(n => n.caseId === caseId)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export async function createCaseNote(noteData: Omit<CaseNote, 'id' | 'timestamp'>): Promise<CaseNote> {
  const newNote: CaseNote = {
    ...noteData,
    id: generateId('NOTE'),
    timestamp: new Date().toISOString(),
  };

  caseNotes.push(newNote);
  return newNote;
}

/**
 * Statistics and Analytics
 */

export async function getCaseStatistics() {
  const activeCases = cases.filter(c => c.status !== 'ARCHIVED');

  const byStatus = activeCases.reduce((acc, c) => {
    acc[c.status] = (acc[c.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const byDomain = activeCases.reduce((acc, c) => {
    acc[c.domain] = (acc[c.domain] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const byPriority = activeCases.reduce((acc, c) => {
    acc[c.priority] = (acc[c.priority] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Calculate monthly intake for last 6 months
  const now = new Date();
  const monthlyIntake: { month: string; count: number }[] = [];
  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthStr = date.toISOString().substring(0, 7);
    const count = cases.filter(c => c.submittedAt.startsWith(monthStr)).length;
    monthlyIntake.push({
      month: monthStr,
      count,
    });
  }

  // Calculate average resolution time for closed cases
  const closedCases = cases.filter(c => c.status === 'CLOSED');
  let avgResolutionTime = 0;
  if (closedCases.length > 0) {
    const totalDays = closedCases.reduce((sum, c) => {
      const start = new Date(c.submittedAt);
      const end = new Date(c.updatedAt);
      const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return sum + days;
    }, 0);
    avgResolutionTime = totalDays / closedCases.length;
  }

  return {
    total: activeCases.length,
    byStatus,
    byDomain,
    byPriority,
    monthlyIntake,
    averageResolutionTime: Math.round(avgResolutionTime),
  };
}

/**
 * Utility functions
 */

function generateId(prefix: string): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return `${prefix}-${timestamp}-${random}`.toUpperCase();
}

/**
 * Development helpers - seed data
 */

export function seedTestData(): void {
  if (cases.length === 0) {
    console.log('Seeding test data...');
    // Add some test cases for development
    // This would be removed in production
  }
}

/**
 * Export for migration/backup
 */

export function exportData() {
  return {
    cases,
    evidence,
    caseNotes,
    exportedAt: new Date().toISOString(),
  };
}

export function importData(data: { cases: Case[]; evidence: Evidence[]; caseNotes: CaseNote[] }) {
  cases = data.cases;
  evidence = data.evidence;
  caseNotes = data.caseNotes;
}
