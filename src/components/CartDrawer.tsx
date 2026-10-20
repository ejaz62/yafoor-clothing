import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_INFO } from '../data/products';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
    generateWhatsAppOrderUrl
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Lahore',
    address: '',
    notes: '',
    paymentMethod: 'Cash on Delivery (Pakistan) / Atelier Trial'
  });
  const [orderRef, setOrderRef] = useState('');

  if (!isCartOpen) return null;

  const handleLaunchWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl(customerDetails.notes || undefined);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleProcessOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `YAF-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(generatedId);
    setCheckoutStep('confirmed');
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#10121a] border-l border-[#242839] text-[#f4efe6] flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-[#1e2230] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              <h3 className="font-serif text-xl font-bold text-[#faf8f5]">
                {checkoutStep === 'confirmed' ? 'Order Confirmed' : checkoutStep === 'checkout' ? 'Bespoke Order Details' : 'Shopping Bag'}
              </h3>
              {checkoutStep === 'cart' && (
                <span className="text-xs text-[#8e8a80]">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
              )}
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutStep('cart');
              }}
              className="p-1.5 text-[#9d998f] hover:text-[#d4af37] bg-[#1a1c26] rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 flex-1 overflow-y-auto">
            {checkoutStep === 'confirmed' ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-[#d4af37] mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-[#faf8f5]">
                  Bespoke Order Initiated
                </h4>
                <div className="p-3 bg-[#171a25] border border-[#2b2f42] rounded text-xs text-[#d4af37] font-mono">
                  Reference: #{orderRef}
                </div>
                <p className="text-xs text-[#b8b3a7] leading-relaxed">
                  Thank you, <span className="text-[#f5f2ea] font-medium">{customerDetails.name}</span>. Your bespoke order has been registered at our Lahore atelier. Rana Shahroz Iqbal's team will contact you at <span className="text-[#f5f2ea]">{customerDetails.phone}</span> to verify measurements and trial dates.
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(
                      `Hello YAFOOR Clothing, I have placed order #${orderRef} under the name ${customerDetails.name}. Please confirm the delivery & fitting schedule.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : checkoutStep === 'checkout' ? (
              <form id="bespoke-order-form" onSubmit={handleProcessOrder} className="space-y-4 text-xs animate-fade-in">
                <p className="text-xs text-[#9d998f] mb-2">
                  Provide your delivery address and contact information for Lahore or worldwide courier dispatch.
                </p>

                <div>
                  <label className="text-[11px] text-[#9d998f] block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                    className="w-full bg-[#161822] border border-[#2b2f42] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#9d998f] block mb-1">WhatsApp / Phone *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +92 313 7777234"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                    className="w-full bg-[#161822] border border-[#2b2f42] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#9d998f] block mb-1">City / Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lahore / Dubai / London"
                      value={customerDetails.city}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, city: e.target.value })}
                      className="w-full bg-[#161822] border border-[#2b2f42] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#9d998f] block mb-1">Payment / Trial Mode</label>
                    <select
                      value={customerDetails.paymentMethod}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, paymentMethod: e.target.value })}
                      className="w-full bg-[#161822] border border-[#2b2f42] rounded px-2.5 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                    >
                      <option value="Cash on Delivery (Pakistan)">Cash on Delivery</option>
                      <option value="Atelier Trial / Direct Settlement">Atelier Trial in Lahore</option>
                      <option value="International Wire / Transfer">International Transfer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-[#9d998f] block mb-1">Delivery Address *</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Street, Sector/Area, City, Postal Code"
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                    className="w-full bg-[#161822] border border-[#2b2f42] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#9d998f] block mb-1">Fitting Instructions or Trial Date</label>
                  <input
                    type="text"
                    placeholder="e.g. Please bring extra fabric swatches for lapels"
                    value={customerDetails.notes}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                    className="w-full bg-[#161822] border border-[#2b2f42] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                  />
                </div>

                <div className="p-3 bg-[#161924] rounded border border-[#24293a] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#a4a095]">
                    No upfront card charge required. For bespoke garments, payment is finalized after personal measurement consultation.
                  </p>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="py-16 text-center text-[#8e8a80]">
                <ShoppingBag className="w-12 h-12 text-[#2d3142] mx-auto mb-3" />
                <p className="font-serif text-lg text-[#f4efe6] mb-1">Your Shopping Bag is Empty</p>
                <p className="text-xs">Explore our bespoke suiting, coats, and sherwanis.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                    className="p-3 bg-[#151722] border border-[#212535] rounded-sm flex gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-20 object-cover object-top rounded-sm bg-[#0a0a0c]"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-bold text-[#faf8f5] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                            className="text-[#78756c] hover:text-red-400 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] text-[#9f9b90] space-x-1.5 mt-0.5">
                          <span>Size: <strong className="text-[#f5f2ea]">{item.selectedSize}</strong></span>
                          <span>·</span>
                          <span>Color: <strong className="text-[#f5f2ea]">{item.selectedColor}</strong></span>
                        </div>
                        {item.customMeasurements && (
                          <div className="text-[10px] text-[#d4af37] mt-0.5">
                            Custom measurements attached
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="font-serif font-bold text-sm text-[#d4af37] tabular-nums">
                          PKR {(item.product.pricePKR * item.quantity).toLocaleString()}
                        </span>

                        <div className="flex items-center border border-[#2b2f3f] rounded bg-[#10121a]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                            className="p-1 hover:text-[#d4af37]"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                            className="p-1 hover:text-[#d4af37]"
                            title="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && checkoutStep !== 'confirmed' && (
            <div className="p-5 border-t border-[#1e2230] bg-[#0c0e14] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-[#9d998f]">
                  Subtotal (PKR):
                </span>
                <span className="font-serif text-2xl font-bold text-[#d4af37] tabular-nums">
                  PKR {subtotal.toLocaleString()}
                </span>
              </div>

              {checkoutStep === 'cart' ? (
                <div className="space-y-2">
                  <button
                    onClick={handleLaunchWhatsAppOrder}
                    className="w-full py-3 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Order / Inquire via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full py-3 bg-[#d4af37] hover:bg-[#e7cf85] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Proceed to Delivery Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    type="submit"
                    form="bespoke-order-form"
                    className="w-full py-3 bg-[#d4af37] hover:bg-[#e7cf85] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Confirm Bespoke Order</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full py-2 bg-transparent text-xs text-[#9d998f] hover:text-[#f4efe6] transition-colors"
                  >
                    ← Back to Shopping Bag
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
