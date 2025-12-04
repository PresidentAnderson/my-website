import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulatory Analysis',
  description: 'Compliance mapping, enforcement exposure assessment, and regulatory intelligence for organizations navigating complex oversight regimes.',
  keywords: ['regulatory analysis', 'compliance assessment', 'regulatory intelligence', 'enforcement exposure', 'regulatory mapping', 'compliance gap analysis'],
  openGraph: {
    title: 'Regulatory Analysis | JAIC',
    description: 'Compliance mapping, enforcement exposure assessment, and regulatory intelligence for organizations navigating complex oversight regimes.',
    type: 'website',
  },
};

export default function RegulatoryAnalysis() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">SERVICE: REGULATORY ANALYSIS</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Regulatory Analysis
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Compliance mapping, enforcement exposure assessment, and regulatory intelligence supporting organizations navigating complex oversight frameworks and regulatory risk scenarios.
          </p>
          <Link href="/intake/start" className="btn-primary">
            Begin Analysis
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
              Complex regulatory environments demand disciplined analysis of compliance obligations, enforcement trends, and organizational exposure. JAIC provides regulatory intelligence and compliance assessment supporting organizations subject to complex oversight regimes.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our analysis maps regulatory obligations, assesses current compliance status, identifies gaps and vulnerabilities, and evaluates enforcement exposure. We monitor regulatory trends, analyze enforcement actions in comparable contexts, and develop remediation protocols and agency communication strategies.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Regulatory analysis supports proactive compliance posture development, enforcement action response, and regulatory negotiation strategy. Our findings inform compliance governance, remediation priorities, and risk mitigation planning.
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
            Specialized regulatory expertise spanning compliance assessment, enforcement analysis, and regulatory strategy.
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
              Regulatory Mapping & Obligation Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive identification of applicable regulatory frameworks and compliance obligations. Mapping of statutory requirements, regulatory rules, and enforcement guidance specific to organizational context.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Compliance Gap Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Evaluation of current compliance status against identified obligations. Identification of gaps, vulnerabilities, and areas of non-compliance requiring remediation or enhanced governance.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Enforcement Exposure Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Analysis of enforcement trends, settlement patterns, and penalty frameworks within applicable regulatory domains. Assessment of organizational enforcement risk based on comparable enforcement actions.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Regulatory Trend Monitoring & Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Ongoing monitoring of regulatory developments, enforcement priorities, guidance updates, and policy shifts. Assessment of emerging compliance requirements and strategic risk implications.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Agency Communication Strategy & Support
            </h3>
            <p className="text-smoke/70 text-sm">
              Development of agency communication strategy for voluntary disclosures, enforcement discussions, or regulatory engagement. Analysis of negotiation positioning and settlement framework considerations.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Remediation Protocol Development
            </h3>
            <p className="text-smoke/70 text-sm">
              Design of targeted remediation protocols addressing identified compliance gaps and enforcement vulnerabilities. Implementation guidance and monitoring framework recommendations.
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
            Regulatory analysis addresses complex compliance and enforcement exposure scenarios.
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
                  Enforcement Action Response
                </h3>
                <p className="text-smoke/70 mb-3">
                  Regulatory agency enforcement action, investigation notice, or enforcement threat requiring analysis. JAIC provides enforcement action assessment, comparable settlement analysis, and litigation strategy support.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Regulatory agency investigation notice requiring analysis of enforcement exposure and negotiation positioning.
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
                  Proactive Compliance Assessment
                </h3>
                <p className="text-smoke/70 mb-3">
                  Organization-initiated regulatory compliance assessment identifying gaps and vulnerabilities before enforcement action. Development of remediation framework and compliance governance improvements.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization seeking comprehensive compliance assessment to identify gaps and remediation priorities.
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
                  Voluntary Disclosure & Agency Engagement
                </h3>
                <p className="text-smoke/70 mb-3">
                  Organization planning voluntary disclosure of compliance violations or non-compliance. JAIC provides analysis of disclosure strategy, agency negotiation support, and penalty mitigation analysis.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization preparing voluntary disclosure requiring agency communication strategy and settlement framework analysis.
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
                  Regulatory Governance & Policy Development
                </h3>
                <p className="text-smoke/70 mb-3">
                  Development of compliance governance framework, regulatory monitoring protocols, or policy guidance supporting organization-wide compliance. Assessment of regulatory requirements and governance structure needs.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization developing comprehensive regulatory compliance governance framework requiring assessment of obligations and governance requirements.
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
                  Regulatory Mapping Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Comprehensive identification of applicable regulatory frameworks, statutory requirements, regulatory rules, and enforcement guidance. Organized by regulatory domain and compliance obligation.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Compliance Assessment Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Evaluation of organizational compliance status against identified obligations. Documentation of current compliance practices, identified gaps, vulnerability assessment, and remediation priorities.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Enforcement Exposure Analysis
                </h3>
                <p className="text-smoke/70 text-sm">
                  Assessment of organizational enforcement risk based on enforcement trends, comparable enforcement actions, penalty frameworks, and settlement patterns. Enforcement exposure quantification where applicable.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Remediation Protocol Framework
                </h3>
                <p className="text-smoke/70 text-sm">
                  Targeted remediation protocols addressing identified compliance gaps and enforcement vulnerabilities. Implementation guidance, timeline recommendations, and monitoring framework specifications.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Agency Communication Strategy Memo
                </h3>
                <p className="text-smoke/70 text-sm">
                  Strategic analysis supporting agency communication, voluntary disclosure, or enforcement negotiation. Positioning recommendations and settlement framework considerations.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Executive Briefing & Strategic Consultation
                </h3>
                <p className="text-smoke/70 text-sm">
                  Presentation of regulatory analysis, compliance findings, enforcement exposure assessment, and remediation recommendations. Ongoing consultation supporting compliance governance decisions.
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
              Regulatory analysis requires comprehensive understanding of organizational structure, operational practices, and regulatory context. To support thorough analysis, clients should provide relevant documentation and organizational information.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4">
                Initial Information Package
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Organization overview and business description</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Current compliance policies, procedures, and governance framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Relevant regulatory filings, licenses, and certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Prior enforcement action or regulatory engagement documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Internal compliance assessment or audit reports (if available)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-5">
              <h3 className="font-display font-semibold text-smoke mb-3 text-sm font-technical uppercase tracking-wide">
                Scope Definition
              </h3>
              <p className="text-smoke/70 text-sm">
                Regulatory analysis scope should be clearly defined during intake process. Typical analysis covers regulatory obligation mapping, compliance gap assessment, and enforcement exposure analysis. Specialized analyses may include industry-specific regulatory requirements, international compliance frameworks, or emerging regulatory developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Process */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Analysis Process
          </h2>
          <p className="text-lg text-smoke/70">
            All regulatory analyses follow a structured methodology ensuring comprehensive coverage and defensible recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">01</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Regulatory Mapping
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive identification and organization of applicable regulatory frameworks, statutory requirements, and enforcement guidance specific to organizational context.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">02</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Compliance Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Evaluation of current organizational compliance status, identification of gaps and vulnerabilities, and assessment of remediation requirements.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">03</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Enforcement Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of enforcement trends, comparable enforcement actions, and organizational enforcement exposure based on identified compliance gaps.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">04</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Reporting & Strategy
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive analysis reporting, enforcement exposure assessment, remediation recommendations, and strategic guidance for regulatory engagement or compliance governance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Ready to assess regulatory exposure?
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              JAIC provides comprehensive regulatory analysis supporting compliance governance, enforcement response, and strategic regulatory engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake/start" className="btn-primary">
                Begin Regulatory Analysis
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Other Services
              </Link>
            </div>
          </div>

          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
              Analysis Engagement
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Typical Timeline
                </h4>
                <p className="text-smoke/70">
                  4-10 weeks depending on regulatory complexity and scope breadth
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Resource Model
                </h4>
                <p className="text-smoke/70">
                  Dedicated analyst with regulatory specialist consultation as required
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Engagement Options
                </h4>
                <p className="text-smoke/70">
                  Project-based, retainer, or rapid-response arrangements available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
