import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'culinary' | 'family' | 'ambience'>('all');

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#D9D5CC] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
                08 — VISUAL ARCHIVE
              </span>
              <span className="w-8 h-[1px] bg-[#D9D5CC]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight">
              A Glimpse Inside
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            {(['all', 'interior', 'culinary', 'family', 'ambience'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-ui capitalize transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#1A1A1A] text-white font-medium'
                    : 'bg-white text-[#1A1A1A]/70 border border-[#D9D5CC] hover:border-[#6B4F3B]'
                }`}
              >
                {filter === 'all' ? 'All Perspectives' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Architectural Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredPhotos.map((photo, index) => {
            // Asymmetrical span rules for luxury architectural magazine look
            const spanClass =
              index === 0
                ? 'lg:col-span-8 aspect-[16/10]'
                : index === 1
                ? 'lg:col-span-4 aspect-[4/5]'
                : index === 2
                ? 'lg:col-span-4 aspect-[1/1]'
                : index === 3
                ? 'lg:col-span-8 aspect-[16/9]'
                : index === 4
                ? 'lg:col-span-5 aspect-[4/5]'
                : index === 5
                ? 'lg:col-span-7 aspect-[16/11]'
                : 'lg:col-span-6 aspect-[4/3]';

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-[#1A1A1A]/5 border border-[#D9D5CC] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 ${spanClass}`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-[#6B4F3B] font-semibold">
                    {photo.category}
                  </span>
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 font-sans mt-0.5 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Photo */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Photo */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
              <div className="relative max-h-[75vh] rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={filteredPhotos[selectedPhotoIndex].imageUrl}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              {/* Caption */}
              <div className="text-center text-white max-w-xl">
                <div className="inline-flex items-center gap-2 mb-1">
                  <Camera className="w-3.5 h-3.5 text-[#D6B56C]" />
                  <span className="text-xs uppercase font-mono text-[#D6B56C]">
                    {filteredPhotos[selectedPhotoIndex].category} · Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans mt-1">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
