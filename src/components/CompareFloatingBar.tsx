'use client';

import React from 'react';
import Link from 'next/link';
import { Scale, X, ArrowRight } from 'lucide-react';
import { College } from '@/types';

interface CompareFloatingBarProps {
  selectedColleges: College[];
  onRemove: (collegeId: string) => void;
  onClear: () => void;
}

export default function CompareFloatingBar({
  selectedColleges,
  onRemove,
  onClear
}: CompareFloatingBarProps) {
  if (selectedColleges.length === 0) return null;

  const compareQuery = selectedColleges.map((c) => c.slug).join(',');

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-3xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left summary & pills */}
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 shrink-0">
            <Scale className="w-4 h-4" />
            <span>Compare ({selectedColleges.length}/3):</span>
          </div>

          <div className="flex items-center gap-2">
            {selectedColleges.map((college) => (
              <div
                key={college.id}
                className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs shrink-0"
              >
                <img
                  src={college.logoUrl}
                  alt={college.shortName}
                  className="w-4 h-4 rounded-xs object-cover"
                />
                <span className="font-semibold text-slate-200">{college.shortName}</span>
                <button
                  onClick={() => onRemove(college.id)}
                  className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                  title="Remove college"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={onClear}
            className="text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors cursor-pointer"
          >
            Clear All
          </button>

          <Link
            href={`/compare?colleges=${compareQuery}`}
            className="px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Compare Side-by-Side</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
