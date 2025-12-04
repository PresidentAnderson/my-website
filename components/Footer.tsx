import Link from 'next/link';

const Footer = () => {
  const navigation = {
    services: [
      { name: 'Forensic Investigations', href: '/services/forensic-investigations' },
      { name: 'Corporate Due Diligence', href: '/services/corporate-due-diligence' },
      { name: 'Regulatory Analysis', href: '/services/regulatory-analysis' },
      { name: 'Litigation Support', href: '/services/litigation-support' },
      { name: 'AI Risk Intelligence', href: '/services/ai-risk-intelligence' },
    ],
    company: [
      { name: 'Case Domains', href: '/case-domains' },
      { name: 'Methodology', href: '/methodology' },
      { name: 'Governance', href: '/governance' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Engagement Protocol', href: '/legal/engagement' },
    ],
  };

  return (
    <footer className="bg-onyx border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
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
            <p className="text-smoke/60 text-sm mb-4 leading-relaxed">
              Evidence-driven analysis, corporate-grade rigor, and executive discernment for high-stakes matters.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 bg-slate border border-investigation-200 rounded-md">
              <span className="text-investigation-50 font-technical text-xs font-medium">
                Incorporated under private mandate
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-smoke font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-smoke/70 hover:text-investigation-50 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-smoke font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-smoke/70 hover:text-investigation-50 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <h3 className="text-smoke font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3 mb-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-smoke/70 hover:text-investigation-50 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <p className="text-smoke/60 text-sm">
                <span className="font-technical">Confidential Inquiries:</span>
              </p>
              <a
                href="mailto:intake@jaic.investigational"
                className="text-investigation-50 hover:text-investigation text-sm transition-colors"
              >
                intake@jaic.investigational
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-smoke/50 text-sm font-technical">
              &copy; {new Date().getFullYear()} Jonathan Anderson Investigational Corporation. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-smoke/40 text-xs font-technical uppercase tracking-wider">
                Investigation-Grade Intelligence
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
