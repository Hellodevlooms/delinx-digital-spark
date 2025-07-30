import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu negócio? Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 resize-none"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  />
                </div>

                <Button type="submit" variant="cta" size="xl" className="w-full group">
                  Enviar Mensagem
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Vamos transformar seu negócio juntos
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa equipe está pronta para entender suas necessidades e criar soluções 
                personalizadas que impulsionem seus resultados.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-muted-foreground">contato@delinx.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <p className="text-muted-foreground">+55 (11) 9 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Localização</p>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground">
                Tempo de resposta médio: <span className="text-primary font-semibold">2 horas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;