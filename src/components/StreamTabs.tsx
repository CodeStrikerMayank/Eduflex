'use client';

import React from 'react';
import { Cpu, Briefcase, Stethoscope, Scale, Palette, Layers } from 'lucide-react';
import { STREAMS } from '@/data/mockData';

interface StreamTabsProps {
  selectedStream: string;
  onSelectStream: (slug: string) => void;
  showAllOption?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Briefcase,
  Stethoscope,
  Scale,
  Palette
};

export default function StreamTabs({
  selectedStream,
  onSelectStream,
  showAllOption = true
}: StreamTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {showAllOption && (
        <button
          onClick={() => onSelectStream('all')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 cursor-pointer ${
            selectedStream === 'all'
              ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All Streams</span>
        </button>
      )}

      {STREAMS.map((stream) => {
        const Icon = iconMap[stream.iconName] || Layers;
        const isSelected = selectedStream === stream.slug;

        return (
          <button
            key={stream.slug}
            onClick={() => onSelectStream(stream.slug)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 cursor-pointer ${
              isSelected
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600 ring-offset-2'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
            }`}
          >
            <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
            <span>{stream.name}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-sm ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {stream.shortCode}
            </span>
          </button>
        );
      })}
    </div>
  );
}
