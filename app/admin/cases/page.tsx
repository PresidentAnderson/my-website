/**
 * JAIC Admin - Cases List
 * Full case list with filters, search, sort, and pagination
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Case, CaseStatus, CaseDomain, CasePriority } from '@/lib/types';

export default function CasesListPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Filters
  const [statusFilter, setStatusFilter] = useState<CaseStatus[]>([]);
  const [domainFilter, setDomainFilter] = useState<CaseDomain[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCases();
  }, [page, statusFilter, domainFilter, searchQuery]);

  async function fetchCases() {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: '20',
      });

      if (statusFilter.length > 0) {
        params.set('status', statusFilter.join(','));
      }

      if (domainFilter.length > 0) {
        params.set('domain', domainFilter.join(','));
      }

      if (searchQuery) {
        params.set('search', searchQuery);
      }

      const response = await fetch(`/api/cases?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setCases(data.data || []);
        setTotalPages(data.pagination.totalPages);
        setTotal(data.pagination.total);
      }
    } catch (error) {
      console.error('Error fetching cases:', error);
    } finally {
      setLoading(false);
    }
  }

  function toggleStatusFilter(status: CaseStatus) {
    setStatusFilter((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
    setPage(1);
  }

  function clearFilters() {
    setStatusFilter([]);
    setDomainFilter([]);
    setSearchQuery('');
    setPage(1);
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Cases</h1>
          <p className="text-gray-400 mt-2">
            {total} total case{total !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search by case number, title, or summary..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status Filters */}
        <div>
          <label className="text-sm font-medium text-gray-400 mb-2 block">
            Filter by Status
          </label>
          <div className="flex flex-wrap gap-2">
            {(['NEW', 'IN_PROGRESS', 'UNDER_REVIEW', 'CLOSED'] as CaseStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => toggleStatusFilter(status)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  statusFilter.includes(status)
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {status.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {(statusFilter.length > 0 || domainFilter.length > 0 || searchQuery) && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Cases Table */}
      {loading ? (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
          <p className="text-gray-400">Loading cases...</p>
        </div>
      ) : cases.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
          <p className="text-gray-400">No cases found</p>
          <p className="text-sm text-gray-500 mt-2">
            Try adjusting your filters or search query
          </p>
        </div>
      ) : (
        <>
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
                    Priority
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
                {cases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-300">
                      {caseItem.caseNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                      {caseItem.title}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={caseItem.status} />
                    </td>
                    <td className="px-6 py-4">
                      <PriorityBadge priority={caseItem.priority} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {caseItem.domain}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(caseItem.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 space-x-3">
                      <Link
                        href={`/admin/cases/${caseItem.id}`}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Page {page} of {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: CaseStatus }) {
  const statusStyles: Record<CaseStatus, string> = {
    NEW: 'bg-green-500/10 text-green-400 border-green-500/20',
    IN_PROGRESS: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    UNDER_REVIEW: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    CLOSED: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    ARCHIVED: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[status]}`}
    >
      {status.replace('_', ' ')}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: CasePriority }) {
  const priorityStyles: Record<CasePriority, string> = {
    LOW: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    MEDIUM: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    HIGH: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    URGENT: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${priorityStyles[priority]}`}
    >
      {priority}
    </span>
  );
}
