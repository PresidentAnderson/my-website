import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance Framework',
  description: 'Regulatory alignment, investigational standards, neutrality commitment, and disclosure limitations for JAIC investigational services.',
  keywords: ['compliance', 'regulatory alignment', 'investigational standards', 'neutrality', 'professional standards', 'disclosure'],
};

export default function ComplianceFramework() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">LEGAL</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Compliance Framework
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            Regulatory alignment, professional standards, and governance protocols ensuring investigational integrity for every engagement.
          </p>
          <p className="text-sm text-smoke/50 mt-8 font-technical">
            Last Updated: December 2024 • Federal Private Mandate
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl space-y-12">

          {/* 1. Regulatory Alignment */}
          <div>
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">01</span>
              Regulatory Alignment
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC operates under federal private mandate as a federally incorporated investigational corporation. Our activities comply with applicable laws while maintaining independence from government entities or regulatory bodies.
              </p>

              <div className="bg-slate border border-slate-100 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2 text-investigation-50">
                    Federal Incorporation
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC is federally incorporated under federal business corporation law. We operate as private entity under private mandate—not as government agency, law enforcement body, or regulatory authority. Our services are retained confidentially by private clients.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Legal Compliance
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    All investigational activities comply with federal, provincial, and municipal laws including: Privacy Act (federal), provincial freedom of information legislation, criminal law restrictions on unauthorized access or surveillance, professional privilege rules, and workplace law.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Evidence Standards
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Investigational evidence is collected consistent with legal evidentiary standards suitable for litigation or regulatory proceedings. Chain of custody protocols follow forensic standards recognized by Canadian courts.
                  </p>
                </div>
              </div>

              <p className="text-sm text-smoke/60 italic mt-6">
                JAIC does not conduct investigations on behalf of government, do not have law enforcement authority, and do not operate under regulatory delegation.
              </p>
            </div>
          </div>

          {/* 2. Investigational Standards */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">02</span>
              Investigational Standards
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC applies rigorous investigational standards adapted from intelligence analysis, forensic accounting, and legal discovery disciplines. All investigations follow documented methodology tested for reliability and defensibility.
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2 text-investigation-50">
                    Evidence-Driven Analysis
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Investigational conclusions are grounded in documented evidence. Analytical reasoning is explicit and traceable. Unsupported assumptions are identified as such. Alternative hypotheses are considered and evaluated against available evidence.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Hypothesis Testing
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Investigational frameworks test competing explanations against available evidence. Rather than confirming preconceived theories, investigation systematically evaluates alternative hypotheses. Negative evidence receives equivalent weight to positive evidence.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Structured Methodology
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Each investigation follows documented analytical framework establishing: scope parameters, information sources, analytical techniques, quality control procedures, and deliverable specifications. Methodological decisions are documented and justified.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Bias Recognition
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC recognizes cognitive biases affecting investigation (confirmation bias, availability bias, anchoring). Investigational design incorporates controls mitigating bias. Analysts regularly test assumptions against contrary evidence.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Peer Review
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Significant investigational findings undergo independent peer review by qualified reviewer without involvement in analysis. Reviewer assesses methodology, evidence evaluation, analytical reasoning, and conclusion support.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Confidence Levels
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Investigational findings are expressed with explicit confidence levels (high, moderate, low) reflecting evidentiary support and analytical certainty. Limitations and caveats are clearly stated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Investigational Neutrality Commitment */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">03</span>
              Investigational Neutrality Commitment
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains strict independence from party interests and committed to investigational neutrality—fundamental to investigational integrity and credibility.
              </p>

              <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6 mt-6">
                <h3 className="font-display font-semibold text-smoke mb-3 text-investigation-50">
                  Independence Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="text-smoke/70">
                    <span className="font-semibold text-smoke">No Advocacy:</span> JAIC does not advocate positions, represent parties in proceedings, or tailor findings to client preference. Investigational conclusions stand on analytical merit.
                  </p>
                  <p className="text-smoke/70">
                    <span className="font-semibold text-smoke">Conflict Screening:</span> All matters undergo comprehensive conflict analysis. Engagements compromising independence are declined. Prior relationships potentially creating bias are disclosed.
                  </p>
                  <p className="text-smoke/70">
                    <span className="font-semibold text-smoke">Outcome Blindness:</span> Investigations proceed without knowledge of client preference regarding outcomes. Analysts evaluate evidence objectively regardless of preferred results.
                  </p>
                  <p className="text-smoke/70">
                    <span className="font-semibold text-smoke">Party Neutrality:</span> JAIC does not favor any party or position. Findings reflect evidence evaluation, not party interests.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">1</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Conflict Avoidance
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      JAIC declines engagements where conflicts exist, including: prior representation of adverse party, significant ongoing relationships with interested parties, financial interests in outcome, personal relationships creating bias, or prior investigational work on same matter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">2</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Disclosure Obligation
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      JAIC discloses any circumstances potentially creating appearance of bias or conflict. Disclosure occurs at engagement initiation and throughout engagement if circumstances change.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">3</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Investigator Independence
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      Individual investigators conducting analysis operate independently from management pressure. Investigator findings are not modified to align with client expectations. Conclusions reflect investigator professional judgment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">4</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Quality Assurance
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      Investigational quality assurance process ensures methodology rigor, evidence evaluation objectivity, and analytical soundness—not conclusion conformity with client preferences.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-smoke/60 italic mt-8">
                Neutrality is not passivity. JAIC actively evaluates evidence, questions assumptions, and pursues investigational leads objectively—but without favoring any party or predetermined outcome.
              </p>
            </div>
          </div>

          {/* 4. Conflicts of Interest Management */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">04</span>
              Conflicts of Interest Management
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains comprehensive conflict management protocols ensuring investigational independence and professional integrity.
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Conflict Screening Process
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Prior to engagement, JAIC screens for conflicts including: prior representation of adverse parties, significant financial relationships, employment relationships, family relationships, prior investigations on matter, and existing client relationships with interested parties.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Conflict Categories
                  </h3>
                  <div className="bg-slate border border-slate-100 rounded-lg p-4 text-sm space-y-2">
                    <p className="text-smoke/70">
                      <span className="font-semibold text-smoke">Direct Conflicts:</span> Prior representation of adverse party, significant financial interest in outcome, employment by interested party
                    </p>
                    <p className="text-smoke/70">
                      <span className="font-semibold text-smoke">Appearance of Conflict:</span> Personal relationships with interested parties, prior investigational work on related matters, significant business relationships
                    </p>
                    <p className="text-smoke/70">
                      <span className="font-semibold text-smoke">Future Conflicts:</span> Engagement creating future conflict through client relationships or investigational findings publication
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Conflict Resolution
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Where conflicts are identified, JAIC: declines engagement, implements conflict management protocols (investigator recusal, information barriers), or obtains informed written consent from affected parties. Conflicts are not resolved through client preference alone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Disclosure Limitations */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">05</span>
              Disclosure Limitations
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains strict disclosure limitations protecting investigational confidentiality, client identity, and investigational methodology.
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2 text-investigation-50">
                    Client Confidentiality
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Client identities and engagement details are maintained in confidence. JAIC does not disclose that client has retained services, engagement scope, or investigational findings without explicit written authorization. Public references to engagements require client approval.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Work Product Protection
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Investigational files, methodologies, working notes, and internal deliberations are protected as work product. Clients receive final written deliverables; internal analysis work product is retained by JAIC and not subject to client access except where privileged disclosure is required.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Methodology Confidentiality
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC proprietary investigational methodologies, analytical frameworks, and quality assurance procedures are confidential. Clients receive findings; they do not receive detailed methodology documentation or analytical processes.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Privilege & Protection
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Where investigational engagement is conducted on advice of counsel or for litigation support, communications may be privileged under attorney-client privilege or work product doctrine. Privilege attaches to engagement conducted at counsel direction.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <h3 className="font-display font-semibold text-smoke">
                  Authorized Disclosures
                </h3>
                <p className="text-smoke/70 text-sm">
                  JAIC may disclose findings only:
                </p>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">To authorized client representatives</p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">As explicitly authorized by written client instruction</p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">When legally compelled by court order, subpoena, or law (with client notice)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">To prevent illegal activity or protect safety/property (limited disclosure)</p>
                </div>
              </div>

              <p className="text-sm text-smoke/60 italic mt-8">
                JAIC does not publish investigational methodologies, case studies, or findings without client authorization. Client privacy is protected in all contexts.
              </p>
            </div>
          </div>

          {/* 6. Professional Accountability */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">06</span>
              Professional Accountability
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains accountability mechanisms ensuring professional standards compliance and investigational integrity.
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Investigator Qualifications
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    All investigators possess relevant professional experience, training in investigational methodology, and demonstrated expertise in assigned investigation domains. Investigator credentials are documented and reviewed annually.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Quality Assurance Program
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    All investigations undergo quality review assessing: methodology appropriateness, evidence evaluation rigor, analytical soundness, documentation completeness, and professional standards compliance. Quality assurance is independent from investigational team.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Continuing Education
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC personnel maintain current knowledge of investigational techniques, legal developments, technology tools, and professional standards. Annual continuing education requirements ensure methodological currency.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Professional Standards Compliance
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC operations comply with recognized professional investigational standards including: International Association of Professional Investigators (IAPI) standards, forensic investigation best practices, and legal evidentiary standards applicable in Canadian courts.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Misconduct Reporting
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC personnel are obligated to report potential misconduct, ethical violations, or professional standards breaches. Reporting is confidential; retaliation is prohibited. Substantiated misconduct results in corrective action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Regulatory Compliance Monitoring */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">07</span>
              Regulatory Compliance Monitoring
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC monitors regulatory developments and legal requirements affecting investigational operations. Compliance protocols are updated as legal standards evolve.
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Ongoing Monitoring
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC monitors: legislative changes affecting investigational activities, court decisions affecting evidence admissibility and investigational procedures, regulatory guidance from professional bodies, and technology developments affecting investigational practices.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Policy Review & Updates
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Compliance frameworks are reviewed annually and updated as necessary to reflect legal changes. Significant regulatory changes trigger immediate compliance assessment.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Client Notification
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Clients are notified of regulatory changes materially affecting investigational services or investigational findings. Updates to Terms of Service or Privacy Policy are communicated promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-12 border-t border-slate-100">
            <div className="bg-slate border border-slate-100 rounded-lg p-8">
              <h3 className="font-display font-semibold text-smoke mb-3 text-lg">
                Compliance Questions or Concerns?
              </h3>
              <p className="text-smoke/70 text-sm mb-6">
                Contact JAIC to discuss compliance frameworks, professional standards, or report concerns regarding investigational conduct.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Contact JAIC
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-4">
            Ready to engage with confidence
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            JAIC operates under rigorous compliance standards ensuring investigational integrity, neutrality, and professional accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/legal/terms" className="btn-secondary">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="btn-secondary">
              Privacy Policy
            </Link>
            <Link href="/intake/start" className="btn-primary">
              Start Intake
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
