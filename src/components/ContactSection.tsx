import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@adoteumamigo.org",
      href: "mailto:contato@adoteumamigo.org",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 9999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "São Paulo, SP - Brasil",
      href: "#",
    },
  ];

  const socialMedia = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tem dúvidas? Quer conhecer nosso trabalho de perto? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="group bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{info.label}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {info.value}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Siga-nos nas Redes Sociais</h3>
          <p className="text-muted-foreground mb-8 text-center">
            Acompanhe histórias de adoção, eventos e novidades da nossa comunidade!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-16 h-16 rounded-full border-2 hover:border-primary hover:bg-primary/10 transition-all group-hover:scale-110"
                  >
                    <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </Button>
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ou envie uma mensagem diretamente:
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 rounded-full shadow-lg"
            >
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
