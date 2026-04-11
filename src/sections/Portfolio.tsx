import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/site";
import { cn } from "../lib/cn";
import { Reveal } from "../components/Reveal";

const FILTERS = [
  { id: "all", label: "Todos" },
  ...SERVICES.map((s) => ({ id: s.id, label: s.title.split(" ")[0] })),
];

interface Project {
  src: string;
  category: string;
  title: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const allProjects: Project[] = SERVICES.flatMap((s) =>
    s.gallery.map((src) => ({ src, category: s.id, title: s.title }))
  );

  // Round-robin mix so every service is represented
  const mixedProjects: Project[] = [];
  const buckets = SERVICES.map((s) =>
    s.gallery.map((src) => ({ src, category: s.id, title: s.title }))
  );
  let safety = 0;
  while (buckets.some((b) => b.length > 0) && safety++ < 200) {
    for (const bucket of buckets) {
      const next = bucket.shift();
      if (next) mixedProjects.push(next);
    }
  }

  const projects =
    filter === "all"
      ? mixedProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <Reveal className="max-w-2xl" duration={700}>
            <span className="label-md text-secondary mb-4 block">
              Portefólio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Projetos reais.{" "}
              <span className="text-gradient">Resultados visíveis.</span>
            </h2>
          </Reveal>
          <Reveal className="text-on-surface-variant text-base max-w-md" duration={700} delay={100}>
            Uma seleção de obras concluídas em moradias, apartamentos e
            edifícios em Cascais, Estoril, Oeiras e toda a região de Lisboa.
          </Reveal>
        </div>

        {/* Filter pills */}
        <Reveal className="flex flex-wrap gap-2 mb-10 sm:mb-14" duration={600}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                filter === f.id
                  ? "bg-gradient-primary text-on-primary-container shadow-[0_0_12px_rgba(0,210,253,0.3)]"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-white"
              )}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
          {projects.slice(0, 14).map((p, i) => {
            const patterns = [
              "row-span-2 col-span-2",
              "row-span-1 col-span-1",
              "row-span-1 col-span-1",
              "row-span-1 col-span-2",
              "row-span-2 col-span-1",
              "row-span-1 col-span-1",
              "row-span-1 col-span-2 md:col-span-1",
              "row-span-2 col-span-2",
              "row-span-1 col-span-1",
              "row-span-1 col-span-1",
              "row-span-1 col-span-2",
              "row-span-2 col-span-1",
              "row-span-1 col-span-1",
              "row-span-1 col-span-1",
            ];
            return (
              <Reveal
                key={`${p.src}-${i}`}
                variant="scale"
                duration={800}
                delay={(i % 7) * 60}
                className={cn(
                  "relative group overflow-hidden rounded-xl bg-surface-container-high kinetic-hover",
                  patterns[i] || "row-span-1 col-span-1"
                )}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-[transform,filter] duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06092f]/85 via-[#06092f]/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end pointer-events-none">
                  <div className="label-md text-secondary/90 mb-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {SERVICES.find((s) => s.id === p.category)?.number}
                  </div>
                  <div className="font-headline text-sm sm:text-base text-white tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 translate-y-2 group-hover:translate-y-0">
                    {p.title}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal duration={700} delay={300} className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 text-on-surface-variant hover:text-secondary text-sm font-label uppercase tracking-widest transition-colors group"
          >
            Pedir orçamento para o seu projeto
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
