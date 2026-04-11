import { useEffect, useState } from "react";
import { SITE } from "../data/site";
import { cn } from "../lib/cn";

const LINKS = [
  { id: "servicos", label: "Serviços" },
  { id: "portfolio", label: "Portefólio" },
  { id: "processo", label: "Processo" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setMounted(true), 200);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#06092f]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(148,171,245,0.1)]"
          : "bg-transparent",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      )}
      style={{
        transitionProperty: "opacity, transform, background-color, backdrop-filter, box-shadow",
      }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Brand */}
        <a href="#top" className="flex items-center">
          <span className="bg-gradient-to-r from-[#94abf5] to-[#00d2fd] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            {SITE.brand}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setActive(l.id)}
                className={cn(
                  "font-headline text-sm tracking-tight transition-colors duration-300",
                  active === l.id
                    ? "border-b-2 border-[#00d2fd] pb-1 text-[#00d2fd]"
                    : "text-[#94abf5]/70 hover:text-[#94abf5]"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-4">
          {/* Phone number — visible on larger screens */}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden text-sm text-[#94abf5]/70 transition-colors hover:text-[#94abf5] lg:inline-flex"
          >
            {SITE.phoneDisplay}
          </a>

          {/* CTA button */}
          <a
            href="#contacto"
            className="hidden bg-gradient-primary text-on-primary-container px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,210,253,0.3)] active:brightness-110 md:inline-flex"
          >
            Pedir Orçamento
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
            aria-label="Menu"
          >
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-[#94abf5] transition-all duration-300",
                open && "translate-y-[4px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-[#94abf5] transition-all duration-300",
                open && "-translate-y-[4px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-8 pb-6">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => {
                  setActive(l.id);
                  setOpen(false);
                }}
                className={cn(
                  "block rounded-lg px-4 py-4 font-headline text-sm tracking-tight transition-colors duration-300",
                  active === l.id
                    ? "text-[#00d2fd]"
                    : "text-[#94abf5]/70 hover:text-[#94abf5]"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block bg-gradient-primary text-on-primary-container px-6 py-3 rounded-full font-bold text-sm text-center shadow-[0_0_15px_rgba(0,210,253,0.3)] active:brightness-110"
            >
              Pedir Orçamento
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
