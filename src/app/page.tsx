import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Together from "@/components/Together";
import Approach from "@/components/Approach";
import TraumaSection from "@/components/TraumaSection";
import OurOffice from "@/components/OurOffice";
import TherapyOptions from "@/components/TherapyOptions";
import ClientFit from "@/components/ClientFit";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Together />
        <Approach />
        <TraumaSection />
        <OurOffice />
        <TherapyOptions />
        <ClientFit />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
