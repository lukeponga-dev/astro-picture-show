import { cn } from "@/lib/utils";

interface CosmicLoaderProps {
  className?: string;
}

export const CosmicLoader = ({ className }: CosmicLoaderProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-border rounded-full">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 w-16 h-16 border-2 border-accent/30 rounded-full animate-pulse"></div>
      </div>
      <p className="text-muted-foreground animate-pulse">Loading cosmic wonders...</p>
    </div>
  );
};

export default CosmicLoader;