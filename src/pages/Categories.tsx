import { useState } from "react";
import { ContentCard } from "@/components/ui/content-card";
import { ContentDetailModal } from "@/components/ui/content-detail-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", name: "Todo", count: 150 },
  { id: "movies", name: "Películas", count: 85 },
  { id: "series", name: "Series", count: 45 },
  { id: "documentaries", name: "Documentales", count: 20 },
  { id: "action", name: "Acción", count: 35 },
  { id: "comedy", name: "Comedia", count: 28 },
  { id: "drama", name: "Drama", count: 32 },
  { id: "thriller", name: "Thriller", count: 18 },
  { id: "sci-fi", name: "Ciencia Ficción", count: 15 },
  { id: "horror", name: "Terror", count: 12 },
];

// Sample content data
const allContent = [
  {
    id: "1",
    title: "Extraction",
    image: "/src/assets/movie-1.jpg",
    category: "action",
    type: "movie",
    year: "2020",
    rating: "94",
    duration: "1h 56m",
    description: "Un mercenario del mercado negro de armas se embarca en una misión de rescate mortal para salvar al hijo secuestrado de un señor del crimen internacional.",
    cast: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda"],
    director: "Sam Hargrave"
  },
  {
    id: "2",
    title: "Breaking Bad",
    image: "/src/assets/movie-2.jpg",
    category: "drama",
    type: "series",
    year: "2008",
    rating: "96",
    duration: "5 temporadas",
    description: "Un profesor de química de secundaria diagnosticado con cáncer de pulmón inoperable recurre a fabricar y vender metanfetamina para asegurar el futuro financiero de su familia.",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    director: "Vince Gilligan",
    episodes: [
      { id: "e1", title: "Pilot", duration: "58m", image: "/src/assets/movie-2.jpg" },
      { id: "e2", title: "Cat's in the Bag...", duration: "48m", image: "/src/assets/movie-2.jpg" },
      { id: "e3", title: "...And the Bag's in the River", duration: "48m", image: "/src/assets/movie-2.jpg" }
    ]
  },
  {
    id: "3",
    title: "Stranger Things",
    image: "/src/assets/movie-3.jpg",
    category: "sci-fi",
    type: "series",
    year: "2016",
    rating: "89",
    duration: "4 temporadas",
    description: "Cuando un niño desaparece, sus amigos, su familia y la policía local se ven envueltos en un misterio que involucra experimentos gubernamentales secretos.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    director: "Matt Duffer, Ross Duffer",
    isOriginal: true,
    episodes: [
      { id: "e1", title: "The Vanishing of Will Byers", duration: "47m", image: "/src/assets/movie-3.jpg" },
      { id: "e2", title: "The Weirdo on Maple Street", duration: "55m", image: "/src/assets/movie-3.jpg" }
    ]
  },
  // Add more content items here...
  {
    id: "4",
    title: "The Crown",
    image: "/src/assets/hero-banner.jpg",
    category: "drama",
    type: "series",
    year: "2016",
    rating: "92",
    duration: "6 temporadas",
    description: "Sigue la vida política y los romances de la Reina Elizabeth II, así como los eventos que dieron forma a la segunda mitad del siglo XX.",
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    director: "Peter Morgan",
    isOriginal: true
  },
  {
    id: "5",
    title: "John Wick",
    image: "/src/assets/movie-1.jpg",
    category: "action",
    type: "movie",
    year: "2014",
    rating: "88",
    duration: "1h 41m",
    description: "Un ex-asesino a sueldo sale de su retiro para rastrear a los gángsters que mataron a su perro y se llevaron su auto.",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
    director: "Chad Stahelski"
  },
  {
    id: "6",
    title: "Our Planet",
    image: "/src/assets/hero-banner.jpg",
    category: "documentaries",
    type: "documentary",
    year: "2019",
    rating: "95",
    duration: "8 episodios",
    description: "Serie documental que explora la diversidad natural de nuestro planeta y cómo el cambio climático impacta a todas las criaturas vivientes.",
    cast: ["David Attenborough"],
    director: "Alastair Fothergill",
    isOriginal: true
  }
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContent = selectedCategory === "all" 
    ? allContent 
    : allContent.filter(item => item.category === selectedCategory);

  const handleContentClick = (content: any) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-primary/20 to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explora por categorías
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubre contenido organizado por géneros y tipos
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.name}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredContent.map((content) => (
            <ContentCard
              key={content.id}
              title={content.title}
              image={content.image}
              rating={content.rating}
              year={content.year}
              isNew={false}
              isOriginal={content.isOriginal}
              onClick={() => handleContentClick(content)}
            />
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl">
              No se encontró contenido en esta categoría
            </p>
          </div>
        )}
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