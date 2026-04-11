import { SITE } from "../data/site";

const FOOTER_LINKS = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Serviço", href: "#" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06092f] w-full mt-auto border-t border-[#94abf5]/10" role="contentinfo" aria-label="Rodapé Skypaint">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-8 gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-[#b6ffed] font-headline mb-1">
            {SITE.brand}
          </span>
          <p className="text-sm tracking-wide text-[#94abf5]/50">
            © {new Date().getFullYear()} Skypaint. Todos os direitos reservados.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#94abf5]/50 hover:text-[#b6ffed] transition-colors duration-200 hover:underline decoration-[#00d2fd]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
