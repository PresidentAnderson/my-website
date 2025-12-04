import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Domains',
  description: 'Specialized investigational expertise across high-complexity corporate, legal, and regulatory contexts.',
};

export default function CaseDomains() {
  const domains = [
    {
      name: 'Financial Misconduct',
      description: 'Fraud investigations, embezzlement analysis, financial statement manipulation, asset misappropriation, and accounting irregularities.',
      contexts: [
        'Securities fraud investigations',
        'Embezzlement and asset misappropriation',
        'Financial statement manipulation',
        'Accounting irregularity analysis',
        'Procurement fraud detection',
        'Expense reimbursement fraud',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Corporate Fraud & Deception',
      description: 'Internal fraud schemes, vendor collusion, kickback arrangements, shell company abuse, and complex fraudulent transactions.',
      contexts: [
        'Vendor fraud and kickback schemes',
        'Shell company identification',
        'Conflict of interest investigations',
        'Bribery and corruption analysis',
        'Contract manipulation schemes',
        'Fraudulent transfer detection',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Regulatory Violations',
      description: 'Compliance breach investigations, regulatory exposure assessment, enforcement action preparation, and remediation protocol development.',
      contexts: [
        'Compliance program failures',
        'Environmental regulation violations',
        'Industry-specific regulatory breaches',
        'Licensing and certification issues',
        'Data protection and privacy violations',
        'Export control and sanctions exposure',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      name: 'Employment Disputes',
      description: 'Workplace misconduct investigations, discrimination claims, harassment allegations, wrongful termination analysis, and employment practice review.',
      contexts: [
        'Harassment and discrimination investigations',
        'Wrongful termination fact-finding',
        'Workplace violence threat assessment',
        'Executive misconduct investigations',
        'Wage and hour compliance review',
        'Whistleblower claim evaluation',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Intellectual Property & Trade Secrets',
      description: 'Trade secret misappropriation, patent infringement analysis, IP theft investigations, and competitive intelligence assessment.',
      contexts: [
        'Trade secret theft investigations',
        'Patent infringement fact-finding',
        'Copyright violation analysis',
        'Employee departure IP risk',
        'Competitive intelligence theft',
        'Trademark counterfeiting investigations',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      name: 'Technology & Cyber Risk',
      description: 'Data breach investigations, cybersecurity incident response, technology vendor risk, AI governance assessment, and digital evidence analysis.',
      contexts: [
        'Data breach investigations',
        'Cybersecurity incident response',
        'Insider threat detection',
        'Technology vendor due diligence',
        'AI/ML governance review',
        'Digital forensics and e-discovery',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
            <span className="metadata-chip">CASE DOMAINS</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Specialized Domain Expertise
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
            JAIC investigates complex matters across six core domain areas, each requiring specialized methodologies, industry knowledge, and analytical frameworks.
          </p>
        </div>
      </section>

      {/* Approach Statement */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Domain-Specific Approach
            </h2>
            <p className="text-lg text-smoke/70 mb-4">
              Each case domain presents unique evidentiary challenges, regulatory frameworks, and analytical requirements. Our methodology adapts to context while maintaining consistent investigational rigor.
            </p>
            <p className="text-lg text-smoke/70">
              We do not pursue cases outside our areas of demonstrated competence. Domain expertise ensures we understand industry norms, recognize relevant patterns, and apply appropriate analytical frameworks.
            </p>
          </div>
          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-lg">
              Cross-Domain Integration
            </h3>
            <p className="text-smoke/70 mb-6 text-sm">
              Many complex matters span multiple domains—financial misconduct with regulatory implications, employment disputes involving IP theft, or technology risk with fraud components. JAIC synthesizes cross-domain expertise to address multifaceted investigations.
            </p>
            <Link href="/methodology" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              View Our Methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Domains Grid */}
      <section className="section-container border-t border-slate-100">
        <div className="space-y-8">
          {domains.map((domain) => (
            <div key={domain.name} className="evidence-card group">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-investigation/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-investigation/30 transition-colors text-investigation-50">
                    {domain.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-smoke mb-4">
                    {domain.name}
                  </h2>
                  <p className="text-smoke/70">
                    {domain.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-sm font-technical text-investigation-50 font-bold mb-4 uppercase tracking-wide">
                    Representative Contexts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {domain.contexts.map((context) => (
                      <div key={context} className="flex items-start space-x-3 bg-slate-200/20 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-investigation-50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-smoke/80 text-sm">{context}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Domain Selection Criteria */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6 text-center">
            Matter Assessment Criteria
          </h2>
          <p className="text-lg text-smoke/70 mb-12 text-center">
            JAIC evaluates potential engagements against strict criteria to ensure competence, independence, and appropriate resource allocation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate border border-slate-100 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Complexity Threshold
              </h3>
              <p className="text-smoke/70 text-sm">
                Matters requiring specialized investigational capabilities beyond routine internal review or standard legal discovery.
              </p>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Domain Competence
              </h3>
              <p className="text-smoke/70 text-sm">
                Alignment with JAIC's established expertise areas and proven analytical methodologies.
              </p>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Independence Verification
              </h3>
              <p className="text-smoke/70 text-sm">
                No conflicts of interest, outcome bias, or compromising relationships affecting investigational neutrality.
              </p>
            </div>

            <div className="bg-slate border border-slate-100 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Resource Feasibility
              </h3>
              <p className="text-smoke/70 text-sm">
                Appropriate scope, timeline, and resource allocation aligned with matter requirements and client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Discuss Your Matter
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            Initial consultations are confidential and involve comprehensive matter assessment to determine appropriate investigational approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake/start" className="btn-primary">
              Confidential Intake
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
