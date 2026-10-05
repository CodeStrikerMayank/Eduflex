'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollegeCard from '@/components/CollegeCard';
import { EXAMS, COLLEGES } from '@/data/mockData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ExamDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const exam = EXAMS.find((e) => e.slug === resolvedParams.slug);

  if (!exam) {
    notFound();
  }

  // Colleges that accept this exam
  const acceptingColleges = COLLEGES.filter((c) =>
    c.acceptedExams.some((e) => e.toLowerCase().includes(exam.shortName.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <div className="bg-linear-to-r from-blue-900 via-indigo-950 to-slate-950 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/exams" className="text-slate-400 hover:text-white">Exams</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">{exam.shortName}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-md">
              {exam.level} Examination
            </span>
            <span className="bg-white/10 text-white text-xs font-semibold px-2.5 py-0.5 rounded-md">
              {exam.mode}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            {exam.name} ({exam.shortName})
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {exam.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href={`/predictor?exam=${exam.slug}`}
              className="px-5 py-2.5 bg-linear-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-1.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Predict Colleges for {exam.shortName}</span>
            </Link>

            <Link
              href={`/colleges?acceptedExam=${exam.shortName}`}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 flex items-center gap-1.5 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span>View All Accepting Colleges ({acceptingColleges.length})</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-10 space-y-10 flex-1">
        {/* Exam Quick Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">Conducting Body</div>
            <div className="text-sm font-bold text-slate-900 mt-1">{exam.conductingBody}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">Test Mode</div>
            <div className="text-sm font-bold text-slate-900 mt-1">{exam.mode}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">Duration</div>
            <div className="text-sm font-bold text-blue-700 mt-1">{exam.durationMinutes} Minutes</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">Participating Colleges</div>
            <div className="text-sm font-bold text-emerald-700 mt-1">{exam.acceptedByCollegesCount}+ Pan-India</div>
          </div>
        </div>

        {/* Schedule & Important Dates */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 font-black text-lg text-slate-900">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Important Dates & Upcoming Milestones</span>
          </div>

          <div className="divide-y divide-slate-100">
            {exam.upcomingEvents.map((ev, i) => (
              <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                <span className="font-bold text-slate-800">{ev.eventName}</span>
                <span className="font-mono text-blue-700 font-semibold">
                  {ev.startDate} {ev.endDate ? `to ${ev.endDate}` : ''}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus & Exam Pattern Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Syllabus Highlights</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {exam.syllabusSummary}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Exam Pattern & Marking Scheme</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {exam.examPatternSummary}
            </p>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="font-black text-base text-slate-900">Eligibility & Qualifications</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {exam.eligibilityCriteria}
          </p>
        </div>

        {/* Top Participating Colleges */}
        {acceptingColleges.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                  Institutes
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Top Colleges Accepting {exam.shortName}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acceptingColleges.slice(0, 6).map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
