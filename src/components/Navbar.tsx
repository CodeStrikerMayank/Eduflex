'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  GraduationCap, 
  Search, 
  Compass, 
  Award, 
  Scale, 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  PhoneCall, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';
import { STREAMS } from '@/data/mockData';

interface NavbarProps {
  onOpenLeadModal?: () => void;
}

export default function Navbar({ onOpenLeadModal }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [streamDropdownOpen, setStreamDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Colleges', href: '/colleges', icon: Compass },
    { label: 'Exams', href: '/exams', icon: BookOpen },
    { label: 'Predictor', href: '/predictor', icon: Sparkles, badge: 'AI' },
    { label: 'Compare', href: '/compare', icon: Scale },
    { label: 'Rankings', href: '/rankings', icon: Award },
    { label: 'Q&A', href: '/discussions', icon: HelpCircle },
    { label: 'Articles', href: '/articles' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-linear-to-r from-blue-700 via-indigo-700 to-violet-800 text-white text-xs py-1.5 px-4 font-medium flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Updated 2025-26
            </span>
            <span>NIRF Rankings & Cutoffs Live for Engineering, MBA, Medical, Law & Design</span>
          </span>
          <button 
            onClick={onOpenLeadModal} 
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-blue-100 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3 h-3" />
            Talk to an Expert Counselor (Free)
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight bg-linear-to-r from-blue-700 via-indigo-700 to-violet-900 bg-clip-text text-transparent">
                  EduFlex
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-blue-50 text-blue-700 border border-blue-200">
                  PORTAL
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-none hidden sm:block">
                Colleges • Cutoffs • Predictor
              </p>
            </div>
          </Link>

          {/* Global Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <form action="/colleges" method="GET" className="w-full">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 5,000+ colleges, courses (e.g. B.Tech, MBA), exams..."
                  className="w-full pl-9 pr-24 py-2 text-sm bg-slate-100/80 border border-slate-200 rounded-full focus:bg-white focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-800 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-slate-700">
            {/* Stream Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setStreamDropdownOpen(!streamDropdownOpen)}
                onBlur={() => setTimeout(() => setStreamDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 cursor-pointer"
              >
                <span>Streams</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {streamDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Browse by Stream
                  </div>
                  {STREAMS.map((stream) => (
                    <Link
                      key={stream.slug}
                      href={`/stream/${stream.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-sm font-medium transition-colors"
                      onClick={() => setStreamDropdownOpen(false)}
                    >
                      <span className="font-semibold">{stream.name}</span>
                      <span className="text-xs text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded-sm">
                        {stream.shortCode}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 font-bold' 
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-slate-500" />}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenLeadModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Free Guidance</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <form action="/colleges" method="GET" className="w-full">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="q"
                placeholder="Search colleges, courses, exams..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-lg text-slate-800"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
            Academic Streams
          </div>
          <div className="grid grid-cols-2 gap-2">
            {STREAMS.map((s) => (
              <Link
                key={s.slug}
                href={`/stream/${s.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-xs font-semibold text-slate-800 flex justify-between items-center"
              >
                <span>{s.name}</span>
                <span className="text-[10px] text-slate-400">{s.shortCode}</span>
              </Link>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2">
            Explore Portal
          </div>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 text-sm font-medium text-slate-800"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-1.5 rounded-sm">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal?.();
              }}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm text-center shadow-xs"
            >
              Request Counseling Callback
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
