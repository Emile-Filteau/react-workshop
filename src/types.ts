export interface Equipment {
  name: string;
}

export interface Picture {
  url: string;
}

export interface Review {
  score: number;
  comment: string;
}

export interface ListingSummary {
  title: string;
  summary: string;
  city: string;
  travellers: number;
  bedrooms: number;
  washrooms: number;
  price: number;
  currency: string;
  rating: number;
  rating_count: number;
  featured_picture: Picture;
}

export interface Listing extends ListingSummary {
  description: string;
  rules: string;
  cancellation_policy: string;
  equipments: Equipment[];
}
