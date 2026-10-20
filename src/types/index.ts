export type ProductCategory = 
  | 'Custom Suits'
  | 'Coats'
  | 'Waistcoats'
  | 'Shalwar Kameez'
  | 'Sherwanis';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  pricePKR: number;
  description: string;
  fabric: string;
  finishing: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  image: string;
  featured?: boolean;
  tag?: string;
  details: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  customMeasurements?: {
    chest?: string;
    waist?: string;
    shoulder?: string;
    length?: string;
    sleeve?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Suits' | 'Sherwanis' | 'Waistcoats' | 'Traditional' | 'Craftsmanship';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  occasion: string;
  rating: number;
  isSampleContent: boolean;
}
