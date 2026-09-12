import React, { useState, useMemo } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MessageSquareShare, Plus, Check, Sparkles, Filter } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart?: (item: MenuItem) => void;
  cartItemIds?: string[];
}

const CATEGORIES: MenuCategory[] = [
  'Indian',
  'Chinese',
  'Continental',
  'Snacks',
  'Main Course',
  'Desserts',
  'Mocktails',
  'Chef Specials',
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemIds = []
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Indian');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'vegan' | 'special'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      const matchesCategory = item.category === activeCategory;
      if (!matchesCategory) return false;

      // Dietary check
      if (dietaryFilter === 'veg' && item.dietary !== 'veg') return false;
      if (dietaryFilter === 'vegan' && item.dietary !== 'vegan') return false;
      if (dietaryFilter === 'special' && !item.isChefSpecial && !item.badge) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesHindi = item.hindiName?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesHindi) return false;
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  const handleSingleWhatsAppOrder = (item: MenuItem) => {
    const text = `Namaste Om Sai Ki Rasoi! I would like to order:\n- *${item.name}* (₹${item.price})\nCategory: ${item.category}\nPlease confirm availability for Civil Lines, Prayagraj.`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Marker & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#D9D5CC] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold">
                03 — CULINARY REPERTOIRE
              </span>
              <span className="w-8 h-[1px] bg-[#D9D5CC]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#7A8B5A]">
                Pure Vegetarian & Vegan Offerings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight">
              A Table Full of Possibilities
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
            <p className="text-sm text-[#1A1A1A]/70 font-sans max-w-sm text-left md:text-right">
              Crafted with honest ingredients, slow-fire technique, and a philosophy that every diner leaves nourished.
            </p>
            <span className="text-xs font-mono text-[#6B4F3B]">
              Average cost: {RESTAURANT_INFO.priceRange} / diner
            </span>
          </div>
        </div>

        {/* Category Navigation - Architectural Tab Bar */}
        <div className="relative mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#D9D5CC]/60">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] font-ui transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1A1A] text-[#FAF8F3] shadow-md font-medium'
                      : 'bg-white text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-[#FAF8F3] border border-[#D9D5CC]'
                  }`}
                >
                  <span>{category}</span>
                  {isActive && (
                    <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D6B56C]"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Dietary Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#1A1A1A]/50 flex items-center gap-1 font-mono uppercase text-[11px]">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1 rounded-full border transition-colors ${
                dietaryFilter === 'all'
                  ? 'border-[#6B4F3B] bg-[#6B4F3B]/10 text-[#6B4F3B] font-medium'
                  : 'border-[#D9D5CC] text-[#1A1A1A]/70 hover:border-[#6B4F3B]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1 rounded-full border transition-colors flex items-center gap-1.5 ${
                dietaryFilter === 'veg'
                  ? 'border-[#7A8B5A] bg-[#7A8B5A]/10 text-[#7A8B5A] font-medium'
                  : 'border-[#D9D5CC] text-[#1A1A1A]/70 hover:border-[#7A8B5A]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#7A8B5A]"></span>
              Pure Vegetarian
            </button>
            <button
              onClick={() => setDietaryFilter('vegan')}
              className={`px-3 py-1 rounded-full border transition-colors flex items-center gap-1.5 ${
                dietaryFilter === 'vegan'
                  ? 'border-[#6B4F3B] bg-[#6B4F3B]/10 text-[#6B4F3B] font-medium'
                  : 'border-[#D9D5CC] text-[#1A1A1A]/70 hover:border-[#6B4F3B]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#D6B56C]"></span>
              100% Vegan
            </button>
            <button
              onClick={() => setDietaryFilter('special')}
              className={`px-3 py-1 rounded-full border transition-colors flex items-center gap-1.5 ${
                dietaryFilter === 'special'
                  ? 'border-[#D6B56C] bg-[#D6B56C]/10 text-[#1A1A1A] font-medium'
                  : 'border-[#D9D5CC] text-[#1A1A1A]/70 hover:border-[#D6B56C]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#D6B56C]" />
              House Specials
            </button>
          </div>

          <div className="text-[11px] text-[#1A1A1A]/60 font-mono">
            Showing {filteredItems.length} delicacies in {activeCategory}
          </div>
        </div>

        {/* Premium Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isAddedToCart = cartItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[#D9D5CC] transition-all duration-300 hover:border-[#D6B56C] hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Container with Soft Zoom & Reveal */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF8F3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>

                  {/* Top Left: Dietary Symbol (Classic Green Square with Circle for Veg, or Leaf Pill for Vegan) */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {item.dietary === 'veg' ? (
                      <div
                        className="w-5 h-5 rounded bg-white/90 backdrop-blur-sm border border-[#7A8B5A] flex items-center justify-center shadow-xs"
                        title="Vegetarian"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#7A8B5A]"></div>
                      </div>
                    ) : (
                      <div
                        className="px-2 py-0.5 rounded-full bg-[#7A8B5A] text-white text-[10px] font-medium tracking-wider uppercase flex items-center gap-1 shadow-xs"
                        title="100% Vegan Option"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        Vegan
                      </div>
                    )}
                  </div>

                  {/* Top Right: Special Badge */}
                  {item.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md text-[#D6B56C] text-[10px] uppercase font-mono font-medium tracking-wider border border-[#D6B56C]/30 shadow-xs">
                      {item.badge}
                    </div>
                  )}

                  {/* Bottom Image Overlay: Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1A1A1A] font-serif text-sm font-semibold shadow-sm border border-[#D9D5CC]">
                    ₹{item.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Hindi subtitle if present */}
                    {item.hindiName && (
                      <span className="text-[11px] font-serif text-[#6B4F3B] tracking-wider block mb-1">
                        {item.hindiName}
                      </span>
                    )}

                    {/* Dish Name with Elegant Gold Underline hover */}
                    <h3 className="font-serif text-xl font-normal text-[#1A1A1A] group-hover:text-[#6B4F3B] transition-colors relative inline-block">
                      {item.name}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] bg-[#D6B56C]"></span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans leading-relaxed mt-2.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Actions: Direct WhatsApp & Add to Cart */}
                  <div className="pt-4 border-t border-[#D9D5CC]/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSingleWhatsAppOrder(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#D9D5CC] hover:border-[#7A8B5A] hover:bg-[#7A8B5A]/10 text-[#1A1A1A] hover:text-[#7A8B5A] text-xs font-ui font-medium transition-colors"
                      title="Order on WhatsApp"
                    >
                      <MessageSquareShare className="w-3.5 h-3.5 text-[#7A8B5A]" />
                      <span>Order on WhatsApp</span>
                    </button>

                    {onAddToCart && (
                      <button
                        onClick={() => onAddToCart(item)}
                        className={`p-2 rounded-lg border transition-colors ${
                          isAddedToCart
                            ? 'bg-[#6B4F3B] text-white border-[#6B4F3B]'
                            : 'border-[#D9D5CC] text-[#1A1A1A] hover:border-[#6B4F3B] hover:text-[#6B4F3B]'
                        }`}
                        title={isAddedToCart ? 'Added to Order List' : 'Add to Order List'}
                      >
                        {isAddedToCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Ordering Note */}
        <div className="mt-16 p-8 rounded-2xl bg-[#FAF8F3] border border-[#D9D5CC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-[#1A1A1A]">
              Craving custom spice levels or party trays?
            </h4>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans">
              Our chefs gladly customize spice preferences for young children and elder family members.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Namaste Om Sai Ki Rasoi, I would like to inquire about the full menu and party order packages for Civil Lines, Prayagraj.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs uppercase tracking-[0.16em] font-ui font-medium hover:bg-[#6B4F3B] transition-colors shadow-sm"
            >
              <MessageSquareShare className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span>Full Menu on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
