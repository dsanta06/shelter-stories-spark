import { FileText, Search, Home, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdoptionSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Preencha o Formulário",
      description: "Complete nosso formulário online com seus dados e preferências.",
    },
    {
      icon: Search,
      title: "Análise de Perfil",
      description: "Nossa equipe analisa seu perfil para encontrar o match perfeito.",
    },
    {
      icon: Home,
      title: "Conheça seu Amigo",
      description: "Agende uma visita para conhecer o animal pessoalmente.",
    },
    {
      icon: Heart,
      title: "Leve para Casa",
      description: "Assine o termo de adoção e leve seu novo amigo para casa!",
    },
  ];

  return (
    <section id="como-adotar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Como Adotar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Nosso processo de adoção é simples, seguro e pensado para garantir o bem-estar
            do animal e a felicidade da sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold px-10 py-6 text-lg rounded-full shadow-lg"
          >
            Iniciar Processo de Adoção
          </Button>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3 text-center">Requisitos para Adoção</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Ser maior de 18 anos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Ter condições de oferecer um lar seguro e amoroso</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Comprometer-se com cuidados veterinários regulares</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Aceitar visitas de acompanhamento pós-adoção</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdoptionSection;
