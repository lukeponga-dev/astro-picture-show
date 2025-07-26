import { useApod } from "@/hooks/useApod";
import { ImageCard } from "@/components/ImageCard";
import { CosmicLoader } from "@/components/CosmicLoader";
import { Card } from "@/components/ui/card";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Index = () => {
  const { data, loading, error } = useApod();

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cosmicHero})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="nebula-bg absolute inset-0" />
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground cosmic-float">
            Cosmic Canvas
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Explore the universe through NASA's daily astronomical wonders
          </p>
          <div className="w-20 h-1 bg-gradient-aurora mx-auto rounded-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 -mt-32">
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="cosmic-card mb-8 p-6">
              <h2 className="text-3xl font-bold text-center mb-2">
                Today's Astronomical Picture
              </h2>
              <p className="text-muted-foreground text-center">
                Discover the cosmos with NASA's Astronomy Picture of the Day
              </p>
            </Card>

            {loading && (
              <CosmicLoader className="py-16" />
            )}

            {error && (
              <Card className="cosmic-card p-8 text-center">
                <h3 className="text-xl font-semibold text-destructive mb-2">
                  Houston, we have a problem
                </h3>
                <p className="text-muted-foreground">{error}</p>
              </Card>
            )}

            {data && !loading && (
              <ImageCard data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
