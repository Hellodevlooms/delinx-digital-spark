import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles size={16} className="text-primary animate-glow" />
            <span className="text-sm text-foreground">Soluções Digitais de Ponta</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Impressione seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              negócio
            </span>{" "}
            com soluções digitais de ponta
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme sua empresa com nossas soluções em automação, marketing digital 
            e inteligência artificial para alcançar resultados extraordinários.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="group">
              Fale com um especialista
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl">
              Ver nossos casos
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Confiado por empresas inovadoras</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="w-20 h-8 bg-muted rounded animate-pulse" />
              <div className="w-24 h-8 bg-muted rounded animate-pulse" />
              <div className="w-16 h-8 bg-muted rounded animate-pulse" />
              <div className="w-20 h-8 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;