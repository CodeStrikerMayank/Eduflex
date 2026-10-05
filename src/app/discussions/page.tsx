'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  ThumbsUp, 
  CheckCircle2, 
  HelpCircle, 
  Plus, 
  Search, 
  Sparkles,
  X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StreamTabs from '@/components/StreamTabs';
import { QUESTIONS, COLLEGES, STREAMS } from '@/data/mockData';
import { Question } from '@/types';

export default function DiscussionsPage() {
  const [questions, setQuestions] = useState<Question[]>(QUESTIONS);
  const [selectedStream, setSelectedStream] = useState('all');
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCollegeSlug, setNewCollegeSlug] = useState(COLLEGES[0].slug);

  const filteredQuestions = questions.filter((q) => {
    if (selectedStream !== 'all' && q.streamSlug !== selectedStream) return false;
    return true;
  });

  const handleUpvote = (id: string) => {
    setQuestions(questions.map((q) => {
      if (q.id === id) {
        return { ...q, upvotes: q.upvotes + 1 };
      }
      return q;
    }));
  };

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const matchedCollege = COLLEGES.find((c) => c.slug === newCollegeSlug);

    const created: Question = {
      id: `q-${Date.now()}`,
      collegeId: matchedCollege?.id,
      collegeName: matchedCollege?.name,
      streamSlug: matchedCollege?.streamSlugs[0] || 'engineering',
      authorName: newAuthor.trim() || 'Anonymous Student',
      title: newTitle,
      body: newBody,
      upvotes: 1,
      answersCount: 0,
      createdAt: 'Just now',
      answers: []
    };

    setQuestions([created, ...questions]);
    setAskModalOpen(false);
    setNewTitle('');
    setNewBody('');
    setNewAuthor('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Student Discussion Community</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                Ask Questions & Get Senior Guidance
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Real admissions advice, cutoff doubts, and campus life experiences answered by verified students and alumni.
              </p>
            </div>

            <button
              onClick={() => setAskModalOpen(true)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Ask a Question</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 lg:px-8 py-8 space-y-6 flex-1">
        <StreamTabs
          selectedStream={selectedStream}
          onSelectStream={setSelectedStream}
          showAllOption={true}
        />

        <div className="space-y-4">
          {filteredQuestions.map((q) => (
            <div
              key={q.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {q.collegeName && (
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {q.collegeName}
                      </span>
                    )}
                    <span className="text-xs text-slate-400">Asked by {q.authorName} • {q.createdAt}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {q.title}
                  </h3>
                  {q.body && <p className="text-xs text-slate-600 leading-relaxed">{q.body}</p>}
                </div>

                <button
                  onClick={() => handleUpvote(q.id)}
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer shrink-0"
                  title="Upvote question"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-xs font-bold mt-0.5">{q.upvotes}</span>
                </button>
              </div>

              {/* Answers */}
              {q.answers.length > 0 ? (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {q.answers.map((ans) => (
                    <div key={ans.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>{ans.authorName}</span>
                          <span className="text-[10px] text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded-sm font-semibold">
                            {ans.authorBadge}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400">{ans.createdAt}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">{ans.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 italic">
                  No answers yet. Be the first senior student or alumni to reply.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ask Question Modal */}
      {askModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900">Post a New Question</h3>
              <button onClick={() => setAskModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateQuestion} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Question Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. What is the cutoff for IIT Bombay CSE in round 6?"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tag Relevant College
                </label>
                <select
                  value={newCollegeSlug}
                  onChange={(e) => setNewCollegeSlug(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                >
                  {COLLEGES.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Details / Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={newBody}
                  onChange={(e) => setNewBody(e.target.value)}
                  placeholder="Provide context like your exam score, reservation category, or specific doubts..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="e.g. Sneha Roy"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                Publish Question
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
