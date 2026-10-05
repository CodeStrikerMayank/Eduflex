'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Award, 
  Star, 
  TrendingUp, 
  Building2, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  FileText 
} from 'lucide-react';
import { College } from '@/types';

interface CollegeCardProps {
  college: College;
  isCompared?: boolean;
  onToggleCompare?: (college: College) => void;
  onOpenLeadModal?: (college: College) => void;
}

export default function CollegeCard({
  college,
  isCompared = false,
  onToggleCompare,
  onOpenLeadModal
}: CollegeCardProps) {
  const placement = college.placements[0];
  const primaryCourse = college.courses[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:border-blue-300">
      {/* Top Banner / Image Header */}
      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
        <img
          src={college.bannerUrl}
          alt={college.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {college.nirfRank && (
              <span className="flex items-center gap-1 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md shadow-sm">
                <Award className="w-3.5 h-3.5" />
                NIRF #{college.nirfRank}
              </span>
            )}
            <span className="bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-semibold px-2 py-0.5 rounded-md">
              {college.ownership}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-emerald-600/90 backdrop-blur-xs text-white text-xs font-bold px-2 py-1 rounded-md shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
            <span>{college.rating}</span>
            <span className="text-[10px] text-emerald-100">({college.reviewCount})</span>
          </div>
        </div>

        {/* College Identity on Banner Bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end gap-3">
          <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md shrink-0 border border-white/20">
            <img
              src={college.logoUrl}
              alt={college.shortName}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-white font-bold text-base sm:text-lg leading-tight truncate group-hover:text-blue-300 transition-colors">
              {college.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                {college.city}, {college.state}
              </span>
              <span>•</span>
              <span>Est. {college.establishedYear}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body Information Grid */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        {/* Accreditation and stream highlights */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
          <span className="bg-slate-100 px-2 py-0.5 rounded-md font-medium text-slate-700">
            {college.accreditation}
          </span>
          <span className="bg-slate-100 px-2 py-0.5 rounded-md font-medium text-slate-700">
            {college.approvedBy}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">
            {college.campusSizeAcres} Acre Campus
          </span>
        </div>

        {/* Stat Highlights: Placements & Fees */}
        <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <div>
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              <span>Avg Package</span>
            </div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">
              {placement ? `₹${placement.avgPackage} LPA` : 'N/A'}
            </div>
            <div className="text-[10px] text-slate-400">
              Highest: ₹{placement?.highestPackage ?? 'N/A'} LPA
            </div>
          </div>

          <div>
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-blue-600" />
              <span>Annual Fees</span>
            </div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">
              {primaryCourse 
                ? (primaryCourse.feesAnnual < 10000 
                    ? `₹${primaryCourse.feesAnnual.toLocaleString('en-IN')}` 
                    : `₹${(primaryCourse.feesAnnual / 100000).toFixed(2)} Lakhs`)
                : '₹1.5 - 2.5 L'
              }
            </div>
            <div className="text-[10px] text-slate-400 truncate">
              {primaryCourse?.name ?? 'Top Program'}
            </div>
          </div>
        </div>

        {/* Accepted Entrance Exams */}
        <div>
          <div className="text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
            Accepted Exams
          </div>
          <div className="flex flex-wrap gap-1.5">
            {college.acceptedExams.slice(0, 3).map((exam) => (
              <span
                key={exam}
                className="bg-blue-50 text-blue-700 border border-blue-200/80 text-[11px] font-semibold px-2 py-0.5 rounded-md"
              >
                {exam}
              </span>
            ))}
            {college.acceptedExams.length > 3 && (
              <span className="text-[11px] text-slate-400 px-1 py-0.5">
                +{college.acceptedExams.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={`/colleges/${college.slug}`}
            className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <span>Explore College</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {onToggleCompare && (
            <button
              onClick={() => onToggleCompare(college)}
              className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                isCompared
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title="Add to compare"
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">{isCompared ? 'Added' : 'Compare'}</span>
            </button>
          )}

          {onOpenLeadModal && (
            <button
              onClick={() => onOpenLeadModal(college)}
              className="p-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer"
              title="Download Brochure / Get Guidance"
            >
              <FileText className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
