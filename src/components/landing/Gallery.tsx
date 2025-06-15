
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workItems = [
  {
    title: "Churrasqueiras Sob Medida",
    image: "/lovable-uploads/74b6702b-ad76-4a19-a062-dc7e8e3820a9.png",
    description: "Espaços gourmet perfeitos para reunir amigos e família."
  },
  {
    title: "Construção de Muros e Paredes",
    image: "/lovable-uploads/0c6d23e9-4694-41a5-ae15-62cf5be5a85c.png",
    description: "Levantamento de paredes com segurança e precisão para sua obra."
  },
  {
    title: "Fundações e Alicerces",
    image: "/lovable-uploads/7f43bce4-36a5-4491-aab8-6c54c5632cb3.png",
    description: "A base sólida para a sua construção começar com o pé direito."
  },
  {
    title: "Calçadas e Áreas de Acesso",
    image: "/lovable-uploads/1dfa9f0b-0824-4cb5-8f90-e92b96bb08c0.png",
    description: "Construção e reforma de portões, calçadas e corredores."
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
