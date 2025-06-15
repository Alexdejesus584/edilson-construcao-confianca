
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Edilson Pedreiro. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com ♥ para ajudar a construir seus sonhos.</p>
      </div>
    </footer>
  );
};
