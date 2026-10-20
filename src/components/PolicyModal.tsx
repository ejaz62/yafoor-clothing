import React from 'react';
import { X, ShieldCheck, FileText, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/products';

export const PolicyModal: React.FC = () => {
  const { activePolicyModal, setActivePolicyModal } = useCart();

  if (!activePolicyModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#11131a] border border-[#2b2f3e] rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-[#f4efe6]">
        {/* Close Button */}
        <button
          onClick={() => setActivePolicyModal(null)}
          className="absolute top-5 right-5 p-2 bg-[#1b1e2a] hover:bg-[#282d3e] text-[#c5c1b8] hover:text-[#d4af37] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {activePolicyModal === 'privacy' && (
          <div className="space-y-4 text-xs text-[#b8b3a7] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Client Confidentiality</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#faf8f5]">
              Privacy &amp; Bespoke Data Policy
            </h3>
            <p>
              At {BRAND_INFO.name}, owned by {BRAND_INFO.owner}, we maintain strict discretion regarding customer anatomical measurements, contact details, and bespoke order preferences.
            </p>
            <h4 className="font-semibold text-[#f5f2ea] text-sm pt-2">1. Measurement Storage</h4>
            <p>
              Your anatomical patterns and sizing specifications are archived strictly for future bespoke reorders under your unique client profile.
            </p>
            <h4 className="font-semibold text-[#f5f2ea] text-sm pt-2">2. Payment &amp; Communication</h4>
            <p>
              We do not store credit card numbers on our public web servers. Consultations and transactions are conducted directly via authorized channels (WhatsApp: {BRAND_INFO.phone1}, direct phone calls, or bank transfer).
            </p>
          </div>
        )}

        {activePolicyModal === 'terms' && (
          <div className="space-y-4 text-xs text-[#b8b3a7] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              <FileText className="w-4 h-4" />
              <span>Sartorial Agreement</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#faf8f5]">
              Terms &amp; Conditions
            </h3>
            <p>
              These terms govern bespoke tailoring orders, fabric reservations, and garment consultations with {BRAND_INFO.name}.
            </p>
            <h4 className="font-semibold text-[#f5f2ea] text-sm pt-2">1. Bespoke Custom Nature</h4>
            <p>
              Every custom suit, coat, waistcoat, sherwani, or shalwar kameez is cut specifically to customer measurements. Minor hand-tailoring nuances and natural fabric weave textures reflect genuine artisanal craft.
            </p>
            <h4 className="font-semibold text-[#f5f2ea] text-sm pt-2">2. Sizing Trials &amp; Alterations</h4>
            <p>
              We provide comprehensive trial fittings for Lahore clients and complimentary adjustment guidance for domestic and international orders.
            </p>
          </div>
        )}

        {activePolicyModal === 'shipping' && (
          <div className="space-y-4 text-xs text-[#b8b3a7] leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              <Truck className="w-4 h-4" />
              <span>Atelier Logistics</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#faf8f5]">
              Shipping &amp; Worldwide Delivery
            </h3>
            <p>
              {BRAND_INFO.name} ships from our atelier in Lahore, Pakistan to clients across Pakistan and worldwide destinations (UK, USA, UAE, Europe, Canada, and beyond).
            </p>
            <h4 className="font-semibold text-[#f5f2ea] text-sm pt-2">1. Lahore Delivery &amp; Fitting Trials</h4>
            <p>
              Hand delivery and personal fitting sessions are available across Lahore.
            </p>
            <h4 className="font-semibold text-[#f5f2ea] text-sm pt-2">2. International Shipping</h4>
            <p>
              International dispatches are packaged in protective breathable suit bags and rigid garment cartons to preserve the double press drape during transit. Tracking details are provided upon dispatch.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#1e2230] text-right">
          <button
            onClick={() => setActivePolicyModal(null)}
            className="px-5 py-2 bg-[#d4af37] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#e7cf85] transition-colors"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
