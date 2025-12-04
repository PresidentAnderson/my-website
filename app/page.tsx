import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jonathan Anderson Investigational Corporation',
  description: 'Evidence-driven analysis, corporate-grade rigor, and executive discernment for high-stakes matters.',
};

export default function Home() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">EST. 2024 • FEDERALLY INCORPORATED</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight">
            Investigational clarity for complex realities
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8 max-w-3xl">
            Evidence-driven analysis, corporate-grade rigor, and executive discernment for high-stakes matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake/start" className="btn-primary">
              Confidential Intake
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-container border-t border-slate-100">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg text-smoke/70 max-w-3xl">
            Specialized investigational services designed for complex corporate, legal, and regulatory matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Forensic Investigations */}
          <div className="evidence-card group">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Forensic Investigations
            </h3>
            <p className="text-smoke/70 mb-4">
              Evidence collection, witness interviews, and fact-pattern reconstruction for high-stakes disputes.
            </p>
            <Link href="/services/forensic-investigations" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Learn more →
            </Link>
          </div>

          {/* Corporate Due Diligence */}
          <div className="evidence-card group">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Corporate Due Diligence
            </h3>
            <p className="text-smoke/70 mb-4">
              Pre-transaction risk assessment, entity verification, and counterparty intelligence.
            </p>
            <Link href="/services/corporate-due-diligence" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Learn more →
            </Link>
          </div>

          {/* Regulatory Analysis */}
          <div className="evidence-card group">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Regulatory Analysis
            </h3>
            <p className="text-smoke/70 mb-4">
              Compliance mapping, enforcement exposure assessment, and regulatory intelligence.
            </p>
            <Link href="/services/regulatory-analysis" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Learn more →
            </Link>
          </div>

          {/* Litigation Support */}
          <div className="evidence-card group">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Litigation Support
            </h3>
            <p className="text-smoke/70 mb-4">
              Expert witness coordination, demonstrative evidence development, and case theory validation.
            </p>
            <Link href="/services/litigation-support" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Learn more →
            </Link>
          </div>

          {/* AI Risk Intelligence */}
          <div className="evidence-card group">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              AI Risk Intelligence
            </h3>
            <p className="text-smoke/70 mb-4">
              Algorithmic accountability assessment, model governance review, and AI deployment risk analysis.
            </p>
            <Link href="/services/ai-risk-intelligence" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Learn more →
            </Link>
          </div>

          {/* Strategic Intelligence */}
          <div className="evidence-card group">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Strategic Intelligence
            </h3>
            <p className="text-smoke/70 mb-4">
              Competitive intelligence, stakeholder mapping, and scenario planning for executive decision-making.
            </p>
            <Link href="/services" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Domain Matrix Preview */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Case Domain Expertise
          </h2>
          <p className="text-lg text-smoke/70 max-w-3xl">
            Specialized experience across high-complexity investigational contexts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Financial Misconduct', icon: '💼' },
            { name: 'Corporate Fraud', icon: '🔍' },
            { name: 'Regulatory Violations', icon: '⚖️' },
            { name: 'Employment Disputes', icon: '👥' },
            { name: 'IP & Trade Secrets', icon: '🔐' },
            { name: 'Technology Risk', icon: '⚡' },
          ].map((domain) => (
            <div key={domain.name} className="bg-slate border border-slate-100 rounded-lg p-4 hover:border-investigation-50 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{domain.icon}</span>
                <span className="text-smoke font-medium">{domain.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/case-domains" className="text-investigation-50 hover:text-investigation font-medium">
            View all case domains →
          </Link>
        </div>
      </section>

      {/* Methodology Overview Strip */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Structured Methodology
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              Every investigation follows a disciplined six-phase protocol designed to ensure evidentiary integrity, analytical rigor, and defensible conclusions.
            </p>
            <Link href="/methodology" className="btn-secondary">
              View Full Methodology
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { phase: '01', name: 'Intake & Scoping', desc: 'Define parameters and investigational objectives' },
              { phase: '02', name: 'Evidence Collection', desc: 'Systematic gathering of relevant materials' },
              { phase: '03', name: 'Analysis & Synthesis', desc: 'Pattern recognition and hypothesis testing' },
              { phase: '04', name: 'Validation', desc: 'Cross-reference and corroboration protocols' },
              { phase: '05', name: 'Reporting', desc: 'Executive summary and detailed findings' },
              { phase: '06', name: 'Support & Testimony', desc: 'Ongoing consultation and expert testimony' },
            ].map((step) => (
              <div key={step.phase} className="flex items-start space-x-4 bg-slate-200/20 p-4 rounded-lg">
                <span className="font-technical text-investigation-50 font-bold text-sm">{step.phase}</span>
                <div>
                  <h4 className="font-display font-semibold text-smoke">{step.name}</h4>
                  <p className="text-sm text-smoke/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-slate-100 bg-investigation/10">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Begin a Confidential Inquiry
          </h2>
          <p className="text-lg text-smoke/70 mb-8 max-w-2xl mx-auto">
            All initial consultations are protected by investigational privilege and handled with absolute discretion.
          </p>
          <Link href="/intake/start" className="btn-primary text-lg">
            Initiate Secure Intake
          </Link>
        </div>
      </section>
    </div>
  );
}
