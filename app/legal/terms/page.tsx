import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of engagement, scope of services, limitations of liability, and dispute resolution for JAIC investigational services.',
  keywords: ['terms of service', 'engagement terms', 'service scope', 'liability limitation', 'dispute resolution'],
};

export default function TermsOfService() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">LEGAL</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            Engagement terms, limitations, and dispute resolution protocols for JAIC investigational services.
          </p>
          <p className="text-sm text-smoke/50 mt-8 font-technical">
            Last Updated: December 2024 • Effective for all engagements
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl space-y-12">

          {/* 1. Scope of Services */}
          <div>
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">01</span>
              Scope of Services
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                Jonathan Anderson Investigational Corporation ("JAIC") provides investigational analysis, evidence evaluation, and written findings for corporate, legal, and regulatory matters. Services include:
              </p>

              <div className="bg-slate border border-slate-100 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Investigational Analysis
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Structured examination of factual matters, evidence evaluation, and hypothesis testing within defined scope parameters.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Evidence Assessment
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Review and analysis of documents, records, communications, and other evidentiary materials provided or obtained through authorized means.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Forensic Documentation
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Chain of custody protocols, methodology documentation, and defensible analytical frameworks suitable for litigation or regulatory proceedings.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Written Findings
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Comprehensive reports documenting investigational process, findings, and analytical conclusions with evidentiary support.
                  </p>
                </div>
              </div>

              <p className="text-sm text-smoke/60 mt-6 italic">
                JAIC does not provide legal counsel, litigation representation, expert witness services (unless independently retained through separate engagement), or regulatory advocacy. Clients are advised to consult independent legal counsel regarding investigational findings.
              </p>
            </div>
          </div>

          {/* 2. Engagement Terms */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">02</span>
              Engagement Terms
            </h2>
            <div className="ml-10 space-y-4">
              <div>
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Engagement Letter
                </h3>
                <p className="text-smoke/70 text-sm leading-relaxed">
                  All services commence upon execution of a written engagement letter or service agreement specifying scope, deliverables, timeline, compensation, and confidentiality obligations. No services shall commence without documented agreement.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Scope Definition
                </h3>
                <p className="text-smoke/70 text-sm leading-relaxed">
                  Services are limited to scope explicitly defined in engagement documentation. Requests outside defined scope require amended engagement and additional compensation. JAIC reserves the right to decline scope expansion if investigational integrity would be compromised.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Conflict Screening
                </h3>
                <p className="text-smoke/70 text-sm leading-relaxed">
                  Client engagement requires comprehensive conflict analysis. JAIC declines engagements where conflicts of interest exist, prior relationships would compromise independence, or investigational neutrality cannot be maintained. Clients shall disclose all known conflicts during intake.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Compensation
                </h3>
                <p className="text-smoke/70 text-sm leading-relaxed">
                  Fees are specified in engagement letter and due per invoice schedule. JAIC may suspend services upon non-payment pending resolution. Additional expenses (travel, specialized analysis, third-party resources) are subject to prior authorization and detailed billing.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-display font-semibold text-smoke mb-2">
                  Testimonial & Expert Services
                </h3>
                <p className="text-smoke/70 text-sm leading-relaxed">
                  Testifying on investigational findings or serving as expert witness requires separate engagement and fee arrangement. JAIC shall not testify regarding investigational findings absent independent expert engagement explicitly covering testimony scope and compensation.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Limitations of Liability */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">03</span>
              Limitations of Liability
            </h2>
            <div className="ml-10 space-y-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3 text-investigation-50">
                  Investigational Limitations
                </h3>
                <p className="text-smoke/70 text-sm leading-relaxed">
                  Investigational findings reflect analysis of available evidence within defined scope. JAIC provides no guarantee of completeness, cannot access information outside engagement parameters, and findings may be superseded by subsequently discovered evidence or evidence outside investigation scope.
                </p>
              </div>

              <p className="text-sm text-smoke/80 leading-relaxed mt-6">
                <span className="font-display font-semibold text-smoke">Evidentiary Integrity:</span> JAIC responsibility is limited to competent analysis of evidence provided or lawfully obtained. Evidence integrity depends on client representation regarding provenance, authenticity, and legal acquisition. JAIC assumes no liability for evidence subsequently determined to be fabricated, illegally obtained, or misrepresented.
              </p>

              <p className="text-sm text-smoke/80 leading-relaxed mt-4">
                <span className="font-display font-semibold text-smoke">Client Reliance:</span> Investigational findings are provided for client use in their sole discretion. Clients shall independently verify findings, consult legal counsel regarding implications, and make independent decisions regarding findings reliance. JAIC is not responsible for client interpretation, application, or reliance on findings.
              </p>

              <p className="text-sm text-smoke/80 leading-relaxed mt-4">
                <span className="font-display font-semibold text-smoke">Liability Cap:</span> JAIC's total liability for any claim arising from investigational services shall not exceed total fees paid by client for services giving rise to claim, regardless of liability theory (contract, tort, negligence, strict liability, or other basis).
              </p>

              <p className="text-sm text-smoke/80 leading-relaxed mt-4">
                <span className="font-display font-semibold text-smoke">Consequential Damages:</span> JAIC shall not be liable for indirect, incidental, consequential, special, or punitive damages arising from engagement, including lost profits, lost revenue, loss of opportunity, or reputational harm, regardless of whether JAIC was advised of possibility of such damages.
              </p>

              <p className="text-sm text-smoke/80 leading-relaxed mt-4">
                <span className="font-display font-semibold text-smoke">Professional Standards:</span> Services are provided consistent with professional investigational standards. JAIC is not liable for damages resulting from client decisions made contrary to investigational findings or client failure to exercise reasonable due diligence.
              </p>
            </div>
          </div>

          {/* 4. Dispute Resolution */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">04</span>
              Dispute Resolution
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                Any dispute arising from engagement, service quality, fees, or investigational findings shall be resolved through the following process:
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">1</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Good Faith Negotiation
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      Parties shall engage in good faith negotiation regarding dispute. Client shall provide written notice to JAIC specifying dispute with reasonable detail. JAIC shall respond within 10 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">2</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Mediation
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      If negotiation fails, parties shall submit to mediation with mutually selected mediator. Each party bears own costs; mediator costs are shared equally. Mediation shall occur in Toronto, Ontario, Canada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">3</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Arbitration
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      If mediation fails, disputes shall be resolved by binding arbitration under Canadian Arbitration Act (Ontario). Single arbitrator shall be jointly selected. Arbitration shall be conducted in Toronto, Ontario. Arbitrator decision is final and binding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6 mt-8">
                <h3 className="font-display font-semibold text-smoke mb-2 text-investigation-50">
                  Jurisdiction & Governing Law
                </h3>
                <p className="text-smoke/70 text-sm">
                  These Terms shall be governed by laws of Ontario, Canada and federal laws of Canada applicable in Ontario. Both parties irrevocably submit to federal and Ontario courts for enforcement of arbitration awards or other proceedings. This is a federal private mandate matter within Canadian jurisdiction.
                </p>
              </div>

              <p className="text-sm text-smoke/60 italic mt-6">
                Notwithstanding arbitration requirement, JAIC may pursue equitable relief (injunction, specific performance) in court if necessary to protect confidential information or prevent irreparable harm.
              </p>
            </div>
          </div>

          {/* 5. Confidentiality */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">05</span>
              Confidentiality & Data Protection
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains strict confidentiality regarding all client identities, engagement details, investigational methodologies, and findings unless expressly authorized by client in writing or required by law.
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Client Communications
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Client communications are protected under attorney-client privilege (if conducted through or on advice of counsel), work product doctrine (where applicable), and professional confidentiality obligations. Client identities are maintained in confidence.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Investigational Records
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC investigational files, methodologies, and internal deliberations are confidential work product. Clients do not possess rights to internal files beyond final written deliverables specified in engagement.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Legal Disclosure
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    If legally compelled to disclose confidential information (subpoena, court order, government investigation), JAIC shall provide prompt notice to client (except where legally prohibited) permitting client opportunity to seek protective order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Termination */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">06</span>
              Termination
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-smoke/70 text-sm">
                Client may terminate engagement upon 5 business days written notice. JAIC may terminate engagement immediately if client materially breaches terms, provides misleading information, requests illegal activity, or if investigational integrity is compromised. Upon termination, JAIC shall deliver completed work and return client materials; outstanding fees remain due.
              </p>
            </div>
          </div>

          {/* 7. Amendments & Severability */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">07</span>
              Amendments & Severability
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-smoke/70 text-sm">
                These Terms may be amended only through written agreement signed by both parties. If any provision is found invalid or unenforceable, remaining provisions shall remain in full effect.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-12 border-t border-slate-100">
            <div className="bg-slate border border-slate-100 rounded-lg p-8">
              <h3 className="font-display font-semibold text-smoke mb-3 text-lg">
                Questions About These Terms?
              </h3>
              <p className="text-smoke/70 text-sm mb-6">
                Please contact JAIC directly for clarification regarding engagement terms or service limitations.
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
            Ready to proceed with an engagement?
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            Review our Privacy Policy and Compliance Framework, then initiate a confidential intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/legal/privacy" className="btn-secondary">
              Privacy Policy
            </Link>
            <Link href="/legal/compliance" className="btn-secondary">
              Compliance Framework
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
