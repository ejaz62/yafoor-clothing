import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { ProductCategory } from '../types';

interface CategoryCardsProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: ProductCategory) => {
    onSelectCategory(category);
    const collectionElement = document.getElementById('collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#0a0a0c] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-2">
            The Bespoke Wardrobe
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4">
            Shopping Categories
          </h2>
          <p className="text-sm sm:text-base text-[#a39f94] [text-wrap:balance]">
            Explore tailored men's clothing crafted exclusively for you with our signature double press technique.
          </p>
        </div>

        {/* 5 Category Cards Grid: 3 top row, 2 bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {CATEGORIES_DATA.slice(0, 3).map((cat) => (
            <div
              key={cat.title}
              onClick={() => handleCategoryClick(cat.slug as ProductCategory)}
              className="group relative h-[380px] sm:h-[420px] rounded-sm overflow-hidden cursor-pointer border border-[#1f222d] hover:border-[#d4af37]/60 transition-all duration-300 shadow-md"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={`${cat.title} tailored by YAFOOR Clothing`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75]"
                referrerPolicy="no-referrer"
              />
              {/* Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0cf5] via-[#0a0a0c70] to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#d4af37] mb-1">
                  {cat.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f5] mb-2 group-hover:text-[#d4af37] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#c5c0b4] line-clamp-2 mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#faf7f0] group-hover:text-[#d4af37] transition-colors">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 balanced wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES_DATA.slice(3, 5).map((cat) => (
            <div
              key={cat.title}
              onClick={() => handleCategoryClick(cat.slug as ProductCategory)}
              className="group relative h-[360px] sm:h-[400px] rounded-sm overflow-hidden cursor-pointer border border-[#1f222d] hover:border-[#d4af37]/60 transition-all duration-300 shadow-md"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={`${cat.title} tailored by YAFOOR Clothing`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75]"
                referrerPolicy="no-referrer"
              />
              {/* Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0cf5] via-[#0a0a0c70] to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#d4af37] mb-1">
                  {cat.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f5] mb-2 group-hover:text-[#d4af37] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#c5c0b4] line-clamp-2 mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#faf7f0] group-hover:text-[#d4af37] transition-colors">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
