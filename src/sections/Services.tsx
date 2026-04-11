import {
  Mountain,
  Paintbrush,
  Bath,
  TreePine,
  Layers,
  Grid3x3,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../data/site";
import { Reveal } from "../components/Reveal";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function Services() {
  return (
    <section id="servicos" className="relative py-16 sm:py-24 md:py-32 bg-[#0a0e38]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ── Header area ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mb-20">
          {/* Left */}
          <Reveal className="max-w-2xl" duration={700}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Servicos de{" "}
              <span className="text-gradient">Precisao</span>
            </h2>
            <p className="text-[#a5a8d5] max-w-xl text-lg leading-relaxed">
              Cada projeto exige tecnica, materiais de primeira e uma equipa que
              entrega o que promete. Conhca os nossos servicos especializados.
            </p>
          </Reveal>

          {/* Right: stat blocks */}
          <Reveal
            className="flex gap-10 shrink-0"
            duration={700}
            delay={150}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white">
                <AnimatedCounter to={4} suffix="+" />
              </div>
              <div className="text-sm text-[#a5a8d5] mt-1">Anos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">
                <AnimatedCounter to={480} suffix="+" />
              </div>
              <div className="text-sm text-[#a5a8d5] mt-1">Projetos</div>
            </div>
          </Reveal>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
          {/* ━━━ 1. Pintura Predial / Rappel ━━━ */}
          <Reveal
            className="md:col-span-8 h-[280px] sm:h-[350px] md:h-[500px] group relative overflow-hidden rounded-xl bg-[#151a4c]"
            duration={800}
          >
            <img
              src={SERVICES[1].cover}
              alt={SERVICES[1].title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-105"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06092f] via-[#06092f]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10">
              <Mountain className="w-8 h-8 text-[#00d2fd] mb-4" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Pintura Predial &mdash; Rappel
              </h2>
              <p className="text-[#a5a8d5] max-w-lg mb-6 leading-relaxed">
                {SERVICES[1].short}
              </p>
              <a
                href="#trabalhos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#00d2fd]/10 border border-[#00d2fd]/20 text-[#00d2fd] text-sm font-medium transition-colors duration-300 hover:bg-[#00d2fd]/20 w-fit"
              >
                Ver trabalhos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* ━━━ 2. Pintura Interior & Exterior ━━━ */}
          <Reveal
            className="md:col-span-4 h-[280px] sm:h-[350px] md:h-[500px] group relative overflow-hidden rounded-xl bg-[#1b2055]"
            duration={800}
            delay={100}
          >
            <img
              src={SERVICES[0].cover}
              alt={SERVICES[0].title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2055] via-[#1b2055]/60 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10">
              <Paintbrush className="w-7 h-7 text-[#00d2fd] mb-4" strokeWidth={1.5} />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Pintura Interior & Exterior
              </h2>
              <p className="text-[#a5a8d5] text-sm leading-relaxed">
                {SERVICES[0].short}
              </p>
            </div>
          </Reveal>

          {/* ━━━ 3. Reforma de Banheiros ━━━ */}
          <Reveal
            className="md:col-span-4 h-[250px] sm:h-[320px] md:h-[400px] group relative overflow-hidden rounded-xl bg-[#0a0e38] border border-white/5"
            duration={800}
            delay={50}
          >
            <img
              src={SERVICES[2].cover}
              alt={SERVICES[2].title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
            />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10">
              <div className="bg-[#00d2fd] w-12 h-1 mb-6 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Reforma de Banheiros
              </h2>
              <p className="text-[#a5a8d5] text-sm leading-relaxed mb-4">
                {SERVICES[2].short}
              </p>
              <Bath className="w-6 h-6 text-[#a5a8d5]/40" strokeWidth={1.5} />
            </div>
          </Reveal>

          {/* ━━━ 4. Deck de Madeira ━━━ */}
          <Reveal
            className="md:col-span-4 h-[250px] sm:h-[320px] md:h-[400px] group relative overflow-hidden rounded-xl bg-[#1b2055] border border-[#00d2fd]/10 transition-colors duration-500 hover:border-[#00d2fd]/30"
            duration={800}
            delay={100}
          >
            <img
              src={SERVICES[3].cover}
              alt={SERVICES[3].title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2055] via-[#1b2055]/50 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Deck de Madeira
              </h2>
              <p className="text-[#a5a8d5] text-sm leading-relaxed mb-4">
                {SERVICES[3].short}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[#a5a8d5] text-xs w-fit">
                <TreePine className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" strokeWidth={1.5} />
                Exterior
              </span>
            </div>
          </Reveal>

          {/* ━━━ 5. Aplicacao de Pladur ━━━ */}
          <Reveal
            className="md:col-span-4 h-[250px] sm:h-[320px] md:h-[400px] group relative overflow-hidden rounded-xl bg-[#151a4c]"
            duration={800}
            delay={150}
          >
            {/* Large faded icon background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Layers
                className="w-48 h-48 text-white/[0.03] transition-transform duration-700 group-hover:scale-110 group-active:scale-105 group-hover:rotate-6"
                strokeWidth={0.5}
              />
            </div>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10">
              <Layers className="w-7 h-7 text-[#00d2fd] mb-4" strokeWidth={1.5} />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Aplicacao de Pladur
              </h2>
              <p className="text-[#a5a8d5] text-sm leading-relaxed">
                {SERVICES[4].short}
              </p>
            </div>
          </Reveal>

          {/* ━━━ 6. Revestimento Ceramico ━━━ */}
          <Reveal
            className="md:col-span-6 h-[250px] sm:h-[280px] md:h-[350px] group relative overflow-hidden rounded-xl bg-[#0a0e38] border border-white/5"
            duration={800}
            delay={50}
          >
            <img
              src={SERVICES[5].cover}
              alt={SERVICES[5].title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
            />
            {/* Left-to-right gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06092f] to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Revestimento Ceramico
              </h2>
              <p className="text-[#a5a8d5] max-w-sm leading-relaxed mb-5">
                {SERVICES[5].short}
              </p>
              <div className="flex items-center gap-3 text-[#a5a8d5]/40">
                <div className="w-8 h-px bg-[#a5a8d5]/20" />
                <Grid3x3 className="w-5 h-5" strokeWidth={1.5} />
                <div className="w-8 h-px bg-[#a5a8d5]/20" />
              </div>
            </div>
          </Reveal>

          {/* ━━━ 7. Marido de Aluguer ━━━ */}
          <Reveal
            className="md:col-span-6 h-[250px] sm:h-[280px] md:h-[350px] group relative overflow-hidden rounded-xl bg-[#1b2055]"
            duration={800}
            delay={100}
          >
            <div className="relative z-10 flex items-center h-full p-6 sm:p-8 md:p-10">
              {/* Text left */}
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00d2fd]/10 text-[#00d2fd] text-xs font-medium mb-4">
                  Resposta Rapida
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Marido de Aluguer
                </h2>
                <p className="text-[#a5a8d5] leading-relaxed max-w-xs">
                  {SERVICES[6].short}
                </p>
              </div>

              {/* Rotating icon right */}
              <div className="hidden sm:flex items-center justify-center shrink-0 ml-6">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {/* Dashed circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00d2fd]/20 transition-transform duration-700 ease-out group-hover:rotate-180" />
                  <Wrench
                    className="w-10 h-10 text-[#00d2fd] transition-transform duration-700 ease-out group-hover:-rotate-45"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
