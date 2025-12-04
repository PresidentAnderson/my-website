/**
 * JAIC PDF Report Generator - Usage Examples
 *
 * This file demonstrates how to use the PDF report generation system
 * for JAIC investigational reports.
 */

import {
  generateInvestigationalReport,
  generateHTMLReportString,
  generatePDFFilename,
  validateCaseData,
  type CaseData,
  type EvidenceItem,
  type TimelineEvent,
  type ReportOptions
} from './pdf-generator';
import { generateCaseNumber } from './case-number';
import { createCustodyEntry } from './chain-of-custody';

// ============================================================================
// EXAMPLE 1: Generate a Complete PDF Report
// ============================================================================

async function example1_GenerateCompletePDFReport() {
  // Create sample case data
  const caseNumber = generateCaseNumber('FRAUD', 1);

  const caseData: CaseData = {
    caseNumber,
    title: 'Financial Irregularities Investigation - ABC Corporation',
    domain: 'FRAUD',
    status: 'ACTIVE',
    intakeDate: new Date(2024, 10, 1).toISOString(),
    lastModified: new Date().toISOString(),

    client: {
      name: 'John Smith',
      organization: 'ABC Corporation',
      contactInfo: 'john.smith@abccorp.com | (555) 123-4567',
      referenceNumber: 'ABC-2024-001'
    },

    executiveSummary: {
      overview: 'Investigation into suspected financial irregularities within ABC Corporation\'s accounting department. Initial evidence suggests unauthorized fund transfers and document manipulation over a 6-month period.',
      keyFindings: [
        'Unauthorized wire transfers totaling $125,000 identified',
        'Document timestamps altered on 15 critical financial records',
        'Three individuals of interest identified through email analysis',
        'Pattern of transactions occurring outside business hours'
      ],
      recommendations: [
        'Immediate forensic accounting audit of all departmental transactions',
        'Preservation of all electronic communications and system logs',
        'Interview scheduled parties under documented protocols',
        'Implement enhanced transaction monitoring controls',
        'Consider engagement of law enforcement if criminal activity confirmed'
      ]
    },

    evidence: [
      {
        id: 'EVD-FRAUD-2024-001',
        fileName: 'bank_statements_2024.pdf',
        fileType: 'application/pdf',
        fileSize: 2048576,
        uploadDate: new Date(2024, 10, 1).toISOString(),
        hash: 'a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890',
        verificationStatus: 'VERIFIED',
        description: 'Bank statements showing unauthorized transfers'
      },
      {
        id: 'EVD-FRAUD-2024-002',
        fileName: 'email_thread.msg',
        fileType: 'application/vnd.ms-outlook',
        fileSize: 524288,
        uploadDate: new Date(2024, 10, 2).toISOString(),
        hash: 'b2c3d4e5f6789012345678901234567890123456789012345678901234567890a1',
        verificationStatus: 'VERIFIED',
        description: 'Email communications between persons of interest'
      },
      {
        id: 'EVD-FRAUD-2024-003',
        fileName: 'system_logs_Q4.csv',
        fileType: 'text/csv',
        fileSize: 1048576,
        uploadDate: new Date(2024, 10, 5).toISOString(),
        hash: 'c3d4e5f6789012345678901234567890123456789012345678901234567890a1b2',
        verificationStatus: 'VERIFIED',
        description: 'Access logs showing suspicious activity patterns'
      }
    ],

    chainOfCustody: [
      createCustodyEntry(
        caseNumber.full,
        'EVD-FRAUD-2024-001',
        'RECEIVED',
        'Intake Coordinator',
        { source: 'Client submission' }
      ),
      createCustodyEntry(
        caseNumber.full,
        'EVD-FRAUD-2024-001',
        'VERIFIED',
        'Lead Investigator',
        { verificationMethod: 'SHA-256 hash check' }
      ),
      createCustodyEntry(
        caseNumber.full,
        'EVD-FRAUD-2024-001',
        'ANALYZED',
        'Forensic Analyst',
        { analysisType: 'Document forensics' }
      )
    ],

    timeline: [
      {
        timestamp: new Date(2024, 10, 1, 9, 0).toISOString(),
        event: 'Case Opened',
        actor: 'Intake Coordinator',
        description: 'Initial case intake and documentation completed',
        category: 'STATUS_CHANGE'
      },
      {
        timestamp: new Date(2024, 10, 1, 14, 30).toISOString(),
        event: 'Evidence Received',
        actor: 'System',
        description: 'Bank statements uploaded and integrity verified',
        category: 'EVIDENCE_ADDED'
      },
      {
        timestamp: new Date(2024, 10, 2, 10, 15).toISOString(),
        event: 'Investigation Assigned',
        actor: 'Case Manager',
        description: 'Case assigned to Senior Investigator Jane Doe',
        category: 'STATUS_CHANGE'
      },
      {
        timestamp: new Date(2024, 10, 5, 11, 45).toISOString(),
        event: 'Preliminary Analysis Complete',
        actor: 'Lead Investigator',
        description: 'Initial evidence analysis completed, suspicious patterns identified',
        category: 'ACTION_TAKEN'
      }
    ],

    notes: 'Investigation is proceeding according to standard protocols. All evidence has been properly secured and documented. Additional forensic analysis may be required pending initial findings.',
    metadata: {
      priority: 'HIGH',
      estimatedCompletion: '2024-12-31',
      jurisdiction: 'Multi-state'
    }
  };

  // Validate case data before generating report
  const validation = validateCaseData(caseData);
  if (!validation.valid) {
    console.error('Invalid case data:', validation.errors);
    return;
  }

  // Generate PDF report
  try {
    const pdfBuffer = await generateInvestigationalReport(caseData, {
      includeClientInfo: true,
      includeEvidence: true,
      includeChainOfCustody: true,
      includeTimeline: true,
      watermark: true
    });

    const filename = generatePDFFilename(caseNumber);
    console.log(`PDF report generated: ${filename}`);
    console.log(`File size: ${pdfBuffer.length} bytes`);

    // Save to filesystem (Node.js environment)
    // const fs = require('fs');
    // fs.writeFileSync(filename, pdfBuffer);

    return pdfBuffer;
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw error;
  }
}

