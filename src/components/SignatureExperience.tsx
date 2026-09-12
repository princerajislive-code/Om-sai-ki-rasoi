import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Utensils, HeartHandshake } from 'lucide-react';

export const SignatureExperience: React.FC = () => {
  const [activeMoment, setActiveMoment] = useState(0);

  const moments = [
    {
      num: '01',
      title: 'ARRIVE',
      subtitle: 'A warm, welcoming dining environment',
      description: 'Step in from the lively buzz of Civil Lines into a serene haven of walnut wood finishes, tranquil acoustics, and gentle amber lighting where every guest is greeted with traditional Indian courtesy.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
      tag: 'Sanctuary of Hospitality',
      icon: MapPin,
      detail: 'Spacious booths, climate-controlled comfort, peaceful dining.'
    },
    {
      num: '02',
      title: 'DISCOVER',
      subtitle: 'Explore a menu designed for different tastes and occasions',
      description: 'From earthen handi biryanis and velvety dal makhani to wok-tossed Asian delicacies and continental sizzlers, our culinary selection caters to every palate across generations.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200',
      tag: 'Culinary Diversity',
      icon: Utensils,
      detail: 'Pure Vegetarian & dedicated Vegan options with live tandoor.'
    },
    {
      num: '03',
      title: 'ENJOY',
      subtitle: 'Relax, share food and create memories with the people who matter',
      description: 'The real magic happens when steaming platters arrive at the table. Laughter flows, naan is broken together, and everyday meals transform into cherished family memories.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200',
      tag: 'Shared Memories',
      icon: HeartHandshake,
      detail: 'All-You-Can-Eat thalis, celebratory sizzlers, sweet endings.'
    }
  ];

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D9D5CC] pb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#6B4F3B] font-semibold block mb-2">
              02 — SIGNATURE JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1A1A]">
              The Om Sai Experience
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#1A1A1A]/70 font-sans mt-4 md:mt-0">
            A three-act hospitality journey designed to evoke the comfort of home with the sophistication of modern dining.
          </p>
        </div>

        {/* 3 Large Editorial Moments Grid / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            const isHovered = activeMoment === index;

            return (
              <div
                key={moment.num}
                onMouseEnter={() => setActiveMoment(index)}
                className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 bg-white group cursor-pointer ${
                  isHovered
                    ? 'border-[#6B4F3B] shadow-xl translate-y-[-4px]'
                    : 'border-[#D9D5CC] shadow-sm hover:border-[#D6B56C]'
                }`}
              >
                {/* Large Imagery with Cinematic Framing */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Architectural Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF8F3]/90 backdrop-blur-md text-[#1A1A1A] text-xs font-mono font-semibold border border-[#D9D5CC]">
                    {moment.num}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#6B4F3B]">
                    {moment.tag}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#6B4F3B] mb-2">
                      <Icon className="w-4 h-4 text-[#D6B56C]" />
                      <span className="font-ui text-xs font-semibold tracking-wider uppercase text-[#6B4F3B]">
                        Phase {moment.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] tracking-tight">
                      {moment.title}
                    </h3>

                    <p className="font-serif italic text-sm text-[#6B4F3B] mt-1 mb-3">
                      &ldquo;{moment.subtitle}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-[#1A1A1A]/75 font-sans leading-relaxed">
                      {moment.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D9D5CC]/50 flex items-center justify-between text-xs text-[#1A1A1A]/60">
                    <span className="font-sans font-medium">{moment.detail}</span>
                    <span className="w-6 h-6 rounded-full border border-[#D9D5CC] flex items-center justify-center group-hover:border-[#6B4F3B] group-hover:text-[#6B4F3B] transition-colors">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Strip below */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9D5CC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#D9D5CC] flex items-center justify-center text-[#D6B56C]">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="font-serif text-base sm:text-lg text-[#1A1A1A]">
                Every dish is prepared fresh to order in our hygienic kitchen.
              </p>
              <p className="text-xs text-[#1A1A1A]/60 font-sans">
                Never reheated, never hurried. Pure flavors crafted with patience.
              </p>
            </div>
          </div>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-ui font-medium text-[#6B4F3B] hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
          >
            <span>Explore The Flavours</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
