import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Jonathan Anderson Investigational Corporation',
    template: '%s | JAIC',
  },
  description: 'Evidence-driven analysis, corporate-grade rigor, and executive discernment for high-stakes matters.',
  keywords: ['forensic investigation', 'corporate due diligence', 'regulatory analysis', 'litigation support', 'investigational services'],
  authors: [{ name: 'Jonathan Anderson Investigational Corporation' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jonathan Anderson Investigational Corporation',
    title: 'Jonathan Anderson Investigational Corporation',
    description: 'Investigational clarity for complex realities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
