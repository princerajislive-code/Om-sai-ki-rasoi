import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Navigation, Check, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
            10 — SANCTUARY COORDINATES
          </span>
          <span className="w-8 h-[1px] bg-[#D9D5CC]"></span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#7A8B5A]">
            Civil Lines Landmark
          </span>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Address, Timing, Phone, Landmarks */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight leading-tight">
                Find Your Way <br />
                <span className="italic font-light text-[#6B4F3B]">To Us</span>
              </h2>
              <p className="font-serif text-2xl text-[#1A1A1A] mt-2 font-medium">
                Om Sai Ki Rasoi
              </p>
            </div>

            {/* Address Card */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D9D5CC] flex items-center justify-center text-[#6B4F3B] shrink-0 mt-1">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6B4F3B]">
                    Address & Proximity
                  </h4>
                  <p className="text-base text-[#1A1A1A] font-sans mt-1 leading-relaxed">
                    11A/9/1, Near High Court, M.G.,<br />
                    Civil Lines, Prayagraj,<br />
                    Uttar Pradesh 211001
                  </p>
                  <span className="inline-block mt-2 text-xs text-[#7A8B5A] font-medium">
                    ✦ Landmark: Steps away from the Allahabad High Court campus
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D9D5CC] flex items-center justify-center text-[#7A8B5A] shrink-0 mt-1">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6B4F3B]">
                    Direct Telephone
                  </h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-lg font-serif text-[#1A1A1A] hover:text-[#6B4F3B] transition-colors block mt-0.5"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-xs text-[#1A1A1A]/60">
                    Host desk available during open hours
                  </span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D9D5CC] flex items-center justify-center text-[#D6B56C] shrink-0 mt-1">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6B4F3B]">
                    Hours of Operation
                  </h4>
                  <p className="text-base text-[#1A1A1A] font-serif mt-0.5">
                    Open until 10:30 PM
                  </p>
                  <p className="text-xs text-[#1A1A1A]/60 font-sans">
                    Monday through Sunday: 11:00 AM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Amenities list */}
            <div className="p-4 rounded-xl bg-white border border-[#D9D5CC] grid grid-cols-2 gap-2 text-xs text-[#1A1A1A]/80">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#7A8B5A]" />
                <span>Valet & Street Parking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#7A8B5A]" />
                <span>Air Conditioned Dining</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#7A8B5A]" />
                <span>Digital UPI & Cards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#7A8B5A]" />
                <span>All You Can Eat Feasts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Location Photography */}
          <div className="lg:col-span-7 space-y-4">
            {/* Map Container with rounded architectural border */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D9D5CC] bg-white shadow-xl aspect-[16/11] sm:aspect-[16/10]">
              <iframe
                title="Om Sai Ki Rasoi Location in Civil Lines Prayagraj"
                src="https://maps.google.com/maps?q=11A/9/1,%20Near%20High%20Court,%20M.G.,%20Civil%20Lines,%20Prayagraj,%20Uttar%20Pradesh%20211001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Exterior Location Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#D9D5CC] shadow-md flex items-center gap-3 max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200"
                  alt="Om Sai Ki Rasoi location"
                  className="w-12 h-12 rounded-xl object-cover border border-[#D9D5CC]"
                />
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[#6B4F3B] font-semibold">
                    Civil Lines Destination
                  </p>
                  <p className="font-serif text-xs font-semibold text-[#1A1A1A]">
                    Om Sai Ki Rasoi
                  </p>
                  <span className="text-[10px] text-[#7A8B5A] font-medium">
                    Open now · Closes 10:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Below Map: Get Directions CTA button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#D9D5CC]">
              <div className="text-xs text-[#1A1A1A]/70">
                <span className="font-medium text-[#1A1A1A]">Driving or walking?</span> Direct navigation via Google Maps coordinates.
              </div>

              <a
                href={RESTAURANT_INFO.mapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#1A1A1A] text-[#FAF8F3] hover:bg-[#6B4F3B] text-xs uppercase tracking-[0.16em] font-ui font-medium transition-colors shadow-sm whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-[#D6B56C]" />
                <span>Get Directions →</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
