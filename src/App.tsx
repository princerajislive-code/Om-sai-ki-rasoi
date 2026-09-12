import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { SignatureExperience } from './components/SignatureExperience';
import { MenuSection } from './components/MenuSection';
import { KitchenToTable } from './components/KitchenToTable';
import { ExperienceCollection } from './components/ExperienceCollection';
import { WhyOmSai } from './components/WhyOmSai';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OrderCartModal } from './components/OrderCartModal';
import { CartItem, MenuItem } from './types';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Family Dinner');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [...prevCart, { item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToReservation = () => {
    const el = document.querySelector('#reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderWhatsApp = () => {
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
      'Namaste Om Sai Ki Rasoi, I would like to explore the menu and place an order for Civil Lines, Prayagraj.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExperience = (occasionName: string) => {
    setSelectedOccasion(occasionName);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#FAF8F3] text-[#1A1A1A] selection:bg-[#D6B56C]/30 selection:text-[#1A1A1A]">
      
      {/* Desktop Ambient Light Glow following cursor */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none rounded-full w-[450px] h-[450px] bg-[#D6B56C]/5 blur-3xl -z-0 transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 225}px, ${mousePosition.y - 225}px)`,
          }}
        />
      )}

      {/* Floating Architectural Navigation */}
      <Navbar
        onOpenReservation={scrollToReservation}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOrderWhatsApp={handleOrderWhatsApp}
        />

        {/* 01 — Our Story */}
        <StorySection />

        {/* 02 — Signature Experience */}
        <SignatureExperience />

        {/* 03 — Menu Experience */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cart.map((c) => c.item.id)}
        />

        {/* 04 — From Kitchen to Table */}
        <KitchenToTable />

        {/* 05 — Experience Collection */}
        <ExperienceCollection
          onSelectExperienceForBooking={handleSelectExperience}
        />

        {/* 06 — Why Om Sai Ki Rasoi */}
        <WhyOmSai />

        {/* 07 — Google Rating & Social Proof */}
        <ReviewsSection />

        {/* 08 — Architectural Gallery */}
        <GallerySection />

        {/* 09 — Reservation Experience */}
        <ReservationSection
          initialOccasion={selectedOccasion}
        />

        {/* 10 — Location & Sanctuary Map */}
        <LocationSection />

        {/* 11 — Final Call to Action */}
        <FinalCta
          onExploreMenu={scrollToMenu}
          onOrderWhatsApp={handleOrderWhatsApp}
        />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* Floating Quick Action Controls */}
      <FloatingActions
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* WhatsApp Order Builder Modal */}
      <OrderCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
