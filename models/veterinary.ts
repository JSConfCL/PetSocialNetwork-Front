export type Veterinary = {
    id: string;
    name: string;
    description: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    schedule: {
      days: string;
      hours: string;
    }[];
    phone: string;
    rating: number;
    image: string;
  };