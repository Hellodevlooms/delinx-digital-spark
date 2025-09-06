import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as CarouselBase,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, TrendingUp, Award, Target, Zap, Shield } from "lucide-react";

const carouselItems = [
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Excelência em Resultados",
    description: "Mais de 95% de satisfação dos clientes com projetos entregues no prazo e orçamento."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Crescimento Garantido",
    description: "Aumento médio de 300% no ROI dos nossos clientes nos primeiros 6 meses."
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Premiados e Reconhecidos",
    description: "Múltiplos prêmios de inovação e excelência em tecnologia e atendimento."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Foco em Objetivos",
    description: "Estratégias personalizadas que se alinham perfeitamente aos seus objetivos de negócio."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Velocidade de Entrega",
    description: "Metodologia ágil que acelera o desenvolvimento sem comprometer a qualidade."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Segurança Total",
    description: "Proteção completa dos seus dados com as mais avançadas tecnologias de segurança."
  }
];

export function CarouselSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Por que nos escolher?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os diferenciais que fazem da Delinx a escolha ideal para transformar seu negócio
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <CarouselBase
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="flex flex-col items-center text-center p-6 h-full">
                      <div className="mb-4 p-3 rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-1">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </CarouselBase>
        </div>
      </div>
    </section>
  );
}