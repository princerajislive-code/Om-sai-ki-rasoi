import React, { useState } from 'react';
import { EXPERIENCE_TILES } from '../data/restaurantData';
import { ExperienceTile } from '../types';
import { ArrowUpRight, X, Calendar, Users, Phone, MessageSquareShare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ExperienceCollectionProps {
  onSelectExperienceForBooking?: (occasionName: string) => void;
}

export const ExperienceCollection: React.FC<ExperienceCollectionProps> = ({
  onSelectExperienceForBooking
}) => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceTile | null>(null);

  const handleTileClick = (exp: ExperienceTile) => {
    setSelectedExperience(exp);
  };

  const handleBookNow = (title: string) => {
    setSelectedExperience(null);
    if (onSelectExperienceForBooking) {
      onSelectExperienceForBooking(title);
    }
    const resEl = document.querySelector('#reservation');
    if (resEl) {
      resEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D9D5CC] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
                05 — HOSPITALITY CURATION
              </span>
              <span className="w-8 h-[1px] bg-[#D9D5CC]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight">
              Occasions & Gatherings
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#1A1A1A]/70 font-sans mt-4 md:mt-0">
            From casual weekday lunches to grand family milestones, each space and table is arranged with thoughtful elegance.
          </p>
        </div>

        {/* Large Editorial Tiles Grid (Like luxury magazine pages) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_TILES.map((exp, idx) => (
            <div
              key={exp.id}
              onClick={() => handleTileClick(exp)}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[#D9D5CC] shadow-sm hover:shadow-xl hover:border-[#6B4F3B] transition-all duration-500 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A]/5">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF8F3]/90 backdrop-blur-md text-[10px] font-mono text-[#6B4F3B] font-semibold uppercase tracking-wider">
                    0{idx + 1} · {exp.tag}
                  </span>
                </div>

                {/* Hover Arrow Icon in Top Right */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-[#1A1A1A] flex items-center justify-center transform group-hover:rotate-45 group-hover:bg-[#D6B56C] group-hover:text-[#1A1A1A] transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#D6B56C] font-medium mb-1">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-light tracking-tight text-white mb-1.5 group-hover:translate-x-1 transition-transform">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-white/80 font-sans line-clamp-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Experience Detail & Direct Booking */}
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-xl bg-[#FAF8F3] rounded-2xl overflow-hidden border border-[#D9D5CC] shadow-2xl p-6 sm:p-8 space-y-6 animate-scaleUp">
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-[#D9D5CC] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F3] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#6B4F3B]">
                  Editorial Experience
                </span>
                <span className="w-6 h-[1px] bg-[#D9D5CC]"></span>
                <span className="text-xs text-[#7A8B5A] font-medium">{selectedExperience.tag}</span>
              </div>

              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#D9D5CC]">
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif text-3xl text-[#1A1A1A] mb-2 font-normal">
                  {selectedExperience.title}
                </h3>
                <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-sans leading-relaxed">
                  {selectedExperience.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D9D5CC] flex items-center justify-between text-xs text-[#1A1A1A]/70">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B4F3B]" />
                  <span>Tables suited for 2 to 30+ diners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#7A8B5A]" />
                  <span>Advance reservation recommended</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => handleBookNow(selectedExperience.title)}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs font-ui uppercase tracking-wider hover:bg-[#6B4F3B] transition-colors text-center"
                >
                  Reserve Table For {selectedExperience.title}
                </button>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Namaste Om Sai Ki Rasoi, I would like to inquire about hosting a ${selectedExperience.title} in Civil Lines, Prayagraj.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-[#D9D5CC] bg-white text-[#1A1A1A] text-xs font-ui uppercase tracking-wider hover:border-[#7A8B5A] hover:text-[#7A8B5A] transition-colors"
                >
                  <MessageSquareShare className="w-3.5 h-3.5 text-[#7A8B5A]" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
