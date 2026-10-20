import React from 'react';
import { Sparkles, Scissors, CheckCircle, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { useCart } from '../context/CartContext';

export const AboutSection: React.FC = () => {
  const { setIsStoryOpen, setIsFittingGuideOpen } = useCart();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0c0c0e] text-[#f4efe6] border-t border-[#1a1c24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Photography of the Lahore Atelier */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden border border-[#262835] shadow-2xl">
              <img
                src="/src/assets/images/atelier_craftsmanship_1792352356360.jpg"
                alt="YAFOOR Clothing bespoke tailoring atelier in Lahore"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center filter brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent" />
            </div>

            {/* Subtle Atelier Stamp Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#14161f] border border-[#d4af37]/40 p-4 sm:p-5 rounded-sm shadow-xl max-w-[280px]">
              <div className="flex items-center gap-2 mb-1.5">
                <Scissors className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Lahore Atelier
                </span>
              </div>
              <p className="text-xs text-[#c5c1b8] leading-relaxed">
                Handcrafted patterns cut individually for every gentleman.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Owner Profile */}
          <div className="lg:pl-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] leading-tight mb-6">
              A Legacy of Style &amp; Craftsmanship
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#b8b4aa] leading-relaxed mb-6 font-light">
              <p>
                YAFOOR Clothing celebrates the art of fine men's tailoring, combining traditional craftsmanship with modern elegance. From bespoke suits and coats to waistcoats, shalwar kameez, and sherwanis, every piece is designed with attention to detail and a commitment to personal style.
              </p>
              <p>
                Our philosophy is simple: handmade quality, precise tailoring, and clothing made for you.
              </p>
            </div>

            {/* Prominent Owner Display */}
            <div className="p-4 bg-[#141620] border-l-2 border-[#d4af37] border-y border-r border-[#222533] rounded-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9c978c] block mb-0.5">
                  Founder &amp; Creative Master
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-[#f5f2ea]">
                  {BRAND_INFO.owner}
                </span>
                <span className="block text-xs text-[#a8a49a]">
                  Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#d4af37] bg-[#0c0c0e] px-3 py-1.5 rounded-sm border border-[#2b2f3d]">
                <ShieldCheck className="w-4 h-4" />
                <span>Bespoke Oversight</span>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-xs text-[#c5c1b8]">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Individual Hand Drafting</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Double Press Finishing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Fine Wool &amp; Raw Silk</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Worldwide Delivery</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsStoryOpen(true)}
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#e7cf85] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                Our Story &amp; Craft
              </button>
              <button
                onClick={() => setIsFittingGuideOpen(true)}
                className="px-6 py-3 bg-transparent hover:bg-[#1a1c26] text-[#e0dcd2] border border-[#323646] hover:border-[#d4af37] text-xs uppercase tracking-wider rounded-sm transition-all"
              >
                Measurement Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
