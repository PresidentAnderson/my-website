import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Misconduct | JAIC',
  description: 'Investigation of executive wrongdoing, breach of fiduciary duty, abuse of authority, and internal misconduct patterns within organizations.',
};

export default function CorporateMisconduct() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">CASE DOMAIN • CORPORATE INVESTIGATIONS</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight">
            Corporate Misconduct
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8 max-w-3xl">
            Systematic investigation of executive wrongdoing, breach of fiduciary duty, abuse of authority, and internal misconduct patterns within organizations affecting governance and stakeholder interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake/start" className="btn-primary">
              Report Misconduct
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
              Corporate misconduct encompasses investigations into abuse of authority, breach of fiduciary duty, executive wrongdoing, and systemic misconduct patterns within organizational structures. This domain addresses conduct ranging from self-dealing transactions and conflicts of interest to deliberate mismanagement, cover-ups, and retaliation against whistleblowers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Primary Focus Areas
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Executive self-dealing and conflicts of interest</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Breach of fiduciary duty investigations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Inappropriate business decisions and authority abuse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Whistleblower retaliation and cover-up patterns</span>
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
                    <span>C-suite executives and senior management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Board members and governance structures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Departmental leaders and middle management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Whistleblowers and reporting employees</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Undisclosed Related-Party Transactions
                  </h3>
                  <p className="text-smoke/70">
                    Transactions involving executives, their affiliated entities, or close associates conducted without board disclosure or proper governance approval, particularly when terms differ from arm's-length market rates.
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
                    Pattern of Retaliatory Actions
                  </h3>
                  <p className="text-smoke/70">
                    Systematic retaliation against employees who raise concerns, including adverse employment actions, transfer or termination following complaints, negative performance reviews immediately after reports, or coordination of disciplinary actions.
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
                    Governance and Documentation Failures
                  </h3>
                  <p className="text-smoke/70">
                    Bypass of established governance structures, missing board minutes, inadequate conflict-of-interest disclosures, altered meeting records, or suppression of committee findings that would reveal misconduct.
                  </p>
                </div>
              </div>
            </div>

            <div className="evidence-card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-signal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                    Misaligned Compensation and Benefits Patterns
                  </h3>
                  <p className="text-smoke/70">
                    Excessive or unjustified executive compensation, undisclosed bonuses or benefits, improper change-of-control payments, excessive perquisites, or compensation decisions lacking performance justification or board scrutiny.
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
                    Information Suppression and Obstruction
                  </h3>
                  <p className="text-smoke/70">
                    Deliberate concealment of misconduct information, pressure on employees or advisors to limit disclosures, document destruction or alteration, instruction of witnesses not to cooperate, or interference with independent investigations.
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
                Governance Documentation
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Board minutes and resolutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Committee meeting records and findings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Conflict-of-interest disclosures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Corporate bylaws and governance policies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Board materials and presentations</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Personnel & HR Records
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Employment records and personnel files</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Compensation and benefits documentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Performance reviews and evaluations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Disciplinary and termination records</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Complaint and whistleblower documentation</span>
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
                  <span>Email communications and message threads</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Instant messaging and chat logs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Calendar entries and meeting records</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Voice and video communications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Personal device communications</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Witness & Expert Evidence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Witness interviews and statements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Whistleblower accounts and disclosures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Legal and compliance expert analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Third-party observations and reports</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Forensic interview analysis</span>
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
                Governance and Conduct Pattern Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Detailed documentation of misconduct patterns, including timeline establishment, intentionality assessment, and governance structure deficiencies that enabled wrongdoing.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Chronological findings report, conduct analysis, and governance assessment supporting remedial or enforcement actions.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Breach of Duty Assessment
              </h3>
              <p className="text-smoke/70 mb-4">
                Analysis of conduct against applicable fiduciary standards, duty of care requirements, conflicts of interest protocols, and relevant regulatory frameworks.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Legal standard analysis, violation documentation, and applicability findings supporting litigation or regulatory proceedings.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Financial Impact Quantification
              </h3>
              <p className="text-smoke/70 mb-4">
                Assessment of financial harm resulting from misconduct, including improper benefits received, foregone value, and damages to organizational interests.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Financial analysis, damage quantification, and restitution recommendations supporting recovery efforts.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Perpetrator and Participation Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Identification of individuals involved in misconduct, their respective roles, levels of knowledge and participation, and collaborative relationships within the wrongdoing network.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Relationship maps, individual role documentation, and participation analysis supporting accountability.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Remediation and Governance Recommendations
              </h3>
              <p className="text-smoke/70 mb-4">
                Assessment of structural vulnerabilities, governance gaps, and procedural deficiencies that allowed misconduct, with recommendations for strengthened controls and oversight mechanisms.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Governance assessment, control failure analysis, and remediation roadmap supporting organizational reform.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Retaliation Documentation and Support
              </h3>
              <p className="text-smoke/70 mb-4">
                Detailed documentation of retaliatory conduct against whistleblowers or complainants, including causal relationships to protected activities.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Retaliation timeline, comparative analysis, and causality documentation supporting employment or regulatory claims.
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
                Comprehensive internal misconduct investigations with evidence collection and testimony coordination.
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
                Compliance assessment and enforcement risk evaluation for misconduct scenarios.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn more →
              </span>
            </Link>

            <Link href="/services" className="evidence-card group hover:border-investigation-50">
              <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-investigation/30 transition-colors">
                <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                Digital Forensics
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Electronic evidence recovery supporting misconduct investigations and perpetrator identification.
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
                Expert coordination and evidence organization for misconduct-related disputes.
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
              Concerned About Corporate Misconduct?
            </h2>
            <p className="text-lg text-smoke/70 mb-8">
              JAIC provides confidential investigation to document misconduct patterns, establish breach of duty, and support governance remediation or legal action. Contact our team in strict confidence.
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
