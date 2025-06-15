
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-20 md:py-32 bg-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
          🏡 Construa com Confiança – Serviços de Pedreiro com Qualidade!
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Com Edilson, sua obra está em boas mãos. Profissional experiente, confiável e com resultados comprovados.
        </p>
        <Button size="lg" asChild>
          <a href="#about">
            Saiba Mais
            <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  );
};
