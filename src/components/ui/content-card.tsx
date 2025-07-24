import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Plus, ThumbsUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  image: string;
  rating?: string;
  duration?: string;
  category?: string;
  isNew?: boolean;
  isOriginal?: boolean;
  year?: string;
  className?: string;
  onClick?: () => void;
}

export function ContentCard({ 
  title, 
  image, 
  rating, 
  duration, 
  category, 
  isNew,
  isOriginal,
  year,
  className,
  onClick 
}: ContentCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border-0 bg-card transition-all duration-300 hover:scale-105 hover:shadow-card-hover cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Top badges */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              {isNew && (
                <Badge variant="destructive" className="bg-red-600 text-white text-xs font-semibold">
                  NUEVO
                </Badge>
              )}
              {isOriginal && (
                <Badge className="bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold">
                  WATCHHUB
                </Badge>
              )}
            </div>
            {rating && (
              <Badge variant="secondary" className="bg-black/70 text-white border-0 text-xs font-semibold">
                {rating} coincidencia
              </Badge>
            )}
          </div>
          
          {/* Bottom controls */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90 px-4">
                <Play className="w-4 h-4 mr-1" />
                Reproducir
              </Button>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black p-2">
                <Plus className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black p-2">
                <ThumbsUp className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black p-2">
                <Info className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-white">
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{title}</h3>
              <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                {year && <span className="text-green-400 font-semibold">{year}</span>}
                {duration && <span>{duration}</span>}
                {category && <span>• {category}</span>}
              </div>
              <div className="flex items-center gap-1 text-xs text-white/60">
                <span className="bg-white/20 px-1 rounded text-xs">HD</span>
                <span className="bg-white/20 px-1 rounded text-xs">5.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}