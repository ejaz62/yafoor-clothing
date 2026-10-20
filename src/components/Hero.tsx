import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#0c0c0e] overflow-hidden">
      {/* Background Hero Image with measured luxury contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/yafoor_hero_model_1792352354132.jpg"
          alt="Bespoke tailored suit crafted by YAFOOR Clothing"
          className="w-full h-full object-cover object-top filter brightness-[0.78] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle multi-stop gradient scrim to guarantee text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0cf5] via-[#0a0a0cd0] to-[#0a0a0c60] lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl">
          {/* Subtle Supporting Phrase: Style Crafted For You */}
          <div className="flex items-center gap-2 mb-4 text-[#d4af37] text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Style Crafted For You</span>
            <span className="text-[#64615a]" aria-hidden="true">·</span>
            <span className="text-[#a8a49a]">Lahore, Pakistan</span>
          </div>

          {/* Brand Kicker */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#e2ded5] mb-2">
            YAFOOR CLOTHING
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf9f5] leading-[1.1] mb-6 [text-wrap:balance]">
            Bespoke Menswear
          </h1>

          {/* Specialties Breakdown */}
          <div className="space-y-1 mb-6 text-lg sm:text-xl text-[#d4cfc5] font-light">
            <p className="font-medium text-[#f0ece1]">
              Custom Suits, Coats & Waistcoats
            </p>
            <p className="text-[#beb9ae]">
              Sherwanis & Traditional Men's Wear
            </p>
          </div>

          {/* Brand Tagline */}
          <blockquote className="border-l-2 border-[#d4af37] pl-4 py-1 mb-8 italic font-serif text-xl sm:text-2xl text-[#f3ede1] tracking-wide">
            “Handmade. Double Press. Made For You.”
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#collection"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d4af37] hover:bg-[#e7cf85] text-[#0a0a0c] font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-200 shadow-lg shadow-[#d4af37]/15 group"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(
                'Hello Rana Shahroz Iqbal, I would like to inquire about bespoke tailoring at YAFOOR Clothing.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#171922] hover:bg-[#232634] text-[#f5f2ea] border border-[#323646] hover:border-[#d4af37] text-sm font-medium tracking-wide rounded-sm transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Trust Attributes */}
          <div className="mt-12 pt-8 border-t border-[#262833] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9c978c]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#d4af37] font-semibold">Owner:</span> Rana Shahroz Iqbal
            </span>
            <span className="text-[#414452]" aria-hidden="true">·</span>
            <span>Bespoke Hand Finishing</span>
            <span className="text-[#414452]" aria-hidden="true">·</span>
            <span>Lahore Atelier & Worldwide Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
