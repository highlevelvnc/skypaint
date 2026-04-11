import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FloatingCTA from "./components/FloatingCTA";
import Marquee from "./components/Marquee";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <div className={`relative ${loaded ? "" : "pointer-events-none"}`}>
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
          <Services />
          <Process />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
