'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StatementClient() {
  const [narrative, setNarrative] = useState('');
  const [objectives, setObjectives] = useState('');

  const handleNext = () => {
    if (!narrative.trim()) {
      alert('Please provide a narrative description of your matter');
      return;
    }
    // Save and navigate
    const existingData = JSON.parse(sessionStorage.getItem('intakeData') || '{}');
    const updatedData = { ...existingData, narrative, objectives };
    sessionStorage.setItem('intakeData', JSON.stringify(updatedData));
    window.location.href = '/intake/upload';
  };

  const wordCount = narrative.split(/\s+/).filter(w => w).length;

  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Header */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="metadata-chip">STEP 4 OF 7</span>
          </div>
          <h1 className="text-5xl lg:text-4xl font-display font-bold text-smoke mb-6 leading-tight">
            Narrative Statement
          </h1>
          <p className="text-xl text-smoke/70">
            Describe your matter in detail. Help us understand the situation, key events, and context.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-slate rounded-full h-2 mb-8">
            <div
              className="bg-investigation-50 h-2 rounded-full transition-all duration-300"
              style={{ width: '57%' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-container border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              {/* Primary Narrative */}
              <div>
                <label htmlFor="narrative" className="block text-sm font-medium text-smoke mb-2">
                  Narrative Description <span className="text-investigation-50">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="narrative"
                    name="narrative"
                    required
                    rows={12}
                    value={narrative}
                    onChange={(e) => setNarrative(e.target.value)}
                    className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent resize-none"
                    placeholder="Provide a comprehensive narrative of your matter. Include:
- Chronology of key events
- Relevant parties and relationships
- Specific concerns or allegations
- Context and background
- Any known facts or preliminary findings

Avoid overly sensitive details. You may use placeholders or provide specifics via secure channels."
                  />
                  <div className="mt-2 text-xs text-smoke/60 flex justify-between">
                    <span>Word count: {wordCount}</span>
                    <span className={wordCount < 50 ? 'text-amber-500' : ''}>
                      {wordCount < 50 && '(Recommended: 50+ words)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Investigational Objectives */}
              <div>
                <label htmlFor="objectives" className="block text-sm font-medium text-smoke mb-2">
                  Investigational Objectives
                </label>
                <textarea
                  id="objectives"
                  name="objectives"
                  rows={6}
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                  className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent resize-none"
                  placeholder="What specific outcomes or answers are you seeking? What questions do you need answered?

Examples:
- Determine whether funds were misappropriated
- Identify the source of leaked confidential information
- Assess counterparty credibility and financial stability"
                />
              </div>
            </form>
          </div>

          {/* Sidebar - Guidance */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  What to Include
                </h3>
                <ul className="text-smoke/70 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Timeline of events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Parties involved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Specific concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Relevant context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Known facts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sensitive Information
                </h3>
                <p className="text-smoke/70 text-sm">
                  Use placeholder names for sensitive parties. For example: "Party A", "Subject X", or "Company Beta". You can provide
                  specific identifiers via secure channels after initial assessment.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  Document Upload
                </h3>
                <p className="text-smoke/70 text-sm">
                  You'll have an opportunity to upload supporting documents in the next step. You don't need to include everything
                  in this narrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container bg-slate-200/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/intake/case-type" className="btn-secondary">
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
