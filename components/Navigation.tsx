'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Forensic Investigations', href: '/services/forensic-investigations' },
        { name: 'Corporate Due Diligence', href: '/services/corporate-due-diligence' },
        { name: 'Regulatory Analysis', href: '/services/regulatory-analysis' },
        { name: 'Litigation Support', href: '/services/litigation-support' },
        { name: 'AI Risk Intelligence', href: '/services/ai-risk-intelligence' },
      ],
    },
    { name: 'Case Domains', href: '/case-domains' },
    { name: 'Methodology', href: '/methodology' },
    { name: 'Governance', href: '/governance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-onyx/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-investigation rounded-lg flex items-center justify-center">
              <span className="text-smoke font-display font-bold text-lg">JA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-smoke font-display font-semibold text-sm leading-none">
                Jonathan Anderson
              </span>
              <span className="text-smoke/60 font-technical text-xs leading-none mt-1">
                INVESTIGATIONAL CORP.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-smoke/80 hover:text-smoke transition-colors rounded-lg hover:bg-slate-50"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-slate border border-slate-100 rounded-lg shadow-investigation p-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-smoke/80 hover:text-smoke hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/intake/start"
              id="cta-intake-001"
              className="ml-4 btn-primary"
            >
              Confidential Intake
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-smoke hover:bg-slate-50 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-1">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-smoke/80 hover:text-smoke hover:bg-slate-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-smoke/60 hover:text-smoke hover:bg-slate-50 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/intake/start"
              className="block mt-4 btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Confidential Intake
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
