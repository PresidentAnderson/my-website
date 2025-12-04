import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forensic Investigations',
  description: 'Evidence collection, witness interviews, and fact-pattern reconstruction for high-stakes disputes and internal investigations.',
  keywords: ['forensic investigation', 'misconduct investigation', 'fraud analysis', 'asset tracing', 'digital forensics', 'witness interviews'],
  openGraph: {
    title: 'Forensic Investigations | JAIC',
    description: 'Evidence collection, witness interviews, and fact-pattern reconstruction for high-stakes disputes and internal investigations.',
    type: 'website',
  },
};

export default function ForensicInvestigations() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">SERVICE: FORENSIC INVESTIGATIONS</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Forensic Investigations
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Evidence-driven analysis through disciplined investigation protocols, establishing defensible fact-patterns for complex disputes, internal misconduct matters, and regulatory exposure scenarios.
          </p>
          <Link href="/intake/start" className="btn-primary">
            Request Investigation
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
              Forensic investigations require more than information gathering—they demand structured methodology, rigorous documentation, and adherence to evidentiary standards. JAIC conducts forensic inquiries through disciplined protocols designed to establish defensible fact-patterns that withstand scrutiny in corporate, regulatory, and litigation contexts.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our investigators apply investigational techniques borrowed from law enforcement, intelligence analysis, and forensic accounting. We focus on evidence collection, witness assessment, digital forensics, and hypothesis-driven analysis to reconstruct events and establish causal relationships.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Every investigation operates under documented governance protocols ensuring chain-of-custody integrity, witness confidentiality, and analytical neutrality. Findings are supported by documented evidence, clear reasoning, and transparent methodological decisions.
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
            Specialized investigational competencies across evidence domains, witness assessment, and analytical frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Document Analysis & Recovery
            </h3>
            <p className="text-smoke/70 text-sm">
              Systematic review of correspondence, records, and communications to identify evidentiary patterns. Recovery of deleted or altered documents using forensic protocols.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Digital Forensics
            </h3>
            <p className="text-smoke/70 text-sm">
              Computer systems, mobile devices, and network analysis. Metadata extraction, communication forensics, and digital artifact recovery with chain-of-custody documentation.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Witness Assessment & Interview
            </h3>
            <p className="text-smoke/70 text-sm">
              Structured interview protocols, credibility assessment, and testimony preparation. Witness identification and availability verification for evidence corroboration.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m6 0l7 7-7 7" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Timeline & Chronology Development
            </h3>
            <p className="text-smoke/70 text-sm">
              Precise event reconstruction establishing temporal relationships. Integration of multiple evidence sources to establish sequence of events and opportunity assessment.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Financial Forensics & Asset Tracing
            </h3>
            <p className="text-smoke/70 text-sm">
              Transaction analysis, fund flow reconstruction, and financial irregularity identification. Asset location and recovery support through structured analytical frameworks.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.001 9.001 0 0120.354 15.354z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Hypothesis Testing & Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Structured analytical frameworks evaluating competing scenarios against available evidence. Assessment of consistency, plausibility, and evidentiary support for factual determinations.
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
            Forensic investigations address complex fact-finding scenarios requiring defensible analysis.
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
                  Internal Misconduct Investigations
                </h3>
                <p className="text-smoke/70 mb-3">
                  Allegations of employee misconduct, policy violations, or management impropriety. JAIC provides independent investigation establishing fact-patterns to support organizational responses and personnel decisions.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Executive misconduct allegation requiring neutral fact-finding to inform disciplinary action and regulatory disclosure.
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
                  Fraud & Financial Irregularity Analysis
                </h3>
                <p className="text-smoke/70 mb-3">
                  Suspected embezzlement, accounting manipulation, or financial fraud. Forensic accounting analysis reconstructs transactions, identifies flow patterns, and establishes causal responsibility.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Unexplained cash flow discrepancy requiring forensic transaction analysis to determine cause and responsible parties.
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
                  Commercial Dispute Fact-Finding
                </h3>
                <p className="text-smoke/70 mb-3">
                  Contract disputes, performance allegations, or commercial relationship breakdowns requiring neutral fact reconstruction. Investigation establishes sequence of events, communications, and causality.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Vendor dispute over deliverable quality requiring independent investigation of project communications and performance metrics.
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
                  Data Breach & Cybersecurity Incident Response
                </h3>
                <p className="text-smoke/70 mb-3">
                  Digital forensics supporting breach investigation, incident response, and forensic recovery. Network analysis, system logs, and artifact recovery establish attack vectors and scope.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Suspected unauthorized data access requiring digital forensics to establish breach mechanism, scope, and remedial requirements.
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
                  Investigative Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Comprehensive written report detailing investigation scope, methodology, evidence collected, witness interviews, analysis, and factual findings. Organized chronologically and by evidentiary category.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Evidence Compendium
                </h3>
                <p className="text-smoke/70 text-sm">
                  Organized evidence repository with documentation of source, chain of custody, relevance assessment, and integration into factual conclusions. Digital and physical evidence management.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Witness Summary & Assessment
                </h3>
                <p className="text-smoke/70 text-sm">
                  Documented interview summaries, credibility assessment, corroboration analysis, and identification of corroborating or contradictory evidence. Witness availability for consultation.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Timeline & Chronology
                </h3>
                <p className="text-smoke/70 text-sm">
                  Precise event reconstruction establishing temporal relationships and sequence. Integration of documentary evidence, witness corroboration, and opportunity assessment.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Executive Briefing
                </h3>
                <p className="text-smoke/70 text-sm">
                  Presentation of key findings, evidentiary support, analytical conclusions, and recommended next steps. Confidential discussion with designated organizational leadership.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Litigation Support Materials (Optional)
                </h3>
                <p className="text-smoke/70 text-sm">
                  Expert witness preparation, deposition support, demonstrative evidence development, and expert report preparation for proceedings (if applicable).
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
              Forensic investigations require methodical evidence collection and documentation. To support investigation quality and defensibility, clients should prepare comprehensive evidence packages.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4">
                Initial Evidence Package
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Documentary evidence (emails, communications, records, contracts)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Systems access and technical environment (databases, servers, repositories)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Witness contact information and availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Relevant organizational policies and procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Prior communications regarding matter (complaints, reports, disclosures)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-5">
              <h3 className="font-display font-semibold text-smoke mb-3 text-sm font-technical uppercase tracking-wide">
                Chain of Custody Requirements
              </h3>
              <p className="text-smoke/70 text-sm">
                All evidence must maintain documented chain of custody. Physical evidence requires preservation protocols; digital evidence requires forensically sound acquisition methods. JAIC provides guidance on evidence handling and preservation to ensure forensic defensibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Process */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Investigation Process
          </h2>
          <p className="text-lg text-smoke/70">
            All investigations follow a structured protocol ensuring evidentiary integrity and analytical rigor.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">01</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Intake & Scoping
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive intake defining investigation objectives, scope, timeline, resource requirements, and deliverable specifications. Conflict screening and governance protocols established.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">02</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Evidence Collection
            </h3>
            <p className="text-smoke/70 text-sm">
              Systematic evidence acquisition with chain-of-custody documentation. Digital forensics, document recovery, witness location, and record assembly conducted under defined protocols.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">03</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Analysis & Synthesis
            </h3>
            <p className="text-smoke/70 text-sm">
              Structured analysis integrating documentary evidence, witness testimony, and digital artifacts. Hypothesis testing, corroboration assessment, and timeline development.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">04</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Reporting & Consultation
            </h3>
            <p className="text-smoke/70 text-sm">
              Written investigative report with findings, evidence documentation, and analysis. Executive briefing and ongoing consultation supporting organizational response.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Ready to initiate investigation?
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              JAIC provides independent forensic investigation through disciplined methodology and documented protocols. All consultations are confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake/start" className="btn-primary">
                Start Intake Process
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Other Services
              </Link>
            </div>
          </div>

          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
              Investigation Scope
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Typical Duration
                </h4>
                <p className="text-smoke/70">
                  2-12 weeks depending on scope, complexity, and evidence volume
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Resource Commitment
                </h4>
                <p className="text-smoke/70">
                  Dedicated investigator with specialist consultation as required
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Confidentiality
                </h4>
                <p className="text-smoke/70">
                  Full attorney-client privilege protection available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
