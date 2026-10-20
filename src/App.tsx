/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { FeaturedCollection } from './components/FeaturedCollection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BespokeFittingGuideModal } from './components/BespokeFittingGuideModal';
import { SearchModal } from './components/SearchModal';
import { StoryModal } from './components/StoryModal';
import { PolicyModal } from './components/PolicyModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProductCategory } from './types';
import { Check } from 'lucide-react';

const MainApp: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    isFittingGuideOpen,
    setIsFittingGuideOpen,
    toast
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [is404Active, setIs404Active] = useState(false);

  // Simple hash or URL path check for 404 route handling
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#404') {
        setIs404Active(true);
      } else {
        setIs404Active(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (is404Active) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] text-[#f4efe6] flex flex-col justify-between">
        <TopContactBar />
        <div className="max-w-2xl mx-auto px-6 py-28 text-center my-auto">
          <span className="font-serif text-6xl sm:text-8xl font-bold text-[#d4af37] block mb-4">
            404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#faf8f5] mb-4">
            Page Not Found
          </h1>
          <p className="text-sm text-[#a4a095] mb-8 [text-wrap:balance]">
            The bespoke sartorial page you are seeking does not exist or has been relocated within our atelier archive.
          </p>
          <a
            href="#home"
            onClick={() => setIs404Active(false)}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#d4af37] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#e7cf85] transition-colors"
          >
            Return to Atelier Home
          </a>
        </div>
        <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4efe6] flex flex-col selection:bg-[#d4af37]/30 selection:text-white">
      {/* 1. Slim Top Contact Bar */}
      <TopContactBar />

      {/* 2. Sticky Brand Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero Section with Male Model & Brand Tagline */}
        <Hero />

        {/* 4. Five Large Shopping Categories Cards */}
        <CategoryCards onSelectCategory={(cat) => setSelectedCategory(cat)} />

        {/* 5. Featured Product Collection with PKR pricing & filters */}
        <FeaturedCollection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 6. About YAFOOR & Rana Shahroz Iqbal */}
        <AboutSection />

        {/* 7. Why Choose YAFOOR (4 Pillars) */}
        <WhyChooseUs />

        {/* 8. Visual Atelier & Craftsmanship Gallery */}
        <GallerySection />

        {/* 9. Client Impressions & Testimonials */}
        <TestimonialsSection />

        {/* 10. Contact, Order & WhatsApp Consultation */}
        <ContactSection />

        {/* 11. Seasonal Newsletter */}
        <NewsletterSection />
      </main>

      {/* 12. Footer with Dynamic Year & Legal Overlays */}
      <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* Modals & Overlays */}
      <CartDrawer />
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <BespokeFittingGuideModal
        isOpen={isFittingGuideOpen}
        onClose={() => setIsFittingGuideOpen(false)}
      />
      <SearchModal />
      <StoryModal />
      <PolicyModal />

      {/* Fixed WhatsApp Quick Conversation Button */}
      <WhatsAppFloatingButton />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#161924] border border-[#d4af37] text-[#f5f2ea] px-4 py-3 rounded-sm shadow-2xl flex items-center gap-2.5 text-xs animate-slide-up">
          <div className="w-5 h-5 rounded-full bg-[#d4af37] text-[#0a0a0c] flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
