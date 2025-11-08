import { useState } from "react";
import { ParkingSpot } from "@/types/parking";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Zap, DollarSign } from "lucide-react";
import { BookingModal } from "./BookingModal";
import { cn } from "@/lib/utils";

interface ParkingCardProps {
  spot: ParkingSpot;
}

export const ParkingCard = ({ spot }: ParkingCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const occupancyPercent = (spot.availableSlots / spot.totalSlots) * 100;

  const getStatusColor = () => {
    if (occupancyPercent > 50) return "success";
    if (occupancyPercent > 20) return "warning";
    return "destructive";
  };

  const statusColor = getStatusColor();

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl bg-card shadow-card transition-all hover:shadow-glow">
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-1 text-xl font-semibold text-card-foreground">
                {spot.name}
              </h3>
              <p className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {spot.location}
              </p>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "capitalize",
                statusColor === "success" && "border-success/50 bg-success-light text-success",
                statusColor === "warning" && "border-warning/50 bg-warning-light text-warning",
                statusColor === "destructive" && "border-destructive/50 bg-destructive/10 text-destructive"
              )}
            >
              {spot.type}
            </Badge>
          </div>

          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Availability</span>
              <span className="font-semibold text-card-foreground">
                {spot.availableSlots}/{spot.totalSlots}
              </span>
            </div>
            
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full transition-all duration-500",
                  statusColor === "success" && "bg-success",
                  statusColor === "warning" && "bg-warning",
                  statusColor === "destructive" && "bg-destructive"
                )}
                style={{ width: `${occupancyPercent}%` }}
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {spot.features.map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-1 text-lg font-bold text-primary">
            <DollarSign className="h-5 w-5" />
            {spot.price}/hour
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(`https://maps.google.com/?q=${spot.coordinates.lat},${spot.coordinates.lng}`, '_blank')}
            >
              <Navigation className="mr-2 h-4 w-4" />
              Navigate
            </Button>
            <Button
              className="w-full"
              onClick={() => setIsModalOpen(true)}
              disabled={spot.availableSlots === 0}
            >
              <Zap className="mr-2 h-4 w-4" />
              {spot.availableSlots === 0 ? "Full" : "Book Now"}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 h-1 w-full transition-all duration-500",
            statusColor === "success" && "bg-success",
            statusColor === "warning" && "bg-warning",
            statusColor === "destructive" && "bg-destructive"
          )}
        />
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        spot={spot}
      />
    </>
  );
};
