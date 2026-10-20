import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen, setIsSearchOpen, setIsFittingGuideOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0ce6] backdrop-blur-md border-b border-[#22242d] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#0c0c0e] border-b border-[#1c1e26] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Monogram */}
        <a
          href="#home"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-left"
        >
          <div className="w-9 h-9 rounded-sm border border-[#d4af37]/60 flex items-center justify-center bg-[#14151c] group-hover:border-[#d4af37] transition-colors shadow-inner">
            <span className="font-serif text-[#d4af37] text-xl font-bold tracking-tighter">Y</span>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#f5f2ea] group-hover:text-[#d4af37] transition-colors">
              YAFOOR
            </span>
            <span className="block text-[9px] tracking-[0.24em] uppercase text-[#9ea2b0] font-sans">
              Bespoke Menswear
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide text-[#b8b5ac] font-medium">
          <a
            href="#home"
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Home
          </a>
          <a
            href="#categories"
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Categories
          </a>
          <a
            href="#collection"
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Shop
          </a>
          <a
            href="#about"
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Interactive Affordances (Search, Sizing Guide, Shopping Bag) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-[#b8b5ac] hover:text-[#d4af37] hover:bg-[#1a1c24] rounded-md transition-colors"
            title="Search garments & fabrics"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Bespoke Sizing Calculator Trigger */}
          <button
            onClick={() => setIsFittingGuideOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#d4af37] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-sm transition-all whitespace-nowrap shrink-0"
            title="Custom tailoring measurement calculator"
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>Bespoke Fitting</span>
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#f5f2ea] hover:text-[#d4af37] hover:bg-[#1a1c24] rounded-md transition-colors"
            title="View Shopping Bag"
            aria-label={`Shopping bag with ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d4af37] text-[#0a0a0c] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#b8b5ac] hover:text-[#d4af37] rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0e] border-b border-[#22242d] px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4 text-base font-medium text-[#c5c1b8]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1c1e26] hover:text-[#d4af37]"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1c1e26] hover:text-[#d4af37]"
            >
              Categories
            </a>
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1c1e26] hover:text-[#d4af37]"
            >
              Shop Collection
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1c1e26] hover:text-[#d4af37]"
            >
              About Us & Rana Shahroz Iqbal
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1c1e26] hover:text-[#d4af37]"
            >
              Craftsmanship Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#d4af37]"
            >
              Contact Atelier
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsFittingGuideOpen(true);
              }}
              className="w-full mt-2 py-2.5 text-center text-xs tracking-wider uppercase text-[#0a0a0c] bg-[#d4af37] font-semibold rounded-sm hover:bg-[#e7cf85] transition-colors"
            >
              Bespoke Measurement Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
