import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, color: string, customMeasurements?: any, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isFittingGuideOpen: boolean;
  setIsFittingGuideOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isStoryOpen: boolean;
  setIsStoryOpen: (open: boolean) => void;
  activePolicyModal: 'privacy' | 'terms' | 'shipping' | null;
  setActivePolicyModal: (policy: 'privacy' | 'terms' | 'shipping' | null) => void;
  toast: string | null;
  showToast: (msg: string) => void;
  generateWhatsAppOrderUrl: (customNote?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('yafoor_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFittingGuideOpen, setIsFittingGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | 'shipping' | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('yafoor_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (
    product: Product,
    size: string,
    color: string,
    customMeasurements?: any,
    quantity: number = 1
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedSize === size && i.selectedColor === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (customMeasurements) {
          updated[existingIndex].customMeasurements = customMeasurements;
        }
        return updated;
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity, customMeasurements }];
    });
    showToast(`Added "${product.name}" (${size}) to your Shopping Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.selectedSize === size && i.selectedColor === color)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setItems((prev) =>
      prev.map((i) => {
        if (i.product.id === productId && i.selectedSize === size && i.selectedColor === color) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.pricePKR * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppOrderUrl = (customNote?: string) => {
    const phoneNumber = '923137777234';
    let text = `*New Order Inquiry - YAFOOR Clothing*\n\n`;
    text += `Hello Rana Shahroz Iqbal & YAFOOR Team,\nI would like to place/inquire about an order:\n\n`;

    if (items.length > 0) {
      items.forEach((item, idx) => {
        text += `${idx + 1}. *${item.product.name}*\n`;
        text += `   - Category: ${item.product.category}\n`;
        text += `   - Size: ${item.selectedSize}\n`;
        text += `   - Color: ${item.selectedColor}\n`;
        text += `   - Quantity: ${item.quantity}\n`;
        text += `   - Price: PKR ${(item.product.pricePKR * item.quantity).toLocaleString()}\n`;
        if (item.customMeasurements) {
          text += `   - Custom Fit: Chest ${item.customMeasurements.chest || 'N/A'}", Waist ${item.customMeasurements.waist || 'N/A'}", Shoulder ${item.customMeasurements.shoulder || 'N/A'}"\n`;
        }
        text += `\n`;
      });
      text += `*Total Order Value:* PKR ${subtotal.toLocaleString()}\n\n`;
    }

    if (customNote) {
      text += `*Customer Note:* ${customNote}\n\n`;
    }

    text += `Please let me know how to proceed with the bespoke fitting and delivery details. Thank you!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        isFittingGuideOpen,
        setIsFittingGuideOpen,
        isSearchOpen,
        setIsSearchOpen,
        isStoryOpen,
        setIsStoryOpen,
        activePolicyModal,
        setActivePolicyModal,
        toast,
        showToast,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
