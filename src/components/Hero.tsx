import { Button } from "@/components/ui/button";
import { MapPin, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Zap className="h-4 w-4" />
          <span>Real-Time IoT Powered</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Smart Parking
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Find, reserve, and navigate to available parking spots in real-time. 
          Powered by IoT sensors and intelligent algorithms.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2 shadow-glow">
            <MapPin className="h-5 w-5" />
            Find Parking Now
          </Button>
          <Button size="lg" variant="outline">
            How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};
