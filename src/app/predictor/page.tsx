'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  TrendingUp, 
  GraduationCap, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Filter
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import { EXAMS, STREAMS } from '@/data/mockData';
import { predictColleges } from '@/lib/dataService';
import { PredictorResult, CategoryType } from '@/types';

function PredictorContent() {
  const searchParams = useSearchParams();
  const defaultExam = searchParams.get('exam') || 'jee-main';

  const [selectedExam, setSelectedExam] = useState(defaultExam);
  const [userRank, setUserRank] = useState<string>('120');
  const [category, setCategory] = useState<CategoryType>('GEN');
  const [results, setResults] = useState<PredictorResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  const activeExamObj = useMemo(() => {
    return EXAMS.find((e) => e.slug === selectedExam);
  }, [selectedExam]);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    const rankNum = parseInt(userRank, 10);
    if (isNaN(rankNum) || rankNum <= 0) {
      alert('Please enter a valid positive rank.');
      return;
    }

    setLoading(true);
    const predicted = await predictColleges({
      examSlug: selectedExam,
      rank: rankNum,
      category
    });
    setResults(predicted);
    setLoading(false);
  };

  const safeResults = results?.filter((r) => r.chanceCategory === 'Safe') || [];
  const moderateResults = results?.filter((r) => r.chanceCategory === 'Moderate') || [];
  const ambitiousResults = results?.filter((r) => r.chanceCategory === 'Ambitious') || [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenLeadModal={() => setLeadModalOpen(true)} />

      {/* Hero */}
      <div className="bg-linear-to-r from-blue-900 via-indigo-950 to-slate-950 text-white py-12 px-4 sm:px-8 border-b border-slate-800">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Admission Probability Engine</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            College Predictor 2025-26
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Enter your entrance examination score or rank to calculate your admission chances across top engineering, MBA, medical, law, and design institutes.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 lg:px-8 py-10 flex-1 space-y-10">
        {/* Predictor Input Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          <form onSubmit={handlePredict} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Exam Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Exam
                </label>
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-blue-500"
                >
                  {EXAMS.map((ex) => (
                    <option key={ex.slug} value={ex.slug}>
                      {ex.shortName} ({ex.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Rank / Score Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Your Overall Rank / AIR
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000000"
                  required
                  value={userRank}
                  onChange={(e) => setUserRank(e.target.value)}
                  placeholder="e.g. 150"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Reservation Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CategoryType)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:bg-white focus:border-blue-500"
                >
                  <option value="GEN">General (Open / Unreserved)</option>
                  <option value="OBC">OBC-NCL (Other Backward Class)</option>
                  <option value="SC">SC (Scheduled Caste)</option>
                  <option value="ST">ST (Scheduled Tribe)</option>
                  <option value="EWS">EWS (Economically Weaker Section)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Calibrated with official Round 6 central counselling cutoff registers.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{loading ? 'Calculating Probabilities...' : 'Predict My Colleges'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Results Showcase */}
        {results !== null && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Prediction Results for {activeExamObj?.shortName} AIR #{userRank} ({category})
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Found {results.length} colleges bucketed by historical admission chance margin.
                </p>
              </div>

              <button
                onClick={() => setLeadModalOpen(true)}
                className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 px-3 py-2 rounded-xl"
              >
                Discuss Choices with Counselor &rarr;
              </button>
            </div>

            {/* BUCKET 1: SAFE CHOICES */}
            {safeResults.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span>Safe Colleges (High Probability)</span>
                  <span className="text-xs bg-emerald-100 px-2 py-0.5 rounded-full text-emerald-800">
                    {safeResults.length} Available
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {safeResults.map((res, i) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-2xl border-2 border-emerald-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                            SAFE (Rank Margin: +{res.rankDifference})
                          </span>
                          <span className="text-xs text-slate-400">
                            Closing: #{res.closingRank}
                          </span>
                        </div>
                        <h3 className="font-bold text-base text-slate-900">{res.college.name}</h3>
                        <p className="text-xs text-blue-700 font-semibold mt-1">{res.courseName}</p>
                        <p className="text-xs text-slate-500 mt-1">{res.college.city}, {res.college.state}</p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Avg: <strong>₹{res.college.placements[0]?.avgPackage ?? 'N/A'} LPA</strong>
                        </span>
                        <Link
                          href={`/colleges/${res.college.slug}`}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <span>Explore College</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BUCKET 2: MODERATE CHOICES */}
            {moderateResults.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-700 font-extrabold text-lg">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span>Moderate Colleges (Target Range)</span>
                  <span className="text-xs bg-amber-100 px-2 py-0.5 rounded-full text-amber-800">
                    {moderateResults.length} Available
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moderateResults.map((res, i) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-2xl border-2 border-amber-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                            MODERATE (Rank Margin: {res.rankDifference >= 0 ? `+${res.rankDifference}` : res.rankDifference})
                          </span>
                          <span className="text-xs text-slate-400">
                            Closing: #{res.closingRank}
                          </span>
                        </div>
                        <h3 className="font-bold text-base text-slate-900">{res.college.name}</h3>
                        <p className="text-xs text-blue-700 font-semibold mt-1">{res.courseName}</p>
                        <p className="text-xs text-slate-500 mt-1">{res.college.city}, {res.college.state}</p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Avg: <strong>₹{res.college.placements[0]?.avgPackage ?? 'N/A'} LPA</strong>
                        </span>
                        <Link
                          href={`/colleges/${res.college.slug}`}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <span>Explore College</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BUCKET 3: AMBITIOUS CHOICES */}
            {ambitiousResults.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-extrabold text-lg">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <span>Ambitious Colleges (Reach Options)</span>
                  <span className="text-xs bg-rose-100 px-2 py-0.5 rounded-full text-rose-800">
                    {ambitiousResults.length} Available
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ambitiousResults.map((res, i) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-2xl border-2 border-rose-200 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                            AMBITIOUS (Cutoff #{res.closingRank})
                          </span>
                          <span className="text-xs text-slate-400">
                            Closing: #{res.closingRank}
                          </span>
                        </div>
                        <h3 className="font-bold text-base text-slate-900">{res.college.name}</h3>
                        <p className="text-xs text-blue-700 font-semibold mt-1">{res.courseName}</p>
                        <p className="text-xs text-slate-500 mt-1">{res.college.city}, {res.college.state}</p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Avg: <strong>₹{res.college.placements[0]?.avgPackage ?? 'N/A'} LPA</strong>
                        </span>
                        <Link
                          href={`/colleges/${res.college.slug}`}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <span>Explore College</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
      <LeadModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </div>
  );
}

export default function PredictorPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading College Predictor...</div>}>
      <PredictorContent />
    </Suspense>
  );
}
