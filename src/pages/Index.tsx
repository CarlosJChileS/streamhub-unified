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
      episodes: undefined
    };
    setSelectedContent(detailContent);
    setIsDetailModalOpen(true);
  };

  const getContentDescription = (title: string) => {
    const descriptions: { [key: string]: string } = {
      "El Último Guardián": "Un épico thriller de acción que sigue a un antiguo soldado que debe proteger a una misteriosa joven con poderes sobrenaturales de una organización secreta que busca explotar sus habilidades.",
      "Corazones en París": "Una emotiva historia de amor que se desarrolla en las pintorescas calles de París, donde dos almas solitarias encuentran el amor verdadero en los lugares más inesperados.",
      "Neo Tokyo 2099": "En un futuro distópico, un detective cibernético debe desentrañar una conspiración que amenaza con destruir la última ciudad habitada de la Tierra.",
      "John Wick: Capítulo 5": "El legendario asesino regresa para una última misión que pondrá a prueba todas sus habilidades y cambiará su destino para siempre.",
      "Mad Max: Furiosa": "En un mundo post-apocalíptico, una guerrera feroz lucha por sobrevivir mientras busca venganza en las tierras baldías."
    };
    return descriptions[title] || "Una experiencia cinematográfica única que te mantendrá al borde de tu asiento.";
  };

  const getContentCast = (title: string) => {
    const cast: { [key: string]: string[] } = {
      "El Último Guardián": ["Ryan Gosling", "Scarlett Johansson", "Oscar Isaac"],
      "Corazones en París": ["Emma Stone", "Timothée Chalamet", "Marion Cotillard"],
      "Neo Tokyo 2099": ["John Cho", "Rinko Kikuchi", "Brian Cox"],
      "John Wick: Capítulo 5": ["Keanu Reeves", "Laurence Fishburne", "Ian McShane"],
      "Mad Max: Furiosa": ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke"]
    };
    return cast[title] || ["Actor Principal", "Actor Secundario", "Actor de Reparto"];
  };

  const getContentDirector = (title: string) => {
    const directors: { [key: string]: string } = {
      "El Último Guardián": "Denis Villeneuve",
      "Corazones en París": "Céline Sciamma",
      "Neo Tokyo 2099": "The Wachowskis",
      "John Wick: Capítulo 5": "Chad Stahelski",
      "Mad Max: Furiosa": "George Miller"
    };
    return directors[title] || "Director Reconocido";
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
      title: "El Proyecto Atlas",
      image: movie1,
      rating: "97%",
      duration: "2h 15m",
      category: "Sci-Fi",
      isNew: true,
      year: "2024",
      isOriginal: true
    },
    {
      id: "8",
      title: "Contra el Tiempo",
      image: movie2,
      rating: "93%",
      duration: "1h 58m",
      category: "Thriller",
      isNew: true,
      year: "2024",
      isOriginal: true
    },
    {
      id: "9",
      title: "Renacer",
      image: movie3,
      rating: "91%",
      duration: "2h 12m",
      category: "Drama",
      isNew: true,
      year: "2024",
      isOriginal: true
    },
    {
      id: "10",
      title: "Fuego Cruzado",
      image: movie1,
      rating: "88%",
      duration: "2h 05m",
      category: "Acción",
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
    { id: "t7", title: "El Proyecto Atlas", image: movie1, rank: 7, category: "Sci-Fi" },
    { id: "t8", title: "Contra el Tiempo", image: movie2, rank: 8, category: "Thriller" },
    { id: "t9", title: "Renacer", image: movie3, rank: 9, category: "Drama" },
    { id: "t10", title: "Fuego Cruzado", image: movie1, rank: 10, category: "Acción" }
  ];

  const continueWatching = [
    { 
      id: "c1", 
      title: "El Último Guardián", 
      image: movie1, 
      progress: 75, 
      episode: "", 
      duration: "2h 15m",
      timeLeft: "32 min restantes"
    },
    { 
      id: "c2", 
      title: "John Wick: Capítulo 5", 
      image: movie2, 
      progress: 30, 
      episode: "", 
      duration: "2h 18m",
      timeLeft: "1h 35m restantes"
    },
    { 
      id: "c3", 
      title: "Mad Max: Furiosa", 
      image: movie3, 
      progress: 90, 
      episode: "", 
      duration: "2h 28m",
      timeLeft: "15 min restantes"
    },
    { 
      id: "c4", 
      title: "Neo Tokyo 2099", 
      image: movie1, 
      progress: 45, 
      episode: "", 
      duration: "2h 32m",
      timeLeft: "1h 24m restantes"
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
    },
    {
      id: "a4",
      title: "Fast X: The Final Chapter",
      image: movie1,
      rating: "87%",
      duration: "2h 42m",
      category: "Acción",
      isNew: true,
      year: "2024"
    },
    {
      id: "a5",
      title: "Expendables 5",
      image: movie2,
      rating: "85%",
      duration: "2h 08m",
      category: "Acción",
      isNew: false,
      year: "2024"
    }
  ];

  const dramaMovies = [
    {
      id: "d1",
      title: "Oppenheimer",
      image: movie2,
      rating: "94%",
      duration: "3h 00m",
      category: "Drama",
      isNew: false,
      year: "2023"
    },
    {
      id: "d2",
      title: "Killers of the Flower Moon",
      image: movie1,
      rating: "92%",
      duration: "3h 26m",
      category: "Drama",
      isNew: false,
      year: "2023"
    },
    {
      id: "d3",
      title: "The Zone of Interest",
      image: movie3,
      rating: "89%",
      duration: "1h 45m",
      category: "Drama",
      isNew: true,
      year: "2024"
    },
    {
      id: "d4",
      title: "Past Lives",
      image: movie2,
      rating: "95%",
      duration: "1h 45m",
      category: "Drama",
      isNew: false,
      year: "2023"
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

        {/* Drama Movies */}
        <ContentRow
          title="Dramas aclamados"
          subtitle="Historias que marcan la diferencia"
          items={dramaMovies}
          onItemClick={handleContentClick}
        />

        {/* Call to Action Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ¿Listo para la experiencia premium?
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Únete a millones de usuarios que ya disfrutan del mejor contenido en streaming. 
                Miles de películas exclusivas y contenido premium te esperan.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button size="lg" className="px-6 sm:px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Comenzar gratis
                </Button>
                
                <Button size="lg" variant="outline" className="px-6 sm:px-8 w-full sm:w-auto">
                  Ver planes
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>+50K películas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-3 h-3 sm:w-4 sm:h-4 rounded-full p-0"></Badge>
                  <span>Calidad 4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4" />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
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
                <li><a href="#" className="hover:text-primary transition-colors">Acción</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Drama</a></li>
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
          
          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 WatchHub Streaming. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;