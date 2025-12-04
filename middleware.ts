/**
 * JAIC Middleware - Admin Authentication
 * Simple password-based authentication for admin routes
 *
 * TODO: In production, replace with:
 * - NextAuth.js with proper session management
 * - Auth0 or similar OAuth provider
 * - Role-based access control (RBAC)
 * - Multi-factor authentication (MFA)
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply middleware to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for admin session cookie
    const adminAuth = request.cookies.get('jaic-admin-auth');

    // If not authenticated, redirect to login
    if (!adminAuth || adminAuth.value !== process.env.ADMIN_AUTH_TOKEN) {
      // For development, we'll allow access without auth
      // In production, uncomment the redirect below:

      // return NextResponse.redirect(new URL('/admin/login', request.url));

      console.log('Admin route accessed without auth - allowing for development');
    }
  }

  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: '/admin/:path*',
};
