# JAIC PDF Report Generator

Professional investigational report generation system for Jonathan Anderson Investigational Corporation.

## Overview

The JAIC PDF Report Generator creates comprehensive, professional investigational reports in PDF format with the following features:

- **Professional Layout**: Court-ready formatting with proper typography and structure
- **Complete Documentation**: Cover page, executive summary, case details, evidence, chain of custody, timeline, and appendices
- **Security Features**: Confidential classification, watermarks, and integrity verification
- **Flexible Options**: Customizable sections and output formats (PDF or HTML)
- **Attorney Work Product**: Properly formatted for legal proceedings

## Installation

### Required Dependencies

```bash
npm install puppeteer
```

For TypeScript projects (already included):
```bash
npm install --save-dev @types/node typescript
```

### Optional: Alternative PDF Libraries

If Puppeteer doesn't work in your environment:
```bash
npm install jspdf html2canvas  # Lighter weight
npm install pdfkit             # Direct PDF generation
```

## File Structure

```
/lib
├── pdf-generator.ts           # Main PDF generator module
├── pdf-generator.example.ts   # Usage examples
├── PDF_GENERATOR_README.md    # This file
├── case-number.ts             # Case number utilities (dependency)
└── chain-of-custody.ts        # Chain of custody utilities (dependency)

/app/api/reports/[caseId]/pdf
└── route.ts                   # API endpoint for PDF generation
```

## Quick Start

### Basic Usage

```typescript
import { generateInvestigationalReport, type CaseData } from '@/lib/pdf-generator';
import { generateCaseNumber } from '@/lib/case-number';

// Create case data
const caseNumber = generateCaseNumber('FRAUD', 1);
const caseData: CaseData = {
  caseNumber,
  title: 'Financial Investigation',
  domain: 'FRAUD',
  status: 'ACTIVE',
  intakeDate: new Date().toISOString(),
  lastModified: new Date().toISOString(),
  executiveSummary: {
    overview: 'Investigation into financial irregularities...',
    keyFindings: ['Finding 1', 'Finding 2'],
    recommendations: ['Recommendation 1', 'Recommendation 2']
  },
  evidence: [],
  chainOfCustody: [],
  timeline: []
};

// Generate PDF
const pdfBuffer = await generateInvestigationalReport(caseData);

// Save or stream the PDF
// Node.js: fs.writeFileSync('report.pdf', pdfBuffer);
// API: return new Response(pdfBuffer, { headers: { 'Content-Type': 'application/pdf' } });
```

### API Endpoint Usage

The system includes a ready-to-use Next.js API route:

```
GET /api/reports/[caseId]/pdf
```

**Query Parameters:**
- `preview=true` - Return HTML instead of PDF (no Puppeteer required)
- `includeClient=false` - Exclude client information
- `includeEvidence=false` - Exclude evidence summary
- `includeChain=false` - Exclude chain of custody
- `includeTimeline=false` - Exclude timeline
- `watermark=false` - Disable watermark

**Examples:**
```bash
# Generate full PDF report
curl https://your-domain.com/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf > report.pdf

# Preview as HTML
curl https://your-domain.com/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?preview=true > report.html

# Generate report without client info
curl https://your-domain.com/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?includeClient=false > report.pdf
```

### Client-Side Usage

```typescript
// Download PDF report
async function downloadReport(caseId: string) {
  const response = await fetch(`/api/reports/${caseId}/pdf`);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `JAIC-${caseId}-Report.pdf`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Preview HTML in new window
async function previewReport(caseId: string) {
  const response = await fetch(`/api/reports/${caseId}/pdf?preview=true`);
  const html = await response.text();

  const newWindow = window.open();
  if (newWindow) {
    newWindow.document.write(html);
  }
}
```

## Report Structure

### 1. Cover Page
- JAIC logo/branding
- Report title: "Investigational Brief"
- Case number
- Classification marking
- Generation date
- Prepared by statement

