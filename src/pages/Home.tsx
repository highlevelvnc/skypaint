import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import FloatingCTA from "../components/FloatingCTA";
import Marquee from "../components/Marquee";
import Hero from "../sections/Hero";
import Footer from "../sections/Footer";

const Services = lazy(() => import("../sections/Services"));
const Process = lazy(() => import("../sections/Process"));
const Portfolio = lazy(() => import("../sections/Portfolio"));
const BeforeAfter = lazy(() => import("../sections/BeforeAfter"));
const Contact = lazy(() => import("../sections/Contact"));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee
          items={[
            "Pintura",
            "Reformas",
            "Pladur",
            "Deck",
            "Cerâmica",
            "Banheiro",
            "Trabalho em corda",
            "Marido de aluguer",
          ]}
        />
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <BeforeAfter />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
