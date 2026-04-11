import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Star, Shield } from "lucide-react";
import { SITE, SERVICES } from "../data/site";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function Hero() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 50),
      setTimeout(() => setStep(2), 200),
      setTimeout(() => setStep(3), 400),
      setTimeout(() => setStep(4), 600),
      setTimeout(() => setStep(5), 800),
      setTimeout(() => setStep(6), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cursor glow — desktop only, skip on touch
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mouse-x", `${e.clientX - el.getBoundingClientRect().left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - el.getBoundingClientRect().top}px`);
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const show = (s: number): CSSProperties => ({
    opacity: step >= s ? 1 : 0,
    transform: step >= s ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  });

  const heroImage = SERVICES[0].gallery[4];
  const thumbs = [
    SERVICES[2].gallery[4],
    SERVICES[1].gallery[2],
    SERVICES[3].gallery[0],
  ];

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen overflow-hidden pt-20 pb-12 sm:pb-24 cursor-glow"
    >
      {/* Background — simplified for mobile performance */}
      <div className="absolute top-1/4 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#94abf5]/15 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#00d2fd]/15 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center min-h-[80vh]">
        {/* Left column */}
        <div>
          {/* H1 — nova copy focada em pintura */}
          <h1
            className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tighter"
            style={show(1)}
          >
            Pintamos o futuro{" "}
            <span className="text-gradient block">do seu espaço.</span>
          </h1>

          <p
            className="text-[#a5a8d5] text-base sm:text-lg max-w-md leading-relaxed mt-5 sm:mt-6"
            style={show(2)}
          >
            Pintura profissional, reformas completas e acabamentos de
            excelência em toda a região de Lisboa. Do primeiro pincel ao
            último detalhe.
          </p>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 sm:mt-5"
            style={show(3)}
          >
            <span className="flex items-center gap-1.5 text-xs text-[#a5a8d5]">
              <Star size={13} fill="#00d2fd" stroke="#00d2fd" />
              {SITE.satisfaction}% satisfação
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#a5a8d5]">
              <Shield size={13} className="text-[#b6ffed]" />
              Garantia escrita
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8" style={show(4)}>
            <a
              href="#contacto"
              className="bg-gradient-primary text-[#001e5a] px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg btn-magnetic shadow-lg inline-flex items-center gap-2"
            >
              Pedir Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-[#41456c]/50 font-bold text-base sm:text-lg hover:bg-[#202660]/20 transition-colors text-white"
            >
              Ver Trabalhos
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-6 sm:gap-10 mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-[#41456c]/20"
            style={show(5)}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter to={SITE.yearsExperience} suffix="+" />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a5a8d5]/70 mt-1">Anos</div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-[#41456c]/30" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter to={SITE.projectsDelivered} suffix="+" />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a5a8d5]/70 mt-1">Projetos</div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-[#41456c]/30 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter to={SITE.satisfaction} suffix="%" />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a5a8d5]/70 mt-1">Satisfação</div>
            </div>
          </div>
        </div>

        {/* Right column — image card */}
        <div style={show(6)}>
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#94abf5] to-[#00d2fd] opacity-10 blur-xl rounded-3xl pointer-events-none hidden sm:block" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] border border-white/10">
              <img
                src={heroImage}
                alt="Acabamento de escada em madeira com iluminação LED"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06092f] via-[#06092f]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="text-3xl sm:text-4xl font-bold text-white">{SITE.projectsDelivered}+</span>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#00d2fd] mt-1">Projetos Concluídos</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2 mt-2 sm:mt-3">
              {thumbs.map((src) => (
                <div key={src} className="rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img src={src} alt="" className="w-full h-full object-cover" loading="eager" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
