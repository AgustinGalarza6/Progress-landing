import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";
import ClientsSlider from "./sections/ClientsSlider";
import Services from "./sections/Services";
import Products from "./sections/Products";
import DevelopmentWebCTA from "./sections/DevelopmentWebCTA";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import IsForYou from "./sections/IsForYou";
import WhyChooseUs from "./sections/WhyChooseUs";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ClientsSlider />
      <Services />
      <Products />
      <DevelopmentWebCTA />
      <Process />
      <Testimonials />
      <IsForYou />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
