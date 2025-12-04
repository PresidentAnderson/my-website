/**
 * JAIC Admin - Case Detail View
 * Detailed case view with evidence, chain of custody, notes, and status management
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Case, Evidence, CaseNote, CaseStatus, CasePriority } from '@/lib/types';
import { getCaseDomainLabel } from '@/lib/case-number';

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.id as string;

  const [caseData, setCaseData] = useState<Case | null>(null);
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [notes, setNotes] = useState<CaseNote[]>([]);
  const [loading, setLoading] = useState(true);

  // New note state
  const [newNote, setNewNote] = useState('');
  const [noteType, setNoteType] = useState<'GENERAL' | 'INVESTIGATION' | 'LEGAL' | 'INTERNAL'>('GENERAL');

  useEffect(() => {
    fetchCaseData();
  }, [caseId]);

  async function fetchCaseData() {
    setLoading(true);
    try {
      // Fetch case
      const caseRes = await fetch(`/api/cases/${caseId}`);
      if (caseRes.ok) {
        const data = await caseRes.json();
        setCaseData(data);
      }

      // Fetch evidence
      const evidenceRes = await fetch(`/api/evidence?caseId=${caseId}`);
      if (evidenceRes.ok) {
        const evidenceData = await evidenceRes.json();
        setEvidence(evidenceData);
      }

      // TODO: Fetch notes when API is ready
      // const notesRes = await fetch(`/api/cases/${caseId}/notes`);
    } catch (error) {
      console.error('Error fetching case data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateCaseStatus(status: CaseStatus) {
    try {
      const response = await fetch(`/api/cases/${caseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        const updated = await response.json();
        setCaseData(updated.case);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  }

  async function updateCasePriority(priority: CasePriority) {
    try {
      const response = await fetch(`/api/cases/${caseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priority }),
      });

      if (response.ok) {
        const updated = await response.json();
        setCaseData(updated.case);
      }
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  }

  async function downloadReport() {
    try {
      const response = await fetch(`/api/reports/${caseId}/pdf`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `JAIC-Report-${caseData?.caseNumber}.txt`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">Loading case...</div>
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-400">Case not found</p>
          <Link href="/admin/cases" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Back to Cases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link href="/admin/cases" className="text-sm text-blue-400 hover:text-blue-300 mb-2 inline-block">
            ← Back to Cases
          </Link>
          <h1 className="text-3xl font-bold text-gray-100">{caseData.title}</h1>
          <p className="text-gray-400 mt-2 font-mono">{caseData.caseNumber}</p>
        </div>
        <button
          onClick={downloadReport}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Export Report
        </button>
      </div>

      {/* Status and Priority Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <label className="text-sm font-medium text-gray-400 mb-3 block">Status</label>
          <div className="flex flex-wrap gap-2">
            {(['NEW', 'IN_PROGRESS', 'UNDER_REVIEW', 'CLOSED'] as CaseStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => updateCaseStatus(status)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  caseData.status === status
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {status.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <label className="text-sm font-medium text-gray-400 mb-3 block">Priority</label>
          <div className="flex flex-wrap gap-2">
            {(['LOW', 'MEDIUM', 'HIGH', 'URGENT'] as CasePriority[]).map((priority) => (
              <button
                key={priority}
                onClick={() => updateCasePriority(priority)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  caseData.priority === priority
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Information */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">Case Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400">Domain</label>
            <p className="text-gray-200">{getCaseDomainLabel(caseData.domain)}</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">Submitted</label>
            <p className="text-gray-200">{new Date(caseData.submittedAt).toLocaleString()}</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">Last Updated</label>
            <p className="text-gray-200">{new Date(caseData.updatedAt).toLocaleString()}</p>
          </div>
          {caseData.assignedTo && (
            <div>
              <label className="text-sm text-gray-400">Assigned To</label>
              <p className="text-gray-200">{caseData.assignedTo}</p>
            </div>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-400">Summary</label>
          <p className="text-gray-200 mt-1">{caseData.summary}</p>
        </div>

        {caseData.detailedStatement && (
          <div>
            <label className="text-sm text-gray-400">Detailed Statement</label>
            <p className="text-gray-200 mt-1 whitespace-pre-wrap">{caseData.detailedStatement}</p>
          </div>
        )}
      </div>

      {/* Submitter Information */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">Submitter Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <p className="text-gray-200">{caseData.submittedBy.name}</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <p className="text-gray-200">{caseData.submittedBy.email}</p>
          </div>
          {caseData.submittedBy.phone && (
            <div>
              <label className="text-sm text-gray-400">Phone</label>
              <p className="text-gray-200">{caseData.submittedBy.phone}</p>
            </div>
          )}
          <div>
            <label className="text-sm text-gray-400">Entity Type</label>
            <p className="text-gray-200 capitalize">{caseData.submittedBy.entityType}</p>
          </div>
          {caseData.submittedBy.organization && (
            <div>
              <label className="text-sm text-gray-400">Organization</label>
              <p className="text-gray-200">{caseData.submittedBy.organization}</p>
            </div>
          )}
        </div>
      </div>

      {/* Evidence Section */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-100">Evidence Files</h2>
          <Link
            href={`/admin/evidence?caseId=${caseId}`}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            View All Evidence →
          </Link>
        </div>

        {evidence.length === 0 ? (
          <p className="text-gray-400">No evidence files uploaded</p>
        ) : (
          <div className="space-y-2">
            {evidence.map((ev) => (
              <div
                key={ev.id}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
              >
                <div>
                  <p className="text-gray-200">{ev.originalName}</p>
                  <p className="text-sm text-gray-400">
                    {ev.category} • {(ev.fileSize / 1024).toFixed(2)} KB • Uploaded{' '}
                    {new Date(ev.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {ev.integrityVerified ? (
                    <span className="text-xs text-green-400">✓ Verified</span>
                  ) : (
                    <span className="text-xs text-yellow-400">⚠ Unverified</span>
                  )}
                  <Link
                    href={`/admin/evidence/${ev.id}`}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Case Notes Section */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">Case Notes</h2>

        {/* Add Note Form */}
        <div className="space-y-3 p-4 bg-gray-800 rounded-lg">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a case note..."
            rows={3}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-between">
            <select
              value={noteType}
              onChange={(e) => setNoteType(e.target.value as any)}
              className="px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="GENERAL">General</option>
              <option value="INVESTIGATION">Investigation</option>
              <option value="LEGAL">Legal</option>
              <option value="INTERNAL">Internal</option>
            </select>
            <button
              onClick={() => {
                // TODO: Implement add note
                console.log('Add note:', newNote, noteType);
                setNewNote('');
              }}
              disabled={!newNote.trim()}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* Notes List */}
        {caseData.notes && caseData.notes.length > 0 ? (
          <div className="space-y-3">
            {caseData.notes.map((note) => (
              <div key={note.id} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-gray-300">{note.author}</span>
                    <span className="text-xs text-gray-500 ml-2">
                      {new Date(note.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded">
                    {note.type}
                  </span>
                </div>
                <p className="text-gray-300">{note.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No notes yet</p>
        )}
      </div>
    </div>
  );
}
