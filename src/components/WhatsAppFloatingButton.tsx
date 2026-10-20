import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(
    'Hello Rana Shahroz Iqbal, I would like to inquire about bespoke tailoring at YAFOOR Clothing.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
        aria-label="Chat on WhatsApp"
        title="Chat with YAFOOR Clothing atelier on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-sans text-xs font-semibold tracking-wider uppercase">
          WhatsApp Atelier
        </span>
      </a>
    </div>
  );
};
