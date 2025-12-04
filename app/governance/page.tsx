import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Governance & Ethics',
  description: 'Investigational governance framework ensuring neutrality, evidentiary integrity, and ethical conduct across all engagements.',
};

export default function Governance() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">GOVERNANCE & ETHICS</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Investigational Governance Framework
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            JAIC operates under strict governance protocols ensuring investigational neutrality, evidentiary integrity, and ethical conduct across all engagements.
          </p>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Code of Conduct
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              All JAIC personnel and affiliates operate under a comprehensive Code of Conduct governing professional standards, ethical obligations, and investigational responsibilities.
            </p>

            <div className="space-y-4">
              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Professional Independence
                </h3>
                <p className="text-smoke/70 text-sm">
                  Maintain independence from party interests, outcome bias, and compromising relationships. Decline engagements that threaten investigational neutrality.
                </p>
              </div>

              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Evidence-Based Analysis
                </h3>
                <p className="text-smoke/70 text-sm">
                  Ground all findings in documented evidence following established analytical frameworks. Disclose limitations, assumptions, and alternative interpretations.
                </p>
              </div>

              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Competence Boundaries
                </h3>
                <p className="text-smoke/70 text-sm">
                  Operate only within established areas of expertise. Decline matters requiring capabilities beyond demonstrated competence.
                </p>
              </div>

              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Confidentiality Obligations
                </h3>
                <p className="text-smoke/70 text-sm">
                  Protect client information, investigation details, and sensitive materials through multi-layered confidentiality protocols exceeding professional standards.
                </p>
              </div>

              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Legal Compliance
                </h3>
                <p className="text-smoke/70 text-sm">
                  Adhere to all applicable laws, regulations, and professional standards. Refuse engagements requiring unlawful or unethical conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investigational Neutrality */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Investigational Neutrality
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              JAIC does not advocate positions, represent parties in proceedings, or tailor findings to desired outcomes. Our mandate is analysis, not advocacy.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4 text-lg">
                Neutrality Commitments
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">01</span>
                  <div>
                    <span className="text-smoke font-medium block mb-1">Independence Screening:</span>
                    <span className="text-smoke/70 text-sm">Comprehensive conflict analysis before engagement acceptance with ongoing monitoring for emerging conflicts.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">02</span>
                  <div>
                    <span className="text-smoke font-medium block mb-1">Outcome Neutrality:</span>
                    <span className="text-smoke/70 text-sm">No financial incentives, performance metrics, or engagement structures tied to specific findings or conclusions.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">03</span>
                  <div>
                    <span className="text-smoke font-medium block mb-1">Analytical Independence:</span>
                    <span className="text-smoke/70 text-sm">Investigators operate free from client direction on analytical conclusions, methodology, or evidentiary interpretation.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">04</span>
                  <div>
                    <span className="text-smoke font-medium block mb-1">Limitation Disclosure:</span>
                    <span className="text-smoke/70 text-sm">Transparent disclosure of evidentiary gaps, analytical limitations, and areas of uncertainty or alternative interpretation.</span>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-smoke/70 text-sm italic">
              Engagements compromising investigational neutrality are declined regardless of commercial considerations. JAIC prioritizes analytical integrity over client preference.
            </p>
          </div>
        </div>
      </section>

      {/* Chain of Custody Protocol */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Chain of Custody Protocol
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              All evidence collected, analyzed, or referenced in JAIC investigations follows forensic-grade chain of custody documentation ensuring integrity, traceability, and defensibility.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2 text-sm">
                  Evidence Collection
                </h3>
                <p className="text-smoke/70 text-sm">
                  Documented acquisition methods, timestamps, source identification, and preservation procedures for all materials.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2 text-sm">
                  Handling & Storage
                </h3>
                <p className="text-smoke/70 text-sm">
                  Secure storage with access controls, handling logs, and environmental protections appropriate to evidence type.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2 text-sm">
                  Transfer Documentation
                </h3>
                <p className="text-smoke/70 text-sm">
                  Complete records of all custody transfers, access events, and disposition decisions with authorized signatures.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2 text-sm">
                  Digital Integrity
                </h3>
                <p className="text-smoke/70 text-sm">
                  Hash validation, forensic imaging, write-blocking, and timestamping for electronic evidence with audit trails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Handling Rules */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Evidence Handling Rules
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              JAIC maintains strict protocols governing evidence handling, analysis, and retention ensuring evidentiary integrity and legal defensibility.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded flex items-center justify-center">
                  <span className="text-investigation-50 text-sm">•</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-smoke mb-1">Preservation Requirements</h4>
                  <p className="text-smoke/70 text-sm">Original evidence preserved in unaltered state with working copies used for analysis. Preservation methods documented and validated.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded flex items-center justify-center">
                  <span className="text-investigation-50 text-sm">•</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-smoke mb-1">Access Controls</h4>
                  <p className="text-smoke/70 text-sm">Need-to-know access restrictions with logging of all evidence access, copying, and analytical activities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded flex items-center justify-center">
                  <span className="text-investigation-50 text-sm">•</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-smoke mb-1">Analytical Documentation</h4>
                  <p className="text-smoke/70 text-sm">Complete documentation of analytical procedures, tools used, and decisions made during evidence examination and interpretation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded flex items-center justify-center">
                  <span className="text-investigation-50 text-sm">•</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-smoke mb-1">Retention & Disposition</h4>
                  <p className="text-smoke/70 text-sm">Evidence retention following engagement completion per client agreement with secure disposition protocols for permanent deletion or return.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Framework */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Confidentiality Framework
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              Multi-layered confidentiality protections exceed professional privilege standards, safeguarding client information, investigation details, and sensitive materials.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
              <h3 className="font-display font-semibold text-smoke mb-4 text-lg">
                Protection Layers
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-technical text-investigation-50 font-bold mb-2 uppercase tracking-wide">Layer 01: Contractual Protection</h4>
                  <p className="text-smoke/70 text-sm">
                    Comprehensive non-disclosure agreements with all personnel, vendors, and affiliates involved in engagements.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-technical text-investigation-50 font-bold mb-2 uppercase tracking-wide">Layer 02: Technical Controls</h4>
                  <p className="text-smoke/70 text-sm">
                    Encrypted communications, secure data storage, access logging, and multi-factor authentication for all systems handling client information.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-technical text-investigation-50 font-bold mb-2 uppercase tracking-wide">Layer 03: Operational Protocols</h4>
                  <p className="text-smoke/70 text-sm">
                    Need-to-know information sharing, project code names, segregated work environments, and communication security procedures.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-technical text-investigation-50 font-bold mb-2 uppercase tracking-wide">Layer 04: Professional Privilege</h4>
                  <p className="text-smoke/70 text-sm">
                    Where applicable, work conducted under attorney-client privilege through law firm retention or attorney work product doctrine protections.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-smoke/70 text-sm">
              All JAIC personnel undergo confidentiality training and sign comprehensive confidentiality agreements extending beyond engagement completion.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Oversight */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              Governance Oversight
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              Internal oversight mechanisms ensure compliance with governance protocols, ethical standards, and quality requirements across all engagements.
            </p>

            <div className="space-y-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Quality Review Board
                </h3>
                <p className="text-smoke/70 text-sm">
                  Peer review of major findings, methodology, and analytical conclusions before client delivery.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Ethics Committee
                </h3>
                <p className="text-smoke/70 text-sm">
                  Evaluation of conflicts, neutrality concerns, and ethical dilemmas with binding authority over engagement decisions.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Compliance Monitoring
                </h3>
                <p className="text-smoke/70 text-sm">
                  Ongoing review of protocol adherence, documentation practices, and governance framework implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate border border-slate-100 rounded-lg p-8">
            <h3 className="font-display font-semibold text-smoke mb-4 text-xl">
              Accountability Mechanisms
            </h3>
            <p className="text-smoke/70 mb-6">
              JAIC maintains accountability through documented protocols, oversight structures, and transparent limitation disclosure.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3">•</span>
                <span className="text-smoke/70 text-sm">Written policies with version control and change documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3">•</span>
                <span className="text-smoke/70 text-sm">Regular governance framework audits and updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3">•</span>
                <span className="text-smoke/70 text-sm">Incident response protocols for governance breaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-investigation-50 mr-3">•</span>
                <span className="text-smoke/70 text-sm">Continuous professional development on ethical obligations</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-slate-100">
              <Link href="/about" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn About JAIC →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100 bg-investigation/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Conduct Your Investigation With Integrity
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            JAIC's governance framework ensures your matter is handled with the highest standards of investigational ethics and professional responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake/start" className="btn-primary">
              Confidential Intake
            </Link>
            <Link href="/methodology" className="btn-secondary">
              View Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
