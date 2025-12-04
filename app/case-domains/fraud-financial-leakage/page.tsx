import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fraud & Financial Leakage | JAIC',
  description: 'Investigation and analysis of unauthorized fund transfers, embezzlement schemes, accounting irregularities, and complex financial fraud patterns.',
};

export default function FraudFinancialLeakage() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">CASE DOMAIN • FINANCIAL INVESTIGATIONS</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight">
            Fraud & Financial Leakage
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8 max-w-3xl">
            Systematic investigation of unauthorized fund transfers, embezzlement schemes, accounting irregularities, and complex financial fraud patterns affecting corporate assets and stakeholder value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake/start" className="btn-primary">
              Report a Concern
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
              Fraud and financial leakage encompasses the systematic investigation of unauthorized movement or misappropriation of corporate funds, assets, and financial instruments. This domain addresses schemes ranging from direct embezzlement and shell company fraud to sophisticated accounting manipulations designed to obscure cash flows and asset ownership.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Primary Focus Areas
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Embezzlement and unauthorized transfers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Vendor and invoice fraud schemes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Accounting manipulations and concealment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Asset misappropriation networks</span>
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
                    <span>Internal finance and accounting personnel</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>External vendors and service providers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Third-party intermediaries and consultants</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Affiliated entities and shell companies</span>
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
                    Unexplained Cash or Balance Discrepancies
                  </h3>
                  <p className="text-smoke/70">
                    Recurring variances in bank reconciliations, missing funds in subsidiary accounts, or undocumented balance adjustments that lack clear business justification or audit trail support.
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
                    Vendor and Invoice Anomalies
                  </h3>
                  <p className="text-smoke/70">
                    Duplicate invoice payments, payments to newly-registered vendors without supporting contracts, unusual payment patterns to specific payees, or vendors with no clear operational role.
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
                    Accounting Documentation Gaps
                  </h3>
                  <p className="text-smoke/70">
                    Missing supporting documentation for transactions, unsupported journal entries, altered or backdated invoices, inconsistent record-keeping practices, or segregation of duties failures.
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
                    Unusual Digital and Authorization Activity
                  </h3>
                  <p className="text-smoke/70">
                    Access logs revealing off-hours system activity by finance staff, unauthorized credential usage, rapid fund movements across accounts, or ACH transfers to new beneficiaries without proper authorization workflows.
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
                Financial Records
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Bank statements and reconciliations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>General ledger and subledger accounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Accounts payable aging reports</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Payment processing logs and transaction histories</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Wire transfer and ACH records</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Documentation & Contracts
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Invoices and supporting documentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Vendor agreements and contracts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Purchase orders and approval forms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Board minutes and authorizations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Internal policies and procedures</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Digital Evidence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>System access and audit logs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Email communications and metadata</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>File modification timestamps and versions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Accounting system change logs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Device forensics and communication records</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Witness & Intelligence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Employee interviews and statements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Vendor verification and background checks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Beneficial ownership and entity research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Public records and corporate filings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Third-party confirmation and reconciliation</span>
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
                Quantified Loss Assessment
              </h3>
              <p className="text-smoke/70 mb-4">
                Comprehensive financial analysis establishing the nature, scope, and magnitude of unauthorized fund movements, including timing of fraud inception and evolution of schemes over investigative period.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Detailed financial forensic report with transaction-level analysis, timeline reconstruction, and loss quantification supporting recovery discussions or litigation.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Perpetrator Identification & Motive Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Systematic identification of individuals and entities participating in schemes, including their operational roles, knowledge levels, and collaborative relationships within fraud networks.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Relationship maps, role analysis, and chronological documentation of individual involvement supporting accountability and remediation decisions.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Systemic Control Failure Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Assessment of internal controls that were circumvented or failed, including segregation of duties deficiencies, authorization workflow breakdowns, and monitoring system gaps that enabled schemes.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Control assessment report with specific improvement recommendations to prevent recurrence of identified vulnerability patterns.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Asset Tracing & Recovery Support
              </h3>
              <p className="text-smoke/70 mb-4">
                Tracing of misappropriated funds through intermediary accounts, shell companies, and asset conversions, supporting recovery litigation or third-party asset identification.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Fund flow analysis, beneficial ownership documentation, and recovery roadmaps supporting legal remediation efforts.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Evidence Synthesis for Regulatory/Law Enforcement
              </h3>
              <p className="text-smoke/70 mb-4">
                Compilation and organization of investigative findings in formats suitable for regulatory disclosures, law enforcement referrals, or insurance claim substantiation.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Organized evidence packages, investigative chronologies, and findings summaries meeting external stakeholder requirements.
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
                Comprehensive evidence collection and fact-pattern reconstruction for fraud and financial crime scenarios.
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
                Entity verification and counterparty intelligence to identify fraud risks in vendor and business relationships.
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
                Electronic evidence recovery and analysis supporting fraud investigations and perpetrator identification.
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
                Expert witness coordination and evidence organization for fraud-related commercial disputes and recovery litigation.
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
              Suspected Financial Fraud?
            </h2>
            <p className="text-lg text-smoke/70 mb-8">
              JAIC provides confidential investigation and analysis to quantify losses, identify perpetrators, and support recovery or regulatory action. Contact our team to discuss your matter in strict confidence.
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
