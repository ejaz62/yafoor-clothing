import React, { useState } from 'react';
import { Eye, ShoppingBag, MessageSquare, Info } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/products';
import { Product, ProductCategory } from '../types';
import { useCart } from '../context/CartContext';

interface FeaturedCollectionProps {
  selectedCategory: ProductCategory | 'All';
  onSelectCategory: (category: ProductCategory | 'All') => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { addToCart, setSelectedProduct } = useCart();
  const [activeSizeSelection, setActiveSizeSelection] = useState<{ [productId: string]: string }>({});

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Custom Suits',
    'Coats',
    'Waistcoats',
    'Shalwar Kameez',
    'Sherwanis'
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleSizeChange = (productId: string, size: string) => {
    setActiveSizeSelection((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuickAdd = (product: Product) => {
    const chosenSize = activeSizeSelection[product.id] || product.sizes[0];
    const defaultColor = product.colors[0].name;
    addToCart(product, chosenSize, defaultColor);
  };

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#0a0a0c] text-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-2">
              Curated Menswear
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5]">
              Featured Collection
            </h2>
          </div>

          {/* Pricing transparency note */}
          <div className="flex items-center gap-2 text-xs text-[#959187] bg-[#141620] px-3.5 py-2 rounded border border-[#242735] max-w-md">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              Prices displayed in PKR (₨) are curated demonstration estimates for bespoke tailoring. Final quote confirmed upon fabric &amp; measurement consultation.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs (functional segmented controls per frontend-design rules) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0a0a0c] font-semibold shadow-md'
                    : 'bg-[#151722] text-[#b0aca3] hover:text-[#f4efe6] hover:bg-[#1d202e] border border-[#232737]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const chosenSize = activeSizeSelection[product.id] || product.sizes[0];

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#11131b] border border-[#1e222f] hover:border-[#d4af37]/50 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] bg-[#0c0d12] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-[0.88]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Tag / Category */}
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-[#0a0a0ce0] backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-wider uppercase text-[#d4af37] border border-[#d4af37]/30 rounded-sm">
                      {product.tag}
                    </div>
                  )}

                  {/* Overlay Quick Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-3 bg-[#f5f2ea] hover:bg-[#d4af37] text-[#0a0a0c] rounded-full shadow-lg transition-transform hover:scale-110"
                      title="View garment specifications & details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={`https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(
                        `Hello YAFOOR Clothing, I would like to inquire about "${product.name}" (PKR ${product.pricePKR.toLocaleString()}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#25d366] hover:bg-[#20ba59] text-white rounded-full shadow-lg transition-transform hover:scale-110"
                      title="Direct WhatsApp inquiry"
                    >
                      <MessageSquare className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Product Meta & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clean unboxed metadata per Zero-Pill discipline */}
                    <div className="flex items-center gap-2 text-xs text-[#8e8a80] mb-1.5 uppercase tracking-wider">
                      <span>{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{product.fabric.split(' ')[0]}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-serif text-lg sm:text-xl font-bold text-[#faf8f5] mb-2 cursor-pointer hover:text-[#d4af37] transition-colors leading-snug line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    {/* Price in Tabular Numerals */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#d4af37] tabular-nums">
                        PKR {product.pricePKR.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-[#7a776e]">
                        (Demonstration Price)
                      </span>
                    </div>

                    {/* Available Color Swatches */}
                    <div className="mb-4">
                      <span className="text-[11px] uppercase tracking-wider text-[#8e8a80] block mb-1.5">
                        Fabric &amp; Shades:
                      </span>
                      <div className="flex items-center gap-2">
                        {product.colors.map((color) => (
                          <div
                            key={color.name}
                            className="w-4 h-4 rounded-full border border-[#484d60]"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                        <span className="text-xs text-[#a9a59b] ml-1">
                          {product.colors.map((c) => c.name).join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* Quick Size Selector */}
                    <div className="mb-5">
                      <span className="text-[11px] uppercase tracking-wider text-[#8e8a80] block mb-1.5">
                        Select Fit / Size:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.slice(0, 4).map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(product.id, size)}
                            className={`px-2 py-1 text-[11px] rounded-sm transition-all ${
                              chosenSize === size
                                ? 'bg-[#2b2e3e] text-[#d4af37] border border-[#d4af37]'
                                : 'bg-[#161822] text-[#9c978d] hover:text-[#f4efe6] border border-[#242735]'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: View Details & Add to Cart */}
                  <div className="pt-4 border-t border-[#1e212c] grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#dcd7cb] bg-[#171924] hover:bg-[#202332] border border-[#2d3142] hover:border-[#d4af37] rounded-sm transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#0a0a0c] bg-[#d4af37] hover:bg-[#e7cf85] rounded-sm transition-colors text-center shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