// ============================================================================
// EXAMPLE 2: Generate HTML Preview (No Puppeteer Required)
// ============================================================================

async function example2_GenerateHTMLPreview() {
  const caseNumber = generateCaseNumber('DIGITAL', 2);

  const caseData: CaseData = {
    caseNumber,
    title: 'Digital Evidence Recovery - Data Breach Investigation',
    domain: 'DIGITAL',
    status: 'ACTIVE',
    intakeDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),

    executiveSummary: {
      overview: 'Investigation of suspected data breach affecting customer records.',
      keyFindings: [
        'Unauthorized access detected on November 15, 2024',
        'Approximately 10,000 customer records potentially affected',
        'Source traced to compromised administrator credentials'
      ],
      recommendations: [
        'Immediate password reset for all administrative accounts',
        'Deploy enhanced monitoring and intrusion detection',
        'Conduct full security audit of network infrastructure'
      ]
    },

    evidence: [],
    chainOfCustody: [],
    timeline: []
  };

  // Generate HTML preview (works without Puppeteer)
  const html = generateHTMLReportString(caseData, {
    watermark: true
  });

  console.log('HTML report generated');
  console.log(`Length: ${html.length} characters`);

  // Can be returned as HTTP response, saved to file, or opened in browser
  return html;
}

// ============================================================================
// EXAMPLE 3: Generate Report with Selective Sections
// ============================================================================

async function example3_SelectiveSections() {
  const caseNumber = generateCaseNumber('CONTRACT', 3);

  const caseData: CaseData = {
    caseNumber,
    title: 'Contract Compliance Review',
    domain: 'CONTRACT',
    status: 'CLOSED',
    intakeDate: new Date(2024, 9, 1).toISOString(),
    lastModified: new Date().toISOString(),
    closedDate: new Date().toISOString(),

    executiveSummary: {
      overview: 'Review of vendor contract compliance and performance metrics.',
      keyFindings: [
        'Contract terms properly documented and executed',
        'Performance metrics within acceptable ranges',
        'Minor administrative discrepancies noted and corrected'
      ],
      recommendations: [
        'Maintain current monitoring protocols',
        'Schedule follow-up review in 6 months'
      ]
    },

    evidence: [],
    chainOfCustody: [],
    timeline: []
  };

  // Generate report WITHOUT client information and chain of custody
  const pdfBuffer = await generateInvestigationalReport(caseData, {
    includeClientInfo: false,  // Exclude client details
    includeEvidence: true,
    includeChainOfCustody: false,  // Exclude custody chain
    includeTimeline: true,
    watermark: false  // No watermark for internal review
  });

  return pdfBuffer;
}

// ============================================================================
// EXAMPLE 4: Validate Case Data Before Report Generation
// ============================================================================

function example4_ValidateCaseData() {
  // Incomplete case data (missing required fields)
  const incompleteCaseData: Partial<CaseData> = {
    caseNumber: generateCaseNumber('GENERAL', 4),
    title: 'Sample Case',
    // Missing executiveSummary, evidence, etc.
  };

  // Validate before attempting PDF generation
  const validation = validateCaseData(incompleteCaseData as CaseData);

  if (!validation.valid) {
    console.error('Case data validation failed:');
    validation.errors.forEach((error, index) => {
      console.error(`  ${index + 1}. ${error}`);
    });
    return false;
  }

  console.log('Case data is valid and ready for PDF generation');
  return true;
}

