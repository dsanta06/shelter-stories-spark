import { Heart, Users, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Heart, value: "500+", label: "Animais Adotados" },
    { icon: Users, value: "1000+", label: "Famílias Felizes" },
    { icon: Award, value: "10+", label: "Anos de Dedicação" },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Quem Somos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Somos uma organização sem fins lucrativos dedicada ao resgate, reabilitação e
            adoção responsável de animais abandonados. Nossa missão é conectar corações
            humanos a patinhas que precisam de um lar, promovendo o bem-estar animal e
            educando a sociedade sobre a importância da adoção consciente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-primary mb-2">Amor e Respeito</h4>
              <p className="text-muted-foreground">
                Cada animal é tratado com dignidade e cuidado que merece.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Transparência</h4>
              <p className="text-muted-foreground">
                Total clareza em nossos processos e uso de recursos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Responsabilidade</h4>
              <p className="text-muted-foreground">
                Acompanhamento completo antes, durante e após a adoção.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Educação</h4>
              <p className="text-muted-foreground">
                Promovemos conscientização sobre posse responsável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
