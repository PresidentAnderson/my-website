/**
 * JAIC Admin - Evidence Repository
 * View all evidence files across cases with integrity verification status
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Evidence } from '@/lib/types';

export default function EvidenceRepositoryPage() {
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchEvidence();
  }, []);

  async function fetchEvidence() {
    setLoading(true);
    try {
      const response = await fetch('/api/evidence');
      if (response.ok) {
        const data = await response.json();
        setEvidence(data);
      }
    } catch (error) {
      console.error('Error fetching evidence:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredEvidence = evidence.filter((ev) => {
    const matchesCategory = !categoryFilter || ev.category === categoryFilter;
    const matchesSearch =
      !searchQuery ||
      ev.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.caseNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Evidence Repository</h1>
        <p className="text-gray-400 mt-2">
          {evidence.length} evidence file{evidence.length !== 1 ? 's' : ''} across all cases
        </p>
      </div>

      {/* Filters */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search by filename or case number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium text-gray-400 mb-2 block">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategoryFilter('')}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                categoryFilter === ''
                  ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {['DOCUMENT', 'IMAGE', 'VIDEO', 'AUDIO', 'DATA', 'OTHER'].map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  categoryFilter === category
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Evidence List */}
      {loading ? (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
          <p className="text-gray-400">Loading evidence...</p>
        </div>
      ) : filteredEvidence.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
          <p className="text-gray-400">No evidence found</p>
          {(categoryFilter || searchQuery) && (
            <p className="text-sm text-gray-500 mt-2">
              Try adjusting your filters or search query
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredEvidence.map((ev) => (
            <div
              key={ev.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-100">{ev.originalName}</h3>
                    <CategoryBadge category={ev.category} />
                    {ev.integrityVerified ? (
                      <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded">
                        ✓ Verified
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded">
                        ⚠ Unverified
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4">
                    <div>
                      <label className="text-gray-500">Case Number</label>
                      <p className="text-gray-300 font-mono">{ev.caseNumber}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">File Type</label>
                      <p className="text-gray-300">{ev.fileType}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">File Size</label>
                      <p className="text-gray-300">{formatFileSize(ev.fileSize)}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">Uploaded</label>
                      <p className="text-gray-300">
                        {new Date(ev.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {ev.description && (
                    <div className="mt-3">
                      <label className="text-gray-500 text-sm">Description</label>
                      <p className="text-gray-300 text-sm">{ev.description}</p>
                    </div>
                  )}

                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <div>
                      <label className="text-gray-500">Chain of Custody Entries</label>
                      <p className="text-gray-300">
                        {ev.chainOfCustody?.length || 0} entries
                      </p>
                    </div>
                    <div>
                      <label className="text-gray-500">Last Verified</label>
                      <p className="text-gray-300">
                        {new Date(ev.lastVerified).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <Link
                    href={`/admin/cases/${ev.caseId}`}
                    className="text-sm px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-center"
                  >
                    View Case
                  </Link>
                  <button
                    onClick={() => {
                      // TODO: View chain of custody
                      console.log('View custody for:', ev.id);
                    }}
                    className="text-sm px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                  >
                    Chain of Custody
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const categoryStyles: Record<string, string> = {
    DOCUMENT: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    IMAGE: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    VIDEO: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    AUDIO: 'bg-green-500/10 text-green-400 border-green-500/20',
    DATA: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    OTHER: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded border ${
        categoryStyles[category] || categoryStyles.OTHER
      }`}
    >
      {category}
    </span>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
