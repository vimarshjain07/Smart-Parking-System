import { Building2, MapPin, CheckCircle } from "lucide-react";

interface StatsProps {
  totalLocations: number;
  totalSlots: number;
  availableSlots: number;
}

export const Stats = ({ totalLocations, totalSlots, availableSlots }: StatsProps) => {
  const occupancyRate = ((totalSlots - availableSlots) / totalSlots) * 100;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl bg-card p-6 shadow-card">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <p className="text-3xl font-bold text-card-foreground">{totalLocations}</p>
          <p className="text-sm text-muted-foreground">Parking Locations</p>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-card">
          <div className="mb-3 inline-flex rounded-lg bg-success/10 p-3">
            <CheckCircle className="h-6 w-6 text-success" />
          </div>
          <p className="text-3xl font-bold text-card-foreground">{availableSlots}</p>
          <p className="text-sm text-muted-foreground">Available Slots</p>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-card">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <p className="text-3xl font-bold text-card-foreground">
            {occupancyRate.toFixed(0)}%
          </p>
          <p className="text-sm text-muted-foreground">Occupancy Rate</p>
        </div>
      </div>
    </section>
  );
};
