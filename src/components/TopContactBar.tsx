import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-[#09090b] text-[#c5c1b8] border-b border-[#22242c] text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Contact Phone & WhatsApp */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a
            href={`tel:${BRAND_INFO.phone1}`}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            title="Call primary boutique line"
          >
            <Phone className="w-3 h-3 text-[#d4af37]" />
            <span>{BRAND_INFO.phone1}</span>
          </a>
          <span className="text-[#3a3e4c] hidden sm:inline" aria-hidden="true">|</span>
          <a
            href={`tel:${BRAND_INFO.phone2}`}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            title="Call secondary atelier line"
          >
            <span className="text-[#8e8a80]">Alt:</span>
            <span>{BRAND_INFO.phone2}</span>
          </a>
          <span className="text-[#3a3e4c] hidden md:inline" aria-hidden="true">|</span>
          <a
            href={`mailto:${BRAND_INFO.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            title="Email atelier"
          >
            <Mail className="w-3 h-3 text-[#d4af37]" />
            <span>{BRAND_INFO.email}</span>
          </a>
        </div>

        {/* Right: Location & Socials */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-[#8e8a80]">
            <MapPin className="w-3 h-3 text-[#d4af37]" />
            <span>{BRAND_INFO.location} · Worldwide Shipping</span>
          </div>
          <span className="text-[#3a3e4c] hidden lg:inline" aria-hidden="true">|</span>
          <div className="flex items-center gap-3">
            <a
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition-colors"
              aria-label="YAFOOR Clothing Instagram"
            >
              Instagram
            </a>
            <span className="text-[#3a3e4c]" aria-hidden="true">·</span>
            <a
              href={BRAND_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition-colors"
              aria-label="YAFOOR Clothing Facebook"
            >
              Facebook
            </a>
            <span className="text-[#3a3e4c]" aria-hidden="true">·</span>
            <span className="text-[#d4af37] font-medium tracking-wider">PKR (₨)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
