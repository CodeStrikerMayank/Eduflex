'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Calendar, 
  Search, 
  Clock, 
  Building2, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StreamTabs from '@/components/StreamTabs';
import { EXAMS } from '@/data/mockData';

export default function ExamsPage() {
  const [selectedStream, setSelectedStream] = useState('all');
  const [search, setSearch] = useState('');

  const filteredExams = EXAMS.filter((exam) => {
    if (selectedStream !== 'all' && exam.streamSlug !== selectedStream) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      if (!exam.name.toLowerCase().includes(q) && !exam.shortName.toLowerCase().includes(q)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                Entrance Examinations 2026-27
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                National & State Entrance Exam Directory
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Registration dates, syllabus, question paper patterns, and participating colleges.
              </p>
            </div>

            <div className="w-full md:w-80">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search exam (e.g. JEE, CAT, NEET)..."
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-8 space-y-6 flex-1">
        <StreamTabs
          selectedStream={selectedStream}
          onSelectStream={setSelectedStream}
          showAllOption={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono">
                    {exam.shortName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {exam.level} Level
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 leading-snug">
                  {exam.name}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3">
                  {exam.description}
                </p>

                {/* Important Dates Box */}
                {exam.upcomingEvents[0] && (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3 text-xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-500 text-[11px]">
                        {exam.upcomingEvents[0].eventName}
                      </div>
                      <div className="font-bold text-slate-900">
                        {exam.upcomingEvents[0].startDate}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Accepted by <strong className="text-slate-800">{exam.acceptedByCollegesCount}+</strong> Colleges
                </span>
                <Link
                  href={`/exams/${exam.slug}`}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
