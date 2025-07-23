import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { ContentRow } from "@/components/ui/content-row";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, TrendingUp } from "lucide-react";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";

const Index = () => {
  // Sample content data
  const trendingMovies = [
    {
      id: "1",
      title: "Acción Extrema",
      image: movie1,
      rating: "8.5",
      duration: "2h 15m",
      category: "Acción",
      isNew: true
    },
    {
      id: "2",
      title: "Romance Eterno",
      image: movie2,
      rating: "7.8",
      duration: "1h 58m",
      category: "Romance",
      isNew: false
    },
    {
      id: "3",
      title: "Futuro Distópico",
      image: movie3,
      rating: "9.1",
      duration: "2h 32m",
      category: "Sci-Fi",
      isNew: true
    },
    {
      id: "4",
      title: "Acción Extrema",
      image: movie1,
      rating: "8.5",
      duration: "2h 15m",
      category: "Acción",
      isNew: false
    },
    {
      id: "5",
      title: "Romance Eterno",
      image: movie2,
      rating: "7.8",
      duration: "1h 58m",
      category: "Romance",
      isNew: false
    }
  ];

  const newReleases = [
    {
      id: "6",
      title: "Futuro Distópico",
      image: movie3,
      rating: "9.1",
      duration: "2h 32m",
      category: "Sci-Fi",
      isNew: true
    },
    {
      id: "7",
      title: "Acción Extrema",
      image: movie1,
      rating: "8.5",
      duration: "2h 15m",
      category: "Acción",
      isNew: true
    },
    {
      id: "8",
      title: "Romance Eterno",
      image: movie2,
      rating: "7.8",
      duration: "1h 58m",
      category: "Romance",
      isNew: true
    },
    {
      id: "9",
      title: "Futuro Distópico",
      image: movie3,
      rating: "9.1",
      duration: "2h 32m",
      category: "Sci-Fi",
      isNew: true
    }
  ];

  const popularSeries = [
    {
      id: "10",
      title: "Romance Eterno",
      image: movie2,
      rating: "8.9",
      duration: "45 min",
      category: "Drama",
      isNew: false
    },
    {
      id: "11",
      title: "Acción Extrema",
      image: movie1,
      rating: "8.5",
      duration: "50 min",
      category: "Acción",
      isNew: false
    },
    {
      id: "12",
      title: "Futuro Distópico",
      image: movie3,
      rating: "9.1",
      duration: "42 min",
      category: "Sci-Fi",
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="space-y-12 pb-16">
        <ContentRow
          title="Tendencias de la semana"
          subtitle="Lo más visto en WatchHub"
          items={trendingMovies}
        />

        <ContentRow
          title="Nuevos lanzamientos"
          subtitle="Estrenos exclusivos"
          items={newReleases}
        />

        <ContentRow
          title="Series populares"
          subtitle="Las series más aclamadas"
          items={popularSeries}
        />

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ¿Listo para la experiencia premium?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Únete a millones de usuarios que ya disfrutan del mejor contenido en streaming. 
                Películas, series y documentales exclusivos te esperan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
                  <Play className="w-5 h-5 mr-2" />
                  Comenzar gratis
                </Button>
                
                <Button size="lg" variant="outline" className="px-8">
                  Ver planes
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>+50K películas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-4 h-4 rounded-full p-0"></Badge>
                  <span>Calidad 4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>Sin anuncios</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Watch<span className="text-primary">Hub</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                La mejor plataforma de streaming con contenido exclusivo y calidad premium.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contenido</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Películas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Series</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentales</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Originales</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dispositivos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Cuenta</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Mi perfil</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Suscripción</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Configuración</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 WatchHub Streaming. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;