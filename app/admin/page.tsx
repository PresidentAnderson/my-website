/**
 * JAIC Admin Dashboard - Overview
 * Main dashboard with statistics and recent activity
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Case, CaseStatistics } from '@/lib/types';

export default function AdminDashboard() {
  const [stats, setStats] = useState<CaseStatistics | null>(null);
  const [recentCases, setRecentCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    try {
      // Fetch statistics
      const statsRes = await fetch('/api/statistics');
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      // Fetch recent cases
      const casesRes = await fetch('/api/cases?pageSize=5');
      if (casesRes.ok) {
        const casesData = await casesRes.json();
        setRecentCases(casesData.data || []);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
        <p className="text-gray-400 mt-2">Overview of case management system</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Cases"
          value={stats?.total || 0}
          color="blue"
        />
        <StatCard
          label="New Cases"
          value={stats?.byStatus?.NEW || 0}
          color="green"
        />
        <StatCard
          label="In Progress"
          value={stats?.byStatus?.IN_PROGRESS || 0}
          color="yellow"
        />
        <StatCard
          label="Under Review"
          value={stats?.byStatus?.UNDER_REVIEW || 0}
          color="purple"
        />
      </div>

      {/* Recent Cases */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-100">Recent Cases</h2>
          <Link
            href="/admin/cases"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Cases →
          </Link>
        </div>

        {recentCases.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">No cases found</p>
            <p className="text-sm text-gray-500 mt-2">
              Cases will appear here once intake submissions are received
            </p>
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Case Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Domain
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {recentCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-300">
                      {caseItem.caseNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {caseItem.title}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={caseItem.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {caseItem.domain}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(caseItem.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/cases/${caseItem.id}`}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      {stats && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* By Domain */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Cases by Domain</h3>
            <div className="space-y-3">
              {Object.entries(stats.byDomain).map(([domain, count]) => (
                <div key={domain} className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{domain}</span>
                  <span className="text-sm font-semibold text-gray-200">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* By Priority */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Cases by Priority</h3>
            <div className="space-y-3">
              {Object.entries(stats.byPriority).map(([priority, count]) => (
                <div key={priority} className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{priority}</span>
                  <span className="text-sm font-semibold text-gray-200">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  color: 'blue' | 'green' | 'yellow' | 'purple';
}

function StatCard({ label, value, color }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  };

  return (
    <div className={`border rounded-lg p-6 ${colorClasses[color]}`}>
      <p className="text-sm opacity-80">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusStyles: Record<string, string> = {
    NEW: 'bg-green-500/10 text-green-400 border-green-500/20',
    IN_PROGRESS: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    UNDER_REVIEW: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    CLOSED: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    ARCHIVED: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        statusStyles[status] || statusStyles.NEW
      }`}
    >
      {status.replace('_', ' ')}
    </span>
  );
}
