'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    urgency: 'standard',
    subject: '',
    message: '',
    confidential: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration to be implemented
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. A representative will contact you within 24 hours. For urgent matters, please call our secure line.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-onyx pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="metadata-chip">CONTACT</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-smoke mb-6 leading-tight">
            Initiate Secure Contact
          </h1>
          <p className="text-xl lg:text-2xl text-smoke/70">
            All inquiries are handled with strict confidentiality. For matters requiring immediate attention, utilize our expedited intake process.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Formal Intake Process
            </h3>
            <p className="text-smoke/70 mb-4 text-sm">
              Comprehensive confidential intake for new matters with structured assessment and engagement planning.
            </p>
            <Link href="/intake/start" className="text-investigation-50 hover:text-investigation text-sm font-medium">
              Begin Intake →
            </Link>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Secure Voice Line
            </h3>
            <p className="text-smoke/70 mb-4 text-sm">
              Encrypted telephone consultation for time-sensitive matters requiring immediate discussion.
            </p>
            <p className="text-investigation-50 font-technical text-sm">
              +1 (555) 0100-JAIC
            </p>
          </div>

          <div className="evidence-card">
            <div className="w-12 h-12 bg-investigation/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-smoke mb-2">
              Encrypted Messaging
            </h3>
            <p className="text-smoke/70 mb-4 text-sm">
              End-to-end encrypted communication for highly sensitive preliminary discussions.
            </p>
            <p className="text-investigation-50 font-technical text-sm">
              signal://jaic-secure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
              General Inquiry Form
            </h2>
            <p className="text-lg text-smoke/70 mb-6">
              For non-urgent inquiries or preliminary questions. All submissions are encrypted in transit and handled with appropriate confidentiality.
            </p>

            <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6 mb-6">
              <h3 className="font-display font-semibold text-smoke mb-3 text-lg flex items-center">
                <svg className="w-5 h-5 mr-2 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Security Notice
              </h3>
              <p className="text-smoke/70 text-sm">
                This form is suitable for general inquiries. For matters involving highly sensitive information, please use our formal intake process or encrypted communication channels.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h4 className="font-display font-semibold text-smoke mb-2 text-sm">
                  Response Timeline
                </h4>
                <p className="text-smoke/70 text-sm">
                  Standard inquiries: 24-48 hours. Urgent matters: Use phone line for same-day response.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-5">
                <h4 className="font-display font-semibold text-smoke mb-2 text-sm">
                  Office Location
                </h4>
                <p className="text-smoke/70 text-sm">
                  Suite 1200, 425 Federal Plaza<br />
                  [City], [State] [ZIP]<br />
                  By appointment only
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate border border-slate-100 rounded-lg p-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-smoke mb-2">
                  Full Name <span className="text-investigation-50">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-smoke mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="Company or firm name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-smoke mb-2">
                  Email Address <span className="text-investigation-50">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-smoke mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Urgency Level */}
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-smoke mb-2">
                  Matter Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                >
                  <option value="standard">Standard (5-7 business days)</option>
                  <option value="priority">Priority (2-3 business days)</option>
                  <option value="urgent">Urgent (24-48 hours)</option>
                  <option value="critical">Critical (Same day - use phone)</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-smoke mb-2">
                  Subject <span className="text-investigation-50">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="Brief description of inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-smoke mb-2">
                  Message <span className="text-investigation-50">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-onyx border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent resize-none"
                  placeholder="Provide details about your inquiry. Do not include highly sensitive information in this form."
                />
              </div>

              {/* Confidentiality Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confidential"
                  name="confidential"
                  checked={formData.confidential}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 bg-onyx border-slate-100 rounded focus:ring-investigation-50"
                />
                <label htmlFor="confidential" className="ml-3 text-sm text-smoke/70">
                  I understand that this inquiry will be handled confidentially and that JAIC will not disclose my contact without authorization.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Submit Inquiry
              </button>

              <p className="text-xs text-smoke/60 text-center">
                By submitting this form, you acknowledge JAIC's confidentiality protocols and consent to contact regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-container border-t border-slate-100 bg-slate-200/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-smoke mb-6">
            Prefer a Different Channel?
          </h2>
          <p className="text-lg text-smoke/70 mb-8">
            JAIC offers multiple secure communication options tailored to your confidentiality requirements and matter urgency.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/intake/start" className="evidence-card group text-left hover:border-investigation transition-colors">
              <h3 className="font-display font-semibold text-smoke mb-2">
                Formal Intake Process
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Structured confidential intake for complex matters requiring comprehensive assessment.
              </p>
              <span className="text-investigation-50 hover:text-investigation text-sm font-medium">
                Start Intake Process →
              </span>
            </Link>

            <div className="evidence-card text-left">
              <h3 className="font-display font-semibold text-smoke mb-2">
                Schedule Consultation
              </h3>
              <p className="text-smoke/70 text-sm mb-4">
                Book a confidential consultation to discuss your matter with an investigational specialist.
              </p>
              <span className="text-investigation-50 text-sm font-medium">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
