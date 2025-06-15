
import { Button } from "@/components/ui/button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.191l-1.04 3.813 3.91-1.032zM8.387 7.316c-.195.424-.41.843-.596 1.252-.186.409-.345.814-.465 1.229-.121.414-.196.823-.24 1.229-.043.406-.053.807-.029 1.192.024.385.083.746.167 1.077.085.331.192.637.311.912.119.275.249.513.38.71.131.197.26.354.379.465.119.111.231.178.331.196.1.018.196.024.282.024.087 0 .17-.006.247-.018.077-.012.15-.03.221-.054s.138-.053.203-.087c.065-.034.125-.072.18-.114.055-.042.105-.088.15-.138.046-.05.087-.101.121-.153l.034-.054c.24-.318.475-.65.698-1.004.223-.354.422-.729.597-1.134.175-.405.319-.834.425-1.288.106-.454.158-.935.158-1.448 0-.59-.092-1.134-.275-1.635-.184-.501-.465-.952-.843-1.345-.378-.393-.829-.698-1.345-.899-.516-.201-1.077-.302-1.676-.302-.692 0-1.345.138-1.947.414z" />
  </svg>
);

export const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-24 bg-slate-800 text-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para construir ou reformar?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Peça já seu orçamento sem compromisso! Fale diretamente comigo e vamos transformar seu projeto em realidade.
        </p>
        <Button 
          variant="default" 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold animate-pulse transform hover:scale-105 transition-transform" 
          asChild
        >
          <a href="https://wa.me/556492973989?text=Olá,%20Edilson!%20Vi%20seu%20site%20e%20gostaria%20de%20pedir%20um%20orçamento." target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="mr-3 h-7 w-7" />
            Fale Direto no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};