### 2. Executive Summary
- Case overview (narrative)
- Key findings (bulleted list)
- Recommendations (bulleted list)

### 3. Case Details
- Case identification information
- Domain and status
- Important dates
- Client information (optional)

### 4. Evidence Summary
- Complete evidence inventory
- File details and metadata
- Integrity verification status
- SHA-256 hash values

### 5. Chain of Custody
- Verification status
- Complete custody timeline
- All custody events with actors and timestamps
- Integrity verification hashes

### 6. Investigational Timeline
- Chronological event listing
- Status changes
- Evidence additions
- Actions taken
- Notes and observations

### 7. Appendices
- Technical information
- Case metadata
- Legal disclaimers
- Additional notes

## Data Types

### CaseData Interface

```typescript
interface CaseData {
  // Identification
  caseNumber: CaseNumber;
  title: string;
  domain: CaseDomain;
  status: 'INTAKE' | 'ACTIVE' | 'PENDING' | 'CLOSED' | 'ARCHIVED';

  // Dates
  intakeDate: string;
  lastModified: string;
  closedDate?: string;

  // Client (optional)
  client?: {
    name: string;
    organization?: string;
    contactInfo?: string;
    referenceNumber?: string;
  };

  // Content
  executiveSummary: {
    overview: string;
    keyFindings: string[];
    recommendations: string[];
  };

  // Data
  evidence: EvidenceItem[];
  chainOfCustody: ChainOfCustodyEntry[];
  timeline: TimelineEvent[];

  // Additional
  notes?: string;
  metadata?: Record<string, unknown>;
}
```

### Report Options

```typescript
interface ReportOptions {
  includeClientInfo?: boolean;      // Default: true
  includeEvidence?: boolean;         // Default: true
  includeChainOfCustody?: boolean;   // Default: true
  includeTimeline?: boolean;         // Default: true
  watermark?: boolean;               // Default: true
  classification?: string;           // Default: "CONFIDENTIAL - ATTORNEY WORK PRODUCT"
}
```

## API Functions

### `generateInvestigationalReport(caseData, options?)`

Generates a complete PDF report using Puppeteer.

**Parameters:**
- `caseData: CaseData` - Case information and data
- `options?: ReportOptions` - Report customization options

**Returns:** `Promise<Buffer>` - PDF file as buffer

**Throws:** Error if Puppeteer is not installed or PDF generation fails

### `generateHTMLReportString(caseData, options?)`

Generates HTML version of report (no Puppeteer required).

**Parameters:**
- `caseData: CaseData` - Case information and data
- `options?: ReportOptions` - Report customization options

**Returns:** `string` - HTML document

### `generatePDFFilename(caseNumber)`

Generates standardized filename for PDF reports.

**Parameters:**
- `caseNumber: CaseNumber` - Case number object

**Returns:** `string` - Filename in format `JAIC-[CASE-NUMBER]-Report-[YYYYMMDD].pdf`

**Example:** `JAIC-JAIC-202412-FRAUD-0001-A1B2-Report-20241204.pdf`

### `validateCaseData(caseData)`

Validates case data before report generation.

**Parameters:**
- `caseData: CaseData` - Case data to validate

**Returns:** `{ valid: boolean; errors: string[] }`

**Example:**
```typescript
const validation = validateCaseData(caseData);
if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
}
```

## Styling and Branding

The PDF generator includes professional styling:

### Typography
- **Headings**: Georgia/Times New Roman serif
- **Body**: 11pt, 1.6 line height
- **Code/Technical**: Courier New monospace
- **Classification**: Bold, uppercase, red border

### Layout
- **Page Size**: US Letter (8.5" × 11")
- **Margins**: 0.75" top/right/left, 1" bottom
- **Footer**: Case number, page numbers, generation date

### Colors
- **Primary Text**: #1a1a1a (near black)
- **Secondary Text**: #666 (gray)
- **Accents**: #c00 (red for classification)
- **Borders**: #1a1a1a (black)

