import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import delinxLogo from "@/assets/delinx-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              DELINX
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformamos negócios através de soluções digitais inovadoras, 
              automação inteligente e estratégias de marketing eficazes.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Facebook size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Instagram size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Twitter size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#casos" className="text-muted-foreground hover:text-primary transition-colors">
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">Automação de Processos</span>
              </li>
              <li>
                <span className="text-muted-foreground">Marketing Digital</span>
              </li>
              <li>
                <span className="text-muted-foreground">Inteligência Artificial</span>
              </li>
              <li>
                <span className="text-muted-foreground">Consultoria Estratégica</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">contato@delinx.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">+55 (11) 9 9999-9999</span>
              </div>
              <p className="text-muted-foreground text-sm">
                São Paulo, SP - Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Delinx. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;