# JAIC Admin Dashboard & Case Management API

## Overview

Complete administrative system for managing investigational cases, evidence, and analytics for Jonathan Anderson Investigational Corporation.

## System Architecture

### Data Layer
- **lib/types.ts** - TypeScript type definitions for all data models
- **lib/data-storage.ts** - In-memory data storage with CRUD operations
  - Ready for migration to Supabase/PostgreSQL
  - Includes pagination, filtering, and search
  - Soft delete support

### API Routes

All API routes are located in `/app/api/` and follow RESTful conventions:

#### Cases API
- **GET /api/cases** - List all cases with filtering and pagination
  - Query params: status, domain, priority, search, page, pageSize
- **POST /api/cases** - Create new case from intake submission
- **GET /api/cases/[id]** - Retrieve specific case details
- **PUT /api/cases/[id]** - Update case status, priority, notes, assignment
- **DELETE /api/cases/[id]** - Archive case (soft delete)
- **GET /api/cases/[id]/notes** - Get all notes for a case
- **POST /api/cases/[id]/notes** - Add note to case

#### Evidence API
- **GET /api/evidence** - List all evidence (filter by caseId)
- **POST /api/evidence** - Upload encrypted evidence file
- **GET /api/evidence/[id]** - Retrieve evidence metadata and data
- **DELETE /api/evidence/[id]** - Remove evidence with chain of custody log

#### Chain of Custody API
- **GET /api/custody/[caseId]** - Get full chain of custody for case
- **POST /api/custody/[caseId]** - Add custody entry to evidence

#### Reports API
- **GET /api/reports/[caseId]/pdf** - Generate and download case report
  - Currently returns text format
  - TODO: Integrate PDF generation library

#### Statistics API
- **GET /api/statistics** - Get case statistics for dashboard

### Admin Dashboard Pages

All admin pages are located in `/app/admin/`:

#### Dashboard (`/admin`)
- Overview statistics cards
- Recent cases table
- Quick access to key metrics
- Cases by domain and priority breakdown

#### Cases List (`/admin/cases`)
- Full case list with advanced filtering
- Search by case number, title, or summary
- Filter by status, domain, priority
- Pagination support
- Quick view actions

#### Case Detail (`/admin/cases/[id]`)
- Complete case information display
- Status and priority management
- Evidence files list
- Chain of custody timeline
- Case notes section
- Export to PDF
- Submitter information

#### Evidence Repository (`/admin/evidence`)
- All evidence files across cases
- Filter by category (DOCUMENT, IMAGE, VIDEO, etc.)
- Search by filename or case number
- Integrity verification status
- Chain of custody access

#### Analytics (`/admin/analytics`)
- Case statistics and trends
- Domain distribution charts
- Priority breakdown
- Monthly intake trends
- Average resolution time
- Key performance insights

### Admin Layout

**`/app/admin/layout.tsx`**
- Dark theme navigation sidebar
- Persistent across all admin pages
- Quick navigation to all admin sections
- Return to main site link

## Security & Authentication

### Current Implementation (Development)
- **middleware.ts** - Basic admin route protection
- Authentication currently disabled for development
- Admin login page at `/admin/login` (placeholder)

### Production Requirements
TODO: Implement proper authentication:
- NextAuth.js with session management
- Auth0 or similar OAuth provider
- Role-based access control (RBAC)
- Multi-factor authentication (MFA)
- JWT tokens for API authentication
- Audit logging for all admin actions

## Data Storage

### Current: In-Memory Storage
All data stored in memory via `lib/data-storage.ts`:
- Cases array
- Evidence array
- Case notes array
- Functions for CRUD operations

### Migration Path: Database Integration

Ready for database migration with minimal code changes:

```typescript
// Replace import
import { getAllCases } from '@/lib/data-storage';

// With database client
import { supabase } from '@/lib/supabase';

// Update function implementation
async function getAllCases(filters, pagination) {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('status', filters.status)
    .range(start, end);

  return data;
}
```

### Database Schema (TODO)

**cases table:**
- id (uuid, primary key)
- case_number (text, unique)
- status (enum)
- priority (enum)
- domain (enum)
- submitted_by (jsonb)
- title (text)
- summary (text)
- detailed_statement (text)
- incident_date (timestamp)
- discovery_date (timestamp)
- parties (jsonb)
- evidence_ids (text[])
- notes (jsonb[])
- tags (text[])
- assigned_to (text)
- created_at (timestamp)
- updated_at (timestamp)
- archived_at (timestamp)

**evidence table:**
- id (uuid, primary key)
- case_id (uuid, foreign key)
- case_number (text)
- original_name (text)
- file_type (text)
- file_size (integer)
- encrypted (jsonb)
- metadata (jsonb)
- encryption_key_id (text)
- original_hash (text)
- current_hash (text)
- integrity_verified (boolean)
- last_verified (timestamp)
- chain_of_custody (jsonb[])
- category (enum)
- description (text)
- tags (text[])
- uploaded_at (timestamp)
- uploaded_by (text)
- deleted_at (timestamp)

