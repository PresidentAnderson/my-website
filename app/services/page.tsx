import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description: 'Specialized investigational services for complex corporate, legal, and regulatory matters.',
};

export default function Services() {
  const services = [
    {
      name: 'Forensic Investigations',
      href: '/services/forensic-investigations',
      description: 'Evidence collection, witness interviews, and fact-pattern reconstruction for high-stakes disputes and internal investigations.',
      capabilities: [
        'Internal misconduct investigations',
        'Fraud and financial irregularity analysis',
        'Asset tracing and recovery support',
        'Witness interview protocols',
        'Digital evidence forensics',
        'Timeline reconstruction',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      name: 'Corporate Due Diligence',
      href: '/services/corporate-due-diligence',
      description: 'Pre-transaction risk assessment, entity verification, and counterparty intelligence for M&A, partnerships, and strategic transactions.',
      capabilities: [
        'Entity structure analysis',
        'Beneficial ownership identification',
        'Regulatory compliance review',
        'Reputational risk assessment',
        'Financial integrity analysis',
        'Key person background verification',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Regulatory Analysis',
      href: '/services/regulatory-analysis',
      description: 'Compliance mapping, enforcement exposure assessment, and regulatory intelligence for organizations navigating complex oversight regimes.',
      capabilities: [
        'Regulatory exposure mapping',
        'Enforcement action analysis',
        'Compliance gap assessment',
        'Regulatory trend monitoring',
        'Agency communication strategy',
        'Remediation protocol design',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      name: 'Litigation Support',
      href: '/services/litigation-support',
      description: 'Expert witness coordination, demonstrative evidence development, and case theory validation for complex commercial disputes.',
      capabilities: [
        'Expert witness identification',
        'Evidence organization and indexing',
        'Timeline and chronology development',
        'Demonstrative exhibit creation',
        'Deposition preparation',
        'Trial testimony support',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      name: 'AI Risk Intelligence',
      href: '/services/ai-risk-intelligence',
      description: 'Algorithmic accountability assessment, model governance review, and AI deployment risk analysis for technology-driven organizations.',
      capabilities: [
        'AI model governance assessment',
        'Algorithmic bias evaluation',
        'Data provenance verification',
        'AI compliance mapping',
        'Model documentation review',
        'Third-party AI risk assessment',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">SERVICES & CAPABILITIES</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Specialized Investigational Services
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            Evidence-driven analysis designed for complex corporate, legal, and regulatory matters requiring forensic-grade rigor and executive discernment.
          </p>
          <Link href="/intake/start" className="btn-primary">
            Discuss Your Matter
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container border-t border-slate-100">
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={service.name} className="evidence-card group">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-investigation/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-investigation/30 transition-colors text-investigation-50">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-smoke mb-4">
                    {service.name}
                  </h2>
                  <p className="text-smoke/70 mb-6">
                    {service.description}
                  </p>
                  <Link href={service.href} className="btn-secondary text-sm">
                    View Details
                  </Link>
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-sm font-technical text-investigation-50 font-bold mb-4 uppercase tracking-wide">
                    Key Capabilities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.capabilities.map((capability) => (
                      <div key={capability} className="flex items-start space-x-3 bg-slate-200/20 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-investigation-50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-smoke/80 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Delivery Framework */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Service Delivery Framework
          </h2>
          <p className="text-lg text-smoke/70 max-w-3xl">
            All engagements follow a structured protocol designed to ensure quality, confidentiality, and defensible outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">01</span>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Scoping & Planning
            </h3>
            <p className="text-smoke/70">
              Comprehensive intake process defining objectives, scope, timeline, and resource requirements with clear deliverable specifications.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">02</span>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Execution & Analysis
            </h3>
            <p className="text-smoke/70">
              Disciplined investigational methodology with documented protocols, regular status updates, and adaptive project management.
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <span className="font-technical text-investigation-50 font-bold">03</span>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Reporting & Support
            </h3>
            <p className="text-smoke/70">
              Executive briefings, detailed written reports, and ongoing consultation supporting decision-making and downstream action.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Engagement Models
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              JAIC offers flexible engagement structures tailored to matter complexity, urgency, and organizational requirements.
            </p>
            <div className="space-y-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Project-Based Engagement
                </h3>
                <p className="text-smoke/70 text-sm">
                  Defined scope with fixed deliverables and timeline—ideal for discrete matters with clear parameters.
                </p>
              </div>
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Retainer Arrangement
                </h3>
                <p className="text-smoke/70 text-sm">
                  Ongoing support with priority access and dedicated capacity—suited for organizations with recurring investigational needs.
                </p>
              </div>
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Rapid Response
                </h3>
                <p className="text-smoke/70 text-sm">
                  Accelerated engagement for time-sensitive matters requiring immediate investigational resources and expedited analysis.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8 sticky top-28">
              <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
                Ready to discuss your matter?
              </h3>
              <p className="text-smoke/70 mb-6">
                All consultations are confidential. We begin with a comprehensive intake assessment to understand your requirements and determine appropriate service approach.
              </p>
              <Link href="/intake/start" className="btn-primary w-full text-center block">
                Start Confidential Intake
              </Link>
              <div className="mt-6 pt-6 border-t border-investigation/20">
                <p className="text-sm text-smoke/60 mb-2">
                  Or explore our methodology:
                </p>
                <Link href="/methodology" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                  View Investigational Process →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
