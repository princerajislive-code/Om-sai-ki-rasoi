import React from 'react';
import { Star, ArrowDown, MessageSquareShare, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onOrderWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOrderWhatsApp }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF8F3]"
    >
      {/* Background Architectural Canvas with subtle warm lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6B56C]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#7A8B5A]/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute inset-0 bg-grid-stone opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Editorial Typography and CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
          
          {/* Small Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#6B4F3B]"></span>
            <span className="text-xs uppercase tracking-[0.28em] font-ui font-semibold text-[#6B4F3B]">
              OM SAI KI RASOI · PRAYAGRAJ
            </span>
          </div>

          {/* Massive Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#1A1A1A]">
            Where Every Meal <br />
            <span className="italic font-light text-[#6B4F3B]">Feels Like Home</span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-xl text-base sm:text-lg text-[#1A1A1A]/75 font-sans leading-relaxed font-normal">
            Thoughtfully prepared food, warm hospitality and a welcoming space for families,
            friends and unforgettable moments in the heart of Civil Lines.
          </p>

          {/* Key Service Highlights in Scandinavian minimal pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
            <span className="px-3.5 py-1 text-xs tracking-wider uppercase font-medium bg-[#1A1A1A]/5 text-[#1A1A1A] rounded-full border border-[#D9D5CC]/80">
              All You Can Eat
            </span>
            <span className="px-3.5 py-1 text-xs tracking-wider uppercase font-medium bg-[#7A8B5A]/10 text-[#7A8B5A] rounded-full border border-[#7A8B5A]/30">
              Vegan Options
            </span>
            <span className="px-3.5 py-1 text-xs tracking-wider uppercase font-medium bg-[#6B4F3B]/10 text-[#6B4F3B] rounded-full border border-[#6B4F3B]/30">
              Pure Family Seating
            </span>
            <span className="px-3.5 py-1 text-xs tracking-wider uppercase font-medium text-[#1A1A1A]/60 font-mono">
              Open till 10:30 PM
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              id="hero-explore-menu-btn"
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs uppercase tracking-[0.18em] font-ui font-medium transition-all duration-300 hover:bg-[#6B4F3B] hover:shadow-lg active:scale-98"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#D6B56C]" />
              <span>Explore Menu</span>
            </button>

            <button
              id="hero-whatsapp-order-btn"
              onClick={onOrderWhatsApp}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#1A1A1A] text-xs uppercase tracking-[0.18em] font-ui font-medium border border-[#D9D5CC] hover:border-[#6B4F3B] hover:text-[#6B4F3B] transition-all duration-300 shadow-sm active:scale-98"
            >
              <MessageSquareShare className="w-4 h-4 text-[#7A8B5A]" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Floating Information Panels */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#D9D5CC]/60">
            {/* Google Rating Panel */}
            <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-[#D9D5CC]/60">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#D6B56C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-serif text-lg font-bold text-[#1A1A1A]">
                    {RESTAURANT_INFO.googleRating}
                  </span>
                  <span className="text-[11px] text-[#1A1A1A]/60 font-sans">
                    Google Rating ({RESTAURANT_INFO.reviewCount} Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price Per Person Badge */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6B4F3B]">
                Affordable Luxury
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-[#1A1A1A]">
                {RESTAURANT_INFO.priceRange} <span className="text-xs text-[#1A1A1A]/60 font-sans">/ person</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Architectural Framing & Cinematic Presence */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Outer Architectural Border Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D9D5CC] bg-white group">
              {/* Image with subtle hover/cinematic zoom */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200"
                  alt="Om Sai Ki Rasoi Prayagraj dining interior"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-[#1A1A1A]/20 to-transparent"></div>
              </div>

              {/* Inset Architectural Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#D9D5CC]/80 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B4F3B] font-semibold">
                      Hospitality & Ambiance
                    </p>
                    <p className="font-serif text-sm font-medium text-[#1A1A1A] mt-0.5">
                      Civil Lines, Near High Court
                    </p>
                  </div>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7A8B5A] animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset architectural line */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-[#D6B56C]/50 -z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.22em] text-[#1A1A1A]/50 font-ui font-medium">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-8 bg-[#D9D5CC] relative overflow-hidden">
          <div className="w-full h-1/2 bg-[#6B4F3B] animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
