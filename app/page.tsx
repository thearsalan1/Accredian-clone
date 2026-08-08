import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import Partners from "@/components/Partners";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrackRecord />
      <Partners />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <HowItWorks />
      <FAQ />
      <TestimonialsCarousel />
      <CTABanner />
      <Footer />
    </main>
  );
}

