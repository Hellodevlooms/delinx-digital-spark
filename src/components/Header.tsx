import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import delinxLogo from "@/assets/delinx-logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center hover:scale-105 transition-transform duration-300"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src={delinxLogo} 
                alt="Delinx Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#casos" className="text-foreground hover:text-primary transition-colors">
              Casos de Sucesso
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="hero" size="lg">
              Fale com especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold">Menu</h3>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-accent rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-6">
            <a 
              href="#servicos" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#sobre" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a 
              href="#casos" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Casos de Sucesso
            </a>
            <a 
              href="#contato" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contato
            </a>
            
            <div className="pt-4 space-y-4">
              <ThemeToggle />
              <Button variant="hero" size="lg" className="w-full">
                Fale com especialista
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;