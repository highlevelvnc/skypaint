import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Star, MapPin, Shield } from "lucide-react";
import { SITE, SERVICES } from "../data/site";
import { AnimatedCounter } from "../components/AnimatedCounter";

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
      setTimeout(() => setStep(7), 1400),
      setTimeout(() => setStep(8), 1650),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cursor-follow glow (desktop only)
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
    transform: step >= s ? "translateY(0)" : "translateY(28px)",
    transition:
      "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
  });

  const heroImage = SERVICES[0].gallery[4]; // wooden stairs LED
  const thumbs = [
    SERVICES[2].gallery[4], // marble bathroom
    SERVICES[1].gallery[2], // roof
    SERVICES[3].gallery[0], // deck
  ];

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen overflow-hidden pt-20 pb-16 sm:pb-24 cursor-glow"
    >
      {/* ── Background blur orbs ── */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#94abf5]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00d2fd]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b6ffed]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* ── Main two-column grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center min-h-[80vh]">
        {/* ─── Left column ─── */}
        <div>
          {/* Badge pill */}
          <div style={show(1)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#41456c]/30 bg-[#151a4c]/50 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b6ffed] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#b6ffed] uppercase">
                Cascais & Lisboa
              </span>
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mt-6"
            style={show(2)}
          >
            Acabamentos{" "}
            <span className="text-gradient block sm:inline">Luminosos.</span>
          </h1>

          {/* Paragraph */}
          <p
            className="text-[#a5a8d5] text-base sm:text-lg max-w-md leading-relaxed mt-6"
            style={show(3)}
          >
            Equipa portuguesa especializada em pintura, reformas e acabamentos
            de excelência. Transformamos espaços com precisão, qualidade e
            atenção a cada detalhe.
          </p>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-5 mt-5"
            style={show(4)}
          >
            <div className="flex items-center gap-1.5 text-xs text-[#a5a8d5]">
              <Star size={13} fill="#00d2fd" stroke="#00d2fd" />
              <span>{SITE.satisfaction}% satisfação</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#a5a8d5]">
              <Shield size={13} className="text-[#b6ffed]" />
              <span>Garantia escrita</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#a5a8d5]">
              <MapPin size={13} className="text-[#00d2fd]" />
              <span>Cascais → Lisboa</span>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-wrap items-center gap-4 mt-8"
            style={show(5)}
          >
            <a
              href="#contacto"
              className="bg-gradient-primary text-[#001e5a] px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg btn-magnetic shadow-lg inline-flex items-center gap-2"
            >
              Pedir Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-[#41456c]/50 font-bold text-base sm:text-lg hover:bg-[#202660]/20 transition-all text-white"
            >
              Ver Trabalhos
            </a>
          </div>

          {/* Mini stats row */}
          <div
            className="flex items-center gap-6 sm:gap-10 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#41456c]/20"
            style={show(6)}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter to={SITE.yearsExperience} suffix="+" />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a5a8d5]/70 mt-1">
                Anos
              </div>
            </div>
            <div className="w-px h-10 bg-[#41456c]/30" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter to={SITE.projectsDelivered} suffix="+" />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a5a8d5]/70 mt-1">
                Projetos
              </div>
            </div>
            <div className="w-px h-10 bg-[#41456c]/30 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter to={SITE.satisfaction} suffix="%" />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a5a8d5]/70 mt-1">
                Satisfação
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right column: image showcase ─── */}
        <div style={show(7)}>
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#94abf5] to-[#00d2fd] opacity-15 blur-2xl group-hover:opacity-30 transition-opacity duration-700 rounded-3xl pointer-events-none" />

            {/* Main image card */}
            <div className="relative glass-panel rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] shadow-2xl border border-white/10 img-zoom">
              <img
                src={heroImage}
                alt="Acabamento de escada em madeira com iluminação LED"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06092f] via-[#06092f]/30 to-transparent pointer-events-none" />

              {/* Overlay counter */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  {SITE.projectsDelivered}+
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#00d2fd] mt-1">
                  Projetos Concluídos
                </span>
              </div>

              {/* Floating experience badge */}
              <div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-2 glass-panel rounded-xl border border-white/20 animate-float"
                style={show(8)}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#b6ffed]">
                  {SITE.yearsExperience}+ anos
                </span>
              </div>
            </div>

            {/* Thumbnail strip below main image */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4"
              style={show(8)}
            >
              {thumbs.map((src, i) => (
                <div
                  key={src}
                  className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/10 img-zoom"
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#06092f]/30 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#a5a8d5]/60 font-label">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00d2fd]/50 to-transparent animate-float" />
      </div>
    </section>
  );
}
