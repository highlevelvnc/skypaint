import { useState } from "react";
import { Reveal } from "../components/Reveal";

interface CompareItem {
  before: string;
  after: string;
  label: string;
}

const COMPARISONS: CompareItem[] = [
  {
    before: "/images/painting/painting-12.webp",
    after: "/images/painting/painting-8.webp",
    label: "Pintura de escola",
  },
  {
    before: "/images/pladur/pladur-1.webp",
    after: "/images/painting/painting-2.webp",
    label: "Pladur + pintura",
  },
];

function CompareSlider({ before, after, label }: CompareItem) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video bg-surface-container-high select-none touch-none">
      {/* After (full) */}
      <img
        src={after}
        alt={`${label} — depois`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${label} — antes`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full bg-[#06092f]/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/90">
        Antes
      </span>
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 rounded-full bg-[#00d2fd]/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#001e5a]">
        Depois
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none z-10"
        style={{ left: `${pos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_0_20px_rgba(0,210,253,0.4)] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5" stroke="#06092f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5" stroke="#06092f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Invisible range input for touch + mouse */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label={`Comparar antes e depois — ${label}`}
      />

      {/* Bottom label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#06092f]/70 backdrop-blur-sm">
        <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Reveal>
          <span className="label-md text-secondary mb-4 block">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Antes &amp; <span className="text-gradient">Depois</span>
          </h2>
          <p className="text-on-surface-variant text-base max-w-lg mb-10 sm:mb-14">
            Arraste para comparar. Cada projeto é uma transformação completa
            com acabamento profissional.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {COMPARISONS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100} variant="scale">
              <CompareSlider {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
