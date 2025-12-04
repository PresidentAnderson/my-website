/**
 * JAIC PDF Report Generation API
 * GET: Generate and download professional PDF investigational report
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCaseById, getAllEvidence, getCaseNotes } from '@/lib/data-storage';
import { exportCustodyChain } from '@/lib/chain-of-custody';
import { getCaseDomainLabel, parseCaseNumber } from '@/lib/case-number';
import {
  generateInvestigationalReport,
  generatePDFFilename,
  generateHTMLReportString,
  validateCaseData,
  type CaseData,
  type EvidenceItem,
  type TimelineEvent
} from '@/lib/pdf-generator';

/**
 * GET /api/reports/[caseId]/pdf
 * Generate professional PDF investigational report
 *
 * Query Parameters:
 * - preview: boolean - Return HTML preview instead of PDF
 * - includeClient: boolean - Include client information (default: true)
 * - includeEvidence: boolean - Include evidence summary (default: true)
 * - includeChain: boolean - Include chain of custody (default: true)
 * - includeTimeline: boolean - Include timeline (default: true)
 * - watermark: boolean - Include watermark (default: true)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ caseId: string }> }
) {
  try {
    const { caseId } = await params;

    // Parse query parameters
    const searchParams = request.nextUrl.searchParams;
    const preview = searchParams.get('preview') === 'true';
    const includeClientInfo = searchParams.get('includeClient') !== 'false';
    const includeEvidence = searchParams.get('includeEvidence') !== 'false';
    const includeChainOfCustody = searchParams.get('includeChain') !== 'false';
    const includeTimeline = searchParams.get('includeTimeline') !== 'false';
    const watermark = searchParams.get('watermark') !== 'false';

    // Fetch case data from storage
    const caseData = await getCaseById(caseId);
    if (!caseData) {
      return NextResponse.json(
        { error: 'Case not found' },
        { status: 404 }
      );
    }

    // Fetch related data
    const evidence = await getAllEvidence(caseId);
    const notes = await getCaseNotes(caseId);

    // Transform data to PDF generator format
    const pdfCaseData = transformToPDFFormat(caseData, evidence, notes);

    // Validate case data
    const validation = validateCaseData(pdfCaseData);
    if (!validation.valid) {
      return NextResponse.json(
        {
          error: 'Invalid case data for PDF generation',
          details: validation.errors
        },
        { status: 400 }
      );
    }

    const reportOptions = {
      includeClientInfo,
      includeEvidence,
      includeChainOfCustody,
      includeTimeline,
      watermark
    };

    // Return HTML preview if requested
    if (preview) {
      const html = generateHTMLReportString(pdfCaseData, reportOptions);
      return new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      });
    }

    // Generate PDF report
    try {
      const pdfBuffer = await generateInvestigationalReport(pdfCaseData, reportOptions);
      const filename = generatePDFFilename(pdfCaseData.caseNumber);

      return new NextResponse(Buffer.from(pdfBuffer), {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Content-Length': pdfBuffer.length.toString(),
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'X-Case-Number': caseId
        }
      });
    } catch (pdfError) {
      // If Puppeteer is not installed, fall back to text report
      if (pdfError instanceof Error && pdfError.message.includes('Puppeteer')) {
        console.warn('Puppeteer not available, falling back to text report');
        const textReport = generateTextReport(caseData, evidence, notes);
        return new NextResponse(textReport, {
          status: 200,
          headers: {
            'Content-Type': 'text/plain',
            'Content-Disposition': `attachment; filename="JAIC-Report-${caseData.caseNumber}.txt"`,
            'X-Fallback': 'text',
            'X-Warning': 'PDF generation unavailable - install Puppeteer for PDF output'
          }
        });
      }
      throw pdfError;
    }

  } catch (error) {
    console.error('Error generating report:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate report',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Transform storage format to PDF generator format
 */
