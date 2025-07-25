import { useState } from "react";
import { ContentCard } from "@/components/ui/content-card";
import { ContentDetailModal } from "@/components/ui/content-detail-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", name: "Todas las Películas", count: 245 },
  { id: "action", name: "Acción", count: 68 },
  { id: "drama", name: "Drama", count: 52 },
  { id: "comedy", name: "Comedia", count: 38 },
  { id: "thriller", name: "Thriller", count: 32 },
  { id: "sci-fi", name: "Ciencia Ficción", count: 28 },
  { id: "horror", name: "Terror", count: 18 },
  { id: "romance", name: "Romance", count: 25 },
  { id: "adventure", name: "Aventura", count: 22 },
];

// Sample movie content data
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
    title: "John Wick",
    image: "/src/assets/movie-2.jpg",
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
    id: "3",
    title: "Mad Max: Fury Road",
    image: "/src/assets/movie-3.jpg",
    category: "action",
    type: "movie",
    year: "2015",
    rating: "97",
    duration: "2h 00m",
    description: "En un mundo post-apocalíptico, Max se une a la Imperadora Furiosa para huir de un señor de la guerra tiránico que los persigue.",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    director: "George Miller"
  },
  {
    id: "4",
    title: "Blade Runner 2049",
    image: "/src/assets/hero-banner.jpg",
    category: "sci-fi",
    type: "movie",
    year: "2017",
    rating: "92",
    duration: "2h 44m",
    description: "Un joven blade runner descubre un secreto enterrado que lo lleva a rastrear a Rick Deckard, quien ha estado desaparecido durante 30 años.",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    director: "Denis Villeneuve",
    isOriginal: true
  },
  {
    id: "5",
    title: "Parasite",
    image: "/src/assets/movie-1.jpg",
    category: "thriller",
    type: "movie",
    year: "2019",
    rating: "99",
    duration: "2h 12m",
    description: "Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    director: "Bong Joon-ho"
  },
  {
    id: "6",
    title: "The Batman",
    image: "/src/assets/movie-2.jpg",
    category: "action",
    type: "movie",
    year: "2022",
    rating: "85",
    duration: "2h 56m",
    description: "Batman se aventura en los bajos fondos de Gotham City para investigar una serie de crímenes brutales.",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"],
    director: "Matt Reeves"
  },
  {
    id: "7",
    title: "Dune",
    image: "/src/assets/movie-3.jpg",
    category: "sci-fi",
    type: "movie",
    year: "2021",
    rating: "83",
    duration: "2h 35m",
    description: "Paul Atreides debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    director: "Denis Villeneuve",
    isOriginal: true
  },
  {
    id: "8",
    title: "The Grand Budapest Hotel",
    image: "/src/assets/movie-1.jpg",
    category: "comedy",
    type: "movie",
    year: "2014",
    rating: "92",
    duration: "1h 39m",
    description: "Las aventuras de un conserje legendario y su protégé en un famoso hotel europeo.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    director: "Wes Anderson"
  },
  {
    id: "9",
    title: "La La Land",
    image: "/src/assets/movie-2.jpg",
    category: "romance",
    type: "movie",
    year: "2016",
    rating: "91",
    duration: "2h 08m",
    description: "Una historia de amor entre una aspirante a actriz y un músico de jazz en Los Ángeles.",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    director: "Damien Chazelle"
  },
  {
    id: "10",
    title: "Hereditary",
    image: "/src/assets/movie-3.jpg",
    category: "horror",
    type: "movie",
    year: "2018",
    rating: "89",
    duration: "2h 07m",
    description: "Después de la muerte de la matriarca de la familia, secretos aterradores sobre su ascendencia salen a la luz.",
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
    director: "Ari Aster"
  },
  {
    id: "11",
    title: "Knives Out",
    image: "/src/assets/hero-banner.jpg",
    category: "thriller",
    type: "movie",
    year: "2019",
    rating: "97",
    duration: "2h 10m",
    description: "Un detective investiga la muerte de un patriarca de una familia disfuncional.",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    director: "Rian Johnson"
  },
  {
    id: "12",
    title: "Inception",
    image: "/src/assets/movie-1.jpg",
    category: "sci-fi",
    type: "movie",
    year: "2010",
    rating: "86",
    duration: "2h 28m",
    description: "Un ladrón que se infiltra en los sueños de otros recibe la tarea inversa: plantar una idea en lugar de robarla.",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    director: "Christopher Nolan"
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