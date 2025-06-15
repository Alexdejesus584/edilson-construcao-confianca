
import { Hammer, Timer, MessageSquareHeart } from "lucide-react";

const highlights = [
  {
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: "Qualidade Garantida",
    description: "Utilizo os melhores materiais e técnicas para um acabamento impecável e duradouro.",
  },
  {
    icon: <Timer className="h-10 w-10 text-primary" />,
    title: "Prazo Respeitado",
    description: "Compromisso com o cronograma, entregando sua obra no tempo combinado, sem surpresas.",
  },
  {
    icon: <MessageSquareHeart className="h-10 w-10 text-primary" />,
    title: "Atendimento Personalizado",
    description: "Entendo suas necessidades para oferecer a melhor solução, com transparência e comunicação.",
  },
];

export const Highlights = () => {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{highlight.title}</h3>
              <p className="text-slate-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
