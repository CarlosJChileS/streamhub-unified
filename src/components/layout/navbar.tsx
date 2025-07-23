import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, User } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Watch<span className="text-primary">Hub</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              Películas
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              Series
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              Documentales
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors">
              Mi Lista
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar contenido..."
                className="pl-10 w-64 bg-secondary/50 border-border text-white placeholder:text-muted-foreground"
              />
            </div>

            {/* Mobile search */}
            <Button variant="ghost" size="sm" className="md:hidden text-white">
              <Search className="w-5 h-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="text-white">
              <Bell className="w-5 h-5" />
            </Button>

            {/* User menu */}
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" alt="Usuario" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" className="text-white hidden lg:block">
                Mi Perfil
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}