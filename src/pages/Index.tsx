import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { ContentRow } from "@/components/ui/content-row";
import { TopTenRow } from "@/components/ui/top-ten-row";
import { ContinueWatchingRow } from "@/components/ui/continue-watching-row";
import { ContentDetailModal } from "@/components/ui/content-detail-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, TrendingUp, Award, Clock } from "lucide-react";
import { useState } from "react";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";

const Index = () => {
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleContentClick = (content: any) => {
    const detailContent = {
      ...content,
      description: getContentDescription(content.title),
      cast: getContentCast(content.title),
      director: getContentDirector(content.title),
      episodes: content.category === "Serie" ? getEpisodes(content.title) : undefined
    };
    setSelectedContent(detailContent);
    setIsDetailModalOpen(true);
  };

  const getContentDescription = (title: string) => {
    const descriptions: { [key: string]: string } = {
      "El Último Guardián": "Un épico thriller de acción que sigue a un antiguo soldado que debe proteger a una misteriosa joven con poderes sobrenaturales de una organización secreta que busca explotar sus habilidades.",
      "Corazones en París": "Una emotiva historia de amor que se desarrolla en las pintorescas calles de París, donde dos almas solitarias encuentran el amor verdadero en los lugares más inesperados.",
      "Neo Tokyo 2099": "En un futuro distópico, un detective cibernético debe desentrañar una conspiración que amenaza con destruir la última ciudad habitada de la Tierra.",
      "Stranger Things 5": "Los chicos de Hawkins enfrentan su mayor desafío cuando el Upside Down amenaza con consumir nuestro mundo para siempre.",
      "Breaking Bad": "Un profesor de química de secundaria diagnosticado con cáncer pulmonar inoperable recurre a fabricar y vender metanfetamina para asegurar el futuro financiero de su familia."
    };
    return descriptions[title] || "Una experiencia cinematográfica única que te mantendrá al borde de tu asiento.";
  };

  const getContentCast = (title: string) => {
    const cast: { [key: string]: string[] } = {
      "El Último Guardián": ["Ryan Gosling", "Scarlett Johansson", "Oscar Isaac"],
      "Corazones en París": ["Emma Stone", "Timothée Chalamet", "Marion Cotillard"],
      "Neo Tokyo 2099": ["John Cho", "Rinko Kikuchi", "Brian Cox"],
      "Stranger Things 5": ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
      "Breaking Bad": ["Bryan Cranston", "Aaron Paul", "Anna Gunn"]
    };
    return cast[title] || ["Actor Principal", "Actor Secundario", "Actor de Reparto"];
  };

  const getContentDirector = (title: string) => {
    const directors: { [key: string]: string } = {
      "El Último Guardián": "Denis Villeneuve",
      "Corazones en París": "Céline Sciamma",
      "Neo Tokyo 2099": "The Wachowskis",
      "Stranger Things 5": "The Duffer Brothers",
      "Breaking Bad": "Vince Gilligan"
    };
    return directors[title] || "Director Reconocido";
  };

  const getEpisodes = (title: string) => {
    if (title === "Breaking Bad") {
      return [
        { id: "e1", title: "Pilot", duration: "58 min", image: movie1 },
        { id: "e2", title: "Cat's in the Bag...", duration: "48 min", image: movie2 },
        { id: "e3", title: "...And the Bag's in the River", duration: "48 min", image: movie3 },
        { id: "e4", title: "Cancer Man", duration: "48 min", image: movie1 },
        { id: "e5", title: "Gray Matter", duration: "48 min", image: movie2 }
      ];
    }
    return [];
  };
  // Sample content data
  const trendingMovies = [
    {
      id: "1",
      title: "El Último Guardián",
      image: movie1,
      rating: "98%",
      duration: "2h 15m",
      category: "Acción",
      isNew: true,
      year: "2024"
    },
    {
      id: "2",
      title: "Corazones en París",
      image: movie2,
      rating: "92%",
      duration: "1h 58m",
      category: "Romance",
      isNew: false,
      year: "2024"
    },
    {
      id: "3",
      title: "Neo Tokyo 2099",
      image: movie3,
      rating: "95%",
      duration: "2h 32m",
      category: "Sci-Fi",
      isNew: true,
      year: "2024"
    },
    {
      id: "4",
      title: "La Conspiración",
      image: movie1,
      rating: "89%",
      duration: "2h 08m",
      category: "Thriller",
      isNew: false,
      year: "2023"
    },
    {
      id: "5",
      title: "Memorias Perdidas",
      image: movie2,
      rating: "94%",
      duration: "1h 45m",
      category: "Drama",
      isNew: false,
      year: "2024"
    },
    {
      id: "6",
      title: "Guerra de Estrellas",
      image: movie3,
      rating: "96%",
      duration: "2h 25m",
      category: "Aventura",
      isNew: true,
      year: "2024"
    }
  ];

  const netflixOriginals = [
    {
      id: "7",
      title: "Stranger Things 5",
      image: movie1,
      rating: "97%",
      duration: "55 min",
      category: "Sci-Fi",
      isNew: true,
      year: "2024",
      isOriginal: true
    },
    {
      id: "8",
      title: "La Casa de Papel: Berlín",
      image: movie2,
      rating: "93%",
      duration: "50 min",
      category: "Drama",
      isNew: true,
      year: "2024",
      isOriginal: true
    },
    {
      id: "9",
      title: "The Crown: Temporada Final",
      image: movie3,
      rating: "91%",
      duration: "60 min",
      category: "Drama",
      isNew: true,
      year: "2024",
      isOriginal: true
    },
    {
      id: "10",
      title: "Dark Crystal: Resurrección",
      image: movie1,
      rating: "88%",
      duration: "45 min",
      category: "Fantasía",
      isNew: true,
      year: "2024",
      isOriginal: true
    }
  ];

  const topTenToday = [
    { id: "t1", title: "El Último Guardián", image: movie1, rank: 1, category: "Acción" },
    { id: "t2", title: "Neo Tokyo 2099", image: movie3, rank: 2, category: "Sci-Fi" },
    { id: "t3", title: "Corazones en París", image: movie2, rank: 3, category: "Romance" },
    { id: "t4", title: "La Conspiración", image: movie1, rank: 4, category: "Thriller" },
    { id: "t5", title: "Memorias Perdidas", image: movie2, rank: 5, category: "Drama" },
    { id: "t6", title: "Guerra de Estrellas", image: movie3, rank: 6, category: "Aventura" },
    { id: "t7", title: "Stranger Things 5", image: movie1, rank: 7, category: "Sci-Fi" },
    { id: "t8", title: "La Casa de Papel: Berlín", image: movie2, rank: 8, category: "Drama" },
    { id: "t9", title: "The Crown: Temporada Final", image: movie3, rank: 9, category: "Drama" },
    { id: "t10", title: "Dark Crystal: Resurrección", image: movie1, rank: 10, category: "Fantasía" }
  ];

  const continueWatching = [
    { 
      id: "c1", 
      title: "Breaking Bad", 
      image: movie1, 
      progress: 75, 
      episode: "T5 E14", 
      duration: "47 min",
      timeLeft: "12 min restantes"
    },
    { 
      id: "c2", 
      title: "The Office", 
      image: movie2, 
      progress: 30, 
      episode: "T2 E8", 
      duration: "22 min",
      timeLeft: "15 min restantes"
    },
    { 
      id: "c3", 
      title: "Narcos", 
      image: movie3, 
      progress: 90, 
      episode: "T1 E10", 
      duration: "58 min",
      timeLeft: "6 min restantes"
    },
    { 
      id: "c4", 
      title: "Ozark", 
      image: movie1, 
      progress: 45, 
      episode: "T3 E5", 
      duration: "62 min",
      timeLeft: "34 min restantes"
    }
  ];

  const actionMovies = [
    {
      id: "a1",
      title: "John Wick: Capítulo 5",
      image: movie1,
      rating: "94%",
      duration: "2h 18m",
      category: "Acción",
      isNew: true,
      year: "2024"
    },
    {
      id: "a2",
      title: "Mad Max: Furiosa",
      image: movie2,
      rating: "89%",
      duration: "2h 28m",
      category: "Acción",
      isNew: false,
      year: "2024"
    },
    {
      id: "a3",
      title: "Mission Impossible 8",
      image: movie3,
      rating: "92%",
      duration: "2h 35m",
      category: "Acción",
      isNew: true,
      year: "2024"
    }
  ];

  const comedySpecials = [
    {
      id: "cs1",
      title: "Dave Chappelle: The Dreamer",
      image: movie2,
      rating: "87%",
      duration: "72 min",
      category: "Comedia",
      isNew: true,
      year: "2024"
    },
    {
      id: "cs2",
      title: "Kevin Hart: Reality Check",
      image: movie1,
      rating: "84%",
      duration: "68 min",
      category: "Comedia",
      isNew: false,
      year: "2023"
    },
    {
      id: "cs3",
      title: "Amy Schumer: Emergency Contact",
      image: movie3,
      rating: "81%",
      duration: "58 min",
      category: "Comedia",
      isNew: true,
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="space-y-8 pb-16">
        {/* Continue Watching - Solo aparece si hay contenido */}
        <ContinueWatchingRow 
          title="Continuar viendo"
          items={continueWatching}
        />

        {/* Top 10 Today */}
        <TopTenRow 
          title="Top 10 en México hoy"
          items={topTenToday}
        />

        {/* Trending */}
        <ContentRow
          title="Tendencias ahora"
          subtitle="Lo más visto en WatchHub"
          items={trendingMovies}
          onItemClick={handleContentClick}
        />

        {/* Netflix Originals */}
        <ContentRow
          title="Originales de WatchHub"
          subtitle="Contenido exclusivo de nuestra plataforma"
          items={netflixOriginals}
          onItemClick={handleContentClick}
        />

        {/* Action Movies */}
        <ContentRow
          title="Películas de acción explosivas"
          subtitle="Adrenalina y aventura sin límites"
          items={actionMovies}
          onItemClick={handleContentClick}
        />

        {/* Comedy Specials */}
        <ContentRow
          title="Especiales de comedia"
          subtitle="Los mejores comediantes del mundo"
          items={comedySpecials}
          onItemClick={handleContentClick}
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

      {/* Content Detail Modal */}
      {selectedContent && (
        <ContentDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          content={selectedContent}
        />
      )}

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