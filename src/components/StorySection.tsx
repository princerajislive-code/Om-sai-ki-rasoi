import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Architectural Numbered Marker */}
        <div className="flex items-center justify-between border-b border-[#D9D5CC] pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold">
              01 — OUR STORY
            </span>
            <span className="w-12 h-[1px] bg-[#D9D5CC]"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/60 font-medium">
              Architectural Ethos & Soul
            </span>
          </div>
          <span className="text-[11px] text-[#1A1A1A]/40 font-mono hidden sm:inline-block">
            PRAYAGRAJ · EST. CIVIL LINES
          </span>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Editorial Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light text-[#1A1A1A] leading-[1.08] tracking-tight">
                Good Food. <br />
                <span className="font-normal italic text-[#6B4F3B]">Warm People.</span> <br />
                Memorable Moments.
              </h2>
            </div>

            <div className="h-[2px] w-20 bg-[#D6B56C]"></div>

            {/* Smaller Story */}
            <p className="font-serif text-xl sm:text-2xl text-[#1A1A1A]/85 leading-relaxed font-light">
              &ldquo;Om Sai Ki Rasoi brings together comforting flavours, quality ingredients
              and a welcoming atmosphere designed for everyday meals and special family moments.&rdquo;
            </p>

            <p className="text-base text-[#1A1A1A]/70 leading-relaxed font-sans font-normal max-w-lg">
              Set in the stately avenues of Civil Lines near the Prayagraj High Court, we envisioned 
              a culinary sanctuary where traditional Indian warmth meets Scandinavian clarity. We believe 
              great dining isn&apos;t about pretension—it&apos;s about pure ghee, slow charcoal embers, 
              crisp breads, and sharing laughter with the people who matter most.
            </p>

            {/* Three architectural pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D9D5CC]/60">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#6B4F3B]">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">Sanctuary</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/70">Calm acoustics and generous booth spacing.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#7A8B5A]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">Integrity</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/70">No artificial colors, unadulterated spices.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#D6B56C]">
                  <Heart className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">Inclusive</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/70">Abundant pure vegetarian and vegan choices.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Restaurant & Culinary Imagery with Editorial Framing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D9D5CC] bg-[#FAF8F3] group">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200"
                  alt="Family dining at Om Sai Ki Rasoi Prayagraj"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white/95 border-t border-[#D9D5CC]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B4F3B]">
                    Civil Lines Gathering Space
                  </span>
                  <h4 className="font-serif text-lg text-[#1A1A1A] mt-0.5">
                    Designed for conversations that linger.
                  </h4>
                </div>
                <div className="text-right sm:border-l sm:border-[#D9D5CC] sm:pl-4">
                  <span className="text-xs font-mono text-[#7A8B5A] block">11:00 AM – 10:30 PM</span>
                  <span className="text-[11px] text-[#1A1A1A]/60">Daily Family Service</span>
                </div>
              </div>
            </div>

            {/* Small Architectural Note Card */}
            <div className="p-6 rounded-xl border border-[#D9D5CC] bg-white/60 backdrop-blur-sm grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 block font-semibold">
                  Cuisine Discipline
                </span>
                <span className="font-serif text-base text-[#1A1A1A] font-medium">
                  North Indian, Mughlai, Continental & Chinese
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 block font-semibold">
                  Location Proximity
                </span>
                <span className="font-serif text-base text-[#1A1A1A] font-medium">
                  Steps from High Court, M.G. Marg
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
