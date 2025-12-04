/**
 * JAIC Case Number Generator
 * Master Brief aligned case identification system
 * Format: JAIC-[YEAR][MONTH]-[CATEGORY]-[SEQUENCE]-[CHECKSUM]
 */

export type CaseDomain =
  | 'FRAUD'
  | 'MISCONDUCT'
  | 'CONTRACT'
  | 'ADMIN'
  | 'DIGITAL'
  | 'CROSSBORDER'
  | 'GENERAL';

export interface CaseNumber {
  full: string;
  year: number;
  month: number;
  category: CaseDomain;
  sequence: number;
  checksum: string;
  timestamp: string;
}

/**
 * Generate a new case number
 */
export function generateCaseNumber(
  category: CaseDomain = 'GENERAL',
  sequence?: number
): CaseNumber {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');

  // Generate sequence number (would normally come from database)
  const seq = sequence || generateSequence();
  const seqStr = String(seq).padStart(4, '0');

  // Generate checksum for validation
  const checksumInput = `${year}${month}${category}${seqStr}`;
  const checksum = generateChecksum(checksumInput);

  // Construct full case number
  const full = `JAIC-${year}${month}-${category}-${seqStr}-${checksum}`;

  return {
    full,
    year,
    month: parseInt(month),
    category,
    sequence: seq,
    checksum,
    timestamp: now.toISOString(),
  };
}

/**
 * Validate case number format and checksum
 */
export function validateCaseNumber(caseNumber: string): boolean {
  const pattern = /^JAIC-(\d{6})-([A-Z]+)-(\d{4})-([A-Z0-9]{4})$/;
  const match = caseNumber.match(pattern);

  if (!match) return false;

  const [, yearMonth, category, sequence, checksum] = match;
  const checksumInput = `${yearMonth}${category}${sequence}`;
  const expectedChecksum = generateChecksum(checksumInput);

  return checksum === expectedChecksum;
}

/**
 * Parse case number into components
 */
export function parseCaseNumber(caseNumber: string): CaseNumber | null {
  const pattern = /^JAIC-(\d{4})(\d{2})-([A-Z]+)-(\d{4})-([A-Z0-9]{4})$/;
  const match = caseNumber.match(pattern);

  if (!match) return null;

  const [, year, month, category, sequence, checksum] = match;

  return {
    full: caseNumber,
    year: parseInt(year),
    month: parseInt(month),
    category: category as CaseDomain,
    sequence: parseInt(sequence),
    checksum,
    timestamp: '', // Not recoverable from case number
  };
}

/**
 * Generate checksum using simple hash algorithm
 * (In production, use crypto.subtle.digest)
 */
function generateChecksum(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Convert to base36 and take first 4 chars
  const base36 = Math.abs(hash).toString(36).toUpperCase();
  return base36.substring(0, 4).padStart(4, '0');
}

/**
 * Generate sequence number
 * In production, this would query database for next available sequence
 */
function generateSequence(): number {
  // Use timestamp-based pseudo-sequence for demo
  return Math.floor(Date.now() % 10000);
}

/**
 * Format case number for display
 */
export function formatCaseNumber(caseNum: CaseNumber): string {
  return caseNum.full;
}

/**
 * Get case domain from category code
 */
export function getCaseDomainLabel(category: CaseDomain): string {
  const labels: Record<CaseDomain, string> = {
    FRAUD: 'Fraud & Financial Leakage',
    MISCONDUCT: 'Corporate Misconduct',
    CONTRACT: 'Contractual Noncompliance',
    ADMIN: 'Administrative Irregularities',
    DIGITAL: 'Digital Forensics',
    CROSSBORDER: 'Cross-Border Reconstructions',
    GENERAL: 'General Investigation',
  };

  return labels[category];
}

/**
 * Get category code from case domain name
 */
export function getCategoryFromDomain(domain: string): CaseDomain {
  const mapping: Record<string, CaseDomain> = {
    'fraud-financial-leakage': 'FRAUD',
    'corporate-misconduct': 'MISCONDUCT',
    'contractual-noncompliance': 'CONTRACT',
    'administrative-irregularities': 'ADMIN',
    'digital-forensics': 'DIGITAL',
    'cross-border-reconstructions': 'CROSSBORDER',
  };

  return mapping[domain] || 'GENERAL';
}
