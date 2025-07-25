import { FilmIcon, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon = FilmIcon,
  title,
  description,
  action,
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}>
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon className="w-12 h-12 text-muted-foreground" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground max-w-md mb-6">
        {description}
      </p>
      
      {action && (
        action.href ? (
          <Link to={action.href}>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {action.label}
            </Button>
          </Link>
        ) : (
          <Button onClick={action.onClick}>
            <Plus className="w-4 h-4 mr-2" />
            {action.label}
          </Button>
        )
      )}
    </div>
  );
}

// Predefined empty states
export function EmptyMovies() {
  return (
    <EmptyState
      icon={FilmIcon}
      title="No hay películas disponibles"
      description="Parece que no tienes películas en tu lista. Explora nuestro catálogo para encontrar contenido increíble."
      action={{
        label: "Explorar catálogo",
        href: "/categories"
      }}
    />
  );
}

export function EmptySearch() {
  return (
    <EmptyState
      icon={Search}
      title="No se encontraron resultados"
      description="Intenta con diferentes palabras clave o explora nuestras categorías populares."
      action={{
        label: "Ver tendencias",
        href: "/categories"
      }}
    />
  );
}

export function EmptyFavorites() {
  return (
    <EmptyState
      icon={FilmIcon}
      title="Tu lista está vacía"
      description="Agrega películas a tu lista de favoritos para verlas más tarde."
      action={{
        label: "Explorar películas",
        href: "/categories"
      }}
    />
  );
}

export function EmptyDownloads() {
  return (
    <EmptyState
      icon={FilmIcon}
      title="No tienes descargas"
      description="Descarga películas para verlas sin conexión a internet."
      action={{
        label: "Explorar contenido",
        href: "/categories"
      }}
    />
  );
}