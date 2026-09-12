export type MenuCategory = 
  | 'Indian'
  | 'Chinese'
  | 'Continental'
  | 'Snacks'
  | 'Main Course'
  | 'Desserts'
  | 'Mocktails'
  | 'Chef Specials';

export type DietaryType = 'veg' | 'vegan';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: MenuCategory;
  description: string;
  price: number;
  dietary: DietaryType;
  image: string;
  badge?: string;
  isChefSpecial?: boolean;
  spiciness?: 'mild' | 'medium' | 'spicy';
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
  avatarBg?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'interior' | 'culinary' | 'ambience' | 'family';
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface ExperienceTile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  occasion?: string;
  specialRequest?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
