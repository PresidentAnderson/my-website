import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Forensics | JAIC',
  description: 'Electronic evidence recovery, device forensics, data analysis, and digital investigation for corporate misconduct and fraud cases.',
};

export default function DigitalForensics() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">CASE DOMAIN • DIGITAL INVESTIGATIONS</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight">
            Digital Forensics
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8 max-w-3xl">
            Electronic evidence recovery, device forensics, data analysis, and digital investigation for corporate misconduct, fraud detection, and litigation support requiring forensic-grade rigor and legal admissibility standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake/start" className="btn-primary">
              Request Digital Investigation
            </Link>
            <Link href="/services" className="btn-secondary">
              Services Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Definition */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
            Domain Definition
          </h2>
          <div className="evidence-card mb-12">
            <p className="text-lg text-smoke/80 mb-6 leading-relaxed">
              Digital forensics encompasses the systematic recovery, analysis, and interpretation of electronic evidence from computers, mobile devices, servers, and digital communication systems. This domain addresses forensic examination of devices and systems, recovery of deleted or hidden data, metadata analysis, communication timeline reconstruction, and technical support for investigations involving digital evidence critical to establishing facts or misconduct.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Primary Focus Areas
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Computer and mobile device forensics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Deleted and hidden data recovery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Email and communication analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Cloud and server data investigation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Typical Evidence Sources
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Desktop and laptop computers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Smartphones and tablets</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Servers and network storage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Cloud storage and hosted services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms & Indicators */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
            Digital Evidence Indicators & Acquisition Triggers
          </h2>
          <div className="space-y-6">
            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Email and Communication Records
                  </h3>
                  <p className="text-smoke/70">
                    Employee email accounts, instant messaging, collaboration platforms, and communication systems containing correspondence related to allegations, misconduct, decisions, or interactions with involved parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    File Systems and Document Analysis
                  </h3>
                  <p className="text-smoke/70">
                    Computer file systems, document repositories, and data storage containing evidence files, financial records, correspondence, or other documents relevant to investigations or matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    System and Activity Logs
                  </h3>
                  <p className="text-smoke/70">
                    Application logs, system audit trails, access records, and activity documentation establishing user behavior, system modifications, and digital activity patterns relevant to investigations.
                  </p>
                </div>
              </div>
            </div>

            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Mobile Device Evidence
                  </h3>
                  <p className="text-smoke/70">
                    Smartphones and tablets containing communications, locations history, applications, contacts, and other data relevant to investigations or misconduct documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Deleted Data and Forensic Recovery
                  </h3>
                  <p className="text-smoke/70">
                    Deleted files, unallocated space analysis, and recovery of erased communications or documents that may have been deliberately removed to conceal evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Types */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
            Digital Evidence Types and Analysis Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Email and Communications
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Email archive forensics and recovery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Instant messaging and chat logs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Metadata analysis and timeline reconstruction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Communication pattern and relationship analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Cloud email system investigation</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Computer and Storage Devices
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Hard drive and SSD forensic imaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Deleted file recovery and reconstruction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>File system analysis and timeline creation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Unallocated space examination</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Data carving and fragment recovery</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Mobile and Cloud Evidence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Smartphone and tablet forensics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Cloud storage and backup analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Application data extraction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Location history and GPS analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Backup and cloud recovery methods</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Network and System Forensics
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Network activity and flow analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Server and application log examination</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>User access control verification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Database transaction analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>System security event log review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Outcomes */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
            Typical Resolutions & Outcomes
          </h2>
          <div className="space-y-6">
            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Forensic Examination Reports
              </h3>
              <p className="text-smoke/70 mb-4">
                Detailed forensic examination reports documenting all findings, methodology, chain of custody, recovered evidence, analysis results, and conclusions meeting legal admissibility standards.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Forensic report, examination methodology documentation, and court-admissible evidence summaries.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Evidence Timeline and Narrative
              </h3>
              <p className="text-smoke/70 mb-4">
                Chronological reconstruction of digital activities, communication timelines, document modification histories, and event sequences establishing facts and misconduct patterns.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Activity timeline, forensic narrative, and chronological evidence summary.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Recovered and Extracted Evidence
              </h3>
              <p className="text-smoke/70 mb-4">
                Recovered deleted communications, reconstructed documents, extracted mobile data, and other recovered evidence typically unavailable through conventional document retrieval.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Evidence inventory, recovered file collections, and extracted data packages.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Expert Analysis and Opinions
              </h3>
              <p className="text-smoke/70 mb-4">
                Expert forensic analysis providing opinions on data authenticity, modification history, user attribution, and technical conclusions supporting case theory or rebutting claims.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Expert forensic opinions, technical analysis documentation, and declaration support.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Litigation Support and Testimony
              </h3>
              <p className="text-smoke/70 mb-4">
                Expert witness preparation, deposition support, trial testimony coordination, and rebuttal analysis addressing opposing digital forensics or claims.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Expert declaration, deposition preparation, and testimony coordination.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Legal Hold Compliance and Preservation
              </h3>
              <p className="text-smoke/70 mb-4">
                Guidance on legal holds, evidence preservation protocols, chain of custody documentation, and litigation readiness of digital evidence.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Legal hold guidance, preservation protocols, and compliance documentation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
            Related Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/services" className="evidence-card group hover:border-investigation-50">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
                <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                Forensic Investigations
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Comprehensive investigations integrating digital forensics with traditional investigative methodology.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn more →
              </span>
            </Link>

            <Link href="/services" className="evidence-card group hover:border-investigation-50">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
                <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                Litigation Support
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Expert testimony and evidence organization for digital forensics issues in litigation.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn more →
              </span>
            </Link>

            <Link href="/services" className="evidence-card group hover:border-investigation-50">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
                <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                Corporate Due Diligence
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Digital forensics support for M&A and vendor due diligence investigations.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn more →
              </span>
            </Link>

            <Link href="/services" className="evidence-card group hover:border-investigation-50">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
                <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                Regulatory Analysis
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Digital forensics for regulatory investigations and compliance assessments.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="evidence-card bg-slate border-investigation-50/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Digital Evidence Recovery Needed?
            </h2>
            <p className="text-lg text-smoke/70 mb-8">
              JAIC provides forensic-grade digital investigation with legal admissibility standards, expert analysis, and litigation support. Contact our team for immediate evidence preservation and investigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/intake/start" className="btn-primary">
                Begin Confidential Intake
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
