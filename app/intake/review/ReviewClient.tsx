'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface IntakeData {
  firstName?: string;
  lastName?: string;
  organization?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  preferredContact?: string;
  caseType?: string;
  narrative?: string;
  objectives?: string;
  files?: Array<{ name: string; size: number; type: string }>;
  fileCount?: number;
}

const caseTypeLabels: { [key: string]: string } = {
  'forensic-accounting': 'Forensic Accounting & Financial Fraud',
  'corporate-due-diligence': 'Corporate Due Diligence',
  'litigation-support': 'Litigation Support & Discovery',
  'intellectual-property': 'Intellectual Property & Trade Secrets',
  'regulatory-compliance': 'Regulatory Compliance & Breach',
  'background-investigation': 'Background & Reputational Investigation',
  'employee-investigation': 'Employee Misconduct Investigation',
  'other': 'Other / Complex Multi-Domain',
};

export default function ReviewClient() {
  const [intakeData, setIntakeData] = useState<IntakeData | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('intakeData');
    if (data) {
      setIntakeData(JSON.parse(data));
    }
  }, []);

  const handleSubmit = () => {
    // In production, submit to backend API
    console.log('Submitting intake:', intakeData);
    sessionStorage.setItem('intakeData', JSON.stringify(intakeData));
    window.location.href = '/intake/confirmation';
  };

  if (!intakeData) {
    return (
      <div className="bg-onyx pt-20 pb-20">
        <section className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-smoke/70">Loading intake data...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Header */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="metadata-chip">STEP 6 OF 7</span>
          </div>
          <h1 className="text-5xl lg:text-4xl font-display font-bold text-smoke mb-6 leading-tight">
            Review & Confirm
          </h1>
          <p className="text-xl text-smoke/70">
            Please review your submitted information. You can edit any section by clicking the edit link.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-slate rounded-full h-2 mb-8">
            <div
              className="bg-investigation-50 h-2 rounded-full transition-all duration-300"
              style={{ width: '85.7%' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Review Sections */}
      <section className="section-container border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Identity Section */}
          <div className="bg-slate border border-slate-100 rounded-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-display font-semibold text-smoke">
                Identity & Contact
              </h2>
              <Link href="/intake/identity" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Edit
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-smoke/60 mb-1">Full Name</p>
                <p className="text-smoke font-medium">
                  {intakeData.firstName} {intakeData.lastName}
                </p>
              </div>
              <div>
                <p className="text-xs text-smoke/60 mb-1">Organization</p>
                <p className="text-smoke font-medium">
                  {intakeData.organization || '(Not provided)'}
                </p>
              </div>
              <div>
                <p className="text-xs text-smoke/60 mb-1">Job Title</p>
                <p className="text-smoke font-medium">
                  {intakeData.jobTitle || '(Not provided)'}
                </p>
              </div>
              <div>
                <p className="text-xs text-smoke/60 mb-1">Email</p>
                <p className="text-smoke font-medium break-all">
                  {intakeData.email}
                </p>
              </div>
              <div>
                <p className="text-xs text-smoke/60 mb-1">Phone</p>
                <p className="text-smoke font-medium">
                  {intakeData.phone || '(Not provided)'}
                </p>
              </div>
              <div>
                <p className="text-xs text-smoke/60 mb-1">Preferred Contact</p>
                <p className="text-smoke font-medium capitalize">
                  {intakeData.preferredContact}
                </p>
              </div>
            </div>
          </div>

          {/* Case Type Section */}
          <div className="bg-slate border border-slate-100 rounded-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-display font-semibold text-smoke">
                Case Domain
              </h2>
              <Link href="/intake/case-type" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Edit
              </Link>
            </div>
            <p className="text-smoke font-medium">
              {caseTypeLabels[intakeData.caseType || 'other']}
            </p>
          </div>

          {/* Narrative Section */}
          <div className="bg-slate border border-slate-100 rounded-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-display font-semibold text-smoke">
                  Narrative Statement
                </h2>
                <p className="text-xs text-smoke/60 mt-1">
                  {(intakeData.narrative || '').split(/\s+/).filter(w => w).length} words
                </p>
              </div>
              <Link href="/intake/statement" className="text-investigation-50 hover:text-investigation text-sm font-medium flex-shrink-0">
                Edit
              </Link>
            </div>
            <div className="bg-onyx rounded p-4 mb-6 max-h-48 overflow-y-auto">
              <p className="text-smoke/70 whitespace-pre-wrap text-sm leading-relaxed">
                {intakeData.narrative}
              </p>
            </div>

            {intakeData.objectives && (
              <>
                <h3 className="text-lg font-display font-semibold text-smoke mb-3">
                  Investigational Objectives
                </h3>
                <div className="bg-onyx rounded p-4">
                  <p className="text-smoke/70 whitespace-pre-wrap text-sm leading-relaxed">
                    {intakeData.objectives}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Documents Section */}
          {intakeData.fileCount !== undefined && intakeData.fileCount > 0 && (
            <div className="bg-slate border border-slate-100 rounded-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-display font-semibold text-smoke">
                  Supporting Documentation
                </h2>
                <Link href="/intake/upload" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                  Edit
                </Link>
              </div>
              <div className="space-y-2">
                {intakeData.files?.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-onyx rounded p-3">
                    <div className="flex items-center flex-1 min-w-0">
                      <svg className="w-4 h-4 text-investigation-50 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm text-smoke truncate">
                        {file.name}
                      </span>
                    </div>
                    <span className="text-xs text-smoke/60 ml-2 flex-shrink-0">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-smoke/60 mt-4">
                {intakeData.fileCount} file(s) uploaded
              </p>
            </div>
          )}

          {intakeData.fileCount === 0 && (
            <div className="bg-slate border border-slate-100 rounded-lg p-8">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-display font-semibold text-smoke">
                  Supporting Documentation
                </h2>
                <Link href="/intake/upload" className="text-investigation-50 hover:text-investigation text-sm font-medium">
                  Edit
                </Link>
              </div>
              <p className="text-smoke/70 mt-4">
                No documents uploaded. You can provide supporting materials later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submission Notice */}
      <section className="section-container border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
            <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ready to Submit?
            </h3>
            <p className="text-smoke/70 text-sm mb-4">
              By submitting this intake, you confirm that the information provided is accurate and complete to the best of your knowledge.
              A JAIC investigational analyst will review your submission within 24 hours and contact you regarding next steps.
            </p>
            <p className="text-smoke/70 text-sm">
              All information submitted is protected under attorney-client privilege and JAIC confidentiality protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container bg-slate-200/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/intake/upload" className="btn-secondary">
            ← Previous
          </Link>
          <button onClick={handleSubmit} className="btn-primary">
            Submit Intake →
          </button>
        </div>
      </section>
    </div>
  );
}
