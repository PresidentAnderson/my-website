'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ConfirmationClient() {
  const [caseNumber, setCaseNumber] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    // Generate a case number based on timestamp and random values
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 6).toUpperCase();
    setCaseNumber(`JAIC-${timestamp}-${random}`);

    // Get email from intake data
    const data = sessionStorage.getItem('intakeData');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setSubmittedEmail(parsed.email || '');
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Progress Bar - Complete */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="w-full bg-slate rounded-full h-2">
            <div className="bg-investigation-50 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon & Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-investigation/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-4 leading-tight">
              Intake Submitted Successfully
            </h1>
            <p className="text-xl lg:text-2xl text-smoke/70 mb-8">
              Your formal intake has been received and will be reviewed by our investigational team.
            </p>

            {/* Case Number */}
            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-8 mb-8">
              <p className="text-sm text-smoke/70 mb-2">Your Case Reference Number</p>
              <p className="font-technical text-3xl font-bold text-investigation-50 break-all">
                {caseNumber}
              </p>
              <p className="text-xs text-smoke/60 mt-3">
                Please save this number for your records. Use it in all future communications regarding this matter.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-slate border border-slate-100 rounded-lg p-8">
              <h2 className="text-2xl font-display font-semibold text-smoke mb-6 text-left">
                What Happens Next
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-investigation-50">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-smoke">Initial Review</h3>
                    <p className="text-sm text-smoke/70 mt-1">
                      Your intake will be reviewed by our investigational team within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-investigation-50">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-smoke">Feasibility Assessment</h3>
                    <p className="text-sm text-smoke/70 mt-1">
                      We will assess the investigational scope, resource requirements, and timeline for your matter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-investigation-50">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-smoke">Contact & Proposal</h3>
                    <p className="text-sm text-smoke/70 mt-1">
                      You will be contacted at {submittedEmail || 'your provided email'} with our assessment and proposed engagement structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-investigation-50">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-smoke">Engagement Agreement</h3>
                    <p className="text-sm text-smoke/70 mt-1">
                      For matters approved to proceed, we will finalize terms, confidentiality agreements, and engagement protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-investigation/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-investigation-50">5</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-smoke">Investigation Begins</h3>
                    <p className="text-sm text-smoke/70 mt-1">
                      Upon engagement, our investigators will commence work according to the agreed scope and timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-onyx border border-slate-100 rounded-lg p-6">
            <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Response Timeline
            </h3>
            <p className="text-sm text-smoke/70">
              We aim to contact you within 24 hours for routine intakes. For time-sensitive matters, please call our secure line at
              <span className="block font-technical mt-2 text-smoke">+1 (555) 0100-JAIC</span>
            </p>
          </div>

          <div className="bg-onyx border border-slate-100 rounded-lg p-6">
            <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Confidentiality Assurance
            </h3>
            <p className="text-sm text-smoke/70">
              Your submission and all related communications are protected under attorney-client privilege and JAIC's strict confidentiality protocols.
            </p>
          </div>

          <div className="bg-onyx border border-slate-100 rounded-lg p-6">
            <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure Communication
            </h3>
            <p className="text-sm text-smoke/70">
              For sensitive follow-up discussions, you may request encrypted communication through email, secure phone lines, or Signal.
            </p>
          </div>

          <div className="bg-onyx border border-slate-100 rounded-lg p-6">
            <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Additional Documentation
            </h3>
            <p className="text-sm text-smoke/70">
              You may submit additional documents, communications, or evidence after intake submission. Reference your case number.
            </p>
          </div>
        </div>
      </section>

      {/* Return to Contact */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-smoke/70 mb-8">
              Thank you for choosing JAIC for your investigational needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Return to Contact
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>

            <p className="text-xs text-smoke/60 mt-8">
              Have questions? Contact our team at{' '}
              <span className="font-technical">inquiries@jaic.corp</span> or call{' '}
              <span className="font-technical">+1 (555) 0100-JAIC</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
