import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setSelectedProduct } = useCart();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase()) ||
          (p.tag && p.tag.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fade-in">
      <div className="relative bg-[#11131a] border border-[#2b2f3e] rounded-sm max-w-2xl w-full shadow-2xl p-6 text-[#f4efe6]">
        {/* Header Search Input */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            placeholder="Search custom suits, sherwanis, raw silk waistcoats, Egyptian cotton..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#181a25] border border-[#2e3244] rounded-sm pl-11 pr-10 py-3 text-sm text-[#f5f2ea] focus:border-[#d4af37] outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#9d998f] hover:text-[#d4af37]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!query && (
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#8e8a80] block font-medium">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {['Double-Breasted Suit', 'Wedding Sherwani', 'Egyptian Cotton', 'Prince Coat', 'Raw Silk Waistcoat'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-[#171923] hover:bg-[#222533] text-xs text-[#c5c1b8] border border-[#242735] hover:border-[#d4af37] rounded-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="space-y-3 max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-xs text-[#8e8a80] py-8 text-center">
                No bespoke garments found matching "{query}". Try searching for 'suits', 'sherwani', or 'waistcoat'.
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="p-3 bg-[#161822] hover:bg-[#1d202e] border border-[#222534] hover:border-[#d4af37]/60 rounded-sm cursor-pointer flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-14 object-cover object-top rounded-sm bg-[#0a0a0c]"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#d4af37] block">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#faf8f5]">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#8e8a80]">
                        {product.fabric}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-serif text-sm font-bold text-[#d4af37] tabular-nums">
                      PKR {product.pricePKR.toLocaleString()}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#8e8a80]" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
