import React from 'react';
import { UtensilsCrossed, MessageSquareShare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FinalCtaProps {
  onExploreMenu: () => void;
  onOrderWhatsApp: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onExploreMenu, onOrderWhatsApp }) => {
  return (
    <section className="py-28 sm:py-40 bg-[#FAF8F3] relative overflow-hidden text-center border-t border-[#D9D5CC]/50">
      
      {/* Background Architectural Blueprint grid & radiant warm glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-stone"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6B56C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Subtle architectural top marker */}
        <div className="inline-flex items-center justify-center gap-3">
          <span className="w-10 h-[1.5px] bg-[#6B4F3B]"></span>
          <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
            OM SAI KI RASOI · CIVIL LINES
          </span>
          <span className="w-10 h-[1.5px] bg-[#6B4F3B]"></span>
        </div>

        {/* Huge Whitespace-Driven Heading */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1A1A1A] leading-[1.05] tracking-tight">
          Come Hungry. <br />
          <span className="italic font-light text-[#6B4F3B]">Leave Happy.</span>
        </h2>

        {/* Supporting Line */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#1A1A1A]/80 font-light max-w-xl mx-auto">
          &ldquo;Good food tastes better when shared.&rdquo;
        </p>

        {/* Subtle Architectural Divider Line with Center Rhombus */}
        <div className="flex items-center justify-center gap-2 py-4">
          <div className="w-20 h-[1px] bg-[#D9D5CC]"></div>
          <div className="w-2 h-2 rotate-45 border border-[#D6B56C] bg-[#FAF8F3]"></div>
          <div className="w-20 h-[1px] bg-[#D9D5CC]"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs uppercase tracking-[0.18em] font-ui font-medium hover:bg-[#6B4F3B] transition-all duration-300 shadow-md active:scale-98"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D6B56C]" />
            <span>Explore Menu</span>
          </button>

          <button
            onClick={onOrderWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#1A1A1A] text-xs uppercase tracking-[0.18em] font-ui font-medium border border-[#D9D5CC] hover:border-[#6B4F3B] hover:text-[#6B4F3B] transition-all duration-300 shadow-xs active:scale-98"
          >
            <MessageSquareShare className="w-4 h-4 text-[#7A8B5A]" />
            <span>Order on WhatsApp</span>
          </button>
        </div>

        <p className="text-xs text-[#1A1A1A]/50 font-sans pt-6">
          11A/9/1, Near High Court, M.G., Civil Lines, Prayagraj · Open until 10:30 PM daily
        </p>

      </div>
    </section>
  );
};
