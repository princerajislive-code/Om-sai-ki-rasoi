import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageSquareShare, Phone, ArrowUp, ShoppingBag } from 'lucide-react';

interface FloatingActionsProps {
  onOpenCart?: () => void;
  cartCount?: number;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenCart,
  cartCount = 0
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Order Cart Trigger */}
      {cartCount > 0 && onOpenCart && (
        <button
          onClick={onOpenCart}
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-[#6B4F3B] text-white shadow-xl hover:bg-[#523a2a] transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce"
          title="Review WhatsApp Order"
        >
          <ShoppingBag className="w-4 h-4 text-[#D6B56C]" />
          <span className="text-xs font-ui font-semibold">Order List ({cartCount})</span>
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="pointer-events-auto w-12 h-12 rounded-full bg-white text-[#1A1A1A] border border-[#D9D5CC] shadow-lg hover:border-[#6B4F3B] hover:text-[#6B4F3B] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        title={`Call ${RESTAURANT_INFO.phone}`}
        aria-label="Call Om Sai Ki Rasoi"
      >
        <Phone className="w-5 h-5 text-[#6B4F3B]" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Namaste Om Sai Ki Rasoi, I would like to inquire about dining and ordering at your Civil Lines restaurant in Prayagraj.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-[#7A8B5A] text-white shadow-xl hover:bg-[#68784d] transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquareShare className="w-5 h-5 text-white" />
        <span className="text-xs font-ui font-medium hidden sm:inline-block">Order on WhatsApp</span>
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md text-white shadow-md hover:bg-[#6B4F3B] flex items-center justify-center transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#D6B56C]" />
        </button>
      )}

    </div>
  );
};
