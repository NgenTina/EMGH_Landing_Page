import { useCallback } from "react";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import ServicesSection from "./sections/services-section";
import FeaturedSection from "./sections/featured-section";
import TestimonialsSection from "./sections/testimonials-section";
import CTASection from "./sections/cta-section";
import Footer from "./sections/footer";
import { useLanguage } from "../contexts/language-context";

export default function LandingPage() {
  const { t } = useLanguage();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200">
      {/* Update document head */}
      <>
        <title>{t.nav.title}</title>
        <meta
          name="description"
          content="Experience warm hospitality and cozy comfort at our guesthouse. Perfect getaway for relaxation and memorable stays."
        />
      </>

      <Navbar onScrollToSection={scrollToSection} />
      <HeroSection />
      <ServicesSection />
      <FeaturedSection />
      {/* <PropertiesSection /> */}
      {/* <ArticlesSection /> */}
      {/* <FAQSection /> */}
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
