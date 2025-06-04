export interface Attraction {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  position: number;
}

export interface Day {
  id: string;
  name: string;
  attractions: Attraction[];
}

export interface Itinerary {
  id: string;
  name: string;
  days: Day[];
}