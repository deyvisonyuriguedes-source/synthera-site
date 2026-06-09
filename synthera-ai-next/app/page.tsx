import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats, Benefits, Services, HowItWorks, Results, Testimonials } from "@/components/Sections";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Services />
        <HowItWorks />
        <Pricing />
        <Results />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
