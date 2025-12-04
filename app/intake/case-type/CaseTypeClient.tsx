'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CaseTypeClient() {
  const [selectedCase, setSelectedCase] = useState('');

  const caseTypes = [
    {
      id: 'forensic-accounting',
      title: 'Forensic Accounting & Financial Fraud',
      description: 'Embezzlement, financial statement manipulation, hidden assets, misappropriation of funds, accounting irregularities.',
      icon: '📊',
    },
    {
      id: 'corporate-due-diligence',
      title: 'Corporate Due Diligence',
      description: 'M&A investigations, executive background checks, business relationship vetting, counterparty risk assessment.',
      icon: '🏢',
    },
    {
      id: 'litigation-support',
      title: 'Litigation Support & Discovery',
      description: 'Document analysis, witness interviewing, evidence preservation, litigation readiness, expert support.',
      icon: '⚖️',
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property & Trade Secrets',
      description: 'Trade secret theft, IP infringement investigation, competitive intelligence breach, employee misconduct.',
      icon: '🔐',
    },
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance & Breach',
      description: 'Regulatory investigation preparation, compliance audit, breach response, violation assessment.',
      icon: '📋',
    },
    {
      id: 'background-investigation',
      title: 'Background & Reputational Investigation',
      description: 'Executive screening, vendor vetting, reputational risk assessment, background verification.',
      icon: '🔍',
    },
    {
      id: 'employee-investigation',
      title: 'Employee Misconduct Investigation',
      description: 'Internal misconduct allegations, policy violations, harassment claims, termination documentation.',
      icon: '👤',
    },
    {
      id: 'other',
      title: 'Other / Complex Multi-Domain',
      description: 'Matters spanning multiple domains or not fitting standard categories. Please describe in next step.',
      icon: '✱',
    },
  ];

  const handleNext = () => {
    if (!selectedCase) {
      alert('Please select a case domain');
      return;
    }
    // Save selection and navigate
    const existingData = JSON.parse(sessionStorage.getItem('intakeData') || '{}');
    const updatedData = { ...existingData, caseType: selectedCase };
    sessionStorage.setItem('intakeData', JSON.stringify(updatedData));
    window.location.href = '/intake/statement';
  };

  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Header */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="metadata-chip">STEP 3 OF 7</span>
          </div>
          <h1 className="text-5xl lg:text-4xl font-display font-bold text-smoke mb-6 leading-tight">
            Case Domain Selection
          </h1>
          <p className="text-xl text-smoke/70">
            Select the primary investigational domain that best describes your matter.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-slate rounded-full h-2 mb-8">
            <div
              className="bg-investigation-50 h-2 rounded-full transition-all duration-300"
              style={{ width: '42.8%' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Case Selection Grid */}
      <section className="section-container border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {caseTypes.map((caseType) => (
              <label
                key={caseType.id}
                className={`relative cursor-pointer p-6 rounded-lg border-2 transition-all ${
                  selectedCase === caseType.id
                    ? 'bg-investigation/10 border-investigation-50'
                    : 'bg-slate border-slate-100 hover:border-investigation/50'
                }`}
              >
                <div className="flex items-start">
                  <input
                    type="radio"
                    name="caseType"
                    value={caseType.id}
                    checked={selectedCase === caseType.id}
                    onChange={(e) => setSelectedCase(e.target.value)}
                    className="mt-1 w-4 h-4 text-investigation focus:ring-investigation"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{caseType.icon}</span>
                      <h3 className="font-display font-semibold text-smoke">
                        {caseType.title}
                      </h3>
                    </div>
                    <p className="text-sm text-smoke/70">
                      {caseType.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6 mb-8">
            <h3 className="font-display font-semibold text-smoke mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Multiple Domains?
            </h3>
            <p className="text-smoke/70 text-sm">
              If your matter spans multiple domains or doesn't fit neatly into one category, select "Other / Complex Multi-Domain"
              and describe your matter in detail in the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container bg-slate-200/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/intake/identity" className="btn-secondary">
            ← Previous
          </Link>
          <button onClick={handleNext} className="btn-primary">
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
