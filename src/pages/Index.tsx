import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white bg-gradient-to-br from-[#671B91]/10 via-[#38007D]/20 to-[#280068]/30">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Index;