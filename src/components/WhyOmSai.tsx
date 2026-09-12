import React from 'react';
import {
  Leaf,
  HeartHandshake,
  Sparkles,
  Home,
  ShieldCheck,
  Users,
  Award,
  BadgeIndianRupee
} from 'lucide-react';
import { WHY_OM_SAI } from '../data/restaurantData';

const ICON_MAP: Record<string, React.ElementType> = {
  Leaf,
  HeartHandshake,
  Sparkles,
  Home,
  ShieldCheck,
  Users,
  Award,
  Banknote: BadgeIndianRupee
};

export const WhyOmSai: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D9D5CC] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
                06 — THE OM SAI PROMISE
              </span>
              <span className="w-8 h-[1px] bg-[#D9D5CC]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight">
              More Than Just a Meal
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#1A1A1A]/70 font-sans mt-4 md:mt-0">
            A quiet commitment to clean sourcing, genuine hospitality, and uncompromised quality that has earned Prayagraj’s trust.
          </p>
        </div>

        {/* 8 Clean Architectural Feature Cards (No excessive glass, crisp borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_OM_SAI.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName] || Sparkles;

            return (
              <div
                key={item.title}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#D9D5CC] hover:border-[#6B4F3B] transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F3] border border-[#D9D5CC] flex items-center justify-center text-[#6B4F3B] group-hover:bg-[#6B4F3B] group-hover:text-[#FAF8F3] transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="font-mono text-[11px] text-[#1A1A1A]/40">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1A1A] mb-2 group-hover:text-[#6B4F3B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Seal Strip */}
        <div className="mt-14 p-6 rounded-2xl border border-[#D9D5CC] bg-white/70 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light block">100%</span>
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#7A8B5A]">Pure Veg & Vegan Friendly</span>
          </div>
          <div className="w-[1px] h-8 bg-[#D9D5CC] hidden sm:block"></div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light block">4.3 ★</span>
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#6B4F3B]">86+ Verified Reviews</span>
          </div>
          <div className="w-[1px] h-8 bg-[#D9D5CC] hidden sm:block"></div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light block">10:30 PM</span>
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#1A1A1A]/70">Late Dining in Civil Lines</span>
          </div>
        </div>

      </div>
    </section>
  );
};
