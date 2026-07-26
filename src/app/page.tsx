import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bg">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
