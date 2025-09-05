import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    company: "TechCorp Solutions",
    text: "A Delinx transformou completamente nossos processos. Tivemos um aumento de 300% na eficiência operacional.",
    rating: 5,
    results: "300% aumento na eficiência",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    link: "https://techcorp.com",
    fullTestimonial: "Antes da Delinx, nossos processos eram manuais e demorados. Agora, com IA implementada, conseguimos automatizar 80% das tarefas repetitivas."
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Digital Ventures",
    text: "As campanhas de marketing digital da Delinx geraram um ROI excepcional. Recomendo totalmente!",
    rating: 5,
    results: "ROI de 450%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    link: "https://digitalventures.com",
    fullTestimonial: "O retorno sobre investimento superou todas nossas expectativas. A estratégia de marketing da Delinx é simplesmente incrível."
  },
  {
    id: 3,
    name: "João Oliveira",
    company: "InnovaTech",
    text: "A implementação de IA nos ajudou a tomar decisões mais assertivas e aumentar nossa receita em 200%.",
    rating: 5,
    results: "200% aumento na receita",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    link: "https://innovatech.com",
    fullTestimonial: "A inteligência artificial mudou completamente como tomamos decisões estratégicas. Dados precisos levam a resultados extraordinários."
  },
  {
    id: 4,
    name: "Ana Costa",
    company: "Future Systems",
    text: "Modernização completa de nossa infraestrutura. Agora operamos 24/7 sem interrupções.",
    rating: 5,
    results: "99.9% uptime",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    link: "https://futuresystems.com",
    fullTestimonial: "A migração para cloud foi perfeita. Não tivemos nenhuma perda de dados e o sistema é muito mais rápido agora."
  },
  {
    id: 5,
    name: "Pedro Almeida",
    company: "Smart Solutions",
    text: "Automação inteligente que revolucionou nossos processos de vendas e atendimento.",
    rating: 5,
    results: "500% mais leads",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
    link: "https://smartsolutions.com",
    fullTestimonial: "Chatbots inteligentes e automação de vendas. Nosso time pode focar no que realmente importa: relacionamento com clientes."
  },
  {
    id: 6,
    name: "Lucia Fernandes",
    company: "Green Tech",
    text: "Soluções sustentáveis e inovadoras que reduziram nossos custos em 40% mantendo alta qualidade.",
    rating: 5,
    results: "40% redução de custos",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
    link: "https://greentech.com",
    fullTestimonial: "Conseguimos unir sustentabilidade com tecnologia. O planeta agradece e nosso lucro também."
  }
];

const FloatingElements = () => (
  <>
    <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">
      ✨
    </div>
    <div className="absolute top-20 right-20 text-4xl animate-pulse opacity-30">
      🚀
    </div>
    <div className="absolute bottom-20 left-20 text-5xl animate-spin opacity-25" style={{ animationDuration: '10s' }}>
      ⚡
    </div>
    <div className="absolute bottom-10 right-10 text-4xl animate-bounce opacity-20" style={{ animationDelay: '2s' }}>
      💎
    </div>
  </>
);

const Testimonials = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="casos" className="py-20 bg-gradient-to-br from-emerald-900/20 via-blue-900/20 to-teal-900/20 relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">Casos de Sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como ajudamos empresas a alcançar resultados extraordinários
          </p>
          <div className="flex justify-center mt-4">
            <Sparkles className="text-emerald-400 animate-pulse" size={32} />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 bg-card/50 backdrop-blur-sm overflow-hidden
                ${expandedCard === testimonial.id 
                  ? 'border-emerald-400 shadow-2xl shadow-emerald-400/20 scale-105' 
                  : 'border-blue-400/30 hover:border-emerald-400/50'
                }
                ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => toggleCard(testimonial.id)}
            >
              {/* Image Cover */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.company}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{testimonial.company}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-emerald-400 font-semibold">
                      {testimonial.results}
                    </span>
                  </div>
                </div>
                
                {/* Expand Button */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  {expandedCard === testimonial.id ? 
                    <ChevronUp size={20} className="text-white" /> : 
                    <ChevronDown size={20} className="text-white" />
                  }
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote size={24} className="text-emerald-400 mr-2" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedCard === testimonial.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-border/50 pt-4 mb-4">
                    <p className="text-sm text-muted-foreground italic">
                      "{testimonial.fullTestimonial}"
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(testimonial.link, '_blank');
                    }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visitar Site
                  </Button>
                </div>
                
                <div className="border-t border-border/50 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fun Interactive Element */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full text-white font-semibold animate-pulse">
            <Sparkles size={20} />
            <span>Quer ser o próximo caso de sucesso?</span>
            <Sparkles size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;