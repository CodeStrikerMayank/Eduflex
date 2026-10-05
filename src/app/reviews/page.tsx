'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Plus, CheckCircle2, X, MessageSquare, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StreamTabs from '@/components/StreamTabs';
import { REVIEWS, COLLEGES } from '@/data/mockData';
import { Review } from '@/types';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [selectedCollegeSlug, setSelectedCollegeSlug] = useState(COLLEGES[0].slug);
  const [reviewerName, setReviewerName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [gradYear, setGradYear] = useState('2025');
  const [title, setTitle] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [rating, setRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const college = COLLEGES.find((c) => c.slug === selectedCollegeSlug);

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      collegeId: college?.id || '',
      collegeName: college?.name || 'Selected Institute',
      reviewerName: reviewerName || 'Verified Student',
      courseName: courseName || 'Flagship Program',
      graduationYear: parseInt(gradYear, 10) || 2025,
      ratingOverall: rating,
      ratingInfrastructure: rating,
      ratingFaculty: rating,
      ratingPlacements: rating,
      ratingCampusLife: rating,
      title,
      pros,
      cons,
      createdAt: 'Just now'
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setWriteModalOpen(false);
      setTitle('');
      setPros('');
      setCons('');
      setReviewerName('');
      setCourseName('');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="bg-white border-b border-slate-200 py-8 px-4 lg:px-8 shadow-xs">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Verified Peer Reviews</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                Real Student College Reviews & Ratings
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Honest feedback on infrastructure, faculty quality, placements, hostels, and campus culture.
              </p>
            </div>

            <button
              onClick={() => setWriteModalOpen(true)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Write a College Review</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 lg:px-8 py-10 space-y-6 flex-1">
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <Link href={`/colleges`} className="font-black text-base text-slate-900 hover:text-blue-600">
                    {rev.collegeName}
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {rev.courseName} • Class of {rev.graduationYear}
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>{rev.ratingOverall} / 5</span>
                </div>
              </div>

              <h3 className="font-extrabold text-sm text-slate-800">
                &ldquo;{rev.title}&rdquo;
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100/80">
                  <span className="font-bold text-emerald-900 block mb-0.5">Campus Strengths (Pros):</span>
                  <p className="text-slate-700 leading-relaxed">{rev.pros}</p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100/80">
                  <span className="font-bold text-rose-900 block mb-0.5">Challenges & Cons:</span>
                  <p className="text-slate-700 leading-relaxed">{rev.cons}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Submitted by {rev.reviewerName}</span>
                <span>{rev.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {writeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900">Share Your College Experience</h3>
              <button onClick={() => setWriteModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedMessage ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Review Submitted!</h4>
                <p className="text-xs text-slate-600">Thank you for helping prospective students make informed choices.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Your College
                  </label>
                  <select
                    value={selectedCollegeSlug}
                    onChange={(e) => setSelectedCollegeSlug(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                  >
                    {COLLEGES.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder="e.g. Abhinav K."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Graduation Year
                    </label>
                    <input
                      type="number"
                      required
                      value={gradYear}
                      onChange={(e) => setGradYear(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Degree / Course Taken
                  </label>
                  <input
                    type="text"
                    required
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="e.g. B.Tech Computer Science"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Overall Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-500' : 'text-slate-300'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">{rating} Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Review Headline *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Unmatched coding culture and peer group"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Pros (What did you like?) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                    placeholder="Faculty, hostels, mess, research labs, campus fests..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Cons (Areas for improvement) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                    placeholder="Strict attendance, exam stress, regional climate..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Submit Verified Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
