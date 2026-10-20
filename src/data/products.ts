import { Product } from '../types';

// Demonstration pricing clearly labeled in PKR for bespoke tailoring
export const PRODUCTS: Product[] = [
  {
    id: 'yaf-suit-01',
    name: 'Bespoke Double-Breasted Midnight Navy Suit',
    category: 'Custom Suits',
    pricePKR: 68500,
    description: 'Impeccably hand-canvassed bespoke two-piece suit tailored from Super 150s Merino wool. Features sharp peak lapels, genuine horn buttons, double press finish, and hand-pick stitching.',
    fabric: 'Super 150s Italian Merino Wool',
    finishing: 'Handcrafted Double Press Finish',
    colors: [
      { name: 'Midnight Navy', hex: '#162238' },
      { name: 'Charcoal Grey', hex: '#2c2e35' },
      { name: 'Classic Black', hex: '#111215' }
    ],
    sizes: ['38R', '40R', '42R', '44R', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/category_custom_suits_1792352354786.jpg',
    featured: true,
    tag: 'Signature Cut',
    details: [
      'Full floating canvas construction for natural drape',
      'Hand-sewn Milanese lapel buttonhole',
      'Double press crease retention process',
      'Dual rear vents & functional surgeon cuffs',
      'Tailored in our Lahore atelier'
    ]
  },
  {
    id: 'yaf-suit-02',
    name: 'Atelier Charcoal Three-Piece Executive Suit',
    category: 'Custom Suits',
    pricePKR: 82000,
    description: 'A sovereign three-piece ensemble comprising a structured jacket, double-breasted horseshoe waistcoat, and tailored flat-front trousers. Cut for the modern gentleman.',
    fabric: 'Super 160s English Worsted Wool',
    finishing: 'Double Press Hand Pressed',
    colors: [
      { name: 'Deep Charcoal', hex: '#26282e' },
      { name: 'Steel Slate', hex: '#3e434f' }
    ],
    sizes: ['38R', '40R', '42R', '44R', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/yafoor_hero_model_1792352354132.jpg',
    featured: true,
    tag: 'Masterpiece',
    details: [
      '3-piece tailored suit with matching 5-button waistcoat',
      'Breathable Cupro champagne lining',
      'Hand-finished pick stitching along lapels and pockets',
      'Side waist adjusters on trousers',
      'Crafted by master tailors in Lahore'
    ]
  },
  {
    id: 'yaf-coat-01',
    name: 'Cashmere Tailored Overcoat & Prince Coat',
    category: 'Coats',
    pricePKR: 54000,
    description: 'A regal silhouette combining structural European tailoring with the grandeur of South Asian royalty. Cut from pure Mongolian cashmere-wool blend with hand-carved antique buttons.',
    fabric: 'Pure Cashmere & Worsted Wool Blend',
    finishing: 'Hand-finished Structured Collar',
    colors: [
      { name: 'Onyx Black', hex: '#141416' },
      { name: 'Charcoal Melange', hex: '#36373b' },
      { name: 'Camel Tan', hex: '#947249' }
    ],
    sizes: ['38R', '40R', '42R', '44R', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/category_coats_1792352379059.jpg',
    featured: true,
    tag: 'Heritage Outerwear',
    details: [
      'Available in structured Overcoat or Mandarin Prince Coat cut',
      'Soft insulating cashmere wool exterior',
      'Subtle tonal micro-embroidery on collar and cuffs',
      'Flap pockets with velvet piping accents',
      'Made-to-order in Lahore atelier'
    ]
  },
  {
    id: 'yaf-coat-02',
    name: 'Regal Velvet Embroidered Prince Coat',
    category: 'Coats',
    pricePKR: 58000,
    description: 'Bespoke prince coat crafted from micro-velvet featuring subtle hand tilla work on the collar and placket. Designed for formal evening receptions and wedding occasions.',
    fabric: 'Premium Micro-Velvet & Raw Silk',
    finishing: 'Hand Zardozi Detail',
    colors: [
      { name: 'Royal Jet Black', hex: '#0a0a0c' },
      { name: 'Imperial Emerald', hex: '#0f291e' },
      { name: 'Deep Burgundy', hex: '#2b1016' }
    ],
    sizes: ['38R', '40R', '42R', '44R', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/craftsmanship_detail_1792352378839.jpg',
    featured: false,
    tag: 'Formal Evening',
    details: [
      'High Mandarin band collar with gold thread accents',
      'Concealed double-press front closure',
      'Hand-set metallic ornamental buttons',
      'Tailored contouring through chest and waist'
    ]
  },
  {
    id: 'yaf-waist-01',
    name: 'Raw Silk Textured Embroidered Waistcoat',
    category: 'Waistcoats',
    pricePKR: 28500,
    description: 'Signature YAFOOR waistcoat handcrafted in rich textured raw silk with delicate tone-on-tone embroidery and antique brass button studs. The quintessential accent for traditional festive wear.',
    fabric: 'Pure Handloom Raw Silk',
    finishing: 'Hand Embroidered & Double Press',
    colors: [
      { name: 'Charcoal & Antique Gold', hex: '#2e3036' },
      { name: 'Champagne Beige', hex: '#dfd4be' },
      { name: 'Deep Sapphire', hex: '#162238' }
    ],
    sizes: ['38', '40', '42', '44', '46', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/category_waistcoat_1792352356294.jpg',
    featured: true,
    tag: 'Signature Piece',
    details: [
      'Mandarin collar with reinforced interlining',
      'Chest pocket styled for silk pocket squares',
      'Double press finish to prevent fabric creasing',
      'Concealed inner ticket pocket',
      'Bespoke fitting guaranteed'
    ]
  },
  {
    id: 'yaf-waist-02',
    name: 'Tropical Wool Minimalist Cut Waistcoat',
    category: 'Waistcoats',
    pricePKR: 24000,
    description: 'Clean-cut contemporary waistcoat made from lightweight tropical wool. Modern minimal silhouette with sharp angled hem and tonal horn buttons.',
    fabric: 'Lightweight Tropical Wool',
    finishing: 'Matte Double Press Finish',
    colors: [
      { name: 'Slate Grey', hex: '#373a44' },
      { name: 'Ivory White', hex: '#ede9df' },
      { name: 'Jet Black', hex: '#18191c' }
    ],
    sizes: ['38', '40', '42', '44', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/atelier_craftsmanship_1792352356360.jpg',
    featured: false,
    tag: 'Modern Classic',
    details: [
      'Breathable all-season tropical wool blend',
      'Subtle back cinch belt for precise waist contouring',
      'Hand-stitched perimeter seams',
      'Ideal companion for Shalwar Kameez'
    ]
  },
  {
    id: 'yaf-sk-01',
    name: 'Imperial Egyptian Giza Cotton Shalwar Kameez',
    category: 'Shalwar Kameez',
    pricePKR: 22500,
    description: 'Elegantly tailored traditional Pakistani menswear crafted from 100% long-staple Egyptian Giza cotton. Features crisp shirt-cuffs, band collar, and YAFOOR signature double-pressed finish.',
    fabric: '100% Egyptian Giza Long-Staple Cotton',
    finishing: 'YAFOOR Permanent Double Press',
    colors: [
      { name: 'Desert Sand / Beige', hex: '#d6cbba' },
      { name: 'Pure Chalk White', hex: '#f6f5f0' },
      { name: 'Midnight Charcoal', hex: '#222329' }
    ],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/category_shalwar_kameez_1792352379535.jpg',
    featured: true,
    tag: 'Daily Luxury',
    details: [
      'Ultra-soft breathable cotton with subtle liquid silk sheen',
      'Hand-set micro thread work along placket and collar',
      'Traditional cut shalwar with tapered fall',
      'Double press treatment retains crisp drape all day',
      'Handmade in Lahore, Pakistan'
    ]
  },
  {
    id: 'yaf-sher-01',
    name: 'Bespoke Royal Zardozi Groom Sherwani',
    category: 'Sherwanis',
    pricePKR: 125000,
    description: 'An architectural heirloom sherwani hand-embroidered with micro zardozi, dabka, and champagne gold metallic threads on pure Jamawar raw silk. Tailored for wedding celebrations.',
    fabric: 'Pure Banarasi Jamawar & Handloom Raw Silk',
    finishing: 'Handcrafted Zardozi Couture',
    colors: [
      { name: 'Ivory & Champagne Gold', hex: '#e8dcbe' },
      { name: 'Heritage Charcoal & Antique Silver', hex: '#31333a' }
    ],
    sizes: ['38R', '40R', '42R', '44R', 'Bespoke Made-to-Measure'],
    image: '/src/assets/images/category_sherwani_1792352355461.jpg',
    featured: true,
    tag: 'Bespoke Bridal Couture',
    details: [
      'Full hand-embroidery taking 120+ atelier hours',
      'Includes matching embroidered shawl & inner kurta/churidar',
      'Sculpted shoulders and royal band collar',
      'Handmade buttons encrusted with subtle metallic leafing',
      'Personal master consultation with Rana Shahroz Iqbal'
    ]
  }
];

export const CATEGORIES_DATA = [
  {
    title: 'Custom Suits',
    slug: 'Custom Suits',
    tagline: 'Super 150s Wool · Hand Canvassed',
    image: '/src/assets/images/category_custom_suits_1792352354786.jpg',
    description: 'Two-piece and three-piece custom tailored suits designed with full floating canvas and hand-pick stitching.'
  },
  {
    title: 'Coats',
    slug: 'Coats',
    tagline: 'Cashmere Wool & Prince Coats',
    image: '/src/assets/images/category_coats_1792352379059.jpg',
    description: 'Regal structured overcoats and prince coats tailored for seasonal transitions and distinguished affairs.'
  },
  {
    title: 'Waistcoats',
    slug: 'Waistcoats',
    tagline: 'Handloom Raw Silk & Fine Wool',
    image: '/src/assets/images/category_waistcoat_1792352356294.jpg',
    description: 'Immaculately proportioned waistcoats featuring antique button details and hand-stitched borders.'
  },
  {
    title: 'Shalwar Kameez',
    slug: 'Shalwar Kameez',
    tagline: 'Egyptian Cotton · Double Press',
    image: '/src/assets/images/category_shalwar_kameez_1792352379535.jpg',
    description: 'Traditional Pakistani gentleman’s attire crafted from premium long-staple cotton with crisp cuff finishes.'
  },
  {
    title: 'Sherwanis',
    slug: 'Sherwanis',
    tagline: 'Heirloom Zardozi & Jamawar Couture',
    image: '/src/assets/images/category_sherwani_1792352355461.jpg',
    description: 'Regal wedding and ceremonial couture with intricate zardozi embroidery and custom heirloom silhouettes.'
  }
];

export const BRAND_INFO = {
  name: 'YAFOOR Clothing',
  owner: 'Rana Shahroz Iqbal',
  location: 'Lahore, Pakistan',
  tagline: 'Handmade. Double Press. Made For You.',
  category: 'Premium Bespoke Men\'s Wear',
  phone1: '+92 313 7777234',
  phone1Raw: '923137777234',
  phone2: '+92 333 8885220',
  phone2Raw: '923338885220',
  email: 'yafoor@gmail.com',
  instagram: 'https://www.instagram.com/yaforclothing/',
  facebook: 'https://www.facebook.com/Yafoor-Clothing-100487571321678/',
  shipping: 'Lahore and worldwide shipping'
};
