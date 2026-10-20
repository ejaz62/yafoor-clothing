import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#0c0c0e] text-[#f4efe6] border-t border-[#1a1c25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-2">
            Client Impressions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4">
            Testimonials &amp; Reviews
          </h2>
          {/* Transparent sample badge */}
          <div className="inline-flex items-center gap-2 text-xs text-[#a4a095] bg-[#141620] px-4 py-1.5 rounded-full border border-[#232737]">
            <Info className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Demonstration reviews previewing customer feedback integration</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative p-6 sm:p-8 bg-[#12141c] border border-[#1e2230] hover:border-[#d4af37]/40 rounded-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#d4af37]/25 mb-4" />
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#c8c4b9] italic leading-relaxed mb-6 font-serif">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e2230]">
                <h4 className="font-serif text-base font-bold text-[#faf8f5]">
                  {t.name}
                </h4>
                <p className="text-xs text-[#8e8a80]">
                  {t.role} · {t.location}
                </p>
                <span className="text-[10px] tracking-wider uppercase text-[#d4af37] block mt-1 font-mono">
                  {t.occasion}
                </span>
                {t.isSampleContent && (
                  <span className="text-[9px] uppercase tracking-wider text-[#63615a] block mt-1">
                    Sample Review Preview
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
