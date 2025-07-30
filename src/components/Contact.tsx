import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  company: z.string().max(100, "Nome da empresa muito longo").optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Submit to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          message: validatedData.message,
          ip_address: null, // Could be populated via edge function if needed
          user_agent: navigator.userAgent
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      // Reset form
      setFormData({ name: "", email: "", company: "", message: "" });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle database errors
        console.error('Error submitting contact form:', error);
        toast({
          title: "Erro ao enviar mensagem",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
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
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
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
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1">{errors.company}</p>
                  )}
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
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
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