'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Scale, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Star, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Building, 
  ChevronRight,
  Filter,
  Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StreamTabs from '@/components/StreamTabs';
import CollegeCard from '@/components/CollegeCard';
import CompareFloatingBar from '@/components/CompareFloatingBar';
import LeadModal from '@/components/LeadModal';
import { STREAMS, COLLEGES, EXAMS, REVIEWS, QUESTIONS, ARTICLES } from '@/data/mockData';
import { College } from '@/types';

export default function HomePage() {
  const [selectedStream, setSelectedStream] = useState('all');
  const [comparedColleges, setComparedColleges] = useState<College[]>([]);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedCollegeForLead, setSelectedCollegeForLead] = useState<College | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColleges = selectedStream === 'all'
    ? COLLEGES
    : COLLEGES.filter(c => c.streamSlugs.includes(selectedStream));

  const handleToggleCompare = (college: College) => {
    if (comparedColleges.some(c => c.id === college.id)) {
      setComparedColleges(comparedColleges.filter(c => c.id !== college.id));
    } else {
      if (comparedColleges.length >= 3) {
        alert('You can compare a maximum of 3 colleges at once.');
        return;
      }
      setComparedColleges([...comparedColleges, college]);
    }
  };

  const handleOpenLead = (college?: College) => {
    setSelectedCollegeForLead(college || null);
    setLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onOpenLeadModal={() => handleOpenLead()} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-900 via-indigo-950 to-slate-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Over 25,000+ Colleges, Courses & Cutoffs Indexed</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Find Your Dream College. <br />
            <span className="bg-linear-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Make Confident Career Choices.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Verified rankings, transparent cutoffs, student reviews, and AI-powered admission predictors across Engineering, MBA, Medical, Law & Design.
          </p>

          {/* Hero Global Search Box */}
          <div className="max-w-3xl mx-auto pt-2">
            <form 
              action="/colleges" 
              method="GET"
              className="bg-white p-2 rounded-2xl shadow-2xl shadow-blue-950/40 border border-slate-200/40 flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-3 px-3 w-full">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search college name, course (e.g. B.Tech CSE, MBA), exam, or city..."
                  className="w-full py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Find Colleges</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Keyword Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Trending Searches:</span>
              <Link href="/colleges?search=IIT" className="hover:text-blue-300 underline underline-offset-4">IITs</Link>
              <span>•</span>
              <Link href="/colleges?streamSlug=management" className="hover:text-blue-300 underline underline-offset-4">Top IIMs</Link>
              <span>•</span>
              <Link href="/predictor?exam=jee-main" className="hover:text-amber-300 font-semibold underline underline-offset-4 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                JEE Predictor
              </Link>
              <span>•</span>
              <Link href="/colleges?streamSlug=medical" className="hover:text-blue-300 underline underline-offset-4">NEET MBBS</Link>
              <span>•</span>
              <Link href="/rankings" className="hover:text-blue-300 underline underline-offset-4">NIRF 2025</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Selection Hub Grid */}
      <section className="container mx-auto px-4 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {STREAMS.map((stream) => (
            <Link
              key={stream.slug}
              href={`/stream/${stream.slug}`}
              className="group bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono">
                    {stream.shortCode}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {stream.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {stream.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-3 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>View Hub</span>
                <span className="text-blue-600 font-bold group-hover:underline">Explore &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Discovery Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Verified Institutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Top Ranked Colleges in India
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Filter by your desired stream to compare fees, NIRF ratings, and placement records.
            </p>
          </div>

          <Link
            href="/colleges"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Explore All 25,000+ Colleges</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stream Filter Pills */}
        <StreamTabs
          selectedStream={selectedStream}
          onSelectStream={setSelectedStream}
          showAllOption={true}
        />

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.slice(0, 6).map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              isCompared={comparedColleges.some((c) => c.id === college.id)}
              onToggleCompare={handleToggleCompare}
              onOpenLeadModal={handleOpenLead}
            />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href={`/colleges${selectedStream !== 'all' ? `?streamSlug=${selectedStream}` : ''}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-blue-500 hover:bg-blue-50/50 text-slate-800 hover:text-blue-700 font-bold rounded-xl text-sm transition-all shadow-xs"
          >
            <span>Load More {selectedStream !== 'all' ? selectedStream.toUpperCase() : ''} Colleges</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* College Predictor Hero Banner */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <div className="rounded-3xl bg-linear-to-r from-blue-900 via-indigo-900 to-purple-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-indigo-800">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Smart Admission Intelligence</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Know Your Admission Chances Before Counselling Begins
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Enter your exam rank or percentile (JEE Main, CAT, NEET, CLAT, etc.) to get an instant breakdown of Safe, Moderate, and Ambitious colleges based on actual historical opening & closing ranks.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/predictor"
                className="px-6 py-3.5 bg-linear-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Launch Free College Predictor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-blue-200">
                100% Free • Updated with Round 6 Cutoffs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exams Calendar Section */}
      <section className="container mx-auto px-4 lg:px-8 py-12 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              Admission Calendar
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Entrance Exams & Dates
            </h2>
          </div>
          <Link href="/exams" className="text-sm font-bold text-blue-600 hover:underline">
            View All Exams &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXAMS.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md">
                    {exam.shortName}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {exam.mode}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {exam.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {exam.description}
                </p>

                {/* Next Milestone */}
                {exam.upcomingEvents[0] && (
                  <div className="mt-4 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium text-slate-500 truncate">
                        {exam.upcomingEvents[0].eventName}
                      </div>
                      <div className="text-xs font-bold text-slate-900">
                        {exam.upcomingEvents[0].startDate}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Accepted by <strong className="text-slate-800">{exam.acceptedByCollegesCount}+</strong> Colleges
                </span>
                <Link
                  href={`/exams/${exam.slug}`}
                  className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Q&A & Reviews Highlight */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="container mx-auto px-4 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Real Experiences. Honest Answers.
            </h2>
            <p className="text-sm text-slate-600">
              Read verified testimonials from alumni and ask specific admission doubts to senior students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reviews Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span>Latest Verified Reviews</span>
                </h3>
                <Link href="/reviews" className="text-xs font-bold text-blue-600 hover:underline">
                  Browse Reviews
                </Link>
              </div>

              {REVIEWS.slice(0, 2).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{rev.collegeName}</h4>
                      <p className="text-xs text-slate-500">{rev.courseName} • Class of {rev.graduationYear}</p>
                    </div>
                    <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2 py-0.5 rounded-md">
                      <Star className="w-3 h-3 fill-current" />
                      {rev.ratingOverall} / 5
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-800">
                    &ldquo;{rev.title}&rdquo;
                  </p>

                  <div className="text-xs text-slate-600 space-y-1.5">
                    <div className="p-2 bg-emerald-50/50 rounded-lg border border-emerald-100/60">
                      <span className="font-semibold text-emerald-800">Pros: </span>
                      {rev.pros}
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 text-right">
                    Reviewed by {rev.reviewerName}
                  </div>
                </div>
              ))}
            </div>

            {/* Questions Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span>Student Q&A Discussions</span>
                </h3>
                <Link href="/discussions" className="text-xs font-bold text-blue-600 hover:underline">
                  Ask a Question
                </Link>
              </div>

              {QUESTIONS.map((q) => (
                <div
                  key={q.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">
                      {q.title}
                    </h4>
                    <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full shrink-0 font-medium">
                      {q.collegeName}
                    </span>
                  </div>

                  {q.answers[0] && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5 text-blue-700 font-bold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{q.answers[0].authorName} ({q.answers[0].authorBadge}):</span>
                      </div>
                      <p className="line-clamp-2">{q.answers[0].body}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                    <span>Asked by {q.authorName}</span>
                    <span className="font-semibold text-blue-600">
                      {q.answersCount} {q.answersCount === 1 ? 'Answer' : 'Answers'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles & News */}
      <section className="container mx-auto px-4 lg:px-8 py-16 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              Editorial Insights
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Exam Guides & Admission Trends
            </h2>
          </div>
          <Link href="/articles" className="text-sm font-bold text-blue-600 hover:underline">
            All Articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <Link
              key={art.slug}
              href={`/articles/${art.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                    {art.category}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 text-xs text-slate-400 flex items-center justify-between border-t border-slate-100/80 mt-2">
                <span>{art.authorName}</span>
                <span>{art.readTimeMinutes} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Compare Bar */}
      <CompareFloatingBar
        selectedColleges={comparedColleges}
        onRemove={(id) => setComparedColleges(comparedColleges.filter(c => c.id !== id))}
        onClear={() => setComparedColleges([])}
      />

      {/* Lead Generation Counseling Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        college={selectedCollegeForLead}
      />
    </div>
  );
}
