# JAIC PDF Generator - Quick Reference

## Installation

```bash
npm install puppeteer
```

## Basic Usage

```typescript
import { generateInvestigationalReport } from '@/lib/pdf-generator';

const pdfBuffer = await generateInvestigationalReport(caseData);
```

## API Endpoint

```
GET /api/reports/[caseId]/pdf
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `preview` | boolean | false | Return HTML instead of PDF |
| `includeClient` | boolean | true | Include client information |
| `includeEvidence` | boolean | true | Include evidence summary |
| `includeChain` | boolean | true | Include chain of custody |
| `includeTimeline` | boolean | true | Include timeline |
| `watermark` | boolean | true | Add watermark |

### Examples

```bash
# Full PDF report
/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf

# HTML preview (no Puppeteer needed)
/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?preview=true

# Custom options
/api/reports/JAIC-202412-FRAUD-0001-A1B2/pdf?includeClient=false&watermark=false
```

## Client-Side Integration

### Download PDF

```typescript
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
```

### Preview HTML

```typescript
async function previewReport(caseId: string) {
  const response = await fetch(`/api/reports/${caseId}/pdf?preview=true`);
  const html = await response.text();

  const newWindow = window.open();
  if (newWindow) {
    newWindow.document.write(html);
  }
}
```

## Data Structure

```typescript
interface CaseData {
  caseNumber: CaseNumber;
  title: string;
  domain: CaseDomain;
  status: 'INTAKE' | 'ACTIVE' | 'PENDING' | 'CLOSED' | 'ARCHIVED';
  intakeDate: string;
  lastModified: string;
  closedDate?: string;

  client?: {
    name: string;
    organization?: string;
    contactInfo?: string;
    referenceNumber?: string;
  };

  executiveSummary: {
    overview: string;
    keyFindings: string[];
    recommendations: string[];
  };

  evidence: EvidenceItem[];
  chainOfCustody: ChainOfCustodyEntry[];
  timeline: TimelineEvent[];

  notes?: string;
  metadata?: Record<string, unknown>;
}
```

## Report Options

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

## Key Functions

### generateInvestigationalReport()

```typescript
async function generateInvestigationalReport(
  caseData: CaseData,
  options?: ReportOptions
): Promise<Buffer>
```

Generates a complete PDF report using Puppeteer.

### generateHTMLReportString()

```typescript
function generateHTMLReportString(
  caseData: CaseData,
  options?: ReportOptions
): string
```

Generates HTML version (no Puppeteer required).

### generatePDFFilename()

```typescript
function generatePDFFilename(
  caseNumber: CaseNumber
): string
```

Returns: `JAIC-[CASE-NUMBER]-Report-[YYYYMMDD].pdf`

### validateCaseData()

```typescript
function validateCaseData(
  caseData: CaseData
): { valid: boolean; errors: string[] }
```

Validates case data before PDF generation.

## Report Structure

1. **Cover Page** - Logo, title, case number, classification
2. **Executive Summary** - Overview, findings, recommendations
3. **Case Details** - Case info, dates, client information
4. **Evidence Summary** - File inventory, integrity verification
5. **Chain of Custody** - Custody timeline, verification status
6. **Timeline** - Chronological investigation events
7. **Appendices** - Technical info, metadata, disclaimers

## File Naming Convention

```
JAIC-[CASE-NUMBER]-Report-[YYYYMMDD].pdf
```

Example: `JAIC-JAIC-202412-FRAUD-0001-A1B2-Report-20241204.pdf`

## React Component Example

```tsx
'use client';

import { useState } from 'react';

export function ReportDownloadButton({ caseId }: { caseId: string }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/reports/${caseId}/pdf`);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `JAIC-${caseId}-Report.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download report');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
    >
      {loading ? 'Generating...' : 'Download PDF Report'}
    </button>
  );
}
```

## Troubleshooting

### Puppeteer Not Installed

**Error:** "Puppeteer is not installed"

**Solution:**
```bash
npm install puppeteer
```

Or use HTML preview mode:
```typescript
?preview=true
```

### Slow Generation

**Solution:** Use HTML preview during development, PDF for production.

### Memory Issues

**Solution:**
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run dev
```

### Docker/Container Issues

**Solution:** Use `--no-sandbox` flag (already configured):
```typescript
puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
```

## Security Features

- Classification markings: "CONFIDENTIAL - ATTORNEY WORK PRODUCT"
- Optional watermark: "GENERATED BY JAIC INVESTIGATIONAL SYSTEM"
- SHA-256 integrity verification for evidence
- Chain of custody verification
- No-cache headers
- Case number tracking
- HTML escaping for security

## Performance Tips

1. **Use HTML preview during development** - Faster than PDF generation
2. **Cache generated PDFs** - If case data doesn't change
3. **Background jobs** - For large reports or bulk generation
4. **Increase timeout** - For serverless deployments (60s+)

## Files Location

```
/lib/pdf-generator.ts              # Main module (901 lines)
/lib/pdf-generator.example.ts      # Usage examples
/lib/PDF_GENERATOR_README.md       # Full documentation
/lib/PDF_QUICK_REFERENCE.md        # This file
/lib/pdf-generator-architecture.txt # System architecture
/app/api/reports/[caseId]/pdf/route.ts # API endpoint
/PDF_SETUP_GUIDE.md                # Setup instructions
```

## Next Steps

1. Install Puppeteer: `npm install puppeteer`
2. Test HTML preview: `?preview=true`
3. Generate first PDF: Call API endpoint
4. Integrate with UI: Add download buttons
5. Review examples: Check `pdf-generator.example.ts`

## Support

- **Documentation**: `/lib/PDF_GENERATOR_README.md`
- **Examples**: `/lib/pdf-generator.example.ts`
- **Architecture**: `/lib/pdf-generator-architecture.txt`
- **Setup Guide**: `/PDF_SETUP_GUIDE.md`

---

**Created:** December 4, 2024
**For:** Jonathan Anderson Investigational Corporation
**Status:** Production Ready
