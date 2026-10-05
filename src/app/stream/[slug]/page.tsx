'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Calendar,
  Building2,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollegeCard from '@/components/CollegeCard';
import LeadModal from '@/components/LeadModal';
import { STREAMS, COLLEGES, EXAMS, COURSES } from '@/data/mockData';
import { College } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function StreamHubPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const stream = STREAMS.find((s) => s.slug === resolvedParams.slug);

  if (!stream) {
    notFound();
  }

  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedCollegeForLead, setSelectedCollegeForLead] = useState<College | null>(null);

  // Colleges offering this stream
  const streamColleges = COLLEGES.filter((c) => c.streamSlugs.includes(stream.slug));
  // Exams belonging to this stream
  const streamExams = EXAMS.filter((e) => e.streamSlug === stream.slug);
  // Courses belonging to this stream
  const streamCourses = COURSES.filter((c) => c.streamSlug === stream.slug);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenLeadModal={() => setLeadModalOpen(true)} />

      {/* Stream Hero */}
      <div className="bg-linear-to-r from-blue-900 via-indigo-950 to-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-blue-300 font-bold">Streams</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">{stream.name}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold font-mono">
            {stream.shortCode} HUB
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Top {stream.name} Colleges in India 2025-26
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {stream.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              {streamColleges.length} Top Institutions Listed
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              {streamExams.length} National Entrance Exams
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              {streamCourses.length} Accredited Degree Programs
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-10 space-y-12 flex-1">
        {/* Popular Courses in this Stream */}
        {streamCourses.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                  Academic Degree Options
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Popular {stream.name} Courses
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {streamCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md">
                        {course.shortName}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        {course.durationYears} Years • {course.level}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                      {course.eligibilitySummary}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Avg Salary: <strong className="text-emerald-700 font-bold">{course.avgStartingSalary}</strong>
                    </span>
                    <Link
                      href={`/colleges?search=${course.shortName}`}
                      className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Find Colleges</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Entrance Exams in this Stream */}
        {streamExams.length > 0 && (
          <div className="space-y-4">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                Entrance Examinations
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Key {stream.name} Exams
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {streamExams.map((exam) => (
                <div key={exam.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-md">
                        {exam.shortName}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {exam.mode}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 leading-snug">{exam.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{exam.description}</p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Accepted by <strong>{exam.acceptedByCollegesCount}+</strong> Colleges
                    </span>
                    <Link
                      href={`/exams/${exam.slug}`}
                      className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Full Exam Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top Colleges in this Stream */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                NIRF & Peer Approved
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Top {stream.name} Colleges
              </h2>
            </div>

            <Link
              href={`/colleges?streamSlug=${stream.slug}`}
              className="text-xs sm:text-sm font-bold text-blue-600 hover:underline"
            >
              View All {stream.name} Colleges &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onOpenLeadModal={(c) => {
                  setSelectedCollegeForLead(c);
                  setLeadModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        college={selectedCollegeForLead}
      />
    </div>
  );
}
