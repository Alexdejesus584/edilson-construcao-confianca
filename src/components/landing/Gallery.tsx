
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workItems = [
  {
    title: "Churrasqueiras Sob Medida",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&q=80&auto=format&fit=crop",
    description: "Espaços gourmet perfeitos para reunir amigos e família."
  },
  {
    title: "Revestimentos Modernos",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80&auto=format&fit=crop",
    description: "Acabamentos que valorizam e dão personalidade ao seu ambiente."
  },
  {
    title: "Áreas Externas e Muros",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80&auto=format&fit=crop",
    description: "Construção e reforma de portões, muros e calçadas com segurança."
  },
  {
    title: "Telhados e Coberturas",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80&auto=format&fit=crop",
    description: "Soluções completas para proteção e conforto da sua casa."
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">🧰 Galeria de Trabalhos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Veja a qualidade e a versatilidade dos projetos que já tive o prazer de realizar.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {workItems.map((item) => (
            <Card key={item.title} className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                <p className="text-slate-600 mt-1">{item.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
