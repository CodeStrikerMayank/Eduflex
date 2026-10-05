import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';
import { STREAMS } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  Edu<span className="text-blue-400">Flex</span>
                </span>
                <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-sm bg-blue-950 text-blue-300 border border-blue-800">
                  DISCOVERY
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India’s next-generation higher education discovery platform. Helping over 2.5 million students choose the right college, course, and career with verified data and admission prediction tools.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified NIRF, AICTE, and UGC data sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% Free unbiased student guidance & cutoffs</span>
              </div>
            </div>
          </div>

          {/* Academic Streams */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Academic Streams
            </h4>
            <ul className="space-y-2.5 text-sm">
              {STREAMS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/stream/${s.slug}`}
                    className="hover:text-blue-400 transition-colors flex items-center justify-between"
                  >
                    <span>{s.name} Colleges</span>
                    <span className="text-[11px] text-slate-500 font-mono">{s.shortCode}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Exams */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Top Entrance Exams
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/exams/jee-main" className="hover:text-blue-400 transition-colors">
                  JEE Main 2027
                </Link>
              </li>
              <li>
                <Link href="/exams/jee-advanced" className="hover:text-blue-400 transition-colors">
                  JEE Advanced 2027
                </Link>
              </li>
              <li>
                <Link href="/exams/cat" className="hover:text-blue-400 transition-colors">
                  CAT 2026 (IIM Admissions)
                </Link>
              </li>
              <li>
                <Link href="/exams/neet-ug" className="hover:text-blue-400 transition-colors">
                  NEET UG 2027
                </Link>
              </li>
              <li>
                <Link href="/exams/clat" className="hover:text-blue-400 transition-colors">
                  CLAT 2027 (NLUs)
                </Link>
              </li>
              <li>
                <Link href="/exams/nid-dat" className="hover:text-blue-400 transition-colors">
                  NID DAT (Design Aptitude)
                </Link>
              </li>
            </ul>
          </div>

          {/* Decision Tools & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Discovery Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/predictor" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>College Predictor</span>
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-blue-400 transition-colors">
                  Compare Colleges Side-by-Side
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="hover:text-blue-400 transition-colors">
                  NIRF 2025 Rankings
                </Link>
              </li>
              <li>
                <Link href="/discussions" className="hover:text-blue-400 transition-colors">
                  Student Q&A Community
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-blue-400 transition-colors">
                  Admission Articles & Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} EduFlex Technologies. All rights reserved. Data gathered from official regulatory gazettes, NIRF portals, and verified university websites.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-400">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/moderation" className="hover:text-slate-400">Review Moderation Policy</Link>
            <Link href="/contact" className="hover:text-slate-400">Contact Counselor</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
