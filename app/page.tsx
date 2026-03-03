import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";
import ClientsSlider from "./sections/ClientsSlider";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import IsForYou from "./sections/IsForYou";
import WhyChooseUs from "./sections/WhyChooseUs";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ClientsSlider />
      <Services />
      <Process />
      <Testimonials />
      <IsForYou />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}