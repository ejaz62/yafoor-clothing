import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { BRAND_INFO } from '../data/products';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ['All', 'Suits', 'Sherwanis', 'Waistcoats', 'Traditional', 'Craftsmanship'];

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const currentItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0a0a0c] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-2">
              Visual Archive
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5]">
              Atelier Gallery
            </h2>
            <p className="text-sm text-[#9c988e] mt-2">
              Glimpses into bespoke suiting, hand-embroidery, and tailoring precision from our Lahore studio.
            </p>
          </div>

          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141620] hover:bg-[#1f2231] text-xs font-semibold uppercase tracking-wider text-[#d4af37] border border-[#2b2f3f] hover:border-[#d4af37] rounded-sm transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @yaforclothing</span>
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all whitespace-nowrap shrink-0 ${
                selectedFilter === filter
                  ? 'bg-[#d4af37] text-[#0a0a0c] font-semibold'
                  : 'bg-[#13151f] text-[#a4a095] hover:text-[#f4efe6] border border-[#222636]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Clean Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative h-64 sm:h-72 rounded-sm overflow-hidden bg-[#12141c] border border-[#1e222f] hover:border-[#d4af37]/60 cursor-pointer transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.85]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold block mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-bold text-[#faf8f5] group-hover:text-[#d4af37] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#b8b3a7] line-clamp-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-[#c5c1b8] hover:text-[#d4af37] bg-[#1a1c25] rounded-full z-10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 text-[#c5c1b8] hover:text-[#d4af37] bg-[#1a1c25]/80 hover:bg-[#1a1c25] rounded-full z-10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 text-[#c5c1b8] hover:text-[#d4af37] bg-[#1a1c25]/80 hover:bg-[#1a1c25] rounded-full z-10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto object-contain rounded-sm border border-[#2b2f3f] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                {currentItem.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#faf8f5] mt-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#b8b3a7] mt-1">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
