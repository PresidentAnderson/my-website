import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractual Noncompliance | JAIC',
  description: 'Investigation of breach of contract, non-performance, material misrepresentation, and failure to meet contractual obligations and commitments.',
};

export default function ContractualNoncompliance() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">CASE DOMAIN • CONTRACT DISPUTES</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight">
            Contractual Noncompliance
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8 max-w-3xl">
            Systematic investigation of breach of contract, non-performance, material misrepresentation, and failure to meet contractual obligations within commercial relationships and agreements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake/start" className="btn-primary">
              Report Noncompliance
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
              Contractual noncompliance encompasses investigation and documentation of failure to perform contractual obligations, material misrepresentation of capabilities or conditions, breach of specific covenants, and non-fulfillment of service or delivery commitments. This domain addresses both commercial and operational failures that impact counterparty interests and contract value.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Primary Focus Areas
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Service delivery failures and non-performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Material misrepresentation in contract formation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Breach of specific covenants and conditions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Failure to maintain representations and warranties</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Typical Involved Parties
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Service providers and vendors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Product manufacturers and suppliers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Counterparties to commercial agreements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>M&A parties and transaction counterparties</span>
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
            Symptoms & Warning Indicators
          </h2>
          <div className="space-y-6">
            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Service Delivery Failures and Delays
                  </h3>
                  <p className="text-smoke/70">
                    Failure to deliver services or products within contractual timeframes, non-conformance with specified standards or specifications, incomplete performance, or systematic failures in service quality or reliability.
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
                    Material Misrepresentations
                  </h3>
                  <p className="text-smoke/70">
                    False statements or misrepresentations of capabilities, credentials, experience, or conditions that induced the other party to enter into the contract, particularly when reliance on those representations caused damages.
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
                    Documentation and Compliance Gaps
                  </h3>
                  <p className="text-smoke/70">
                    Failure to provide required documentation, non-compliance with data or reporting obligations, missing certifications or approvals, inadequate support or training, or failure to maintain required records or insurance.
                  </p>
                </div>
              </div>
            </div>

            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Broken Covenant or Condition Execution
                  </h3>
                  <p className="text-smoke/70">
                    Failure to maintain specific contractual covenants, violation of restrictive terms, non-compliance with affirmative obligations, or breach of conditions precedent required for ongoing performance.
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
                    Communication and Transparency Failures
                  </h3>
                  <p className="text-smoke/70">
                    Lack of notice regarding performance issues, failure to disclose material problems, inadequate communication of status or obstacles, or misrepresentation of progress or completion status.
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
            Evidence Types Typically Involved
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Contract Documents
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Original and executed contracts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Amendments and modifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Statement of work and specifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Performance metrics and SLAs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Proposal and bid documents</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Performance Documentation
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Project status reports and timelines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Delivery and acceptance records</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Quality assurance testing and results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Compliance certifications and audits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Service level reporting data</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Communications Evidence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Email correspondence and negotiations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Meeting notes and communications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Issue escalations and notices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Change request and approval documentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Notice of breach or default</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Verification & Analysis
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Third-party audit and assessment results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Witness testimony and expert opinions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Comparative analysis against industry standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Financial impact and damages calculation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Comparative vendor capability assessment</span>
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
                Breach Documentation and Timeline
              </h3>
              <p className="text-smoke/70 mb-4">
                Comprehensive documentation of contract terms, breach events, timing, and sequence establishing clear violation of specific contractual obligations or representations.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Chronological breach analysis, contract term documentation, and violation summary supporting legal claims.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Performance Gap Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Detailed comparison of contractually-promised performance against actual delivery, including specification gaps, quality deficiencies, and non-conformance documentation.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Performance assessment report with specification comparison and deficiency documentation.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Misrepresentation and Fraudulent Inducement Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Documentation of false statements, omissions, or misrepresentations made during contract negotiation or formation that induced counterparty reliance and resulted in damages.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Representation documentation, reliance analysis, and damages causation linking misrepresentation to harm.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Financial Damages Quantification
              </h3>
              <p className="text-smoke/70 mb-4">
                Calculation of economic losses resulting from breach, including cost of performance correction, alternative procurement costs, consequential damages, and lost value.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Financial analysis, damages calculation, and cost documentation supporting recovery claims.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Mitigation and Causation Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Assessment of whether the breaching party's conduct was deliberate or negligent, analysis of mitigation efforts undertaken, and causation linking breach directly to damages.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Causation analysis, mitigation assessment, and comparative liability evaluation.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Expert and Remediation Support
              </h3>
              <p className="text-smoke/70 mb-4">
                Expert identification, testimony support, and remediation recommendations addressing future performance or correction of deficiencies.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Expert assessment, remediation roadmap, and litigation support documentation.
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
                Comprehensive fact-pattern reconstruction documenting breach and performance failures.
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
                Vendor and counterparty due diligence to assess compliance history and capability.
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
                Expert coordination and evidence organization for contract breach disputes.
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
                Regulatory compliance assessment for contract performance and vendor oversight.
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
              Contract Performance Issues?
            </h2>
            <p className="text-lg text-smoke/70 mb-8">
              JAIC provides detailed investigation and documentation of contractual breaches, performance gaps, and damages to support negotiation, mediation, or litigation. Contact our team in strict confidence.
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
