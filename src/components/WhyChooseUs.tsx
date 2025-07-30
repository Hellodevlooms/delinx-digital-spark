import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Cpu } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Transformação Digital",
    description: "Leve sua empresa ao próximo nível com a digitalização de processos e automação de marketing."
  },
  {
    icon: Target,
    title: "Personalização e Eficiência",
    description: "Soluções adaptadas às suas necessidades, garantindo um atendimento único e um retorno sobre investimento efetivo."
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description: "Utilizamos as melhores ferramentas de IA e automação para otimizar cada aspecto do seu negócio."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="bg-gradient-primary bg-clip-text text-transparent">Delinx</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos uma agência especializada em resultados, utilizando a combinação de tecnologia de ponta, 
            marketing estratégico e soluções de automação personalizadas para alcançar o sucesso do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:animate-float">
                  <benefit.icon size={36} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;