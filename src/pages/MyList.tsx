import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { ContentCard } from "@/components/ui/content-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { EmptyState } from "@/components/ui/empty-state";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Movie } from "@/hooks/useMovies";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/welcome");
      return;
    }
    fetchWatchlist();
  }, [user, navigate]);

  const fetchWatchlist = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('watchlist')
        .select(`
          movie_id,
          movies (*)
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      
      const movies = data?.map(item => item.movies).filter(Boolean) || [];
      setWatchlistMovies(movies as Movie[]);
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const favorites = [
    {
      id: "1",
      title: "El Último Guardián",
      image: movie1,
      rating: "98%",
      year: "2024",
      duration: "2h 15m",
      category: "Acción",
      isNew: true,
      addedDate: "2024-01-15",
      description: "Un épico thriller de acción...",
      cast: ["Ryan Gosling", "Scarlett Johansson", "Oscar Isaac"],
      director: "Denis Villeneuve"
    },
    {
      id: "2",
      title: "Neo Tokyo 2099",
      image: movie3,
      rating: "95%",
      year: "2024",
      duration: "2h 32m",
      category: "Sci-Fi",
      isNew: true,
      addedDate: "2024-01-12",
      description: "En un futuro distópico...",
      cast: ["John Cho", "Rinko Kikuchi", "Brian Cox"],
      director: "The Wachowskis"
    },
    {
      id: "3",
      title: "Corazones en París",
      image: movie2,
      rating: "92%",
      year: "2024",
      duration: "1h 58m",
      category: "Romance",
      addedDate: "2024-01-10",
      description: "Una emotiva historia de amor...",
      cast: ["Emma Stone", "Timothée Chalamet"],
      director: "Céline Sciamma"
    }
  ];

  const watchLater = [
    {
      id: "4",
      title: "La Conspiración",
      image: movie1,
      rating: "89%",
      year: "2023",
      duration: "2h 08m",
      category: "Thriller",
      addedDate: "2024-01-14"
    },
    {
      id: "5",
      title: "Memorias Perdidas",
      image: movie2,
      rating: "94%",
      year: "2024",
      duration: "1h 45m",
      category: "Drama",
      addedDate: "2024-01-13"
    }
  ];

  const downloads = [
    {
      id: "6",
      title: "Guerra de Estrellas",
      image: movie3,
      rating: "96%",
      year: "2024",
      duration: "2h 25m",
      category: "Aventura",
      downloadDate: "2024-01-16",
      size: "2.1 GB",
      quality: "1080p"
    }
  ];

  const continueWatching = [
    {
      id: "7",
      title: "El Último Guardián",
      image: movie1,
      progress: 75,
      timeLeft: "32 min restantes",
      lastWatched: "Hace 2 horas"
    },
    {
      id: "8",
      title: "Neo Tokyo 2099",
      image: movie3,
      progress: 45,
      timeLeft: "1h 24m restantes",
      lastWatched: "Hace 1 día"
    }
  ];

  const handleContentClick = (content: any) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mi Lista
          </h1>
          <p className="text-muted-foreground">
            Todo tu contenido favorito en un solo lugar
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="favorites" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList className="grid w-full sm:w-auto grid-cols-4">
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Favoritos</span>
              </TabsTrigger>
              <TabsTrigger value="watchlater" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Ver después</span>
              </TabsTrigger>
              <TabsTrigger value="downloads" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargas</span>
              </TabsTrigger>
              <TabsTrigger value="continue" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Continuar</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="added-desc">Agregado recientemente</SelectItem>
                  <SelectItem value="added-asc">Agregado antes</SelectItem>
                  <SelectItem value="title-asc">Título (A-Z)</SelectItem>
                  <SelectItem value="rating-desc">Calificación</SelectItem>
                  <SelectItem value="year-desc">Año</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">
                Mis Favoritos ({favorites.length})
              </h2>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir lista
              </Button>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {favorites.map((content) => (
                  <ContentCard
                    key={content.id}
                    title={content.title}
                    image={content.image}
                    rating={content.rating}
                    year={content.year}
                    isNew={content.isNew}
                    onClick={() => handleContentClick(content)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {favorites.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-card/50 cursor-pointer transition-colors"
                    onClick={() => handleContentClick(content)}
                  >
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-20 h-28 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{content.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{content.year}</span>
                        <span>{content.duration}</span>
                        <Badge variant="outline">{content.category}</Badge>
                        <span className="text-primary">{content.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Agregado el {formatDate(content.addedDate)}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Watch Later Tab */}
          <TabsContent value="watchlater">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Ver después ({watchLater.length})
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {watchLater.map((content) => (
                <ContentCard
                  key={content.id}
                  title={content.title}
                  image={content.image}
                  rating={content.rating}
                  year={content.year}
                  onClick={() => handleContentClick(content)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Downloads Tab */}
          <TabsContent value="downloads">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Mis descargas ({downloads.length})
              </h2>
              <p className="text-sm text-muted-foreground">
                Espacio usado: 2.1 GB de 10 GB disponibles
              </p>
            </div>

            <div className="space-y-4">
              {downloads.map((content) => (
                <div
                  key={content.id}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg"
                >
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-20 h-28 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{content.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{content.year}</span>
                      <span>{content.duration}</span>
                      <Badge variant="outline">{content.quality}</Badge>
                      <span className="text-primary">{content.size}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Descargado el {formatDate(content.downloadDate)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reproducir
                    </Button>
                    <Button variant="ghost" size="sm">
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Continue Watching Tab */}
          <TabsContent value="continue">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Continuar viendo ({continueWatching.length})
              </h2>
            </div>

            <div className="space-y-4">
              {continueWatching.map((content) => (
                <div
                  key={content.id}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-card/50 cursor-pointer transition-colors"
                >
                  <div className="relative">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-32 h-20 object-cover rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50 rounded-b-md">
                      <div 
                        className="h-full bg-primary rounded-b-md transition-all duration-300"
                        style={{ width: `${content.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{content.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {content.timeLeft}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {content.lastWatched}
                    </p>
                  </div>
                  <Button size="sm">
                    Continuar
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Content Detail Modal */}
      {selectedContent && (
        <ContentDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={selectedContent}
        />
      )}
    </div>
  );
}