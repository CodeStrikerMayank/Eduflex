'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Star, TrendingUp, Building2, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StreamTabs from '@/components/StreamTabs';
import { COLLEGES, STREAMS } from '@/data/mockData';

export default function RankingsPage() {
  const [selectedStream, setSelectedStream] = useState('all');
  const [ownershipFilter, setOwnershipFilter] = useState('all');

  const rankedColleges = COLLEGES.filter((c) => {
    if (selectedStream !== 'all' && !c.streamSlugs.includes(selectedStream)) return false;
    if (ownershipFilter !== 'all' && c.ownership.toLowerCase() !== ownershipFilter.toLowerCase()) return false;
    return true;
  }).sort((a, b) => (a.nirfRank ?? 999) - (b.nirfRank ?? 999));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Ministry of Education MoE Verified</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            NIRF Rankings 2025: Top Higher Education Institutes
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Official National Institutional Ranking Framework (NIRF) ranks and scores across Engineering, MBA, Medical, Law, and Design.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-8 space-y-6 flex-1">
        {/* Stream Filter Bar */}
        <StreamTabs
          selectedStream={selectedStream}
          onSelectStream={setSelectedStream}
          showAllOption={true}
        />

        {/* Ownership Selector */}
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-500">Ownership:</span>
          {['all', 'Government', 'Private', 'Deemed'].map((own) => (
            <button
              key={own}
              onClick={() => setOwnershipFilter(own)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                ownershipFilter === own
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {own === 'all' ? 'All Institutes' : own}
            </button>
          ))}
        </div>

        {/* Rankings Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                  <th className="py-4 px-4 text-center">Rank</th>
                  <th className="py-4 px-4">Institute Details</th>
                  <th className="py-4 px-4">NIRF Score</th>
                  <th className="py-4 px-4">Avg Placement</th>
                  <th className="py-4 px-4">Tuition Fees</th>
                  <th className="py-4 px-4">Rating</th>
                  <th className="py-4 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rankedColleges.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 text-center font-black text-base text-slate-900">
                      {c.nirfRank ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-900">
                          #{c.nirfRank}
                        </span>
                      ) : '-'}
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img src={c.logoUrl} alt={c.shortName} className="w-9 h-9 rounded-xl object-cover border border-slate-200 shrink-0" />
                        <div>
                          <Link href={`/colleges/${c.slug}`} className="font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                            {c.name}
                          </Link>
                          <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>{c.city}, {c.state}</span>
                            <span>•</span>
                            <span className="bg-slate-100 px-1.5 py-0.2 rounded-sm text-[10px] font-semibold">{c.ownership}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-mono font-bold text-slate-800">
                      {c.nirfScore ?? 'N/A'}
                    </td>

                    <td className="py-4 px-4 font-black text-blue-700">
                      ₹{c.placements[0]?.avgPackage ?? 'N/A'} LPA
                    </td>

                    <td className="py-4 px-4 font-semibold text-slate-900">
                      ₹{(c.courses[0]?.feesAnnual / 100000).toFixed(2)} L/yr
                    </td>

                    <td className="py-4 px-4 font-semibold text-slate-800">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                        <span>{c.rating}</span>
                      </span>
                    </td>

                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/colleges/${c.slug}`}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg font-bold text-xs transition-all inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
