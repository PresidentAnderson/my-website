import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cross-Border Reconstructions | JAIC',
  description: 'International investigation, multi-jurisdictional fact-finding, beneficial ownership analysis, and cross-border asset tracing.',
};

export default function CrossBorderReconstructions() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">CASE DOMAIN • INTERNATIONAL INVESTIGATIONS</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-smoke mb-6 leading-tight">
            Cross-Border Reconstructions
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70 mb-8 max-w-3xl">
            International investigation, multi-jurisdictional fact-finding, beneficial ownership analysis, and cross-border asset tracing for complex matters involving multiple legal systems, international entities, and transnational relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake/start" className="btn-primary">
              Report International Matter
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
              Cross-border reconstructions encompass international investigation, multi-jurisdictional fact-finding, beneficial ownership analysis, and asset tracing across multiple legal systems and jurisdictions. This domain addresses complex matters involving international entities, offshore structures, multiple regulatory regimes, and transnational relationships where comprehensive reconstruction requires coordination across legal boundaries and culturally diverse investigation environments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Primary Focus Areas
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>International entity verification and beneficial ownership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Cross-border asset tracing and fund flow analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Multi-jurisdictional fact reconstruction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Offshore structure and network analysis</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-200/20 p-4 rounded-lg">
                <h3 className="text-sm font-technical text-investigation-50 font-bold mb-3 uppercase tracking-wide">
                  Investigation Scopes
                </h3>
                <ul className="space-y-2 text-smoke/70">
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Multiple countries and legal systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Offshore and secrecy jurisdictions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>International business relationships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-signal mt-1">•</span>
                    <span>Transnational regulated entities</span>
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
            Symptoms & Investigation Triggers
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
                    International Entity Networks
                  </h3>
                  <p className="text-smoke/70">
                    Complex networks of international entities, offshore structures, or shell companies with unclear ownership or control, often involving jurisdiction shopping, layered ownership, or beneficial owner concealment across multiple countries.
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
                    Cross-Border Fund Movements
                  </h3>
                  <p className="text-smoke/70">
                    International wire transfers, multi-jurisdictional fund flows, payments through multiple intermediary accounts, or circular fund movements that obscure the source and destination of funds.
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
                    Multi-Jurisdiction Relationship Networks
                  </h3>
                  <p className="text-smoke/70">
                    Complex relationships spanning multiple countries, unclear business rationale for international arrangements, counterparties with adverse regulatory history or reputational concerns, or relationships concentrated in jurisdictions with secrecy concerns.
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
                    Asset Concealment Patterns
                  </h3>
                  <p className="text-smoke/70">
                    Offshore real estate purchases, international banking arrangements, structures designed to obscure beneficial ownership, or asset positioning in jurisdictions with strong privacy protections.
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
                    International Regulatory Exposure
                  </h3>
                  <p className="text-smoke/70">
                    Sanctions concerns, export control violations, FCPA implications, international tax evasion, or compliance failures with multiple regulatory systems requiring multi-jurisdictional expertise.
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
            International Evidence and Investigation Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Corporate and Entity Records
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>International corporate registry searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Beneficial ownership and UBO registers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Articles of incorporation and amendments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Offshore structure analysis and mapping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Board registrations and director information</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Financial and Banking Records
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>International bank account searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Wire transfer and payment history</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>SWIFT and international payment tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Cross-border fund flow analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Trade finance documentation</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Asset and Real Estate Intelligence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>International real property searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Beneficial ownership of real estate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Vessel and aircraft ownership</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>International art and collectibles databases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Luxury asset and jet tracking services</span>
                </li>
              </ul>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                Regulatory and Sanctions Intelligence
              </h3>
              <ul className="space-y-3 text-smoke/70">
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>OFAC and international sanctions screening</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>PEP and adverse media research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>International regulatory actions and enforcement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>Tax compliance and FATCA investigation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-investigation-50 mt-1">▪</span>
                  <span>AML and KYC compliance assessment</span>
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
                Beneficial Ownership and Structure Analysis
              </h3>
              <p className="text-smoke/70 mb-4">
                Comprehensive mapping of international entity networks, identification of true beneficial owners, analysis of ownership layering, and documentation of control relationships across multiple jurisdictions.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Ownership analysis report, entity mapping diagrams, and beneficial owner identification.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Fund Flow and Asset Tracing
              </h3>
              <p className="text-smoke/70 mb-4">
                Detailed tracing of international fund movements, identification of intermediary accounts and entities, reconstruction of transaction chains, and identification of ultimate asset destinations.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Fund flow analysis, transaction timeline, and asset location documentation.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Multi-Jurisdictional Fact Reconstruction
              </h3>
              <p className="text-smoke/70 mb-4">
                Systematic reconstruction of facts across multiple countries, chronological sequencing of events, identification of relevant participants, and documentation of conduct patterns across jurisdictions.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Chronological narrative, multi-jurisdictional timeline, and fact pattern documentation.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Regulatory Compliance Assessment
              </h3>
              <p className="text-smoke/70 mb-4">
                Analysis of international compliance obligations, identification of regulatory violations across multiple jurisdictions, sanctions exposure assessment, and FCPA or tax compliance issues.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Compliance assessment, regulatory exposure analysis, and remediation roadmap.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Intelligence and Due Diligence Reports
              </h3>
              <p className="text-smoke/70 mb-4">
                Comprehensive international due diligence reports, counterparty intelligence, risk assessment for international relationships, and reputational screening results.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Due diligence report, risk assessment, and intelligence summary.
              </div>
            </div>

            <div className="evidence-card">
              <h3 className="text-lg font-display font-semibold text-smoke mb-3 text-investigation-50">
                Asset Location and Recovery Support
              </h3>
              <p className="text-smoke/70 mb-4">
                Identification of international asset locations, support for cross-border asset recovery efforts, documentation for international litigation or enforcement proceedings.
              </p>
              <div className="bg-slate-200/20 p-3 rounded text-sm text-smoke/60">
                Delivered as: Asset location report, recovery strategy documentation, and litigation support.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold text-smoke mb-2">
                Corporate Due Diligence
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                International due diligence, counterparty intelligence, and cross-border risk assessment.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Learn more →
              </span>
            </Link>

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
                Comprehensive cross-border investigation and evidence reconstruction.
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
                International regulatory compliance assessment and enforcement exposure analysis.
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
                International litigation support and expert testimony for cross-border matters.
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
              Complex International Matter?
            </h2>
            <p className="text-lg text-smoke/70 mb-8">
              JAIC provides comprehensive cross-border investigation, beneficial ownership analysis, and multi-jurisdictional fact reconstruction. Contact our team for complex international matters requiring specialized expertise.
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
