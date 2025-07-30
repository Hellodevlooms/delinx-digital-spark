import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechCorp Solutions",
    text: "A Delinx transformou completamente nossos processos. Tivemos um aumento de 300% na eficiência operacional.",
    rating: 5,
    results: "300% aumento na eficiência"
  },
  {
    name: "Maria Santos",
    company: "Digital Ventures",
    text: "As campanhas de marketing digital da Delinx geraram um ROI excepcional. Recomendo totalmente!",
    rating: 5,
    results: "ROI de 450%"
  },
  {
    name: "João Oliveira",
    company: "InnovaTech",
    text: "A implementação de IA nos ajudou a tomar decisões mais assertivas e aumentar nossa receita em 200%.",
    rating: 5,
    results: "200% aumento na receita"
  }
];

const clientLogos = [
  { name: "TechCorp", width: "w-20" },
  { name: "Digital Ventures", width: "w-24" },
  { name: "InnovaTech", width: "w-18" },
  { name: "SmartBiz", width: "w-22" },
  { name: "FutureTech", width: "w-20" },
];

const Testimonials = () => {
  return (
    <section id="casos" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Casos de Sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como ajudamos empresas a alcançar resultados extraordinários
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote size={24} className="text-primary mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-primary bg-clip-text text-transparent font-bold text-sm">
                        {testimonial.results}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">Confiado por empresas líderes de mercado</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className={`h-12 ${logo.width} bg-muted rounded-md flex items-center justify-center hover:opacity-100 transition-opacity duration-300`}
              >
                <span className="text-xs text-muted-foreground font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;