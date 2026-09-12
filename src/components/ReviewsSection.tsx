import React, { useState } from 'react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, CheckCircle, ExternalLink, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D9D5CC] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
                07 — SOCIAL PROOF & TRUST
              </span>
              <span className="w-8 h-[1px] bg-[#D9D5CC]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight">
              Words From Our Diners
            </h2>
          </div>

          <a
            href={RESTAURANT_INFO.mapsDirectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-ui font-medium text-[#6B4F3B] hover:text-[#1A1A1A] transition-colors mt-4 md:mt-0"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Large Monumental Rating Card */}
          <div className="lg:col-span-4 p-8 sm:p-10 rounded-2xl bg-white border border-[#D9D5CC] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6B4F3B] font-semibold block mb-3">
                Overall Google Assessment
              </span>

              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#1A1A1A] tracking-tighter">
                  {RESTAURANT_INFO.googleRating}
                </span>
                <span className="text-xl text-[#1A1A1A]/40 font-serif">/ 5.0</span>
              </div>

              {/* 5 Stars in Champagne Gold */}
              <div className="flex items-center gap-1.5 my-4 text-[#D6B56C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div className="space-y-1">
                <p className="text-sm font-serif font-medium text-[#1A1A1A]">
                  {RESTAURANT_INFO.reviewCount} Google Reviews
                </p>
                <p className="text-xs text-[#1A1A1A]/60 font-sans">
                  Rated top choice for family meals in Civil Lines, Prayagraj.
                </p>
              </div>
            </div>

            {/* Rating breakdown pills */}
            <div className="pt-6 border-t border-[#D9D5CC] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#1A1A1A]/70">Food Taste & Authenticity</span>
                <span className="font-mono font-medium text-[#7A8B5A]">4.8 ★</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#1A1A1A]/70">Hospitality & Staff</span>
                <span className="font-mono font-medium text-[#7A8B5A]">4.6 ★</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#1A1A1A]/70">Value for Money (₹200–₹400)</span>
                <span className="font-mono font-medium text-[#7A8B5A]">4.9 ★</span>
              </div>
            </div>
          </div>

          {/* Right: Featured Review Carousel */}
          <div className="lg:col-span-8 flex flex-col justify-between relative">
            <div className="relative p-8 sm:p-12 rounded-2xl bg-white border border-[#D9D5CC] shadow-md min-h-[320px] flex flex-col justify-between">
              {/* Massive Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-[#D6B56C]/20 pointer-events-none">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1]" />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Rating & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-[#D6B56C]">
                    {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#FAF8F3] text-[#6B4F3B] text-xs font-mono border border-[#D9D5CC]">
                    {REVIEWS[currentIndex].tag}
                  </span>
                </div>

                {/* Editorial Quote Typography */}
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] font-light leading-snug">
                  &ldquo;{REVIEWS[currentIndex].text}&rdquo;
                </p>
              </div>

              {/* Author & Verified Google Badge */}
              <div className="relative z-10 pt-6 mt-6 border-t border-[#D9D5CC]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif text-sm font-semibold"
                    style={{ backgroundColor: REVIEWS[currentIndex].avatarBg || '#6B4F3B' }}
                  >
                    {REVIEWS[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#1A1A1A] font-medium flex items-center gap-1.5">
                      <span>{REVIEWS[currentIndex].author}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#7A8B5A]" title="Verified Google Reviewer" />
                    </h4>
                    <span className="text-[11px] text-[#1A1A1A]/50 font-sans">
                      Verified Google Review · {REVIEWS[currentIndex].date}
                    </span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="w-9 h-9 rounded-full border border-[#D9D5CC] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-9 h-9 rounded-full border border-[#D9D5CC] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick thumb indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#6B4F3B]' : 'w-2 bg-[#D9D5CC]'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
