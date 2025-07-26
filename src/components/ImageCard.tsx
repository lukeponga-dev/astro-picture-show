import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
  copyright?: string;
}

interface ImageCardProps {
  data: ApodData;
  className?: string;
}

export const ImageCard = ({ data, className }: ImageCardProps) => {
  return (
    <Card className={cn("cosmic-card stellar-glow cosmic-float overflow-hidden", className)}>
      <div className="relative">
        {data.media_type === "image" ? (
          <img
            src={data.url}
            alt={data.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-video bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Video content not supported</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground leading-tight">
            {data.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {new Date(data.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        
        <p className="text-foreground/90 leading-relaxed">
          {data.explanation}
        </p>
        
        {data.copyright && (
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © {data.copyright}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageCard;