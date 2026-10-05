'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Award, 
  MapPin, 
  Star, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  PhoneCall, 
  Scale, 
  MessageSquare, 
  ThumbsUp, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import { COLLEGES, REVIEWS, QUESTIONS } from '@/data/mockData';
import { College } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CollegeDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const college = COLLEGES.find((c) => c.slug === resolvedParams.slug);

  if (!college) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'placements' | 'cutoffs' | 'reviews' | 'qa'>('overview');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  // College specific reviews and questions
  const collegeReviews = REVIEWS.filter((r) => r.collegeId === college.id);
  const collegeQuestions = QUESTIONS.filter((q) => q.collegeId === college.id);

  // Similar colleges
  const similarColleges = COLLEGES.filter(
    (c) => c.id !== college.id && c.streamSlugs.some((s) => college.streamSlugs.includes(s))
  ).slice(0, 3);

  const placement = college.placements[0];

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setQuestionSubmitted(true);
    setUserQuestion('');
    setTimeout(() => setQuestionSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenLeadModal={() => setLeadModalOpen(true)} />

      {/* Hero Header with Banner */}
      <div className="relative bg-slate-950 text-white">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={college.bannerUrl}
            alt={college.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* College Header Card */}
        <div className="container mx-auto px-4 lg:px-8 relative -mt-24 pb-6 z-10">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 border-2 border-slate-100 shadow-md shrink-0">
                  <img
                    src={college.logoUrl}
                    alt={college.shortName}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {college.nirfRank && (
                      <span className="flex items-center gap-1 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-md shadow-xs">
                        <Award className="w-3.5 h-3.5" />
                        NIRF #{college.nirfRank}
                      </span>
                    )}
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-md border border-blue-200">
                      {college.ownership}
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                      {college.accreditation}
                    </span>
                  </div>

                  <h1 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {college.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      {college.city}, {college.state}
                    </span>
                    <span>•</span>
                    <span>Established {college.establishedYear}</span>
                    <span>•</span>
                    <span>Approved by {college.approvedBy}</span>
                  </div>
                </div>
              </div>

              {/* Right CTA and Rating Block */}
              <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <div>
                    <div className="text-base font-black text-emerald-900 leading-none">
                      {college.rating} / 5
                    </div>
                    <div className="text-[10px] text-emerald-700 font-medium">
                      Based on {college.reviewCount} student reviews
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/compare?colleges=${college.slug}`}
                    className="px-3.5 py-2 border border-slate-300 hover:border-slate-400 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Scale className="w-4 h-4" />
                    <span>Compare</span>
                  </Link>

                  <button
                    onClick={() => setLeadModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Get Brochure</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-center">
              <div>
                <div className="text-xs text-slate-500 font-medium">Average Package</div>
                <div className="text-lg font-black text-slate-900 mt-0.5">
                  {placement ? `₹${placement.avgPackage} LPA` : 'N/A'}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Highest Package</div>
                <div className="text-lg font-black text-emerald-600 mt-0.5">
                  {placement ? `₹${placement.highestPackage} LPA` : 'N/A'}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Campus Size</div>
                <div className="text-lg font-black text-slate-900 mt-0.5">
                  {college.campusSizeAcres} Acres
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Total Courses</div>
                <div className="text-lg font-black text-blue-600 mt-0.5">
                  {college.courses.length} Flagship
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation Sticky Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto scrollbar-none py-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'courses', label: 'Courses & Fees' },
              { id: 'placements', label: 'Placements' },
              { id: 'cutoffs', label: 'Cutoffs' },
              { id: 'reviews', label: `Reviews (${collegeReviews.length})` },
              { id: 'qa', label: `Q&A (${collegeQuestions.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Tab Content & Sidebar */}
      <div className="container mx-auto px-4 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tab Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-lg font-black text-slate-900">About {college.name}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {college.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                    >
                      <span>Visit Official Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Campus Facilities */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-lg font-black text-slate-900">Campus Facilities & Infrastructure</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {college.facilities.map((fac) => (
                      <div key={fac} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accepted Exams highlight */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-lg font-black text-slate-900">Accepted Entrance Examinations</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.acceptedExams.map((exam) => (
                      <Link
                        key={exam}
                        href="/exams"
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors"
                      >
                        {exam}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: COURSES & FEES */}
            {activeTab === 'courses' && (
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Academic Courses, Fees & Seat Matrix</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Tuition fees and intake capacity according to latest university gazette notifications.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                        <th className="py-3 px-2">Course Name</th>
                        <th className="py-3 px-2">Duration</th>
                        <th className="py-3 px-2">Annual Fee</th>
                        <th className="py-3 px-2">Total Fee</th>
                        <th className="py-3 px-2">Seats</th>
                        <th className="py-3 px-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {college.courses.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50">
                          <td className="py-3.5 px-2">
                            <div className="font-bold text-slate-900">{c.name}</div>
                            {c.specialization && (
                              <div className="text-[11px] text-blue-600 font-medium">
                                Spec: {c.specialization}
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-2 text-slate-600">{c.durationYears} Years</td>
                          <td className="py-3.5 px-2 font-semibold text-slate-900">
                            ₹{(c.feesAnnual / 100000).toFixed(2)} L/yr
                          </td>
                          <td className="py-3.5 px-2 font-bold text-blue-700">
                            ₹{(c.feesTotal / 100000).toFixed(2)} Lakhs
                          </td>
                          <td className="py-3.5 px-2 text-slate-700">{c.seats}</td>
                          <td className="py-3.5 px-2">
                            <button
                              onClick={() => setLeadModalOpen(true)}
                              className="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                            >
                              Inquire
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: PLACEMENTS */}
            {activeTab === 'placements' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Placement Statistics & Salary Trends</h3>
                    <p className="text-xs text-slate-500 mt-1">Verified graduating cohort statistics.</p>
                  </div>

                  {placement && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 text-center">
                        <div className="text-xs text-blue-700 font-semibold">Average CTC</div>
                        <div className="text-2xl font-black text-blue-900 mt-1">
                          ₹{placement.avgPackage} LPA
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-center">
                        <div className="text-xs text-emerald-700 font-semibold">Median CTC</div>
                        <div className="text-2xl font-black text-emerald-900 mt-1">
                          ₹{placement.medianPackage} LPA
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 text-center">
                        <div className="text-xs text-amber-700 font-semibold">Highest Domestic CTC</div>
                        <div className="text-2xl font-black text-amber-900 mt-1">
                          ₹{placement.highestPackage} LPA
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Top Recruiters */}
                  {placement && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        Marquee Recruiters
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {placement.topRecruiters.map((rec) => (
                          <span
                            key={rec}
                            className="px-3.5 py-1.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold border border-slate-200"
                          >
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB: CUTOFFS */}
            {activeTab === 'cutoffs' && (
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Admission Cutoffs & Closing Ranks</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Previous year opening and closing ranks for central counseling rounds.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                        <th className="py-3 px-2">Course</th>
                        <th className="py-3 px-2">Exam</th>
                        <th className="py-3 px-2">Category</th>
                        <th className="py-3 px-2">Round</th>
                        <th className="py-3 px-2">Closing Rank</th>
                        <th className="py-3 px-2">Predict</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {college.cutoffs.map((cut, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3.5 px-2 font-bold text-slate-900">{cut.courseName}</td>
                          <td className="py-3.5 px-2 text-blue-600 font-semibold">{cut.examName}</td>
                          <td className="py-3.5 px-2">
                            <span className="bg-slate-100 px-2 py-0.5 rounded-sm font-mono text-xs">
                              {cut.category}
                            </span>
                          </td>
                          <td className="py-3.5 px-2 text-slate-600">Round {cut.roundNo}</td>
                          <td className="py-3.5 px-2 font-black text-emerald-700">
                            {cut.closingRank}
                          </td>
                          <td className="py-3.5 px-2">
                            <Link
                              href="/predictor"
                              className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
                            >
                              <Sparkles className="w-3 h-3" />
                              <span>Predict</span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-black text-slate-900">Student Reviews & Ratings</h3>
                      <p className="text-xs text-slate-500 mt-1">Real insights from students and alumni.</p>
                    </div>
                  </div>

                  {collegeReviews.length > 0 ? (
                    collegeReviews.map((rev) => (
                      <div key={rev.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-sm text-slate-900">{rev.reviewerName}</div>
                            <div className="text-xs text-slate-500">{rev.courseName} • Class of {rev.graduationYear}</div>
                          </div>
                          <span className="flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-md">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {rev.ratingOverall} / 5
                          </span>
                        </div>

                        <h4 className="font-bold text-sm text-slate-800">&ldquo;{rev.title}&rdquo;</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-slate-700">
                            <span className="font-bold text-emerald-800">Pros: </span>
                            {rev.pros}
                          </div>
                          <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-slate-700">
                            <span className="font-bold text-rose-800">Cons: </span>
                            {rev.cons}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-xs text-slate-500">
                      No verified reviews submitted yet for this institution.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB: Q&A */}
            {activeTab === 'qa' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Student Q&A Forum</h3>
                    <p className="text-xs text-slate-500 mt-1">Ask questions directly to current students and alumni.</p>
                  </div>

                  {/* Ask question form */}
                  <form onSubmit={handleAskQuestion} className="space-y-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <label className="block text-xs font-bold text-slate-700">
                      Ask about admissions, hostels, placements, or campus life:
                    </label>
                    <textarea
                      rows={2}
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      placeholder="e.g. Is 99 percentile sufficient for CSE in OBC category?"
                      className="w-full p-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500"
                    />
                    <div className="flex items-center justify-between">
                      {questionSubmitted ? (
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          Question submitted for review!
                        </span>
                      ) : <span />}
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        Submit Question
                      </button>
                    </div>
                  </form>

                  {/* List of Questions */}
                  {collegeQuestions.map((q) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="font-bold text-sm text-slate-900 leading-snug">{q.title}</div>
                      <p className="text-xs text-slate-600">{q.body}</p>

                      {q.answers[0] && (
                        <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                          <div className="flex items-center gap-1.5 text-blue-700 font-bold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{q.answers[0].authorName} ({q.answers[0].authorBadge}):</span>
                          </div>
                          <p>{q.answers[0].body}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="space-y-6">
            {/* Free Counseling Lead Card */}
            <div className="bg-linear-to-br from-blue-900 to-indigo-950 text-white p-6 rounded-3xl shadow-xl space-y-4">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                Free Guidance
              </span>
              <h3 className="text-lg font-black leading-snug">
                Interested in {college.shortName}?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Connect with our certified admissions counselor for fee waivers, management quota clarifications, and document checklists.
              </p>
              <button
                onClick={() => setLeadModalOpen(true)}
                className="w-full py-3 bg-white hover:bg-slate-100 text-blue-900 rounded-xl text-xs font-extrabold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Request Free Callback</span>
              </button>
            </div>

            {/* Compare with Similar Colleges */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-slate-900">Similar Colleges to Compare</h4>
              <div className="space-y-3">
                {similarColleges.map((sim) => (
                  <Link
                    key={sim.id}
                    href={`/colleges/${sim.slug}`}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img src={sim.logoUrl} alt={sim.shortName} className="w-8 h-8 rounded-lg object-cover" />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-600">
                          {sim.name}
                        </div>
                        <div className="text-[11px] text-slate-500">NIRF #{sim.nirfRank ?? 'N/A'} • {sim.city}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />

      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        college={college}
      />
    </div>
  );
}
