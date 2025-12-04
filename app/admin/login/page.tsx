/**
 * JAIC Admin Login Page
 * Simple password authentication (for development)
 * TODO: Replace with proper authentication system in production
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // In production, this would call an authentication API
      // For now, simple client-side check
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push('/admin');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">JAIC Admin</h1>
          <p className="text-gray-400">Case Management System</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-gray-900 border border-gray-800 rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter admin password"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {/* Development Notice */}
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-xs text-yellow-400">
            <strong>Development Mode:</strong> Authentication is currently disabled for development.
            In production, this will require proper credentials and session management.
          </p>
        </div>

        {/* Back to Site */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
            ← Return to Site
          </Link>
        </div>
      </div>
    </div>
  );
}
