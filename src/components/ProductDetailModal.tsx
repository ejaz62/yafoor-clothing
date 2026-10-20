import React, { useState } from 'react';
import { X, ShoppingBag, MessageSquare, Check, Sparkles, Ruler } from 'lucide-react';
import { Product } from '../types';
import { BRAND_INFO } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart, setIsFittingGuideOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isCustomMeasurementsOpen, setIsCustomMeasurementsOpen] = useState(false);
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    shoulder: '',
    length: '',
    sleeve: ''
  });

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0];
  const currentColor = selectedColor || product.colors[0].name;

  const handleAddToCart = () => {
    addToCart(
      product,
      currentSize,
      currentColor,
      isCustomMeasurementsOpen ? measurements : undefined
    );
    onClose();
  };

  const handleWhatsAppInquiry = () => {
    let msg = `Hello YAFOOR Clothing,\nI would like to consult about the *${product.name}* (PKR ${product.pricePKR.toLocaleString()}).\n`;
    msg += `Category: ${product.category}\n`;
    msg += `Selected Size: ${currentSize}\n`;
    msg += `Selected Color: ${currentColor}\n`;
    if (isCustomMeasurementsOpen) {
      msg += `Custom Measurements: Chest: ${measurements.chest || 'TBD'}, Waist: ${measurements.waist || 'TBD'}, Shoulder: ${measurements.shoulder || 'TBD'}, Sleeve: ${measurements.sleeve || 'TBD'}\n`;
    }
    msg += `\nPlease guide me on the next fitting steps.`;

    const url = `https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#11131a] border border-[#2b2e3d] rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-[#f4efe6]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#1b1e2a] hover:bg-[#282d3e] text-[#c5c1b8] hover:text-[#d4af37] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Product Image */}
          <div className="relative bg-[#0a0a0c] min-h-[350px] md:min-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            {product.tag && (
              <div className="absolute top-4 left-4 bg-[#0a0a0ce0] backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/40 rounded-sm">
                {product.tag}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Purchase Form */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Craft note */}
              <div className="flex items-center gap-2 text-xs text-[#d4af37] tracking-[0.2em] uppercase font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.category}</span>
                <span className="text-[#4c5061]" aria-hidden="true">·</span>
                <span className="text-[#a4a095]">Handmade &amp; Double Pressed</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf8f5] mb-2 leading-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-3xl font-bold text-[#d4af37] tabular-nums">
                  PKR {product.pricePKR.toLocaleString()}
                </span>
                <span className="text-xs text-[#7b786f]">
                  Demonstration price (PKR)
                </span>
              </div>

              <p className="text-sm text-[#b8b4aa] leading-relaxed mb-6 font-light">
                {product.description}
              </p>

              {/* Specifications Block */}
              <div className="bg-[#171a25] p-3.5 rounded-sm border border-[#242838] mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8e8a80]">Fabric:</span>
                  <span className="text-[#e2ded5] font-medium">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8a80]">Finishing:</span>
                  <span className="text-[#d4af37] font-medium">{product.finishing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e8a80]">Production Origin:</span>
                  <span className="text-[#e2ded5] font-medium">Lahore Atelier, Pakistan</span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-5">
                <label className="text-xs uppercase tracking-wider text-[#9f9b90] block mb-2 font-medium">
                  Select Shade / Fabric: <span className="text-[#f5f2ea]">{currentColor}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`relative w-7 h-7 rounded-full border-2 transition-transform ${
                        currentColor === c.name
                          ? 'border-[#d4af37] scale-110 shadow-md'
                          : 'border-transparent hover:border-[#60657b]'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {currentColor === c.name && (
                        <Check className="w-3.5 h-3.5 text-white absolute inset-0 m-auto drop-shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#9f9b90] font-medium">
                    Select Fit &amp; Size:
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsFittingGuideOpen(true)}
                    className="text-xs text-[#d4af37] hover:underline flex items-center gap-1"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>View Sizing Guide</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs rounded-sm transition-all ${
                        currentSize === sz
                          ? 'bg-[#d4af37] text-[#0a0a0c] font-semibold shadow-sm'
                          : 'bg-[#181b26] text-[#b0aca3] hover:text-[#f4efe6] border border-[#2a2e40]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Custom Measurement Drawer Toggle */}
              <div className="mb-6 border-t border-[#222535] pt-4">
                <button
                  type="button"
                  onClick={() => setIsCustomMeasurementsOpen(!isCustomMeasurementsOpen)}
                  className="flex items-center justify-between w-full text-xs text-[#d4af37] hover:text-[#e7cf85] font-medium"
                >
                  <span>{isCustomMeasurementsOpen ? '− Hide Custom Tailoring Form' : '+ Provide Custom Measurements (Inches)'}</span>
                </button>

                {isCustomMeasurementsOpen && (
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <label className="text-[10px] text-[#8e8a80] block mb-1">Chest (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 40"
                        value={measurements.chest}
                        onChange={(e) => setMeasurements({ ...measurements, chest: e.target.value })}
                        className="w-full bg-[#161822] border border-[#2c3040] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#8e8a80] block mb-1">Waist (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 34"
                        value={measurements.waist}
                        onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
                        className="w-full bg-[#161822] border border-[#2c3040] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#8e8a80] block mb-1">Shoulder (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 18.5"
                        value={measurements.shoulder}
                        onChange={(e) => setMeasurements({ ...measurements, shoulder: e.target.value })}
                        className="w-full bg-[#161822] border border-[#2c3040] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#8e8a80] block mb-1">Sleeve (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 25"
                        value={measurements.sleeve}
                        onChange={(e) => setMeasurements({ ...measurements, sleeve: e.target.value })}
                        className="w-full bg-[#161822] border border-[#2c3040] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#202332]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#d4af37] hover:bg-[#e7cf85] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#7b786f]">
                Worldwide insured shipping available from Lahore atelier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
