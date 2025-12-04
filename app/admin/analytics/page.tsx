/**
 * JAIC Admin - Analytics Page
 * Case statistics, domain distribution, monthly trends, and resolution metrics
 */

'use client';

import { useEffect, useState } from 'react';
import { CaseStatistics } from '@/lib/types';
import { getCaseDomainLabel } from '@/lib/case-number';

export default function AnalyticsPage() {
  const [stats, setStats] = useState<CaseStatistics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatistics();
  }, []);

  async function fetchStatistics() {
    setLoading(true);
    try {
      const response = await fetch('/api/statistics');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching statistics:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">Loading analytics...</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">No analytics data available</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Analytics</h1>
        <p className="text-gray-400 mt-2">Case insights and performance metrics</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Cases" value={stats.total} color="blue" />
        <StatCard
          label="Avg Resolution Time"
          value={`${stats.averageResolutionTime} days`}
          color="green"
        />
        <StatCard
          label="Active Cases"
          value={
            (stats.byStatus.NEW || 0) +
            (stats.byStatus.IN_PROGRESS || 0) +
            (stats.byStatus.UNDER_REVIEW || 0)
          }
          color="yellow"
        />
        <StatCard
          label="Closed Cases"
          value={stats.byStatus.CLOSED || 0}
          color="purple"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cases by Status */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">Cases by Status</h2>
          <div className="space-y-4">
            {Object.entries(stats.byStatus).map(([status, count]) => {
              const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
              return (
                <div key={status}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{status.replace('_', ' ')}</span>
                    <span className="text-sm font-semibold text-gray-200">
                      {count} ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cases by Priority */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">Cases by Priority</h2>
          <div className="space-y-4">
            {Object.entries(stats.byPriority).map(([priority, count]) => {
              const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
              const color = getPriorityColor(priority);
              return (
                <div key={priority}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{priority}</span>
                    <span className="text-sm font-semibold text-gray-200">
                      {count} ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`${color} h-2 rounded-full transition-all`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cases by Domain */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-6">Cases by Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(stats.byDomain).map(([domain, count]) => {
            const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
            return (
              <div key={domain} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-300">
                    {getCaseDomainLabel(domain as any)}
                  </h3>
                  <span className="text-lg font-bold text-gray-100">{count}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{percentage.toFixed(1)}% of total</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly Intake Trends */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-6">Monthly Intake Trends</h2>
        <div className="space-y-4">
          {stats.monthlyIntake.map((month) => {
            const maxCount = Math.max(...stats.monthlyIntake.map((m) => m.count), 1);
            const percentage = (month.count / maxCount) * 100;
            return (
              <div key={month.month}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">
                    {new Date(month.month).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </span>
                  <span className="text-sm font-semibold text-gray-200">{month.count} cases</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Insights */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Key Insights</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            • {stats.total} cases managed across {Object.keys(stats.byDomain).length} investigation
            domains
          </p>
          <p>
            • Average resolution time of {stats.averageResolutionTime} days for closed cases
          </p>
          <p>
            • {((stats.byStatus.CLOSED || 0) / stats.total * 100).toFixed(1)}% case closure rate
          </p>
          <p>
            • Most active domain:{' '}
            {Object.entries(stats.byDomain).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number | string;
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

function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    LOW: 'bg-gray-500',
    MEDIUM: 'bg-blue-500',
    HIGH: 'bg-orange-500',
    URGENT: 'bg-red-500',
  };
  return colors[priority] || 'bg-gray-500';
}
