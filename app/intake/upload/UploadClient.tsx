'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function UploadClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/jpeg',
    'image/png',
    'text/plain',
  ];

  const maxFileSize = 50 * 1024 * 1024; // 50MB
  const maxTotalSize = 500 * 1024 * 1024; // 500MB

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };

  const processFiles = (newFiles: File[]) => {
    let validFiles = [...files];

    newFiles.forEach(file => {
      // Validate file type
      if (!allowedTypes.includes(file.type)) {
        alert(`File type not allowed: ${file.name}`);
        return;
      }

      // Validate file size
      if (file.size > maxFileSize) {
        alert(`File too large (max 50MB): ${file.name}`);
        return;
      }

      // Check total size
      const totalSize = validFiles.reduce((sum, f) => sum + f.size, 0) + file.size;
      if (totalSize > maxTotalSize) {
        alert('Total upload size exceeds 500MB limit');
        return;
      }

      validFiles.push(file);
    });

    setFiles(validFiles);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

  const handleNext = () => {
    // Save files info and navigate
    const existingData = JSON.parse(sessionStorage.getItem('intakeData') || '{}');
    const fileInfo = files.map(f => ({ name: f.name, size: f.size, type: f.type }));
    const updatedData = { ...existingData, files: fileInfo, fileCount: files.length };
    sessionStorage.setItem('intakeData', JSON.stringify(updatedData));
    window.location.href = '/intake/review';
  };

  return (
    <div className="bg-onyx pt-20 pb-20">
      {/* Header */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="metadata-chip">STEP 5 OF 7</span>
          </div>
          <h1 className="text-5xl lg:text-4xl font-display font-bold text-smoke mb-6 leading-tight">
            Supporting Documentation
          </h1>
          <p className="text-xl text-smoke/70">
            Upload relevant documents, communications, and evidence. This step is optional.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="section-container border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-slate rounded-full h-2 mb-8">
            <div
              className="bg-investigation-50 h-2 rounded-full transition-all duration-300"
              style={{ width: '71.4%' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="section-container border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Upload Area */}
          <div className="lg:col-span-2">
            {/* Drop Zone */}
            <div
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                isDragging
                  ? 'bg-investigation/10 border-investigation-50'
                  : 'bg-slate border-slate-100 hover:border-investigation/50'
              }`}
            >
              <input
                type="file"
                id="fileInput"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />

              <label htmlFor="fileInput" className="cursor-pointer block">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-investigation-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-smoke mb-2">
                  Drag and drop files here
                </p>
                <p className="text-sm text-smoke/70 mb-4">
                  or click to select files
                </p>
              </label>

              <p className="text-xs text-smoke/60 mt-4">
                Supported: PDF, Word, Excel, Images, Text (Max 50MB per file, 500MB total)
              </p>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-display font-semibold text-smoke mb-4">
                  Uploaded Files ({files.length})
                </h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-slate border border-slate-100 rounded-lg p-4">
                      <div className="flex items-center flex-1 min-w-0">
                        <svg className="w-5 h-5 text-investigation-50 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-smoke truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-smoke/60">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-4 text-smoke/60 hover:text-investigation-50 transition-colors flex-shrink-0"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Size Summary */}
                <div className="mt-4 p-4 bg-investigation/10 border border-investigation/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-smoke">Total Upload Size:</span>
                    <span className="text-sm font-medium text-investigation-50">
                      {totalSizeMB} MB / 500 MB
                    </span>
                  </div>
                  <div className="w-full bg-slate rounded-full h-2 mt-2">
                    <div
                      className="bg-investigation-50 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((totalSize / maxTotalSize) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Guidance */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-investigation/10 border border-investigation/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  What to Upload
                </h3>
                <ul className="text-smoke/70 text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Business records & contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Communications (email, messages)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Financial documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Evidence & artifacts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Policy documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  Confidentiality Note
                </h3>
                <p className="text-smoke/70 text-sm">
                  Do not upload documents containing highly sensitive information unless necessary. You may provide sensitive
                  evidence separately via secure channels after initial case assessment.
                </p>
              </div>

              <div className="bg-slate border border-slate-100 rounded-lg p-6">
                <h3 className="font-display font-semibold text-smoke mb-3">
                  Optional Step
                </h3>
                <p className="text-smoke/70 text-sm">
                  Document upload is optional. You can proceed without uploading files and provide them later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container bg-slate-200/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/intake/statement" className="btn-secondary">
            ← Previous
          </Link>
          <button onClick={handleNext} className="btn-primary">
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
