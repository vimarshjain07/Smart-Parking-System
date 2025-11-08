export interface ParkingSpot {
  id: string;
  name: string;
  location: string;
  type: "fixed" | "non-slot";
  totalSlots: number;
  availableSlots: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  price: number;
  features: string[];
}
