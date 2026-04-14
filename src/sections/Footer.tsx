import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, SERVICES } from "../data/site";
import { SERVICE_SEO } from "../data/service-seo";

const ZONES = ["Cascais", "Estoril", "Oeiras", "Sintra", "Carcavelos", "Lisboa"];

export default function Footer() {
  return (
    <footer
      className="bg-[#040720] border-t border-[#94abf5]/10 pt-12 sm:pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold text-[#b6ffed] font-headline">
              {SITE.brand}
            </Link>
            <p className="text-sm text-[#94abf5]/50 mt-3 leading-relaxed max-w-xs">
              Pinturas, reformas e remodelações de excelência. Sediados em
              Cascais, atendemos toda Lisboa.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-2 text-sm text-white/80 mt-4 hover:text-[#00d2fd] transition-colors"
            >
              <Phone size={14} className="text-[#00d2fd]" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-sm text-white/60 mt-2 hover:text-[#00d2fd] transition-colors"
            >
              <Mail size={14} className="text-[#00d2fd]" />
              {SITE.email}
            </a>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a5a8d5]/60 mb-4">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s, i) => (
                <li key={s.id}>
                  <Link
                    to={`/${SERVICE_SEO[i].slug}`}
                    className="text-sm text-white/60 hover:text-[#b6ffed] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Zonas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a5a8d5]/60 mb-4">
              Zonas
            </h3>
            <ul className="space-y-2.5">
              {ZONES.map((z) => (
                <li key={z} className="flex items-center gap-2">
                  <MapPin size={11} className="text-[#00d2fd] shrink-0" />
                  <span className="text-sm text-white/60">{z}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTA + Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a5a8d5]/60 mb-4">
              Começar
            </h3>
            <Link
              to="/#contacto"
              className="inline-block bg-gradient-primary text-on-primary-container px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform mb-6"
            >
              Pedir Orçamento
            </Link>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/#processo"
                  className="text-sm text-white/60 hover:text-[#b6ffed] transition-colors"
                >
                  Como trabalhamos
                </Link>
              </li>
              <li>
                <Link
                  to="/#portfolio"
                  className="text-sm text-white/60 hover:text-[#b6ffed] transition-colors"
                >
                  Portefólio
                </Link>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 hover:text-[#b6ffed] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#94abf5]/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#94abf5]/40">
          <span>© {new Date().getFullYear()} Skypaint. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#b6ffed] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#b6ffed] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
