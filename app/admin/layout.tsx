/**
 * JAIC Admin Layout
 * Dark theme navigation and layout for admin dashboard
 */

import Link from 'next/link';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Admin Navigation Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800 fixed left-0 top-0">
          {/* Logo/Header */}
          <div className="p-6 border-b border-gray-800">
            <Link href="/admin" className="block">
              <h1 className="text-xl font-bold text-gray-100">JAIC Admin</h1>
              <p className="text-xs text-gray-400 mt-1">Case Management</p>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            <NavLink href="/admin" icon="📊">
              Dashboard
            </NavLink>
            <NavLink href="/admin/cases" icon="📁">
              Cases
            </NavLink>
            <NavLink href="/admin/evidence" icon="🔒">
              Evidence
            </NavLink>
            <NavLink href="/admin/analytics" icon="📈">
              Analytics
            </NavLink>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
            <div className="text-xs text-gray-500">
              <p>Admin User</p>
              <Link href="/" className="text-gray-400 hover:text-gray-200 transition-colors">
                Return to Site
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  icon: string;
  children: ReactNode;
}

function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-gray-100 rounded-lg transition-colors group"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}
