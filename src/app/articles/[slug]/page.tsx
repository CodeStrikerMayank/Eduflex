'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Share2, Sparkles, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ARTICLES } from '@/data/mockData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const related = ARTICLES.filter((a) => a.id !== article.id);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <article className="container mx-auto max-w-4xl px-4 lg:px-8 py-10 flex-1 space-y-8">
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all articles</span>
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase">
              {article.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {article.readTimeMinutes} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 mt-4 pb-6 border-b border-slate-200">
            <span className="font-semibold text-slate-800">By {article.authorName}</span>
            <span>•</span>
            <span>Published on {article.publishedAt}</span>
          </div>
        </div>

        <div className="h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
          <p className="text-base sm:text-lg font-medium text-slate-700 italic border-l-4 border-blue-600 pl-4 bg-blue-50/50 py-3 rounded-r-xl">
            {article.summary}
          </p>

          <p>{article.content}</p>

          <p>
            Candidates preparing for upcoming competitive admission rounds are strongly advised to keep their academic transcripts, category certificates (where applicable), and government identity cards verified in advance to avoid last-minute portal rush.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              Was this article helpful to your college research?
            </span>
            <Link
              href="/predictor"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Try College Predictor</span>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="pt-6 space-y-4">
            <h3 className="text-xl font-black text-slate-900">More from EduFlex Editorial</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors block"
                >
                  <span className="text-[10px] font-bold text-blue-600 uppercase">{rel.category}</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-1 leading-snug">{rel.title}</h4>
                  <div className="text-[11px] text-slate-400 mt-2">{rel.publishedAt}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
