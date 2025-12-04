/**
 * JAIC Chain of Custody System
 * Evidence timestamping and integrity verification
 * Compliant with investigational standards
 */

export interface ChainOfCustodyEntry {
  id: string;
  caseNumber: string;
  evidenceId: string;
  action: CustodyAction;
  actor: string;
  timestamp: string;
  location: string;
  hash: string;
  metadata?: Record<string, unknown>;
  signature?: string;
}

export type CustodyAction =
  | 'RECEIVED'
  | 'ACCESSED'
  | 'ANALYZED'
  | 'TRANSFERRED'
  | 'STORED'
  | 'DESTROYED'
  | 'DUPLICATED'
  | 'VERIFIED';

export interface EvidenceTimestamp {
  evidenceId: string;
  originalHash: string;
  timestamp: string;
  blockHeight?: number; // For blockchain timestamping
  txHash?: string;
  authority: string;
}

/**
 * Create a new chain of custody entry
 */
export function createCustodyEntry(
  caseNumber: string,
  evidenceId: string,
  action: CustodyAction,
  actor: string,
  metadata?: Record<string, unknown>
): ChainOfCustodyEntry {
  const timestamp = new Date().toISOString();
  const id = generateEntryId(caseNumber, evidenceId, timestamp);

  const entry: ChainOfCustodyEntry = {
    id,
    caseNumber,
    evidenceId,
    action,
    actor,
    timestamp,
    location: getLocationContext(),
    hash: generateEntryHash({ caseNumber, evidenceId, action, actor, timestamp }),
    metadata,
  };

  return entry;
}

/**
 * Verify chain of custody integrity
 */
export function verifyCustodyChain(entries: ChainOfCustodyEntry[]): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check chronological order
  for (let i = 1; i < entries.length; i++) {
    const prev = new Date(entries[i - 1].timestamp);
    const curr = new Date(entries[i].timestamp);

    if (curr < prev) {
      errors.push(`Entry ${i} timestamp precedes previous entry`);
    }
  }

  // Verify hashes
  for (const entry of entries) {
    const expectedHash = generateEntryHash({
      caseNumber: entry.caseNumber,
      evidenceId: entry.evidenceId,
      action: entry.action,
      actor: entry.actor,
      timestamp: entry.timestamp,
    });

    if (entry.hash !== expectedHash) {
      errors.push(`Entry ${entry.id} hash mismatch - possible tampering`);
    }
  }

  // Check for gaps in actions
  const hasReceived = entries.some(e => e.action === 'RECEIVED');
  if (!hasReceived && entries.length > 0) {
    errors.push('Missing initial RECEIVED action');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Generate evidence timestamp for archival purposes
 */
export async function timestampEvidence(
  evidenceId: string,
  fileHash: string
): Promise<EvidenceTimestamp> {
  // In production, this would call a timestamping authority API
  // or write to an immutable ledger/blockchain

  const timestamp: EvidenceTimestamp = {
    evidenceId,
    originalHash: fileHash,
    timestamp: new Date().toISOString(),
    authority: 'JAIC-TIMESTAMP-V1',
  };

  return timestamp;
}

/**
 * Hash file contents for integrity verification
 */
export async function hashFile(file: File | ArrayBuffer): Promise<string> {
  const buffer = file instanceof File ? await file.arrayBuffer() : file;

  // Use SubtleCrypto for SHA-256
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

/**
 * Verify file integrity against stored hash
 */
export async function verifyFileIntegrity(
  file: File | ArrayBuffer,
  expectedHash: string
): Promise<boolean> {
  const actualHash = await hashFile(file);
  return actualHash === expectedHash;
}

/**
 * Generate custody entry ID
 */
function generateEntryId(
  caseNumber: string,
  evidenceId: string,
  timestamp: string
): string {
  const base = `${caseNumber}-${evidenceId}-${timestamp}`;
  const hash = simpleHash(base);
  return `COC-${hash.substring(0, 12).toUpperCase()}`;
}

/**
 * Generate entry hash for integrity verification
 */
function generateEntryHash(data: {
  caseNumber: string;
  evidenceId: string;
  action: string;
  actor: string;
  timestamp: string;
}): string {
  const input = `${data.caseNumber}|${data.evidenceId}|${data.action}|${data.actor}|${data.timestamp}`;
  return simpleHash(input);
}

/**
 * Simple hash function (replace with crypto.subtle.digest in production)
 */
function simpleHash(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(16, '0');
}

/**
 * Get location context for custody entry
 */
function getLocationContext(): string {
  if (typeof window === 'undefined') {
    return 'SERVER';
  }

  return `CLIENT-${window.location.hostname}`;
}

/**
 * Export custody chain to PDF-ready format
 */
export function exportCustodyChain(entries: ChainOfCustodyEntry[]): string {
  let output = 'CHAIN OF CUSTODY RECORD\n';
  output += '='.repeat(80) + '\n\n';

  for (const entry of entries) {
    output += `Entry ID: ${entry.id}\n`;
    output += `Timestamp: ${entry.timestamp}\n`;
    output += `Action: ${entry.action}\n`;
    output += `Actor: ${entry.actor}\n`;
    output += `Location: ${entry.location}\n`;
    output += `Hash: ${entry.hash}\n`;
    if (entry.metadata) {
      output += `Metadata: ${JSON.stringify(entry.metadata, null, 2)}\n`;
    }
    output += '-'.repeat(80) + '\n\n';
  }

  const verification = verifyCustodyChain(entries);
  output += '\nVERIFICATION RESULT\n';
  output += `Status: ${verification.valid ? 'VALID' : 'INVALID'}\n`;
  if (verification.errors.length > 0) {
    output += `Errors:\n${verification.errors.map(e => `  - ${e}`).join('\n')}\n`;
  }

  return output;
}
