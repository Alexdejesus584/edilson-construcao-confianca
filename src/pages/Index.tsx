
import { Header } from "@/components/landing/Header";
import { About } from "@/components/landing/About";
import { Highlights } from "@/components/landing/Highlights";
import { Gallery } from "@/components/landing/Gallery";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <About />
        <Highlights />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
