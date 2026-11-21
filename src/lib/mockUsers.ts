export interface User {
  id: string;
  name: string;
  age: number;
  county: string;
  town: string;
  bio: string;
  interests: string[];
  tribe?: string;
  photo: string;
  lat: number;
  lng: number;
  distance?: number;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Amina Wanjiku",
    age: 26,
    county: "Nairobi",
    town: "Westlands",
    bio: "Love hiking Ngong Hills and trying new restaurants in Nairobi. Looking for genuine connection.",
    interests: ["Hiking", "Food", "Travel", "Music"],
    tribe: "Kikuyu",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    lat: -1.268,
    lng: 36.811,
  },
  {
    id: "2",
    name: "David Omondi",
    age: 29,
    county: "Kisumu",
    town: "Kisumu Central",
    bio: "Entrepreneur and basketball fan. Enjoy lake views and good conversations.",
    interests: ["Business", "Sports", "Fishing"],
    tribe: "Luo",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    lat: -0.0917,
    lng: 34.768,
  },
  {
    id: "3",
    name: "Fatuma Hassan",
    age: 24,
    county: "Mombasa",
    town: "Nyali",
    bio: "Beach lover, photographer, and foodie. Let's explore the coast together!",
    interests: ["Beach", "Photography", "Cooking"],
    tribe: "Swahili",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    lat: -4.0435,
    lng: 39.6682,
  },
  {
    id: "4",
    name: "James Kipchoge",
    age: 31,
    county: "Uasin Gishu",
    town: "Eldoret",
    bio: "Runner and nature enthusiast. Training for the next marathon.",
    interests: ["Running", "Nature", "Fitness"],
    tribe: "Kalenjin",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    lat: 0.5143,
    lng: 35.2698,
  },
  {
    id: "5",
    name: "Grace Muthoni",
    age: 27,
    county: "Kiambu",
    town: "Thika",
    bio: "Teacher and bookworm. Love coffee dates and long walks.",
    interests: ["Reading", "Coffee", "Teaching"],
    tribe: "Kikuyu",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    lat: -1.033,
    lng: 37.069,
  },
];

// Simple haversine distance in km
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}