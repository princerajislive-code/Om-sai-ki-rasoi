import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MapPin, Clock, MessageSquareShare, ArrowUp, Instagram, Facebook, Globe } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F3] pt-20 pb-12 border-t border-[#D9D5CC]/20 relative overflow-hidden">
      
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6B4F3B] via-[#D6B56C] to-[#7A8B5A]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F3]/10">
          
          {/* Brand Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] tracking-wide font-normal">
                Om Sai Ki Rasoi
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D6B56C] font-mono mt-1">
                Civil Lines · Prayagraj · Uttar Pradesh
              </span>
            </div>

            <p className="text-sm text-[#FAF8F3]/70 font-sans leading-relaxed max-w-sm font-light">
              Where Every Meal Feels Like Home. Blending traditional Indian hospitality, wholesome pure-vegetarian cooking, and timeless architectural comfort.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#FAF8F3]/20 flex items-center justify-center text-[#FAF8F3] hover:border-[#D6B56C] hover:text-[#D6B56C] transition-colors"
                title="WhatsApp"
              >
                <MessageSquareShare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#FAF8F3]/20 flex items-center justify-center text-[#FAF8F3] hover:border-[#D6B56C] hover:text-[#D6B56C] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#FAF8F3]/20 flex items-center justify-center text-[#FAF8F3] hover:border-[#D6B56C] hover:text-[#D6B56C] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#D6B56C] font-semibold">
              Exploration
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-sm text-[#FAF8F3]/80 hover:text-[#D6B56C] transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#D6B56C] font-semibold">
              Contact & Hours
            </h4>

            <div className="space-y-3 text-sm text-[#FAF8F3]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B56C] shrink-0 mt-1" />
                <span>11A/9/1, Near High Court, M.G., Civil Lines, Prayagraj, UP 211001</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B56C] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#D6B56C] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D6B56C] shrink-0" />
                <span>Open daily until 10:30 PM (11:00 AM – 10:30 PM)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF8F3]/10 text-[11px] font-mono text-[#D6B56C]">
                4.3 ★ Google Rating · 86+ Verified Reviews
              </span>
            </div>
          </div>

        </div>

        {/* Developer Credit & Copyright Section (Strictly adhering to user requirements) */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FAF8F3]/60 font-sans">
          
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-sm font-serif text-[#FAF8F3]">
              Created by <span className="text-[#D6B56C] font-medium">RoadsideDeveloper</span>
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#FAF8F3]/75">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#D6B56C]" />
                <span>🌐 Designed &amp; Developed by RoadsideDeveloper</span>
              </span>
              <a
                href="https://wa.me/917654224826"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D6B56C] transition-colors flex items-center gap-1"
              >
                <span>📱 WhatsApp: +91 7654224826</span>
              </a>
              <a
                href="tel:+918405918172"
                className="hover:text-[#D6B56C] transition-colors flex items-center gap-1"
              >
                <span>📞 Call: +91 8405918172</span>
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FAF8F3]/20 hover:border-[#D6B56C] text-[#FAF8F3] hover:text-[#D6B56C] transition-colors text-xs font-mono uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
