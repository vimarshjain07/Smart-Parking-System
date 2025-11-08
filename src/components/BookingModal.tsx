import { useState } from "react";
import { ParkingSpot } from "@/types/parking";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Clock, DollarSign, MapPin, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  spot: ParkingSpot;
}

export const BookingModal = ({ isOpen, onClose, spot }: BookingModalProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hours, setHours] = useState<number>(2);

  const totalCost = spot.price * hours;

  const handleBooking = () => {
    toast.success("Booking Confirmed!", {
      description: `Your parking spot at ${spot.name} has been reserved.`,
      icon: <CheckCircle className="h-4 w-4 text-success" />,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Parking Spot</DialogTitle>
          <DialogDescription>
            Reserve your spot at {spot.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="rounded-lg bg-muted/50 p-4">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{spot.name}</h3>
                <p className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {spot.location}
                </p>
              </div>
              <Badge variant="secondary" className="capitalize">
                {spot.type}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {spot.features.map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label className="mb-3 block">Select Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="hours" className="mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Duration (hours)
                </Label>
                <Input
                  id="hours"
                  type="number"
                  min="1"
                  max="24"
                  value={hours}
                  onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-lg"
                />
              </div>

              <div className="rounded-lg bg-primary/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  Pricing Breakdown
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Rate per hour:</span>
                    <span>${spot.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{hours} hours</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-primary/20 pt-2 text-lg font-bold text-primary">
                    <span>Total:</span>
                    <span>${totalCost}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Confirmation</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleBooking} className="flex-1">
              Confirm Booking (${totalCost})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
