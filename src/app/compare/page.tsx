'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Scale, 
  Plus, 
  X, 
  Award, 
  MapPin, 
  TrendingUp, 
  GraduationCap, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import { COLLEGES } from '@/data/mockData';
import { College } from '@/types';

function CompareContent() {
  const searchParams = useSearchParams();
  const collegeSlugsQuery = searchParams.get('colleges');

  // Initial selected colleges from query or default top 2
  const initialSelected = useMemo(() => {
    if (collegeSlugsQuery) {
      const slugs = collegeSlugsQuery.split(',');
      const found = COLLEGES.filter((c) => slugs.includes(c.slug));
      if (found.length > 0) return found.slice(0, 3);
    }
    return [COLLEGES[0], COLLEGES[1]]; // IIT Madras & IIT Bombay
  }, [collegeSlugsQuery]);

  const [selectedColleges, setSelectedColleges] = useState<College[]>(initialSelected);
  const [selectorOpenForIndex, setSelectorOpenForIndex] = useState<number | null>(null);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [collegeForLead, setCollegeForLead] = useState<College | null>(null);

  const handleRemoveCollege = (id: string) => {
    if (selectedColleges.length <= 1) {
      alert('You need at least 1 college in comparison view.');
      return;
    }
    setSelectedColleges(selectedColleges.filter((c) => c.id !== id));
  };

  const handleSelectCollege = (college: College, index: number) => {
    const updated = [...selectedColleges];
    if (index < updated.length) {
      updated[index] = college;
    } else {
      updated.push(college);
    }
    setSelectedColleges(updated);
    setSelectorOpenForIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenLeadModal={() => setLeadModalOpen(true)} />

      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                <Scale className="w-4 h-4" />
                <span>Decision Support</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                Compare Colleges Side-by-Side
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Evaluate rankings, tuition fees, placement averages, and campus infrastructure across up to 3 institutes.
              </p>
            </div>

            {selectedColleges.length < 3 && (
              <button
                onClick={() => setSelectorOpenForIndex(selectedColleges.length)}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add 3rd College</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Compare Matrix */}
      <div className="container mx-auto px-4 lg:px-8 py-10 flex-1 overflow-x-auto">
        <div className="min-w-[700px] bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          {/* Header Row: College Profile Cards */}
          <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50/50">
            <div className="p-6 flex flex-col justify-end border-r border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Comparing Parameters
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1">
                Key Comparison Matrix
              </h3>
            </div>

            {selectedColleges.map((college, idx) => (
              <div key={college.id} className="p-6 border-r border-slate-200 relative flex flex-col justify-between">
                <button
                  onClick={() => handleRemoveCollege(college.id)}
                  className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                  title="Remove from comparison"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-white p-1.5 border border-slate-200 shadow-xs">
                    <img src={college.logoUrl} alt={college.shortName} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 leading-snug">
                      {college.name}
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      {college.city}, {college.state}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    href={`/colleges/${college.slug}`}
                    className="flex-1 py-1.5 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 rounded-lg text-xs font-bold text-center transition-all"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => {
                      setCollegeForLead(college);
                      setLeadModalOpen(true);
                    }}
                    className="py-1.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold"
                  >
                    Brochure
                  </button>
                </div>
              </div>
            ))}

            {/* Empty slot if less than 3 */}
            {selectedColleges.length < 3 && (
              <div className="p-6 flex flex-col items-center justify-center text-center space-y-3 border-r border-slate-200 bg-slate-50/80 border-dashed">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Plus className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-slate-700">Add Another College</div>
                <button
                  onClick={() => setSelectorOpenForIndex(selectedColleges.length)}
                  className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  Select College
                </button>
              </div>
            )}
          </div>

          {/* ROW: NIRF Rank */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              NIRF 2025 Rank
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-extrabold text-slate-900">
                {c.nirfRank ? (
                  <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md">
                    NIRF #{c.nirfRank}
                  </span>
                ) : 'Unranked'}
              </div>
            ))}
          </div>

          {/* ROW: Student Rating */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Verified Student Rating
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-bold text-slate-900 flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>{c.rating} / 5</span>
                <span className="text-slate-400 font-normal">({c.reviewCount} reviews)</span>
              </div>
            ))}
          </div>

          {/* ROW: Ownership */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Institute Ownership
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-semibold text-slate-800">
                {c.ownership}
              </div>
            ))}
          </div>

          {/* ROW: Average Placement */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Average Salary Package
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-black text-blue-700 text-sm">
                ₹{c.placements[0]?.avgPackage ?? 'N/A'} LPA
              </div>
            ))}
          </div>

          {/* ROW: Highest Placement */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Highest Salary Package
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-black text-emerald-700 text-sm">
                ₹{c.placements[0]?.highestPackage ?? 'N/A'} LPA
              </div>
            ))}
          </div>

          {/* ROW: Annual Fees */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Annual Tuition Fee
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-bold text-slate-900">
                ₹{(c.courses[0]?.feesAnnual / 100000).toFixed(2)} Lakhs/yr
              </div>
            ))}
          </div>

          {/* ROW: Total Course Fees */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Total Course Tuition
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-extrabold text-slate-900">
                ₹{(c.courses[0]?.feesTotal / 100000).toFixed(2)} Lakhs
              </div>
            ))}
          </div>

          {/* ROW: Accepted Entrance Exams */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Accepted Entrance Exams
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200">
                <div className="flex flex-wrap gap-1">
                  {c.acceptedExams.map((ex) => (
                    <span key={ex} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-sm font-semibold text-[10px]">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ROW: Campus Size */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Campus Size (Acres)
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 font-medium text-slate-800">
                {c.campusSizeAcres} Acres
              </div>
            ))}
          </div>

          {/* ROW: Accreditation */}
          <div className="grid grid-cols-4 border-b border-slate-100 items-center text-xs">
            <div className="p-4 font-bold text-slate-700 bg-slate-50/30 border-r border-slate-200">
              Accreditation & Approvals
            </div>
            {selectedColleges.map((c) => (
              <div key={c.id} className="p-4 border-r border-slate-200 text-slate-700">
                {c.accreditation} ({c.approvedBy})
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* College Picker Modal */}
      {selectorOpenForIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900">Select College to Compare</h3>
              <button onClick={() => setSelectorOpenForIndex(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              {COLLEGES.filter((c) => !selectedColleges.some((sc) => sc.id === c.id)).map((college) => (
                <button
                  key={college.id}
                  onClick={() => handleSelectCollege(college, selectorOpenForIndex)}
                  className="w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-left border border-slate-100 flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img src={college.logoUrl} alt={college.shortName} className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">{college.name}</div>
                      <div className="text-[11px] text-slate-500">NIRF #{college.nirfRank ?? 'N/A'} • {college.city}</div>
                    </div>
                  </div>
                  <Plus className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        college={collegeForLead}
      />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading College Comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}
