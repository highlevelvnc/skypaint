import { ArrowRight, Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE } from "../data/site";
import { Reveal } from "../components/Reveal";
import { StaggerReveal } from "../components/StaggerReveal";

const ZONES = [
  "Cascais",
  "Estoril",
  "Oeiras",
  "Sintra",
  "Carcavelos",
  "Parede",
  "Lisboa Centro",
  "Guincho",
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative kinetic-bg min-h-screen pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <Reveal>
          <span className="label-md text-secondary mb-4 block">
            Fale Connosco
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6 leading-none">
            Vamos construir{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-full">a sua visão.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Esteja no centro de Lisboa ou na costa de Cascais, a nossa equipa
            está pronta para transformar o seu espaço com precisão e qualidade.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
        {/* ─── Form ─── */}
        <Reveal className="lg:col-span-7" duration={700}>
          <div className="glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden group">
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

            <form
              className="space-y-6 sm:space-y-8 relative z-10"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const phone = fd.get("phone");
                const msg = fd.get("message");
                const text = encodeURIComponent(
                  `Olá Skypaint! Sou ${name} (${phone}). ${msg}`
                );
                window.open(`${SITE.whatsapp}?text=${text}`, "_blank");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Name */}
                <div className="relative group/f">
                  <label className="block text-[#00c3eb] font-label text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within/f:text-secondary">
                    Nome Completo
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 text-on-surface p-4 rounded-lg placeholder-on-surface-variant/30"
                    placeholder="João Silva"
                    type="text"
                  />
                  <div className="glow-line absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-tertiary opacity-0" />
                </div>
                {/* Phone */}
                <div className="relative group/f">
                  <label className="block text-[#00c3eb] font-label text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within/f:text-secondary">
                    Telefone
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 text-on-surface p-4 rounded-lg placeholder-on-surface-variant/30"
                    placeholder="+351 9XX XXX XXX"
                    type="tel"
                  />
                  <div className="glow-line absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-tertiary opacity-0" />
                </div>
              </div>

              {/* Location */}
              <div className="relative group/f">
                <label className="block text-[#00c3eb] font-label text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within/f:text-secondary">
                  Localização do Projeto
                </label>
                <select
                  name="location"
                  className="w-full bg-surface-container-highest border-none focus:ring-0 text-on-surface p-4 rounded-lg appearance-none"
                >
                  <option>Cascais</option>
                  <option>Estoril</option>
                  <option>Oeiras</option>
                  <option>Sintra</option>
                  <option>Lisboa Centro</option>
                  <option>Carcavelos</option>
                  <option>Outra zona</option>
                </select>
                <div className="glow-line absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-tertiary opacity-0" />
              </div>

              {/* Message */}
              <div className="relative group/f">
                <label className="block text-[#00c3eb] font-label text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within/f:text-secondary">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-surface-container-highest border-none focus:ring-0 text-on-surface p-4 rounded-lg placeholder-on-surface-variant/30 resize-none"
                  placeholder="Descreva o seu projeto, morada e prazo..."
                />
                <div className="glow-line absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-tertiary opacity-0" />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-primary text-on-primary-container font-headline font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(0,210,253,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-3"
              >
                Iniciar Projeto
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </Reveal>

        {/* ─── Right: Contact info ─── */}
        <div className="lg:col-span-5 space-y-8">
          {/* Phone card */}
          <Reveal delay={100}>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="glass-panel p-6 rounded-xl flex items-center gap-6 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 group block"
            >
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">
                  Ligue para nós
                </p>
                <p className="text-xl font-headline font-medium text-white">
                  {SITE.phoneDisplay}
                </p>
              </div>
            </a>
          </Reveal>

          {/* WhatsApp card */}
          <Reveal delay={200}>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 rounded-xl flex items-center gap-6 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 group block"
            >
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors duration-300">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">
                  WhatsApp
                </p>
                <p className="text-xl font-headline font-medium text-white">
                  Fale com a equipa
                </p>
              </div>
            </a>
          </Reveal>

          {/* Active Zones */}
          <Reveal delay={300}>
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h3 className="text-tertiary font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin size={20} />
                Zonas de Atendimento
              </h3>
              <StaggerReveal className="grid grid-cols-2 gap-x-4 gap-y-3">
                {ZONES.map((z) => (
                  <div
                    key={z}
                    className="flex items-center gap-2 text-on-surface/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span className="text-sm">{z}</span>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
