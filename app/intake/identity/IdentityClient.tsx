'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function IdentityClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    jobTitle: '',
    email: '',
    phone: '',
    preferredContact: 'email',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    // In a real app, save to session/context and navigate
    sessionStorage.setItem('intakeData', JSON.stringify(formData));
    window.location.href = '/intake/case-type';
  };

  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Header */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="metadata-chip">STEP 2 OF 7</span>
          </div>
          <h1 className="text-5xl lg:text-4xl font-display font-bold text-smoke mb-6 leading-tight">
            Identity & Contact Details
          </h1>
          <p className="text-xl text-smoke/70">
            Help us understand who we're working with. All information is confidential.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-slate rounded-full h-2 mb-8">
            <div
              className="bg-investigation-50 h-2 rounded-full transition-all duration-300"
              style={{ width: '28.6%' }}
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
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-smoke mb-2">
                    First Name <span className="text-investigation-50">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-smoke mb-2">
                    Last Name <span className="text-investigation-50">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-smoke mb-2">
                  Organization or Firm
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="Company, law firm, or agency"
                />
              </div>

              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-smoke mb-2">
                  Job Title or Role
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="Your role or position"
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
                  className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
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
                  className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke placeholder-smoke/40 focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Preferred Contact */}
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-smoke mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate border border-slate-100 rounded-lg text-smoke focus:outline-none focus:ring-2 focus:ring-investigation-50 focus:border-transparent"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="both">Both (email and phone)</option>
                </select>
              </div>
            </form>
          </div>

          {/* Sidebar - Context */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  Why We Ask
                </h3>
                <p className="text-smoke/70 text-sm">
                  Understanding your identity and organizational context helps us assess the matter's complexity
                  and determine the appropriate investigational resources.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  Privacy Assurance
                </h3>
                <p className="text-smoke/70 text-sm">
                  Your contact information will only be used to communicate regarding this intake and any resulting
                  engagement. We will not share your details with third parties.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  Required Fields
                </h3>
                <ul className="text-smoke/70 text-sm space-y-2">
                  <li>• First and last name</li>
                  <li>• Email address</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container bg-slate-200/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/intake/start" className="btn-secondary">
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
