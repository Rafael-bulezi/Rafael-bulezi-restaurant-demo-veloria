export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Cocktail';
  rating: number;
  calories?: number;
}

export interface FlavorProfileData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
