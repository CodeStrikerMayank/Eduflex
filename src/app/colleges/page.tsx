'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Filter, 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Building2, 
  MapPin, 
  X, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CollegeCard from '@/components/CollegeCard';
import CompareFloatingBar from '@/components/CompareFloatingBar';
import LeadModal from '@/components/LeadModal';
import { STREAMS, COLLEGES, EXAMS } from '@/data/mockData';
import { College } from '@/types';

function CollegesContent() {
  const searchParams = useSearchParams();

  const initialStream = searchParams.get('streamSlug') || searchParams.get('stream') || 'all';
  const initialSearch = searchParams.get('search') || searchParams.get('q') || '';
  const initialExam = searchParams.get('exam') || '';

  const [search, setSearch] = useState(initialSearch);
  const [selectedStream, setSelectedStream] = useState(initialStream);
  const [selectedOwnership, setSelectedOwnership] = useState('all');
  const [selectedExam, setSelectedExam] = useState(initialExam);
  const [selectedState, setSelectedState] = useState('all');
  const [maxFees, setMaxFees] = useState<number>(3000000);
  const [sortBy, setSortBy] = useState<'nirf' | 'rating' | 'placement' | 'fees'>('nirf');

  const [comparedColleges, setComparedColleges] = useState<College[]>([]);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedCollegeForLead, setSelectedCollegeForLead] = useState<College | null>(null);

  // States available from data
  const availableStates = useMemo(() => {
    const states = new Set(COLLEGES.map((c) => c.state));
    return Array.from(states).sort();
  }, []);

  // Filtered and sorted colleges
  const filteredColleges = useMemo(() => {
    return COLLEGES.filter((college) => {
      // Stream filter
      if (selectedStream !== 'all' && !college.streamSlugs.includes(selectedStream)) {
        return false;
      }
      // Ownership filter
      if (selectedOwnership !== 'all' && college.ownership.toLowerCase() !== selectedOwnership.toLowerCase()) {
        return false;
      }
      // Exam filter
      if (selectedExam && !college.acceptedExams.some((e) => e.toLowerCase().includes(selectedExam.toLowerCase()))) {
        return false;
      }
      // State filter
      if (selectedState !== 'all' && college.state.toLowerCase() !== selectedState.toLowerCase()) {
        return false;
      }
      // Max Fees filter
      const minFee = college.courses[0]?.feesTotal ?? 0;
      if (minFee > maxFees) {
        return false;
      }
      // Text search
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = college.name.toLowerCase().includes(q) || college.shortName.toLowerCase().includes(q);
        const matchesLocation = college.city.toLowerCase().includes(q) || college.state.toLowerCase().includes(q);
        const matchesCourses = college.courses.some((c) => c.name.toLowerCase().includes(q));
        if (!matchesName && !matchesLocation && !matchesCourses) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'nirf') {
        return (a.nirfRank ?? 999) - (b.nirfRank ?? 999);
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'placement') {
        const pA = a.placements[0]?.avgPackage ?? 0;
        const pB = b.placements[0]?.avgPackage ?? 0;
        return pB - pA;
      }
      if (sortBy === 'fees') {
        const fA = a.courses[0]?.feesTotal ?? 9999999;
        const fB = b.courses[0]?.feesTotal ?? 9999999;
        return fA - fB;
      }
      return 0;
    });
  }, [search, selectedStream, selectedOwnership, selectedExam, selectedState, maxFees, sortBy]);

  const handleToggleCompare = (college: College) => {
    if (comparedColleges.some((c) => c.id === college.id)) {
      setComparedColleges(comparedColleges.filter((c) => c.id !== college.id));
    } else {
      if (comparedColleges.length >= 3) {
        alert('You can compare a maximum of 3 colleges at once.');
        return;
      }
      setComparedColleges([...comparedColleges, college]);
    }
  };

  const handleResetFilters = () => {
    setSearch('');
    setSelectedStream('all');
    setSelectedOwnership('all');
    setSelectedExam('');
    setSelectedState('all');
    setMaxFees(3000000);
    setSortBy('nirf');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenLeadModal={() => setLeadModalOpen(true)} />

      {/* Page Title & Search Header */}
      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                College Directory
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                Explore Top Colleges in India ({filteredColleges.length})
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Compare verified NIRF ratings, fee structures, cutoffs, and placements across all 5 major streams.
              </p>
            </div>

            {/* Quick Search */}
            <div className="w-full md:w-80">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter colleges by name or city..."
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-blue-500"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Filter & Listing Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-5 sticky top-24">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <Filter className="w-4 h-4 text-blue-600" />
                  <span>Filters</span>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-blue-600 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              </div>

              {/* Stream Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Academic Stream
                </label>
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:bg-white focus:border-blue-500"
                >
                  <option value="all">All Streams</option>
                  {STREAMS.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} ({s.shortCode})
                    </option>
                  ))}
                </select>
              </div>

              {/* Ownership Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Institute Ownership
                </label>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {['all', 'Government', 'Private', 'Deemed'].map((own) => (
                    <label
                      key={own}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="ownership"
                        checked={selectedOwnership.toLowerCase() === own.toLowerCase()}
                        onChange={() => setSelectedOwnership(own)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{own === 'all' ? 'All Ownership Types' : own}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* State Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  State / Region
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:bg-white focus:border-blue-500"
                >
                  <option value="all">All States</option>
                  {availableStates.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Accepted Exam */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Accepted Entrance Exam
                </label>
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:bg-white focus:border-blue-500"
                >
                  <option value="">Any Entrance Exam</option>
                  {EXAMS.map((ex) => (
                    <option key={ex.shortName} value={ex.shortName}>
                      {ex.shortName} ({ex.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Max Fees Slider */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Max Total Fees
                  </label>
                  <span className="text-xs font-bold text-blue-600">
                    ₹{(maxFees / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="3000000"
                  step="50000"
                  value={maxFees}
                  onChange={(e) => setMaxFees(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹50K</span>
                  <span>₹30 Lakhs</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Colleges Results Grid */}
          <main className="lg:col-span-3 space-y-6">
            {/* Top Toolbar / Sort Controls */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-600">
                Showing <strong className="text-slate-900">{filteredColleges.length}</strong> verified colleges
              </span>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-bold focus:outline-hidden"
                >
                  <option value="nirf">NIRF Ranking (Top First)</option>
                  <option value="rating">Highest Student Rating</option>
                  <option value="placement">Average CTC (High to Low)</option>
                  <option value="fees">Total Tuition (Low to High)</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredColleges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredColleges.map((college) => (
                  <CollegeCard
                    key={college.id}
                    college={college}
                    isCompared={comparedColleges.some((c) => c.id === college.id)}
                    onToggleCompare={handleToggleCompare}
                    onOpenLeadModal={(c) => {
                      setSelectedCollegeForLead(c);
                      setLeadModalOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">No Colleges Found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  We could not find any colleges matching your active filter criteria. Try loosening your fee or state filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />

      {/* Floating Compare Bar */}
      <CompareFloatingBar
        selectedColleges={comparedColleges}
        onRemove={(id) => setComparedColleges(comparedColleges.filter((c) => c.id !== id))}
        onClear={() => setComparedColleges([])}
      />

      {/* Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        college={selectedCollegeForLead}
      />
    </div>
  );
}

export default function CollegesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 p-8 text-center text-slate-500">Loading College Discovery Portal...</div>}>
      <CollegesContent />
    </Suspense>
  );
}
