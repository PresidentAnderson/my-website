import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Litigation Support',
  description: 'Expert witness coordination, demonstrative evidence development, and case theory validation for complex commercial disputes.',
  keywords: ['litigation support', 'expert witness', 'demonstrative evidence', 'case analysis', 'trial preparation', 'evidence organization'],
  openGraph: {
    title: 'Litigation Support | JAIC',
    description: 'Expert witness coordination, demonstrative evidence development, and case theory validation for complex commercial disputes.',
    type: 'website',
  },
};

export default function LitigationSupport() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">SERVICE: LITIGATION SUPPORT</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Litigation Support
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Expert witness coordination, evidence organization, and case theory validation supporting counsel in complex commercial disputes and high-stakes litigation.
          </p>
          <Link href="/intake/start" className="btn-primary">
            Request Litigation Support
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
              Successful litigation requires coordinated case theory, organized evidence, credible expert support, and compelling presentation. JAIC provides litigation support services enabling counsel to effectively present complex cases through disciplined investigational analysis and expert coordination.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our support spans case analysis and theory development, evidence organization and indexing, expert witness identification and coordination, demonstrative evidence development, and trial preparation support. We work collaboratively with counsel to understand case theory, identify evidence gaps, and develop persuasive presentations.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Litigation support enables counsel to focus on legal strategy while JAIC manages investigational analysis, evidence organization, and expert coordination. Our objective is to enhance case presentation, support credible expert testimony, and strengthen litigation positioning through systematic case analysis.
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
            Specialized litigation support spanning case analysis, evidence management, and expert coordination.
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
              Evidence Organization & Indexing
            </h3>
            <p className="text-smoke/70 text-sm">
              Systematic organization of litigation evidence into organized databases and reference systems. Indexing by evidence category, chronology, and evidentiary significance. Accessibility support for counsel and expert consultants.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m6 0l7 7-7 7" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Case Timeline & Chronology Development
            </h3>
            <p className="text-smoke/70 text-sm">
              Precise event reconstruction establishing temporal relationships and narrative sequence. Integration of documentary evidence, testimony, and forensic analysis into comprehensive timeline for litigation presentation.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Expert Witness Identification & Coordination
            </h3>
            <p className="text-smoke/70 text-sm">
              Expert witness identification matching specialized expertise to case requirements. Coordination of expert engagement, retainer arrangement, and ongoing consulting support throughout litigation.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Demonstrative Evidence Development
            </h3>
            <p className="text-smoke/70 text-sm">
              Creation of visual presentations, diagrams, timelines, and demonstrative exhibits supporting case theory. Evidence presentation aids designed for jury comprehension and litigation persuasiveness.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Deposition Preparation & Support
            </h3>
            <p className="text-smoke/70 text-sm">
              Deposition preparation support for JAIC investigators and expert consultants. Preparation of deposition testimony, document review, and anticipated question analysis.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Trial Testimony Support
            </h3>
            <p className="text-smoke/70 text-sm">
              Trial preparation and courtroom support for JAIC personnel providing expert testimony. Coordination with counsel for examination preparation and trial logistics.
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
            Litigation support addresses complex case presentation and expert coordination challenges.
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
                  Commercial Dispute Litigation
                </h3>
                <p className="text-smoke/70 mb-3">
                  Complex commercial disputes requiring evidence organization, timeline development, and expert coordination. JAIC supports case theory through systematic case analysis and evidence presentation development.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Commercial contract dispute requiring comprehensive evidence organization and expert witness coordination for trial presentation.
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
                  Financial Fraud & Embezzlement Litigation
                </h3>
                <p className="text-smoke/70 mb-3">
                  Financial crime litigation requiring forensic accounting expertise, transaction analysis, and expert testimony. JAIC organizes financial evidence and coordinates forensic accounting expert support.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Embezzlement litigation requiring forensic accounting analysis and expert witness coordination for complex financial evidence presentation.
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
                  Intellectual Property & Technology Litigation
                </h3>
                <p className="text-smoke/70 mb-3">
                  IP litigation requiring technical expert coordination and demonstrative evidence development. JAIC organizes technical evidence and coordinates subject matter expert testimony support.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Patent infringement litigation requiring technical expert identification and demonstrative evidence development for trial presentation.
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
                  Employment & Workplace Misconduct Litigation
                </h3>
                <p className="text-smoke/70 mb-3">
                  Employment dispute litigation requiring evidence compilation and investigational support. JAIC organizes evidence and supports case theory development through systematic analysis.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Employment misconduct litigation requiring evidence organization and investigational support for adverse action defense.
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
                  Organized Evidence Database
                </h3>
                <p className="text-smoke/70 text-sm">
                  Comprehensive litigation evidence repository with indexing by category, chronology, significance, and evidentiary relevance. Accessible interface for counsel and expert consultants.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Case Timeline & Chronology
                </h3>
                <p className="text-smoke/70 text-sm">
                  Detailed event reconstruction establishing temporal relationships and narrative sequence. Integrated with evidence documentation and expert analysis. Available in multiple presentation formats.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Expert Witness Identification & Coordination
                </h3>
                <p className="text-smoke/70 text-sm">
                  Matched expert witness recommendations based on case requirements. Retainer coordination and engagement management. Availability for consultation throughout litigation.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Demonstrative Evidence Materials
                </h3>
                <p className="text-smoke/70 text-sm">
                  Visual presentations, timelines, diagrams, and demonstrative exhibits supporting case theory. Materials designed for jury comprehension and trial presentation effectiveness.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Case Analysis Memoranda
                </h3>
                <p className="text-smoke/70 text-sm">
                  Analytical memoranda supporting case theory, addressing factual disputes, and evaluating evidence strength. Strategic analysis supporting litigation positioning.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Deposition & Trial Support
                </h3>
                <p className="text-smoke/70 text-sm">
                  Deposition preparation materials, trial testimony support, and courtroom coordination. Availability for real-time support during depositions and trial testimony.
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
              Litigation support effectiveness depends on complete case access and counsel collaboration. To support comprehensive case analysis and evidence management, JAIC requires full access to case discovery and litigation materials.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4">
                Case Materials & Discovery
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Completecase discovery materials and document database</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Pleadings, motions, and relevant court filings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Deposition transcripts and prior witness statements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Case theory and factual dispute documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Expert reports and prior investigational materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-5">
              <h3 className="font-display font-semibold text-smoke mb-3 text-sm font-technical uppercase tracking-wide">
                Counsel Collaboration
              </h3>
              <p className="text-smoke/70 text-sm">
                Effective litigation support requires close collaboration with counsel regarding case theory, key factual disputes, expert requirements, and litigation strategy. Intake process establishes regular consultation schedule and communication protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Litigation Support Process */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Litigation Support Process
          </h2>
          <p className="text-lg text-smoke/70">
            All litigation support engagements follow a structured methodology enabling effective case analysis and expert coordination throughout litigation lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">01</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Case Intake & Theory Development
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive case briefing establishing litigation objectives, case theory, key factual disputes, and expert requirements. Counsel collaboration establishing support parameters.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">02</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Evidence Organization & Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Systematic organization of discovery materials into evidence database. Case timeline development and evidentiary analysis supporting case theory validation.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">03</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Expert Coordination & Development
            </h3>
            <p className="text-smoke/70 text-sm">
              Expert witness identification and coordination. Demonstrative evidence development and expert report preparation support.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">04</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Trial Support & Testimony
            </h3>
            <p className="text-smoke/70 text-sm">
              Deposition and trial preparation support. Courtroom coordination and real-time testimony support throughout litigation proceedings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Ready to strengthen your litigation?
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              JAIC provides comprehensive litigation support enabling effective case presentation, expert coordination, and evidence management throughout litigation lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake/start" className="btn-primary">
                Request Litigation Support
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Other Services
              </Link>
            </div>
          </div>

          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
              Engagement Model
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Duration
                </h4>
                <p className="text-smoke/70">
                  Engagement extends throughout litigation lifecycle from discovery through trial
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Resource Model
                </h4>
                <p className="text-smoke/70">
                  Dedicated support team with ongoing counsel collaboration
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Confidentiality
                </h4>
                <p className="text-smoke/70">
                  Full attorney-client privilege protection for all work product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
