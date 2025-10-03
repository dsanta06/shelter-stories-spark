import { Gift, Calendar, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const MembershipSection = () => {
  const benefits = [
    {
      icon: Gift,
      title: "Eventos Exclusivos",
      description: "Participe de eventos especiais e encontros com outros membros.",
    },
    {
      icon: Calendar,
      title: "Acompanhamento Especial",
      description: "Receba updates mensais sobre os animais e ações da organização.",
    },
    {
      icon: Star,
      title: "Descontos",
      description: "Descontos em pet shops parceiros e consultas veterinárias.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Faça parte de uma rede de pessoas que amam animais como você.",
    },
  ];

  return (
    <section id="torne-se-membro" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Torne-se Membro
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Seja parte da mudança! Como membro, você ajuda a salvar vidas e recebe
            benefícios exclusivos da nossa comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-3xl shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Como Funciona a Contribuição?
          </h3>
          <p className="text-muted-foreground mb-8 text-center">
            Sua contribuição mensal ajuda a custear alimentação, tratamentos veterinários,
            abrigo e cuidados diários para os animais resgatados.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 border-2 border-primary/20 rounded-xl hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">R$ 30</div>
              <div className="text-sm text-muted-foreground mb-2">Amigo</div>
              <div className="text-xs text-muted-foreground">Alimentação para 1 animal/mês</div>
            </div>
            <div className="text-center p-6 border-2 border-secondary/20 rounded-xl hover:border-secondary/50 transition-colors bg-secondary/5">
              <div className="text-3xl font-bold text-secondary mb-2">R$ 50</div>
              <div className="text-sm text-muted-foreground mb-2">Protetor</div>
              <div className="text-xs text-muted-foreground">
                Alimentação + vacinas básicas
              </div>
            </div>
            <div className="text-center p-6 border-2 border-primary/20 rounded-xl hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">R$ 100+</div>
              <div className="text-sm text-muted-foreground mb-2">Padrinho</div>
              <div className="text-xs text-muted-foreground">
                Cuidados completos para um animal
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold px-10 py-6 text-lg rounded-full shadow-lg"
            >
              Quero Ser Membro Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              100% seguro • Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
