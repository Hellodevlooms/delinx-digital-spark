import { Card, CardContent } from "@/components/ui/card";
import { Settings, TrendingUp, Megaphone, Brain } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Automação de Processos",
    description: "Otimize seus processos e ganhe eficiência com nossas soluções de automação inteligente"
  },
  {
    icon: TrendingUp,
    title: "Consultoria Estratégica",
    description: "Estratégias de marketing digital personalizadas para seu negócio"
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Aumente sua visibilidade online com campanhas de tráfego pago e SEO"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Utilize IA para melhorar a tomada de decisões e impulsionar resultados"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que <span className="bg-gradient-primary bg-clip-text text-transparent">fazemos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua empresa digitalmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <service.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;