**case_notes table:**
- id (uuid, primary key)
- case_id (uuid, foreign key)
- author (text)
- content (text)
- timestamp (timestamp)
- type (enum)

## Case Workflow

1. **Intake Submission** → Creates new case via POST /api/cases
2. **Case Created** → Status: NEW, Priority: MEDIUM
3. **Assignment** → Admin assigns case to investigator
4. **Investigation** → Status: IN_PROGRESS
   - Evidence uploaded and encrypted
   - Chain of custody logged
   - Notes added
5. **Review** → Status: UNDER_REVIEW
6. **Closure** → Status: CLOSED
7. **Archive** → Status: ARCHIVED (soft delete)

## Chain of Custody

Every evidence interaction is logged:
- RECEIVED - Initial upload
- ACCESSED - File viewed/downloaded
- ANALYZED - Evidence examined
- TRANSFERRED - Moved between systems
- STORED - Archive/backup
- DESTROYED - Deletion
- DUPLICATED - Copy created
- VERIFIED - Integrity check

Chain integrity verified on every access.

## Evidence Encryption

Client-side AES-256-GCM encryption:
1. File encrypted in browser before upload
2. Encryption key generated per file
3. Key stored separately (key management system in production)
4. Original hash stored for integrity verification
5. Encrypted data stored with IV and auth tag

See `lib/crypto.ts` for implementation.

## Case Number Format

Format: `JAIC-[YEAR][MONTH]-[CATEGORY]-[SEQUENCE]-[CHECKSUM]`

Example: `JAIC-202512-FRAUD-0001-A7F3`

- Year/Month: Submission date
- Category: Case domain code
- Sequence: Incremental per month
- Checksum: Validation hash

See `lib/case-number.ts` for implementation.

## API Response Formats

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

### Paginated Response
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

## Environment Variables

Required for production:

```env
# Database
DATABASE_URL=postgresql://...
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...

# Authentication
NEXTAUTH_URL=https://...
NEXTAUTH_SECRET=...
ADMIN_AUTH_TOKEN=...

# Storage
S3_BUCKET=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...

# Key Management
KMS_KEY_ID=...

# Email
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
```

## Development

### Testing the Admin System

1. Start development server:
```bash
npm run dev
```

2. Access admin dashboard:
```
http://localhost:3000/admin
```

3. Create test case via intake form:
```
http://localhost:3000/intake/start
```

4. View case in admin dashboard

### Adding Test Data

Use `lib/data-storage.ts` `seedTestData()` function to populate demo cases.

## Production Checklist

- [ ] Replace in-memory storage with database
- [ ] Implement proper authentication (NextAuth/Auth0)
- [ ] Set up secure file storage (S3/Azure Blob)
- [ ] Implement key management service
- [ ] Add audit logging
- [ ] Set up email notifications
- [ ] Integrate PDF generation library
- [ ] Add rate limiting to API routes
- [ ] Implement CORS policies
- [ ] Set up monitoring and alerts
- [ ] Add backup and recovery procedures
- [ ] Security audit and penetration testing
- [ ] GDPR/compliance review
- [ ] Load testing
- [ ] Documentation for administrators

## File Structure

```
/app
  /admin
    layout.tsx          - Admin sidebar navigation
    page.tsx           - Dashboard overview
    /login
      page.tsx         - Admin login (placeholder)
    /cases
      page.tsx         - Cases list with filters
      /[id]
        page.tsx       - Case detail view
    /evidence
      page.tsx         - Evidence repository
    /analytics
      page.tsx         - Statistics and charts

  /api
    /cases
      route.ts         - List/create cases
      /[id]
        route.ts       - Get/update/delete case
        /notes
          route.ts     - Get/add case notes
    /evidence
      route.ts         - List/upload evidence
      /[id]
        route.ts       - Get/delete evidence
    /custody
      /[caseId]
        route.ts       - Chain of custody
    /reports
      /[caseId]
        /pdf
          route.ts     - Generate PDF report
    /statistics
      route.ts         - Dashboard statistics

/lib
  types.ts             - TypeScript definitions
  data-storage.ts      - Data layer (in-memory)
  case-number.ts       - Case ID generation
  chain-of-custody.ts  - Evidence tracking
  crypto.ts            - File encryption

middleware.ts          - Admin auth protection
```

## Support

For questions or issues with the admin system:
- Review this documentation
- Check API route implementations
- Verify data types in lib/types.ts
- Test with browser dev tools and network inspector

---

**Version:** 1.0.0
**Last Updated:** December 4, 2025
**Status:** Development (Ready for Production Migration)
