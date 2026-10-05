'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  GraduationCap, 
  TrendingUp, 
  Clock, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Building2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollegeCard from '@/components/CollegeCard';
import { COURSES, COLLEGES, EXAMS } from '@/data/mockData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseHubPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const course = COURSES.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  // Colleges offering this course
  const offeringColleges = COLLEGES.filter((col) =>
    col.courses.some((c) => c.courseId === course.id || c.name.toLowerCase().includes(course.shortName.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="bg-linear-to-r from-blue-900 via-indigo-950 to-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href={`/stream/${course.streamSlug}`} className="text-slate-400 hover:text-white capitalize">
              {course.streamSlug}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">{course.shortName}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
              {course.level} Program
            </span>
            <span className="bg-white/10 text-white text-xs font-semibold px-2.5 py-0.5 rounded-md">
              {course.durationYears} Years Duration
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            {course.name} ({course.shortName})
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {course.overview}
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Avg Starting CTC: {course.avgStartingSalary}</span>
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              {offeringColleges.length} Premier Institutes Available
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-10 space-y-10 flex-1">
        {/* Eligibility & Program Details */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl font-black text-slate-900">Eligibility & Admission Overview</h2>
          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs sm:text-sm text-slate-800">
            <strong className="text-blue-900 font-bold block mb-1">Minimum Qualification Required:</strong>
            {course.eligibilitySummary}
          </div>
        </div>

        {/* Top Colleges Offering Course */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                Premier Campuses
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Top Colleges for {course.shortName} in India
              </h2>
            </div>

            <Link
              href={`/colleges?search=${course.shortName}`}
              className="text-xs sm:text-sm font-bold text-blue-600 hover:underline"
            >
              Browse Full List &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offeringColleges.map((col) => (
              <CollegeCard key={col.id} college={col} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
