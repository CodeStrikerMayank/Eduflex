'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StreamTabs from '@/components/StreamTabs';
import { ARTICLES } from '@/data/mockData';

export default function ArticlesPage() {
  const [selectedStream, setSelectedStream] = useState('all');

  const filtered = ARTICLES.filter((a) => {
    if (selectedStream !== 'all' && a.streamSlug !== selectedStream) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>EduFlex Editorial</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Education News, Exam Guides & Admission Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Expert analysis, study schedules, cutoff changes, and ranking breakdowns for students and parents.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-8 space-y-6 flex-1">
        <StreamTabs
          selectedStream={selectedStream}
          onSelectStream={setSelectedStream}
          showAllOption={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <Link
              key={art.slug}
              href={`/articles/${art.slug}`}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{art.publishedAt}</span>
                    <span>•</span>
                    <span>{art.readTimeMinutes} min read</span>
                  </div>

                  <h3 className="font-black text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
                <span className="font-semibold">{art.authorName}</span>
                <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
