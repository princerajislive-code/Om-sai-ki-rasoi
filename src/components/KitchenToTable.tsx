import React from 'react';
import { VALUES_LIST } from '../data/restaurantData';
import { Flame, Sparkles, ChefHat } from 'lucide-react';

export const KitchenToTable: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#1A1A1A] text-[#FAF8F3] overflow-hidden">
      {/* Background Cinematic Visual with dark luxury scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600"
          alt="Master chef cooking over clay oven at Om Sai Ki Rasoi"
          className="w-full h-full object-cover opacity-35 filter brightness-75 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-[#1A1A1A]/90"></div>
      </div>

      {/* Blueprint Architectural Lines (Subtle SVG Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="architectural-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D6B56C" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#architectural-grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Eyebrow & Numbered Marker */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
          <span className="font-mono text-xs text-[#D6B56C] tracking-widest uppercase">
            04 — CULINARY ARCHITECTURE
          </span>
          <span className="w-12 h-[1px] bg-[#D6B56C]/50"></span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#FAF8F3]/60 font-medium">
            From Kitchen To Table
          </span>
        </div>

        {/* Overlay Editorial Typography */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FAF8F3] leading-[1.08] tracking-tight">
            Prepared With Intention. <br />
            <span className="italic font-normal text-[#D6B56C]">Served With Warmth.</span>
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-[#FAF8F3]/80 font-sans leading-relaxed max-w-2xl font-light">
            Behind the tranquil dining hall lies a kitchen dedicated to old-school craft. 
            No shortcuts, no pre-made synthetic pastes. Only whole spices, pure clarified butter, 
            and recipes perfected over decades.
          </p>
        </div>

        {/* Three Core Values - Architectural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#D9D5CC]/20">
          {VALUES_LIST.map((val, idx) => {
            const icons = [Sparkles, Flame, ChefHat];
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={val.title}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#FAF8F3]/5 backdrop-blur-sm border border-[#FAF8F3]/10 hover:border-[#D6B56C]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#D6B56C]">
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#D6B56C]/10 flex items-center justify-center text-[#D6B56C] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#FAF8F3] mb-2 tracking-tight">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#FAF8F3]/70 font-sans leading-relaxed">
                  {val.desc}
                </p>

                {/* Subtle blueprint corner accent */}
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#D6B56C]/40"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
