import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Risk Intelligence',
  description: 'Algorithmic accountability assessment, model governance review, and AI deployment risk analysis for technology-driven organizations.',
  keywords: ['AI risk assessment', 'algorithmic accountability', 'model governance', 'AI compliance', 'AI governance review', 'algorithmic bias'],
  openGraph: {
    title: 'AI Risk Intelligence | JAIC',
    description: 'Algorithmic accountability assessment, model governance review, and AI deployment risk analysis for technology-driven organizations.',
    type: 'website',
  },
};

export default function AIRiskIntelligence() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">SERVICE: AI RISK INTELLIGENCE</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            AI Risk Intelligence
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Algorithmic accountability, model governance assessment, and AI deployment risk analysis supporting technology organizations navigating emerging AI governance frameworks and deployment risks.
          </p>
          <Link href="/intake/start" className="btn-primary">
            Request AI Risk Assessment
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
              AI system deployment introduces complex governance, accountability, and risk management challenges. Organizations deploying AI face emerging regulatory frameworks, algorithmic bias concerns, and governance requirement uncertainties. JAIC provides AI risk assessment and governance support enabling organizations to deploy AI responsibly while managing compliance and governance exposure.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our assessment covers AI model governance frameworks, algorithmic bias evaluation, data provenance verification, compliance mapping, and deployment risk analysis. We evaluate model development processes, training data integrity, performance monitoring, and deployment accountability mechanisms.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              AI risk assessment informs governance protocols, risk management frameworks, and regulatory positioning. Our findings support responsible AI deployment, compliance positioning, and mitigation of algorithmic and governance risks associated with AI system operation.
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
            Specialized AI governance expertise spanning model assessment, algorithmic accountability, and compliance evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              AI Model Governance Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Evaluation of AI model development processes, governance frameworks, and accountability mechanisms. Assessment of model development rigor, testing protocols, and performance monitoring infrastructure.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Algorithmic Bias Evaluation
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of model bias risks, fairness evaluation, and disparate impact potential. Evaluation of training data biases and performance variance across demographic groups.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Data Provenance & Integrity Verification
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of training data sourcing, quality assurance, and provenance documentation. Evaluation of data collection practices and representation adequacy for deployed use cases.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              AI Compliance Mapping
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of applicable AI governance requirements, emerging regulatory frameworks, and compliance obligations. Mapping of AI-specific regulatory requirements and enforcement risks.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Model Documentation & Accountability Review
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of model documentation completeness, transparency requirements, and accountability mechanisms. Evaluation of documentation for regulatory and liability purposes.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.001 9.001 0 0120.354 15.354z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-smoke mb-2">
              Third-Party AI Risk Assessment
            </h3>
            <p className="text-smoke/70 text-sm">
              Due diligence assessment of third-party AI systems, vendor governance, and AI service provider compliance. Evaluation of vendor AI governance and third-party risk management.
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
            AI risk assessment addresses complex deployment, governance, and compliance scenarios.
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
                  AI Deployment Governance Assessment
                </h3>
                <p className="text-smoke/70 mb-3">
                  Organization deploying AI models requiring governance framework assessment and risk mitigation planning. JAIC evaluates model governance, bias risks, and compliance positioning supporting responsible AI deployment.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization planning AI system deployment requiring governance assessment and risk evaluation before production deployment.
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
                  Algorithmic Bias & Fairness Evaluation
                </h3>
                <p className="text-smoke/70 mb-3">
                  Assessment of algorithmic bias risks and potential disparate impact from AI system deployment. Evaluation of bias mitigation and fairness mechanisms supporting responsible deployment and compliance positioning.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization seeking algorithmic bias assessment before deploying high-stakes AI system in lending or hiring context.
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
                  AI Compliance & Regulatory Framework Assessment
                </h3>
                <p className="text-smoke/70 mb-3">
                  Assessment of applicable AI governance requirements and emerging regulatory frameworks affecting organizational AI deployment. Mapping of compliance obligations and governance requirements supporting regulatory positioning.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization navigating emerging AI regulations requiring assessment of compliance obligations and governance requirements.
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
                  Third-Party AI Vendor Due Diligence
                </h3>
                <p className="text-smoke/70 mb-3">
                  Assessment of third-party AI vendor governance, model quality, and compliance posture. Due diligence support for AI vendor selection and contractual risk management.
                </p>
                <p className="text-sm text-smoke/60 italic">
                  Scenario: Organization evaluating AI vendor for critical enterprise application requiring due diligence assessment of vendor governance and AI governance.
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
                  AI Governance Assessment Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Comprehensive evaluation of AI model governance frameworks, development processes, and accountability mechanisms. Assessment of governance rigor and mitigation recommendations.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Algorithmic Risk Analysis
                </h3>
                <p className="text-smoke/70 text-sm">
                  Assessment of algorithmic bias risks, fairness concerns, and potential disparate impact. Evaluation of bias mitigation strategies and fairness assessment mechanisms.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Data Provenance & Integrity Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Assessment of training data sourcing, quality assurance practices, and documentation completeness. Evaluation of data representation and integrity for deployed use cases.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  AI Compliance Mapping Report
                </h3>
                <p className="text-smoke/70 text-sm">
                  Identification of applicable AI governance requirements and regulatory frameworks. Mapping of compliance obligations and assessment of compliance positioning.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Risk Mitigation Framework
                </h3>
                <p className="text-smoke/70 text-sm">
                  Recommended governance protocols, risk management procedures, and mitigation strategies addressing identified AI governance and deployment risks.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Executive Briefing & Governance Consultation
                </h3>
                <p className="text-smoke/70 text-sm">
                  Presentation of AI risk assessment findings, governance recommendations, and compliance positioning. Strategic guidance supporting AI governance framework development.
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
              AI risk assessment requires comprehensive understanding of AI models, training processes, and deployment context. To support thorough evaluation, clients should provide complete technical documentation and governance information.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4">
                AI Model & Documentation Package
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Model architecture, development process, and training methodology documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Training data sourcing, quality assurance, and provenance documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Model performance metrics, evaluation protocols, and testing results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Governance framework, accountability mechanisms, and oversight protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3 font-medium">•</span>
                  <span className="text-smoke/70">Deployment context, use cases, and impact assessment documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-5">
              <h3 className="font-display font-semibold text-smoke mb-3 text-sm font-technical uppercase tracking-wide">
                Technical Access
              </h3>
              <p className="text-smoke/70 text-sm">
                AI risk assessment may require technical access to model systems, training data infrastructure, and performance monitoring systems. Security and confidentiality protocols established during intake process to support assessor access while protecting proprietary information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Assessment Process
          </h2>
          <p className="text-lg text-smoke/70">
            All AI risk assessments follow a structured methodology ensuring comprehensive evaluation and defensible recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">01</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Intake & Model Scoping
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive intake establishing AI assessment scope, model description, deployment context, and governance requirements. Documentation of assessment objectives and stakeholder requirements.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">02</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Technical Evaluation
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of model architecture, training processes, performance metrics, and bias evaluation. Technical analysis of model quality and governance infrastructure.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">03</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Governance & Compliance Analysis
            </h3>
            <p className="text-smoke/70 text-sm">
              Assessment of governance frameworks, compliance positioning, and regulatory requirements. Identification of governance gaps and compliance vulnerabilities.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">04</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-smoke mb-2">
              Reporting & Recommendations
            </h3>
            <p className="text-smoke/70 text-sm">
              Comprehensive assessment reporting, risk analysis, and mitigation recommendations. Executive briefing and governance consultation supporting responsible AI deployment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Ready to assess AI governance?
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              JAIC provides comprehensive AI risk assessment supporting responsible AI deployment, governance framework development, and compliance positioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake/start" className="btn-primary">
                Request AI Assessment
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Other Services
              </Link>
            </div>
          </div>

          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
              Assessment Engagement
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Typical Timeline
                </h4>
                <p className="text-smoke/70">
                  6-12 weeks depending on model complexity and assessment scope
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Resource Model
                </h4>
                <p className="text-smoke/70">
                  Dedicated AI analyst with technical specialist and governance consultant support
                </p>
              </div>
              <div className="border-t border-investigation/20 pt-4">
                <h4 className="font-technical text-investigation-50 font-bold text-sm uppercase tracking-wide mb-2">
                  Confidentiality
                </h4>
                <p className="text-smoke/70">
                  Full protective measures for proprietary model documentation and technical information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
