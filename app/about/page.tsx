import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Corporation',
  description: 'The JAIC mandate: Independent investigational services for complex corporate, legal, and regulatory matters.',
};

export default function About() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">ABOUT JAIC</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Independent. Rigorous. Discreet.
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            Jonathan Anderson Investigational Corporation provides evidence-driven analysis for organizations navigating high-stakes disputes, regulatory exposure, and complex risk scenarios.
          </p>
        </div>
      </section>

      {/* JAIC Mandate */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              The JAIC Mandate
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              JAIC operates as a specialized investigational firm serving corporate clients, law firms, and institutional stakeholders requiring forensic-grade analysis of complex matters.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our mandate is to produce defensible, evidence-based findings through structured investigational protocols—supporting critical decisions, litigation strategy, regulatory response, and executive governance.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              We do not litigate, represent parties in proceedings, or advocate positions. We investigate, analyze, and report findings with strict adherence to evidentiary standards and professional neutrality.
            </p>
            <div className="bg-slate border border-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-display font-semibold text-smoke mb-3 text-lg">
                Core Principles
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <span className="text-smoke/70">Independence from party interests and outcome bias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <span className="text-smoke/70">Evidence-driven methodology with documented chain of custody</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <span className="text-smoke/70">Rigorous analytical frameworks tested for reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <span className="text-smoke/70">Confidentiality protocols exceeding professional standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investigational Philosophy */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Investigational Philosophy
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              Effective investigation requires more than information gathering. It demands structured reasoning, hypothesis testing, and the discipline to follow evidence rather than assumptions.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              We apply investigational rigor borrowed from intelligence analysis, forensic accounting, and legal discovery—synthesizing techniques into a cohesive methodology designed for corporate and regulatory contexts.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Evidence-First
                </h3>
                <p className="text-smoke/70 text-sm">
                  Conclusions must be defensible, traceable, and supported by documented evidence with clear provenance.
                </p>
              </div>
              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Hypothesis-Driven
                </h3>
                <p className="text-smoke/70 text-sm">
                  Structured analytical frameworks test competing explanations against available evidence.
                </p>
              </div>
              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Contextually Aware
                </h3>
                <p className="text-smoke/70 text-sm">
                  Industry norms, regulatory frameworks, and organizational context inform interpretation.
                </p>
              </div>
              <div className="evidence-card">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Methodologically Sound
                </h3>
                <p className="text-smoke/70 text-sm">
                  Transparent processes, documented decisions, and replicable analytical approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Neutrality */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Governance & Neutrality
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              JAIC maintains strict independence from party interests, refusing engagements that compromise investigational neutrality or create conflicts of interest.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              All investigations operate under documented governance protocols ensuring evidentiary integrity, confidentiality, and professional accountability. Our findings stand on their analytical merit, not advocacy or client preference.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6 mt-8">
              <h3 className="font-display font-semibold text-smoke mb-3 text-lg flex items-center">
                <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Investigational Neutrality Commitment
              </h3>
              <p className="text-smoke/70 leading-relaxed">
                We do not represent parties, advocate positions, or tailor findings to desired outcomes. Engagements that compromise independence are declined. All investigations follow documented protocols with oversight mechanisms ensuring analytical integrity.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="font-display font-semibold text-smoke text-lg">
                Governance Standards
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">01</span>
                  <div>
                    <span className="text-smoke font-medium">Conflict Screening:</span>
                    <span className="text-smoke/70 ml-2">All matters undergo comprehensive conflict analysis before engagement</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">02</span>
                  <div>
                    <span className="text-smoke font-medium">Chain of Custody:</span>
                    <span className="text-smoke/70 ml-2">Evidence handling follows forensic-grade documentation protocols</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">03</span>
                  <div>
                    <span className="text-smoke font-medium">Confidentiality Framework:</span>
                    <span className="text-smoke/70 ml-2">Multi-layered protection exceeding professional privilege standards</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-technical text-investigation-50 font-bold text-sm mr-3">04</span>
                  <div>
                    <span className="text-smoke font-medium">Quality Assurance:</span>
                    <span className="text-smoke/70 ml-2">Peer review and methodological validation for all major findings</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Incorporation */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
              Federal Incorporation
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-smoke/80 leading-relaxed">
              Jonathan Anderson Investigational Corporation is a federally incorporated entity operating under private mandate. We are not a government agency, law enforcement organization, or regulatory body.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Our services are retained by private clients on a confidential basis. We do not conduct investigations on behalf of government entities, nor do we possess law enforcement authority or regulatory powers.
            </p>
            <p className="text-lg text-smoke/80 leading-relaxed">
              Federal incorporation provides jurisdictional clarity, enhanced confidentiality protections, and operational consistency across state boundaries—critical for multi-jurisdictional matters.
            </p>

            <div className="bg-slate border border-slate-100 rounded-lg p-6 mt-6">
              <p className="text-sm text-smoke/60 font-technical">
                CORPORATION NO. [REDACTED] • FEDERALLY INCORPORATED • PRIVATE INVESTIGATIONAL SERVICES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Ready to engage?
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            All consultations are confidential and begin with a comprehensive intake assessment.
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
