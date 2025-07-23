import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-banner.jpg";

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="WatchHub Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* WatchHub branding */}
          <div className="mb-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
              Watch<span className="text-primary">Hub</span>
            </h1>
            <p className="text-lg text-gray-300">
              Streaming Premium
            </p>
          </div>

          {/* Featured content */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-600 text-white hover:bg-red-700">
                SERIE ORIGINAL
              </Badge>
              <Badge variant="outline" className="border-white text-white">
                2024
              </Badge>
              <Badge variant="outline" className="border-white text-white">
                18+
              </Badge>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              The Crown Chronicles
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Una épica serie de fantasía que sigue las aventuras de un reino en guerra. 
              Dragones, magia y batallas épicas te esperan en esta producción exclusiva de WatchHub.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <span>8 episodios</span>
              <span>•</span>
              <span>45 min c/u</span>
              <span>•</span>
              <span>Fantasía, Drama</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mb-8">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8">
              <Play className="w-5 h-5 mr-2" />
              Reproducir
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8">
              <Info className="w-5 h-5 mr-2" />
              Más información
            </Button>
          </div>

          {/* Audio control */}
          <div className="flex items-center justify-end">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMuted(!isMuted)}
              className="rounded-full border border-white/30 text-white hover:bg-white/20"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}