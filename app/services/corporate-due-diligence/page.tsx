import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Due Diligence',
  description: 'Pre-transaction risk assessment, entity verification, and counterparty intelligence for M&A, partnerships, and strategic transactions.',
  keywords: ['due diligence', 'M&A due diligence', 'background investigation', 'entity verification', 'counterparty intelligence', 'reputational risk'],
  openGraph: {
    title: 'Corporate Due Diligence | JAIC',
    description: 'Pre-transaction risk assessment, entity verification, and counterparty intelligence for M&A, partnerships, and strategic transactions.',
    type: 'website',
  },
};

export default function CorporateDueDiligence() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">SERVICE: CORPORATE DUE DILIGENCE</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Corporate Due Diligence
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Pre-transaction intelligence and counterparty risk assessment supporting M&A, partnerships, investments, and strategic transactions through disciplined investigational analysis.
          </p>
          <Link href="/intake/start" className="btn-primary">
            Initiate Due Diligence
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Service Overview
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              Effective transaction due diligence requires more than document review. It demands investigational rigor directed toward identifying hidden risks, verifying counterparty claims, and assessing operational and reputational exposure.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              JAIC provides independent due diligence investigation supporting M&A transactions, joint ventures, significant partnerships, and strategic investments. We conduct entity structure analysis, beneficial ownership verification, background investigation of key principals, and assessment of regulatory exposure and reputational risk.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our analysis identifies hidden liabilities, regulatory vulnerabilities, historical misconduct, and strategic misrepresentations that may affect transaction value, post-acquisition integration, or long-term partnership viability. Due diligence findings inform transaction pricing, structural decisions, and post-closing risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Capabilities */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg text-smoke/70">
            Comprehensive counterparty assessment spanning entity structure, ownership, regulatory compliance, and strategic risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m0 0H9m0 0H3.5m0 0H1m5.5 0a2.121 2.121 0 00-3 3m6-6a2.121 2.121 0 013 3m6-6V9m0 0h-3.5m0 0a2.121 2.121 0 00-3-3m0 6v0m0 0h3.5m0 0a2.121 2.121 0 013-3" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Entity Structure Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive mapping of corporate structure, subsidiary relationships, and entity hierarchy. Identification of hidden subsidiaries, shell entities, and complex ownership structures.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Beneficial Ownership Verification
            </h3>
            <p className="text-smoke/70 text-sm">
              Ultimate beneficial owner identification through jurisdictional records, corporate filings, and investigational research. Assessment of ownership concealment and sanctioned party concerns.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Regulatory Compliance Review
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of regulatory compliance status, licensing verification, and historical enforcement actions. Identification of regulatory exposure and remediation requirements.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Reputational Risk Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Media research, litigation history, regulatory involvement, and public controversy evaluation. Assessment of reputational exposure affecting brand, customer relationships, or stakeholder trust.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Financial Integrity Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of financial statement reliability, accounting practices, and historical financial performance. Identification of accounting irregularities and financial risk factors.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Key Person Background Verification
            </h3>
            <p className="text-smoke/70 text-sm">
              Executive background investigation, credential verification, and historical conduct assessment. Identification of misconduct history, disciplinary actions, or adverse professional events.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-container border-t border-slate-100">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Typical Use Cases
          </h2>
          <p className="text-lg text-smoke/70">
            Due diligence investigation supports strategic transactions and partnership evaluation.
          </p>
        </div>

        <div className="space-y-6">
          <div className="evidence-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-technical text-investigation-50 font-bold text-sm">01</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                  M&A Transaction Support
                </h3>
                <p className="text-smoke/70 mb-3">
                  Pre-acquisition investigation of target entity identifying hidden liabilities, regulatory exposure, and management integrity concerns. Analysis informs purchase price, deal structure, and post-acquisition risk management.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Target company acquisition requiring investigation of entity structure, ownership, regulatory compliance, and management background.
                </p>
              </div>
            </div>
          </div>

          <div className="evidence-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-technical text-investigation-50 font-bold text-sm">02</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                  Joint Venture & Partnership Evaluation
                </h3>
                <p className="text-smoke/70 mb-3">
                  Investigation of proposed joint venture partner or strategic alliance partner assessing financial stability, regulatory compliance, and management capability. Identification of operational and reputational risks.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Strategic partnership requiring due diligence on partner financial condition and regulatory compliance status.
                </p>
              </div>
            </div>
          </div>

          <div className="evidence-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-technical text-investigation-50 font-bold text-sm">03</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                  Vendor & Supplier Assessment
                </h3>
                <p className="text-smoke/70 mb-3">
                  Investigation of significant vendor or supplier relationships assessing entity legitimacy, financial stability, and regulatory compliance. Identification of hidden ownership or reputational concerns.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Critical supplier relationship requiring verification of entity credentials and financial viability.
                </p>
              </div>
            </div>
          </div>

          <div className="evidence-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-technical text-investigation-50 font-bold text-sm">04</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                  Investment & Capital Transaction Due Diligence
                </h3>
                <p className="text-smoke/70 mb-3">
                  Investigation supporting significant capital investment or financing transaction assessing investee financial condition, management capability, and regulatory exposure.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Capital investment requiring investigation of target entity financial integrity and management background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Deliverables
            </h2>
          </div>
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Executive Summary Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Concise overview of due diligence findings, identified risks, key concerns, and recommended actions. Executive-level assessment suitable for transaction stakeholders.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Comprehensive Due Diligence Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Detailed investigative report covering entity structure, beneficial ownership, regulatory status, reputational assessment, management background, and financial integrity analysis with supporting documentation.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Risk Assessment Framework
                </h3>
                <p className="text-smoke/70 text-sm">
                  Structured risk categorization identifying regulatory exposure, operational risk, reputational concerns, and financial stability issues with severity assessment and remediation recommendations.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Evidence Compendium
                </h3>
                <p className="text-smoke/70 text-sm">
                  Organized documentation supporting investigative findings including corporate filings, regulatory records, litigation history, media coverage, and background verification materials.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Transaction Recommendation Memo
                </h3>
                <p className="text-smoke/70 text-sm">
                  Analysis-based recommendations regarding transaction viability, structural considerations, contingency requirements, and post-transaction risk management protocols.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Executive Briefing & Consultation
                </h3>
                <p className="text-smoke/70 text-sm">
                  Presentation of findings, risk assessment, and recommendations to transaction stakeholders. Ongoing consultation supporting transaction decisions and deal structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Requirements */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Evidence Requirements
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              Effective due diligence requires comprehensive information about the target entity and principal stakeholders. To support thorough investigation, clients should provide complete background information and documentary evidence.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4">
                Initial Information Package
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Entity identification and corporate structure documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Ownership structure and beneficial owner identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Executive and management contact information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Recent financial statements and performance data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Regulatory filings and compliance documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-5">
              <h3 className="font-display font-semibold text-smoke mb-3 text-sm font-technical uppercase tracking-wide">
                Scope Definition
              </h3>
              <p className="text-smoke/70 text-sm">
                Due diligence scope should be clearly defined during intake process. Typical investigations cover entity structure, beneficial ownership, regulatory compliance, management background, and reputational assessment. Specialized investigations may include financial forensics, litigation history review, or international ownership verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Process */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Due Diligence Process
          </h2>
          <p className="text-lg text-smoke/70">
            All due diligence investigations follow a structured methodology ensuring comprehensive coverage and defensible findings.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">01</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Intake & Scope Definition
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive intake establishing investigation scope, timeline, identified stakeholders, and risk assessment focus areas. Transaction context and timeline requirements documented.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">02</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Records & Background Research
            </h3>
            <p className="text-smoke/70 text-sm">
              Systematic research of entity corporate records, regulatory filings, litigation history, and public information. Media research and reputational assessment conducted.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">03</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Specialized Investigations
            </h3>
            <p className="text-smoke/70 text-sm">
              Background investigation of key principals, beneficial ownership verification, regulatory compliance assessment, and financial integrity analysis as scope requires.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">04</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Analysis & Reporting
            </h3>
            <p className="text-smoke/70 text-sm">
              Risk assessment and synthesis of findings into executive report and comprehensive due diligence analysis. Executive briefing and transaction consultation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Ready to initiate due diligence?
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              JAIC provides comprehensive due diligence investigation supporting strategic transactions through disciplined investigational analysis and independent risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake/start" className="btn-primary">
                Start Due Diligence Process
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Other Services
              </Link>
            </div>
          </div>

          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
              Due Diligence Engagement
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Typical Timeline
                </h4>
                <p className="text-smoke/70">
                  3-8 weeks depending on transaction complexity and information availability
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Resource Model
                </h4>
                <p className="text-smoke/70">
                  Dedicated due diligence team with specialist consultation as needed
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Engagement Structure
                </h4>
                <p className="text-smoke/70">
                  Project-based or retainer arrangement with flexible scheduling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
