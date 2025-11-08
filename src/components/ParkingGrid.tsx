import { ParkingSpot } from "@/types/parking";
import { ParkingCard } from "./ParkingCard";

interface ParkingGridProps {
  parkingSpots: ParkingSpot[];
}

export const ParkingGrid = ({ parkingSpots }: ParkingGridProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-foreground">
          Available Parking Spots
        </h2>
        <p className="text-muted-foreground">
          Real-time availability powered by IoT sensors
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {parkingSpots.map((spot) => (
          <ParkingCard key={spot.id} spot={spot} />
        ))}
      </div>
    </section>
  );
};
