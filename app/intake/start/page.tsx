import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'Formal Intake - Introduction',
  description: 'Begin the formal intake process for JAIC investigational services.',
};

export default function IntakeStart() {
  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="metadata-chip">FORMAL INTAKE</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Investigational Intake Process
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            A structured, confidential assessment of your matter. This process typically takes 10-15 minutes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Intro Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              About This Process
            </h2>
            <div className="space-y-6 text-smoke/70">
              <p>
                The formal intake process allows JAIC to understand the scope, nature, and complexity of your matter.
                Your responses will be reviewed by our investigational team to determine feasibility, resource allocation,
                and appropriate engagement structure.
              </p>
              <p>
                You will be guided through seven sequential steps, collecting essential information about your case,
                your organization, and the nature of the investigation required. At the end, you will receive a comprehensive
                summary for review before formal submission.
              </p>
              <p>
                All information submitted through this process is encrypted in transit and at rest. JAIC maintains strict
                confidentiality protocols and will not disclose your contact information or case details without explicit authorization.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <h3 className="text-2xl font-display font-semibold text-smoke mb-6">
                Process Steps
              </h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Introduction', status: 'current' },
                  { step: 2, title: 'Identity & Contact', status: 'upcoming' },
                  { step: 3, title: 'Case Domain', status: 'upcoming' },
                  { step: 4, title: 'Narrative Statement', status: 'upcoming' },
                  { step: 5, title: 'Evidence Upload', status: 'upcoming' },
                  { step: 6, title: 'Review & Confirm', status: 'upcoming' },
                  { step: 7, title: 'Submission Complete', status: 'upcoming' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`flex items-start p-4 rounded-lg border ${
                      item.status === 'current'
                        ? 'bg-investigation/10 border-investigation-50'
                        : 'bg-slate border-slate-100'
                    }`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 flex-shrink-0 ${
                      item.status === 'current'
                        ? 'bg-investigation-50 text-onyx font-bold'
                        : 'bg-slate-100 text-smoke/70'
                    }`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-smoke">
                        {item.title}
                      </h4>
                      {item.status === 'current' && (
                        <p className="text-xs text-investigation-50 mt-1">You are here</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Important Disclaimers */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Privacy Notice */}
              <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3 text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Privacy & Confidentiality
                </h3>
                <p className="text-smoke/70 text-sm">
                  All submitted information is protected under attorney-client privilege and JAIC confidentiality protocols.
                  Your data will not be shared without authorization.
                </p>
              </div>

              {/* Sensitive Information Warning */}
              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3 text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M6.25 6v12c0 .414.336.75.75.75h10c.414 0 .75-.336.75-.75V6M9 3h6m0 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H9zm0 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008A.75.75 0 009 3z" />
                  </svg>
                  Sensitive Information
                </h3>
                <p className="text-smoke/70 text-sm">
                  While this intake is confidential, avoid including names of unvetted subjects or highly sensitive privileged
                  communications in the narrative. You may use placeholders and provide details separately via secure channels.
                </p>
              </div>

              {/* Required Fields Notice */}
              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  What You'll Need
                </h3>
                <ul className="text-smoke/70 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Your name and contact information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Organization affiliation (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>High-level case description</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Supporting documents (optional)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-smoke mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            By proceeding, you acknowledge that you have reviewed the privacy notice and understand JAIC's confidentiality protocols.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake/identity" className="btn-primary">
              Begin Intake Process
            </Link>
            <Link href="/contact" className="btn-secondary">
              Return to Contact
            </Link>
          </div>

          <p className="text-xs text-smoke/60 mt-8">
            This is a formal intake process. For general inquiries, please use our standard contact form.
          </p>
        </div>
      </section>
    </div>
  );
}
