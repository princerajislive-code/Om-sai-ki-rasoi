import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, CalendarCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenCart?: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenCart,
  cartCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#FAF8F3]/90 backdrop-blur-md shadow-sm border-b border-[#D9D5CC]/50'
          : 'py-5 sm:py-6 bg-gradient-to-b from-[#FAF8F3]/95 via-[#FAF8F3]/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="group flex flex-col focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D6B56C] group-hover:scale-125 transition-transform duration-300"></span>
            <span className="font-serif text-xl sm:text-2xl tracking-wide font-medium text-[#1A1A1A] group-hover:text-[#6B4F3B] transition-colors">
              Om Sai Ki Rasoi
            </span>
          </div>
          <span className="text-[10px] tracking-[0.25em] text-[#6B4F3B] uppercase font-sans pl-4 font-medium">
            Civil Lines · Prayagraj
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-xs uppercase tracking-[0.16em] font-medium text-[#1A1A1A]/80 hover:text-[#6B4F3B] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D6B56C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Call */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#1A1A1A] hover:text-[#6B4F3B] transition-colors rounded-full border border-transparent hover:border-[#D9D5CC]"
            title="Call Restaurant"
          >
            <Phone className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span className="font-ui">{RESTAURANT_INFO.phone}</span>
          </a>

          {/* Cart / WhatsApp order basket badge */}
          {cartCount > 0 && onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full border border-[#D9D5CC] bg-white text-[#1A1A1A] hover:border-[#D6B56C] transition-colors"
              title="View WhatsApp Order List"
            >
              <ShoppingBag className="w-4 h-4 text-[#6B4F3B]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6B4F3B] text-[#FAF8F3] text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}

          {/* Primary CTA */}
          <button
            id="navbar-reserve-btn"
            onClick={onOpenReservation}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs uppercase tracking-[0.14em] font-ui font-medium overflow-hidden transition-all duration-300 hover:bg-[#6B4F3B] hover:shadow-md active:scale-98"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>Reserve / Order</span>
          </button>
        </div>

        {/* Mobile Actions: Cart & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          {cartCount > 0 && onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full border border-[#D9D5CC] bg-white text-[#1A1A1A]"
            >
              <ShoppingBag className="w-4 h-4 text-[#6B4F3B]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#6B4F3B] text-[#FAF8F3] text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full border border-[#D9D5CC] text-[#1A1A1A] hover:bg-black/5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Subtle Scroll progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#6B4F3B] via-[#D6B56C] to-[#7A8B5A] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Fullscreen Mobile Architectural Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#FAF8F3] z-40 flex flex-col justify-between p-6 sm:hidden border-t border-[#D9D5CC] animate-fadeIn overflow-y-auto">
          <div className="space-y-6 pt-4">
            <div className="text-[10px] tracking-[0.25em] text-[#6B4F3B] font-semibold uppercase">
              Table of Contents
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-baseline justify-between border-b border-[#D9D5CC]/40 pb-3"
                >
                  <span className="font-serif text-2xl text-[#1A1A1A] hover:text-[#6B4F3B]">
                    {link.name}
                  </span>
                  <span className="text-[11px] text-[#6B4F3B]/60 font-mono">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#D9D5CC] space-y-4">
            <div className="flex items-center justify-between text-xs text-[#1A1A1A]/70">
              <span>Civil Lines, Prayagraj</span>
              <span className="text-[#7A8B5A] font-medium">Open until 10:30 PM</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#1A1A1A] text-xs font-medium uppercase tracking-wider text-[#1A1A1A]"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs font-medium uppercase tracking-wider"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
