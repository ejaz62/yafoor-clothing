import React from 'react';
import { X, Scissors, Sparkles, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/products';

export const StoryModal: React.FC = () => {
  const { isStoryOpen, setIsStoryOpen, setIsFittingGuideOpen } = useCart();

  if (!isStoryOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#11131a] border border-[#2b2f3e] rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-[#f4efe6]">
        {/* Close Button */}
        <button
          onClick={() => setIsStoryOpen(false)}
          className="absolute top-5 right-5 p-2 bg-[#1b1e2a] hover:bg-[#282d3e] text-[#c5c1b8] hover:text-[#d4af37] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atelier Heritage &amp; Craft</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#faf8f5] mb-4">
          A Legacy of Style &amp; Craftsmanship
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#b8b3a7] leading-relaxed font-light mb-8">
          <p>
            YAFOOR Clothing celebrates the art of fine men's tailoring, combining traditional craftsmanship with modern elegance. From bespoke suits and coats to waistcoats, shalwar kameez, and sherwanis, every piece is designed with attention to detail and a commitment to personal style.
          </p>
          <p>
            Our philosophy is simple: handmade quality, precise tailoring, and clothing made for you.
          </p>
          <div className="p-4 bg-[#161822] border-l-2 border-[#d4af37] rounded-sm my-4">
            <span className="text-xs uppercase tracking-wider text-[#9d998f] block mb-1">
              Founder &amp; Master Tailor
            </span>
            <p className="font-serif text-lg font-bold text-[#f5f2ea]">
              Rana Shahroz Iqbal
            </p>
            <p className="text-xs text-[#d4af37]">
              Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* The 4 Stages of YAFOOR Bespoke Tailoring */}
        <h4 className="font-serif text-xl font-bold text-[#faf8f5] mb-4 flex items-center gap-2">
          <Scissors className="w-4 h-4 text-[#d4af37]" />
          <span>The Bespoke Process</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs">
          <div className="p-4 bg-[#151722] border border-[#222636] rounded-sm">
            <span className="font-mono text-[#d4af37] font-semibold block mb-1">01. Anatomical Consultation</span>
            <p className="text-[#a4a095]">
              We capture over 24 individual body contours, shoulder slopes, and stance angles rather than standard static measurements.
            </p>
          </div>

          <div className="p-4 bg-[#151722] border border-[#222636] rounded-sm">
            <span className="font-mono text-[#d4af37] font-semibold block mb-1">02. Cloth &amp; Canvas Selection</span>
            <p className="text-[#a4a095]">
              Curating luxury Super 150s worsted wools, pure raw silk, and Egyptian cotton with horsehair floating chest canvas.
            </p>
          </div>

          <div className="p-4 bg-[#151722] border border-[#222636] rounded-sm">
            <span className="font-mono text-[#d4af37] font-semibold block mb-1">03. The Double Press Method</span>
            <p className="text-[#a4a095]">
              Our signature hand-pressing technique performed twice—first during internal assembly, and second after final lining—locking in lasting shape memory.
            </p>
          </div>

          <div className="p-4 bg-[#151722] border border-[#222636] rounded-sm">
            <span className="font-mono text-[#d4af37] font-semibold block mb-1">04. Personal Fitting &amp; Handover</span>
            <p className="text-[#a4a095]">
              Final trial in our Lahore atelier or private trial delivery, guaranteeing drape, balance, and absolute comfort.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#1e2230] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              setIsStoryOpen(false);
              setIsFittingGuideOpen(true);
            }}
            className="px-5 py-2.5 bg-transparent border border-[#323648] hover:border-[#d4af37] text-xs text-[#e0dcd2] rounded-sm transition-colors"
          >
            Explore Fitting Guide
          </button>

          <a
            href={`https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(
              'Hello Rana Shahroz Iqbal, I would like to arrange a bespoke consultation with YAFOOR Clothing.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
