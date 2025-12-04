/**
 * JAIC Case Management Types
 * Shared types for API and UI components
 */

import { CaseDomain } from './case-number';
import { ChainOfCustodyEntry } from './chain-of-custody';
import { EncryptedFile, EncryptionMetadata } from './crypto';

// Re-export types from other modules
export type { CaseDomain } from './case-number';
export type { ChainOfCustodyEntry } from './chain-of-custody';
export type { EncryptedFile, EncryptionMetadata } from './crypto';

export type CaseStatus = 'NEW' | 'IN_PROGRESS' | 'UNDER_REVIEW' | 'CLOSED' | 'ARCHIVED';

export type CasePriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export type EntityType = 'individual' | 'organization';

export interface Case {
  id: string;
  caseNumber: string;
  status: CaseStatus;
  priority: CasePriority;
  domain: CaseDomain;

  // Intake data
  submittedAt: string;
  submittedBy: {
    name: string;
    email: string;
    phone?: string;
    entityType: EntityType;
    organization?: string;
  };

  // Case details
  title: string;
  summary: string;
  detailedStatement?: string;

  // Timeline
  incidentDate?: string;
  discoveryDate?: string;

  // Parties involved
  parties?: {
    subject?: string[];
    witnesses?: string[];
    affiliates?: string[];
  };

  // Evidence
  evidenceIds: string[];

  // Case management
  assignedTo?: string;
  notes: CaseNote[];
  tags: string[];

  // Metadata
  createdAt: string;
  updatedAt: string;
  archivedAt?: string;
}

export interface CaseNote {
  id: string;
  caseId: string;
  author: string;
  content: string;
  timestamp: string;
  type: 'GENERAL' | 'INVESTIGATION' | 'LEGAL' | 'INTERNAL';
}

export interface Evidence {
  id: string;
  caseId: string;
  caseNumber: string;

  // File information
  originalName: string;
  fileType: string;
  fileSize: number;

  // Encryption
  encrypted: EncryptedFile;
  metadata: EncryptionMetadata;
  encryptionKeyId: string; // Reference to stored key

  // Integrity
  originalHash: string;
  currentHash: string;
  integrityVerified: boolean;
  lastVerified: string;

  // Chain of custody
  chainOfCustody: ChainOfCustodyEntry[];

  // Classification
  category: 'DOCUMENT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DATA' | 'OTHER';
  description?: string;
  tags: string[];

  // Metadata
  uploadedAt: string;
  uploadedBy: string;
  deletedAt?: string;
}

export interface IntakeSubmission {
  // Identity
  identity: {
    name: string;
    email: string;
    phone?: string;
    entityType: EntityType;
    organization?: string;
    position?: string;
  };

  // Case type
  caseType: {
    domain: string;
    category: CaseDomain;
  };

  // Statement
  statement: {
    title: string;
    summary: string;
    detailedStatement?: string;
    incidentDate?: string;
    discoveryDate?: string;
    parties?: {
      subject?: string[];
      witnesses?: string[];
      affiliates?: string[];
    };
  };

  // Evidence
  evidence?: {
    files: File[];
    descriptions: string[];
  };

  // Metadata
  submittedAt: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface CaseFilters {
  status?: CaseStatus[];
  domain?: CaseDomain[];
  priority?: CasePriority[];
  assignedTo?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  search?: string;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface CaseStatistics {
  total: number;
  byStatus: Record<CaseStatus, number>;
  byDomain: Record<CaseDomain, number>;
  byPriority: Record<CasePriority, number>;
  averageResolutionTime: number; // in days
  monthlyIntake: {
    month: string;
    count: number;
  }[];
}
