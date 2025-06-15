
export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/2d8e475c-8a70-4b28-b053-49b25b1daa10.png"
              alt="Foto de Edilson"
              className="h-48 w-48 rounded-full object-cover ring-4 ring-offset-4 ring-slate-200"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Olá, eu sou Edilson!</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Com mais de 15 anos de experiência, sou especialista em transformar seus projetos em realidade. Minha dedicação é com a qualidade e a satisfação do cliente, cuidando de cada detalhe em construção, reformas, acabamentos, churrasqueiras, calçadas, muros e muito mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
