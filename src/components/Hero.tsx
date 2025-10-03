import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroDog from "@/assets/hero-dog-1.jpg";
import heroCat from "@/assets/hero-cat-1.jpg";
import heroFamily from "@/assets/hero-family.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroDog,
      title: "Encontre Seu Novo Melhor Amigo",
      description: "Cada animal merece uma segunda chance de ser feliz",
    },
    {
      image: heroCat,
      title: "Amor Incondicional Te Espera",
      description: "Adote um companheiro e transforme duas vidas",
    },
    {
      image: heroFamily,
      title: "Famílias Felizes Começam Aqui",
      description: "Junte-se às milhares de famílias que já encontraram a felicidade",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToAdopt = () => {
    const element = document.getElementById("como-adotar");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
          </div>

          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {slide.description}
              </p>
              <Button
                size="lg"
                onClick={scrollToAdopt}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg"
              >
                Adote Agora
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm text-foreground p-3 rounded-full transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm text-foreground p-3 rounded-full transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
