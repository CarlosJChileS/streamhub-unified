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
  className?: string;
}

export function ContentCard({ 
  title, 
  image, 
  rating, 
  duration, 
  category, 
  isNew, 
  className 
}: ContentCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-0 bg-card transition-all duration-300 hover:scale-105 hover:shadow-card-hover",
      className
    )}>
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
            {isNew && (
              <Badge variant="destructive" className="bg-red-600 text-white">
                NUEVO
              </Badge>
            )}
            {rating && (
              <Badge variant="secondary" className="bg-black/60 text-white border-0">
                {rating}
              </Badge>
            )}
          </div>
          
          {/* Bottom controls */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90">
                <Play className="w-4 h-4 mr-1" />
                Reproducir
              </Button>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                <Plus className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                <ThumbsUp className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                <Info className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-white">
              <h3 className="font-semibold text-sm mb-1">{title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                {duration && <span>{duration}</span>}
                {category && <span>• {category}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}