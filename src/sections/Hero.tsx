import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SITE, SERVICES } from "../data/site";
import { Reveal } from "../components/Reveal";

export default function Hero() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 350),
      setTimeout(() => setStep(3), 550),
      setTimeout(() => setStep(4), 750),
      setTimeout(() => setStep(5), 950),
      setTimeout(() => setStep(6), 1150),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cursor-follow glow
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const show = (s: number): CSSProperties => ({
    opacity: step >= s ? 1 : 0,
    transform: step >= s ? "translateY(0)" : "translateY(32px)",
    transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
  });

  const heroImage = SERVICES[0].gallery[4];

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 cursor-glow"
    >
      {/* ── Background blur orbs ── */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#94abf5]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00d2fd]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b6ffed]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* ── Two-column grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
        {/* ─── Left column: text ─── */}
        <div>
          {/* Badge pill */}
          <Reveal delay={0} variant="up">
            <span
              className="inline-block px-4 py-1 rounded-full border border-[#41456c]/30 bg-[#151a4c]/50 backdrop-blur-md"
              style={show(1)}
            >
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#b6ffed] uppercase">
                Acabamentos de Precis&atilde;o
              </span>
            </span>
          </Reveal>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mt-6"
            style={show(2)}
          >
            Acabamentos{" "}
            <span className="text-gradient">Luminosos.</span>
          </h1>

          {/* Paragraph */}
          <p
            className="text-[#a5a8d5] text-base sm:text-lg max-w-md leading-relaxed mt-6"
            style={show(3)}
          >
            Equipa especializada em pintura, reformas e acabamentos de
            excel&ecirc;ncia. Transformamos espa&ccedil;os com precis&atilde;o,
            qualidade e aten&ccedil;&atilde;o a cada detalhe.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-4" style={show(4)}>
            <a
              href="#contacto"
              className="bg-gradient-primary text-[#001e5a] px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-lg btn-magnetic shadow-lg"
            >
              Iniciar Projeto
            </a>
            <a
              href="#trabalhos"
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-[#41456c]/50 font-bold text-lg hover:bg-[#202660]/20 transition-all text-white"
            >
              Ver Trabalhos
            </a>
          </div>
        </div>

        {/* ─── Right column: image card ─── */}
        <Reveal delay={300} variant="scale">
          <div className="relative group" style={show(5)}>
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#94abf5] to-[#00d2fd] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 rounded-3xl" />

            {/* Card */}
            <div className="relative glass-panel rounded-3xl overflow-hidden aspect-square sm:aspect-[4/5] shadow-2xl border border-white/10">
              <img
                src={heroImage}
                alt="Acabamento de escada em madeira com iluminacao LED"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Bottom overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#06092f] to-transparent">
                <span className="text-4xl font-bold mb-2 text-white">
                  {SITE.projectsDelivered}+
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#00d2fd]">
                  Projetos Conclu&iacute;dos
                </span>
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-10 right-10 p-4 glass-panel rounded-2xl border border-white/20 animate-float hidden sm:block"
                style={show(6)}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#b6ffed]">
                  {SITE.yearsExperience}+ anos
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
