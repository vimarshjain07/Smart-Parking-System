import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ParkingGrid } from "@/components/ParkingGrid";
import { ParkingSpot } from "@/types/parking";

const Index = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([
    {
      id: "P1",
      name: "Downtown Mall",
      location: "123 Main St",
      type: "fixed",
      totalSlots: 50,
      availableSlots: 23,
      coordinates: { lat: 40.7128, lng: -74.0060 },
      price: 5,
      features: ["Covered", "EV Charging", "24/7"],
    },
    {
      id: "P2",
      name: "City Center Plaza",
      location: "456 Park Ave",
      type: "fixed",
      totalSlots: 120,
      availableSlots: 87,
      coordinates: { lat: 40.7589, lng: -73.9851 },
      price: 8,
      features: ["Open Air", "CCTV", "Handicap Access"],
    },
    {
      id: "P3",
      name: "Tech Hub Parking",
      location: "789 Innovation Dr",
      type: "non-slot",
      totalSlots: 80,
      availableSlots: 12,
      coordinates: { lat: 40.7489, lng: -73.9680 },
      price: 6,
      features: ["Covered", "CCTV", "24/7"],
    },
    {
      id: "P4",
      name: "Beach Side Lot",
      location: "321 Ocean Blvd",
      type: "fixed",
      totalSlots: 60,
      availableSlots: 45,
      coordinates: { lat: 40.7282, lng: -74.0776 },
      price: 4,
      features: ["Open Air", "Beach Access"],
    },
    {
      id: "P5",
      name: "Airport North",
      location: "555 Terminal Rd",
      type: "non-slot",
      totalSlots: 200,
      availableSlots: 156,
      coordinates: { lat: 40.6413, lng: -73.7781 },
      price: 12,
      features: ["Covered", "EV Charging", "24/7", "Shuttle Service"],
    },
    {
      id: "P6",
      name: "University District",
      location: "888 Campus Way",
      type: "fixed",
      totalSlots: 40,
      availableSlots: 3,
      coordinates: { lat: 40.8075, lng: -73.9626 },
      price: 3,
      features: ["CCTV", "Student Discount"],
    },
  ]);

  // Simulate real-time IoT updates
  useEffect(() => {
    const interval = setInterval(() => {
      setParkingSpots((prev) =>
        prev.map((spot) => {
          const change = Math.floor(Math.random() * 7) - 3;
          const newAvailable = Math.max(
            0,
            Math.min(spot.totalSlots, spot.availableSlots + change)
          );
          return { ...spot, availableSlots: newAvailable };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalSlots = parkingSpots.reduce((acc, spot) => acc + spot.totalSlots, 0);
  const availableSlots = parkingSpots.reduce(
    (acc, spot) => acc + spot.availableSlots,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      <Stats
        totalLocations={parkingSpots.length}
        totalSlots={totalSlots}
        availableSlots={availableSlots}
      />
      <ParkingGrid parkingSpots={parkingSpots} />
    </div>
  );
};

export default Index;