// ============================================================================
// EXAMPLE 5: Integration with API Route
// ============================================================================

// See: /app/api/reports/[caseId]/pdf/route.ts
//
// Usage from client:
// GET /api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf
// GET /api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?preview=true
// GET /api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?includeClient=false&watermark=false

// ============================================================================
// EXAMPLE 6: Custom Report Options
// ============================================================================

async function example6_CustomReportOptions() {
  const caseNumber = generateCaseNumber('MISCONDUCT', 5);

  const caseData: CaseData = {
    caseNumber,
    title: 'Corporate Ethics Investigation',
    domain: 'MISCONDUCT',
    status: 'PENDING',
    intakeDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),

    client: {
      name: 'Confidential',
      organization: 'Confidential'
    },

    executiveSummary: {
      overview: 'Ongoing investigation into potential ethics violations.',
      keyFindings: [
        'Investigation in progress',
        'Evidence collection phase ongoing'
      ],
      recommendations: [
        'Maintain confidentiality',
        'Continue evidence gathering'
      ]
    },

    evidence: [],
    chainOfCustody: [],
    timeline: []
  };

  const reportOptions: ReportOptions = {
    includeClientInfo: false,      // Protect client identity
    includeEvidence: false,         // Evidence not ready for reporting
    includeChainOfCustody: false,   // No custody chain yet
    includeTimeline: true,          // Show investigation timeline
    watermark: true,                // Add security watermark
    classification: 'HIGHLY CONFIDENTIAL - ATTORNEY WORK PRODUCT - DO NOT DISTRIBUTE'
  };

  const pdfBuffer = await generateInvestigationalReport(caseData, reportOptions);
  const filename = generatePDFFilename(caseNumber);

  return { pdfBuffer, filename };
}

// ============================================================================
// EXAMPLE 7: Bulk Report Generation
// ============================================================================

async function example7_BulkReportGeneration(caseIds: string[]) {
  const reports: Array<{ caseId: string; buffer: Buffer; filename: string }> = [];

  for (const caseId of caseIds) {
    try {
      // Fetch case data (implement your own data fetching)
      // const caseData = await fetchCaseData(caseId);

      // For this example, create minimal case data
      const caseNumber = generateCaseNumber('GENERAL', Math.floor(Math.random() * 10000));
      const caseData: CaseData = {
        caseNumber,
        title: `Case ${caseId}`,
        domain: 'GENERAL',
        status: 'ACTIVE',
        intakeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        executiveSummary: {
          overview: 'Investigation ongoing',
          keyFindings: ['Evidence collected'],
          recommendations: ['Continue investigation']
        },
        evidence: [],
        chainOfCustody: [],
        timeline: []
      };

      const buffer = await generateInvestigationalReport(caseData);
      const filename = generatePDFFilename(caseNumber);

      reports.push({ caseId, buffer, filename });
      console.log(`Generated report for ${caseId}: ${filename}`);
    } catch (error) {
      console.error(`Failed to generate report for ${caseId}:`, error);
    }
  }

  return reports;
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  example1_GenerateCompletePDFReport,
  example2_GenerateHTMLPreview,
  example3_SelectiveSections,
  example4_ValidateCaseData,
  example6_CustomReportOptions,
  example7_BulkReportGeneration
};

// ============================================================================
// INSTALLATION INSTRUCTIONS
// ============================================================================

/*

STEP 1: Install Puppeteer (Required for PDF generation)
----------------------------------------
npm install puppeteer

Or for development only:
npm install --save-dev puppeteer


STEP 2: Use the PDF Generator
----------------------------------------
import { generateInvestigationalReport } from '@/lib/pdf-generator';

const pdfBuffer = await generateInvestigationalReport(caseData);


STEP 3: Serve via API Route
----------------------------------------
// Client-side usage:
fetch('/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf')
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'JAIC-Report.pdf';
    a.click();
  });


STEP 4: Preview in Browser (HTML mode)
----------------------------------------
// No Puppeteer required for HTML preview
const html = generateHTMLReportString(caseData);

// Open in new window or return as HTTP response
fetch('/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?preview=true')
  .then(response => response.text())
  .then(html => {
    const newWindow = window.open();
    newWindow.document.write(html);
  });


TROUBLESHOOTING
----------------------------------------
If Puppeteer installation fails:
- Try: npm install puppeteer --legacy-peer-deps
- Or use Docker with Puppeteer pre-installed
- Or use alternative PDF generation library (jsPDF, PDFKit)

If PDF generation is slow:
- Use HTML preview mode for faster development
- Consider background job queue for production
- Cache generated PDFs if case data doesn't change

For production deployment:
- Ensure Puppeteer dependencies are installed on server
- Configure Chrome sandbox settings for containerized environments
- Consider using serverless functions with pre-built Puppeteer layers

*/
