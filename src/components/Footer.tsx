const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Adote um Amigo. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Feito com ❤️ para os animais
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Transparência
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