### Branding Elements
- JAIC logo (text-based, bordered)
- Watermark: "GENERATED BY JAIC INVESTIGATIONAL SYSTEM"
- Classification markings
- Attorney work product notices

## Security Features

### Classification Marking
- Prominent "CONFIDENTIAL - ATTORNEY WORK PRODUCT" banner
- Customizable classification level
- Repeated on cover page and throughout document

### Watermarking
- Full-page diagonal watermark (optional)
- Low-opacity background text
- Cannot be easily removed

### Integrity Verification
- SHA-256 hashes for all evidence
- Chain of custody verification status
- Timestamp verification
- Tamper detection for custody chain

### Access Control
- Case number tracking in HTTP headers
- No-cache headers prevent unauthorized storage
- Filename includes case number for audit trail

## Production Deployment

### Environment Configuration

**Docker with Puppeteer:**
```dockerfile
FROM node:18

# Install Puppeteer dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
```

**Serverless (AWS Lambda, Vercel):**
- Use `chrome-aws-lambda` package
- Increase function timeout (60s+)
- Increase memory allocation (1GB+)

### Performance Optimization

**Caching:**
```typescript
// Cache generated PDFs if case data is immutable
const cacheKey = `pdf:${caseId}:${lastModified}`;
const cached = await cache.get(cacheKey);
if (cached) return cached;

const pdf = await generateInvestigationalReport(caseData);
await cache.set(cacheKey, pdf, { ttl: 3600 });
return pdf;
```

**Background Jobs:**
```typescript
// Queue PDF generation for large reports
await queue.enqueue('generate-pdf', {
  caseId,
  options,
  notifyEmail: user.email
});
```

**HTML Preview First:**
```typescript
// Show HTML preview immediately, generate PDF in background
const html = generateHTMLReportString(caseData);
// Display HTML to user
// Generate PDF asynchronously
```

## Troubleshooting

### Puppeteer Installation Issues

**Problem:** `npm install puppeteer` fails
**Solution:**
```bash
# Try with legacy peer deps
npm install puppeteer --legacy-peer-deps

# Or use puppeteer-core with external Chrome
npm install puppeteer-core
```

**Problem:** Chrome sandbox errors in production
**Solution:** Launch Puppeteer with no-sandbox flag (already configured):
```typescript
puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
```

### PDF Generation Failures

**Problem:** "Puppeteer is not installed" error
**Solution:** Install Puppeteer or use HTML fallback:
```bash
npm install puppeteer
```

**Problem:** Slow PDF generation
**Solution:**
- Use HTML preview mode during development
- Implement caching for completed cases
- Consider background job processing

**Problem:** Memory issues with large reports
**Solution:**
- Increase Node.js memory limit: `NODE_OPTIONS=--max-old-space-size=4096`
- Split very large reports into sections
- Optimize image sizes in evidence

### Styling Issues

**Problem:** Fonts not rendering correctly
**Solution:** Ensure system fonts are installed or embed web fonts

**Problem:** Page breaks in wrong places
**Solution:** Adjust `page-break-inside: avoid` CSS rules

**Problem:** Watermark not visible
**Solution:** Check `watermark` option is set to `true`

## Examples

See `pdf-generator.example.ts` for complete working examples including:

1. Complete PDF report generation
2. HTML preview generation
3. Selective section inclusion
4. Data validation
5. Custom report options
6. Bulk report generation
7. API integration

## Support

For issues or questions:
1. Check this README and examples
2. Review TypeScript type definitions
3. Check browser console for errors
4. Verify Puppeteer installation
5. Test with HTML preview mode first

## License

Proprietary - Jonathan Anderson Investigational Corporation

**CONFIDENTIAL - ATTORNEY WORK PRODUCT**

This system is designed for attorney work product and privileged investigational reports. Unauthorized use or distribution is prohibited.
