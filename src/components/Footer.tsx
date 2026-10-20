import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BRAND_INFO, CATEGORIES_DATA } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const { setActivePolicyModal, setIsFittingGuideOpen } = useCart();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: ProductCategory) => {
    onSelectCategory(category);
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] text-[#a4a095] border-t border-[#181a24] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand & Monogram (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm border border-[#d4af37]/60 flex items-center justify-center bg-[#12141c]">
                <span className="font-serif text-[#d4af37] text-2xl font-bold">Y</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#f5f2ea] block">
                  YAFOOR
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9a8f] font-sans">
                  Clothing · Lahore
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#d4af37]">
              “Handmade. Double Press. Made For You.”
            </p>

            <p className="text-xs text-[#8e8a80] leading-relaxed max-w-sm">
              Owned and led by <span className="text-[#f5f2ea] font-medium">{BRAND_INFO.owner}</span> in Lahore, Pakistan. Specializing exclusively in bespoke men’s suits, luxury coats, handloom waistcoats, traditional Egyptian cotton shalwar kameez, and heirloom wedding sherwanis.
            </p>

            <div className="pt-2 flex items-center gap-4 text-sm">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#12141c] border border-[#222533] hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#12141c] border border-[#222533] hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#faf8f5] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#d4af37] transition-colors">
                  Bespoke Categories
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#d4af37] transition-colors">
                  Shop Collection
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About YAFOOR &amp; Founder
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Craftsmanship Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsFittingGuideOpen(true)}
                  className="text-[#d4af37] hover:underline"
                >
                  Sizing &amp; Fitting Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#faf8f5] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.title}>
                  <button
                    onClick={() => handleCategoryClick(cat.slug as ProductCategory)}
                    className="hover:text-[#d4af37] transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#faf8f5] mb-4">
              Atelier Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${BRAND_INFO.phone1}`} className="hover:text-[#d4af37] block font-medium text-[#e2ded5]">
                    {BRAND_INFO.phone1}
                  </a>
                  <span className="text-[10px] text-[#716e66]">WhatsApp &amp; Orders</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <a href={`tel:${BRAND_INFO.phone2}`} className="hover:text-[#d4af37]">
                  {BRAND_INFO.phone2}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#d4af37] truncate">
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181a24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78756c]">
          <p>
            © {currentYear} {BRAND_INFO.name}. All Rights Reserved. Owner: {BRAND_INFO.owner}.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setActivePolicyModal('privacy')}
              className="hover:text-[#d4af37] transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setActivePolicyModal('terms')}
              className="hover:text-[#d4af37] transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => setActivePolicyModal('shipping')}
              className="hover:text-[#d4af37] transition-colors"
            >
              Bespoke Shipping
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-[#12141c] hover:bg-[#1f2231] text-[#d4af37] border border-[#222533] rounded-sm transition-colors"
            aria-label="Scroll to top"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
