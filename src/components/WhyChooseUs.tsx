import React from 'react';
import { Award, Scissors, Compass, Globe } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Premium Quality',
      subtitle: 'Fabric & Finishing',
      description: 'Hand-selected Italian & English wools, handloom raw silks, and long-staple Egyptian cotton finished with our trademark double press treatment.'
    },
    {
      icon: Scissors,
      title: 'Custom Tailoring',
      subtitle: 'Personalised Fit & Style',
      description: 'Every garment begins with individual pattern drafting according to your personal posture, shoulder slope, and silhouette preferences.'
    },
    {
      icon: Compass,
      title: 'Traditional Craftsmanship',
      subtitle: 'Attention to Detail',
      description: 'Master tailoring techniques including floating chest canvases, pick-stitched lapels, hand-cut buttonholes, and zardozi embellishments.'
    },
    {
      icon: Globe,
      title: 'Worldwide Shipping',
      subtitle: 'Lahore to Global Destinations',
      description: 'Orders handcrafted in our Lahore atelier and safely dispatched with tracked luxury courier handling across Pakistan and internationally.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0d0f15] text-[#f4efe6] border-t border-[#1c1f2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-2">
            The YAFOOR Distinction
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4">
            Why Choose YAFOOR
          </h2>
          <p className="text-sm sm:text-base text-[#a29e93]">
            Dedicated exclusively to the art of men’s bespoke tailoring and enduring sartorial poise.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-[#12141d] border border-[#1f2331] hover:border-[#d4af37]/50 rounded-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#1a1c27] border border-[#2b2f3f] group-hover:border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-6 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-[#8b877d] block mb-1">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#faf8f5] mb-1 group-hover:text-[#d4af37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#d4af37] mb-3 font-medium">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-[#b0aba0] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