function transformToPDFFormat(
  caseData: any,
  evidence: any[],
  notes: any[]
): CaseData {
  // Parse case number
  const caseNumber = parseCaseNumber(caseData.caseNumber);
  if (!caseNumber) {
    throw new Error('Invalid case number format');
  }

  // Transform evidence to PDF format
  const pdfEvidence: EvidenceItem[] = evidence.map(ev => ({
    id: ev.id,
    fileName: ev.originalName,
    fileType: ev.fileType,
    fileSize: ev.fileSize,
    uploadDate: ev.uploadedAt,
    hash: ev.integrityHash || 'HASH-NOT-AVAILABLE',
    verificationStatus: ev.integrityVerified ? 'VERIFIED' : 'UNVERIFIED',
    description: ev.description,
    metadata: {
      category: ev.category,
      storagePath: ev.storagePath
    }
  }));

  // Collect all chain of custody entries
  const chainOfCustody = evidence.flatMap(ev =>
    ev.chainOfCustody || []
  );

  // Transform notes to timeline events
  const timeline: TimelineEvent[] = notes.map(note => ({
    timestamp: note.timestamp,
    event: note.type === 'STATUS_CHANGE' ? 'Status Changed' : 'Note Added',
    actor: note.author,
    description: note.content,
    category: note.type as TimelineEvent['category']
  }));

  // Add case status changes to timeline
  timeline.push({
    timestamp: caseData.submittedAt,
    event: 'Case Opened',
    actor: caseData.submittedBy.name,
    description: 'Initial case intake and documentation',
    category: 'STATUS_CHANGE'
  });

  // Sort timeline by timestamp
  timeline.sort((a, b) =>
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  // Generate executive summary from case data
  const executiveSummary = {
    overview: caseData.summary || caseData.title,
    keyFindings: [
      `Case submitted on ${new Date(caseData.submittedAt).toLocaleDateString()}`,
      `${evidence.length} evidence items collected and verified`,
      `Current status: ${caseData.status}`,
      ...(caseData.detailedStatement ?
        [`Detailed investigation ongoing with ${notes.length} documented notes`] :
        []
      )
    ],
    recommendations: [
      'Continue monitoring case developments',
      'Maintain chain of custody for all evidence',
      'Document all investigational activities',
      ...(caseData.status === 'PENDING' ?
        ['Schedule follow-up review'] :
        []
      )
    ]
  };

  return {
    caseNumber,
    title: caseData.title || 'Investigational Case',
    domain: caseData.domain,
    status: caseData.status,
    intakeDate: caseData.submittedAt,
    lastModified: caseData.updatedAt,
    closedDate: caseData.status === 'CLOSED' ? caseData.updatedAt : undefined,
    client: {
      name: caseData.submittedBy.name,
      organization: caseData.submittedBy.organization,
      contactInfo: caseData.submittedBy.email +
        (caseData.submittedBy.phone ? ` | ${caseData.submittedBy.phone}` : ''),
      referenceNumber: caseData.submittedBy.referenceNumber
    },
    executiveSummary,
    evidence: pdfEvidence,
    chainOfCustody,
    timeline,
    notes: caseData.detailedStatement,
    metadata: {
      priority: caseData.priority,
      assignedTo: caseData.assignedTo,
      parties: caseData.parties,
      incidentDate: caseData.incidentDate,
      discoveryDate: caseData.discoveryDate
    }
  };
}

/**
 * Generate text-based report (placeholder for PDF generation)
 */
function generateTextReport(caseData: any, evidence: any[], notes: any[]): string {
  let report = '';

  // Header
  report += '='.repeat(80) + '\n';
  report += 'JONATHAN ANDERSON INVESTIGATIONAL CORPORATION\n';
  report += 'CASE INVESTIGATION REPORT\n';
  report += '='.repeat(80) + '\n\n';

  // Case Information
  report += 'CASE INFORMATION\n';
  report += '-'.repeat(80) + '\n';
  report += `Case Number: ${caseData.caseNumber}\n`;
  report += `Status: ${caseData.status}\n`;
  report += `Priority: ${caseData.priority}\n`;
  report += `Domain: ${getCaseDomainLabel(caseData.domain)}\n`;
  report += `Submitted: ${new Date(caseData.submittedAt).toLocaleString()}\n`;
  report += `Last Updated: ${new Date(caseData.updatedAt).toLocaleString()}\n`;
  if (caseData.assignedTo) {
    report += `Assigned To: ${caseData.assignedTo}\n`;
  }
  report += '\n';

  // Submitter Information
  report += 'SUBMITTER INFORMATION\n';
  report += '-'.repeat(80) + '\n';
  report += `Name: ${caseData.submittedBy.name}\n`;
  report += `Email: ${caseData.submittedBy.email}\n`;
  if (caseData.submittedBy.phone) {
    report += `Phone: ${caseData.submittedBy.phone}\n`;
  }
  report += `Entity Type: ${caseData.submittedBy.entityType}\n`;
  if (caseData.submittedBy.organization) {
    report += `Organization: ${caseData.submittedBy.organization}\n`;
  }
  report += '\n';

  // Case Details
  report += 'CASE DETAILS\n';
  report += '-'.repeat(80) + '\n';
  report += `Title: ${caseData.title}\n\n`;
  report += `Summary:\n${caseData.summary}\n\n`;
  if (caseData.detailedStatement) {
    report += `Detailed Statement:\n${caseData.detailedStatement}\n\n`;
  }
  if (caseData.incidentDate) {
    report += `Incident Date: ${new Date(caseData.incidentDate).toLocaleDateString()}\n`;
  }
  if (caseData.discoveryDate) {
    report += `Discovery Date: ${new Date(caseData.discoveryDate).toLocaleDateString()}\n`;
  }
  report += '\n';

  // Parties Involved
  if (caseData.parties) {
    report += 'PARTIES INVOLVED\n';
    report += '-'.repeat(80) + '\n';
    if (caseData.parties.subject && caseData.parties.subject.length > 0) {
      report += `Subjects: ${caseData.parties.subject.join(', ')}\n`;
    }
    if (caseData.parties.witnesses && caseData.parties.witnesses.length > 0) {
      report += `Witnesses: ${caseData.parties.witnesses.join(', ')}\n`;
    }
    if (caseData.parties.affiliates && caseData.parties.affiliates.length > 0) {
      report += `Affiliates: ${caseData.parties.affiliates.join(', ')}\n`;
    }
    report += '\n';
  }

  // Evidence
  report += 'EVIDENCE\n';
  report += '-'.repeat(80) + '\n';
  if (evidence.length === 0) {
    report += 'No evidence files attached.\n';
  } else {
    report += `Total Evidence Files: ${evidence.length}\n\n`;
    evidence.forEach((ev, idx) => {
      report += `[${idx + 1}] ${ev.originalName}\n`;
      report += `    Type: ${ev.fileType}\n`;
      report += `    Size: ${(ev.fileSize / 1024).toFixed(2)} KB\n`;
      report += `    Category: ${ev.category}\n`;
      report += `    Uploaded: ${new Date(ev.uploadedAt).toLocaleString()}\n`;
      report += `    Integrity: ${ev.integrityVerified ? 'VERIFIED' : 'UNVERIFIED'}\n`;
      if (ev.description) {
        report += `    Description: ${ev.description}\n`;
      }

      // Add chain of custody summary
      if (ev.chainOfCustody && ev.chainOfCustody.length > 0) {
        report += `    Chain of Custody: ${ev.chainOfCustody.length} entries\n`;
      }
      report += '\n';
    });
  }
  report += '\n';

  // Chain of Custody
  if (evidence.length > 0) {
    report += 'CHAIN OF CUSTODY\n';
    report += '-'.repeat(80) + '\n';
    evidence.forEach((ev) => {
      if (ev.chainOfCustody && ev.chainOfCustody.length > 0) {
        report += `Evidence: ${ev.originalName} (${ev.id})\n`;
        report += exportCustodyChain(ev.chainOfCustody);
        report += '\n';
      }
    });
  }

  // Case Notes
  report += 'CASE NOTES\n';
  report += '-'.repeat(80) + '\n';
  if (notes.length === 0) {
    report += 'No case notes.\n';
  } else {
    notes.forEach((note, idx) => {
      report += `[${idx + 1}] ${new Date(note.timestamp).toLocaleString()} - ${note.author} (${note.type})\n`;
      report += `${note.content}\n\n`;
    });
  }
  report += '\n';

  // Footer
  report += '='.repeat(80) + '\n';
  report += `Report Generated: ${new Date().toLocaleString()}\n`;
  report += 'This report is confidential and intended for authorized personnel only.\n';
  report += '='.repeat(80) + '\n';

  return report;
}
