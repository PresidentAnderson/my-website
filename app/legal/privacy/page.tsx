import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Data collection, evidence handling, encryption standards, and retention policies for JAIC investigational services.',
  keywords: ['privacy policy', 'data protection', 'evidence handling', 'encryption', 'chain of custody', 'data retention'],
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">LEGAL</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            Data collection, protection, evidence handling, and retention practices for JAIC investigational services.
          </p>
          <p className="text-sm text-smoke/50 mt-8 font-technical">
            Last Updated: December 2024 • Effective for all engagements
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl space-y-12">

          {/* 1. Investigational Data Collection */}
          <div>
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">01</span>
              Investigational Data Collection
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                During investigational engagements, JAIC collects and processes information, documents, communications, and evidentiary materials necessary to fulfill engagement scope. Data collection occurs only within scope explicitly defined in engagement documentation.
              </p>

              <div className="bg-slate border border-slate-100 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Types of Data Collected
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    • Client identification and contact information<br />
                    • Engagement scope and objectives<br />
                    • Documents, records, and communications provided by client<br />
                    • Evidence obtained through authorized investigational means<br />
                    • Interview notes and witness statements<br />
                    • Digital communications and metadata<br />
                    • Billing and engagement administration records
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Authorized Sources
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC collects information from client-provided materials, publicly available sources, and sources accessed through lawful investigational means. Clients warrant all information provided has been lawfully obtained and provided to JAIC with proper authority. JAIC assumes no responsibility for information illegality.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Scope Limitation
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Data collection is strictly limited to scope defined in engagement. Requests to expand data collection beyond scope require amended engagement. JAIC reserves right to decline data collection requests if legality or propriety is questionable.
                  </p>
                </div>
              </div>

              <p className="text-sm text-smoke/60 italic mt-6">
                All investigational activities are conducted consistent with applicable laws and professional investigational standards.
              </p>
            </div>
          </div>

          {/* 2. Evidence Handling & Chain of Custody */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">02</span>
              Evidence Handling & Chain of Custody
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains forensic-grade chain of custody protocols for all evidentiary materials. These protocols ensure evidence integrity, authenticity, and defensibility in legal or regulatory proceedings.
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2 text-investigation-50">
                    Documentation Protocol
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    All evidence is documented upon receipt with date, time, source, description, and custody transfer details. Digital evidence includes metadata preservation, file integrity verification (MD5/SHA hashing), and access logs. Physical evidence is photographed, catalogued, and stored in secure facilities.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Custody Transfer
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Any transfer of evidence custody is documented with receiving party name, date, time, and transfer conditions. All transfers are logged in evidence management system. Unauthorized possession or handling of evidence compromises chain of custody.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Digital Evidence
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Digital evidence is processed in forensically sound manner. Original files are never modified; forensic copies are created for analysis. Write-blocking technology is employed. Metadata including modification dates, access logs, and user information is preserved. All digital processing is documented.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Storage & Security
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Evidence is stored in physically secure facility with restricted access, environmental controls, and surveillance. Access logs track all personnel accessing evidence. Storage conditions maintain evidence integrity and prevent contamination or degradation.
                  </p>
                </div>
              </div>

              <p className="text-sm text-smoke/80 leading-relaxed mt-6">
                <span className="font-display font-semibold text-smoke">Examination & Analysis:</span> Any examination or analysis of evidence is conducted by qualified personnel with documented training. Examination notes are detailed and contemporaneous. Findings are traceable to specific evidence through chain of custody documentation.
              </p>
            </div>
          </div>

          {/* 3. Data Security & Encryption */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">03</span>
              Data Security & Encryption
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC implements industry-standard security measures protecting investigational data from unauthorized access, disclosure, or modification.
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-display font-semibold text-smoke mb-2 text-investigation-50">
                    Encryption Standards
                  </h3>
                  <div className="bg-slate border border-slate-100 rounded-lg p-4 space-y-3 text-sm">
                    <p className="text-smoke/70">
                      <span className="font-semibold text-smoke">Data in Transit:</span> All client communications, file transfers, and remote access utilize TLS 1.2 or higher encryption with 256-bit symmetric encryption. Email communications containing investigational data are encrypted end-to-end.
                    </p>
                    <p className="text-smoke/70">
                      <span className="font-semibold text-smoke">Data at Rest:</span> Investigational files, evidence, and databases are encrypted using AES-256 encryption. Encryption keys are managed through secure key management system with restricted access. Backup systems maintain encryption equivalent to production systems.
                    </p>
                    <p className="text-smoke/70">
                      <span className="font-semibold text-smoke">Database Security:</span> Databases are encrypted, access-controlled, and monitored for unauthorized access attempts. Database authentication requires multi-factor authentication. Query logging tracks all data access.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Access Control
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Access to investigational data is restricted to authorized personnel with legitimate business need. Access is granted on principle of least privilege (minimum access necessary to perform duties). Multi-factor authentication is required for access to sensitive systems. Access permissions are reviewed quarterly and revoked upon termination.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Intrusion Detection & Monitoring
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Network monitoring systems detect and alert on suspicious activity. Intrusion detection systems monitor for unauthorized access attempts. System logs are maintained and reviewed for security incidents. Suspicious activity triggers investigation and incident response protocols.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Incident Response
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    JAIC maintains incident response plan addressing unauthorized access, data breach, or security compromise. Upon discovery of breach, JAIC will notify affected clients within 72 hours, conduct investigation, take remedial action, and provide regular updates. Notification will specify scope, impact, and protective measures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Data Retention & Deletion */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">04</span>
              Data Retention & Deletion
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC maintains investigational files and evidence according to retention schedule specified in engagement. Data is securely deleted upon expiration of retention period unless legal hold or regulatory requirement applies.
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-slate border border-slate-100 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Default Retention Schedule
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    <span className="font-semibold text-smoke">Active Engagement:</span> All data is retained during investigational engagement and for 90 days following engagement completion or termination.<br /><br />
                    <span className="font-semibold text-smoke">Post-Engagement:</span> Final investigational reports are retained for 7 years unless client requests longer retention. Working files and notes are deleted after 90 days unless client purchases extended retention.<br /><br />
                    <span className="font-semibold text-smoke">Litigation Hold:</span> If litigation is pending or reasonably anticipated, data is retained for duration of litigation or regulatory investigation.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4 mt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Secure Deletion
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Upon deletion, data is overwritten using NIST-approved algorithms or physically destroyed if on hardware. Deletion is documented with date and method. Digital evidence is deleted only upon client authorization or retention period expiration. No data is recovered or restored after deletion.
                  </p>
                </div>

                <div className="bg-slate border border-slate-100 rounded-lg p-4 mt-4">
                  <h3 className="font-display font-semibold text-smoke mb-2">
                    Extended Retention
                  </h3>
                  <p className="text-smoke/70 text-sm">
                    Clients may request extended retention of investigational files beyond default schedule. Extended retention requires additional fee and documented retention agreement. Client bears responsibility for any extended retention periods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Third-Party Data Sharing */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">05</span>
              Third-Party Data Sharing
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-lg text-smoke/80 leading-relaxed">
                JAIC does not share investigational data with third parties except as follows:
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">A</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Client Authorization
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      Data is shared with third parties only with explicit written authorization specifying recipient, scope, and limitations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">B</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Subcontractors & Service Providers
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      JAIC may engage subcontractors (forensic experts, translators, technical specialists) to provide investigational services. Subcontractors execute confidentiality agreements equivalent to JAIC standards. JAIC remains responsible for subcontractor data handling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">C</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Legal Compulsion
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      JAIC may disclose data if legally required by subpoena, court order, government investigation, or law. JAIC provides notice to client (unless prohibited by law) permitting client opportunity to seek protective order.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <span className="text-investigation-50 font-bold text-sm mr-3 bg-slate rounded px-2 py-1">D</span>
                  <div>
                    <h3 className="font-display font-semibold text-smoke">
                      Legal/Regulatory Obligation
                    </h3>
                    <p className="text-smoke/70 text-sm">
                      JAIC may disclose data if necessary to comply with law, prevent illegal activity, or protect rights, safety, or property.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-smoke/60 italic mt-6">
                JAIC does not sell, rent, or trade investigational data. Client identity is protected from public disclosure.
              </p>
            </div>
          </div>

          {/* 6. Client Privacy Rights */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">06</span>
              Client Privacy Rights
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-smoke/70 text-sm leading-relaxed">
                Clients have the right to:
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">
                    <span className="font-semibold text-smoke">Access:</span> Request access to investigational files and evidence subject to legal limitations and work product protections
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">
                    <span className="font-semibold text-smoke">Correction:</span> Request correction of inaccurate personal information in investigational records
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">
                    <span className="font-semibold text-smoke">Deletion:</span> Request deletion of personal information after engagement completion (subject to legal hold)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">
                    <span className="font-semibold text-smoke">Portability:</span> Request that investigational data be provided in portable format
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-investigation-50 mr-3">•</span>
                  <p className="text-smoke/70 text-sm">
                    <span className="font-semibold text-smoke">Confidentiality:</span> Maintain confidentiality of investigational engagement and findings
                  </p>
                </div>
              </div>

              <p className="text-sm text-smoke/80 leading-relaxed mt-6">
                Requests should be submitted in writing to JAIC contact. JAIC shall respond within 30 days or provide timeline for response if request requires substantial effort.
              </p>
            </div>
          </div>

          {/* 7. Privacy Complaints */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">07</span>
              Privacy Complaints & Inquiries
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-smoke/70 text-sm leading-relaxed">
                Clients with privacy concerns, complaints, or inquiries should contact JAIC directly. JAIC will investigate complaints and respond within 30 days. If dissatisfied with JAIC response, clients may file complaint with Office of the Privacy Commissioner of Canada (OPCC) or applicable provincial privacy regulator.
              </p>
            </div>
          </div>

          {/* 8. Policy Updates */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-display font-bold text-smoke mb-4 flex items-start">
              <span className="text-investigation-50 mr-3 text-2xl">08</span>
              Policy Updates
            </h2>
            <div className="ml-10 space-y-4">
              <p className="text-smoke/70 text-sm leading-relaxed">
                JAIC may update this Privacy Policy to reflect changes in practices, technology, or legal requirements. Significant changes will be communicated to clients. Continued engagement constitutes acceptance of updated policy.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-12 border-t border-slate-100">
            <div className="bg-slate border border-slate-100 rounded-lg p-8">
              <h3 className="font-display font-semibold text-smoke mb-3 text-lg">
                Privacy Questions or Concerns?
              </h3>
              <p className="text-smoke/70 text-sm mb-6">
                Contact JAIC directly to discuss privacy practices, data handling, or submit access or deletion requests.
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
            Understand our comprehensive legal framework
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            Review our Terms of Service and Compliance Framework to fully understand our investigational standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/legal/terms" className="btn-secondary">
              Terms of Service
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
