import { PROCESS_STEPS, SERVICES } from "../data/site";
import { Reveal } from "../components/Reveal";
import { CheckCircle, Zap, Leaf } from "lucide-react";

// Images mapped to each process step
const STEP_IMAGES = [
  SERVICES[0].gallery[1],  // Diagnóstico — interior being assessed
  SERVICES[2].gallery[0],  // Orçamento — bathroom sink (precision measurement)
  SERVICES[1].gallery[0],  // Execução — rope work in action
  SERVICES[0].gallery[4],  // Entrega — finished stairs with LED (final result)
];

export default function Process() {
  return (
    <section id="processo" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero heading */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-24 mb-16 sm:mb-24 md:mb-32 relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <span className="label-md text-secondary mb-4 block">
            A Metodologia Skypaint
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Espaços construídos com{" "}
            <span className="text-gradient">Energia & Precisão</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            O nosso processo é uma máquina de alta performance desenhada para
            transformar o seu espaço. Do primeiro diagnóstico ao último
            acabamento, rigor técnico e atenção ao detalhe guiam cada passo.
          </p>
        </Reveal>
      </div>

      {/* Timeline */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-24 relative max-w-7xl mx-auto">
        {/* Vertical connection line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent" />

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {PROCESS_STEPS.map((s, i) => {
            const isEven = i % 2 === 0;
            const colors = [
              "text-tertiary",
              "text-secondary",
              "text-primary",
              "text-tertiary",
            ];
            const glowColors = [
              "from-secondary to-tertiary",
              "from-primary to-secondary",
              "from-secondary to-primary",
              "from-tertiary to-secondary",
            ];

            return (
              <Reveal key={s.step} delay={i * 80}>
                <div
                  className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Glass panel */}
                  <div className="w-full lg:w-1/2">
                    <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-xl border border-outline-variant/10 hover:shadow-[0_0_30px_rgba(148,171,245,0.05)] transition-all duration-500">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold text-outline-variant/20 block mb-4">
                        {s.step}
                      </span>
                      <h3
                        className={`text-2xl sm:text-3xl font-headline font-bold mb-4 ${colors[i]}`}
                      >
                        {s.title}
                      </h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                        {s.body}
                      </p>

                      {/* Step-specific extras */}
                      {i === 0 && (
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                            <CheckCircle
                              size={16}
                              className="text-secondary"
                            />
                            Análise técnica de superfícies
                          </li>
                          <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                            <CheckCircle
                              size={16}
                              className="text-secondary"
                            />
                            Medição e mapeamento do espaço
                          </li>
                        </ul>
                      )}

                      {i === 1 && (
                        <div className="p-5 rounded-lg bg-surface-container-low border border-outline-variant/10">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                              Precisão
                            </span>
                            <span className="text-xs font-bold text-secondary">
                              100%
                            </span>
                          </div>
                          <div className="w-full h-1 bg-surface-container-highest rounded-full">
                            <div className="w-full h-full bg-secondary rounded-full shadow-[0_0_8px_#00d2fd]" />
                          </div>
                        </div>
                      )}

                      {i === 2 && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 rounded-lg bg-surface-container-high">
                            <Zap
                              size={20}
                              className="text-secondary mx-auto mb-2"
                            />
                            <span className="text-xs uppercase font-bold tracking-tighter">
                              Rápido
                            </span>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-surface-container-high">
                            <Leaf
                              size={20}
                              className="text-tertiary mx-auto mb-2"
                            />
                            <span className="text-xs uppercase font-bold tracking-tighter">
                              Eco-Tintas
                            </span>
                          </div>
                        </div>
                      )}

                      {i === 3 && (
                        <button className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs group mt-2">
                          Garantia escrita incluída
                          <span className="transition-transform group-hover:translate-x-2">
                            →
                          </span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Visual element */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${glowColors[i]} rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}
                      />
                      <div className="relative glass-panel p-4 sm:p-6 rounded-2xl border border-outline-variant/10 max-w-sm">
                        <div className="aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-highest relative img-zoom">
                          <img
                            src={STEP_IMAGES[i]}
                            alt={s.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          {/* Step number overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#06092f]/80 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-3 right-4 text-5xl sm:text-6xl font-headline font-extrabold text-white/20">
                            {s.step}
                          </span>
                        </div>
                        <h4
                          className={`font-headline font-bold text-lg sm:text-xl ${colors[i]}`}
                        >
                          {s.title}
                        </h4>
                        <p className="text-sm text-on-surface-variant mt-2">
                          {i === 0 && "Visita técnica gratuita ao local."}
                          {i === 1 && "Proposta detalhada sem surpresas."}
                          {i === 2 && "Equipa profissional no terreno."}
                          {i === 3 && "Garantia escrita incluída."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <Reveal className="mt-16 sm:mt-24 md:mt-48 px-4 sm:px-6 md:px-8 lg:px-24 max-w-7xl mx-auto">
        <div className="relative py-24 rounded-3xl overflow-hidden bg-surface-container-high">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-bold mb-8 tracking-tight">
              Pronto para iniciar a sua{" "}
              <span className="text-gradient">transformação</span>?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contacto"
                className="bg-gradient-primary text-on-primary-container font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all"
              >
                Começar Diagnóstico
              </a>
              <a
                href="#portfolio"
                className="bg-surface-bright/20 border border-outline-variant/20 backdrop-blur-md text-on-surface font-bold px-10 py-4 rounded-full text-lg hover:bg-surface-bright/40 transition-all"
              >
                Ver Portefólio
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
