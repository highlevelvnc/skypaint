import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { SITE } from "../data/site";
import { cn } from "../lib/cn";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500",
        show
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-75 translate-y-4 pointer-events-none"
      )}
    >
      <div className="relative">
        {show && (
          <div className="absolute inset-0 rounded-full bg-secondary animate-pulse-ring pointer-events-none" />
        )}

        <div
          className={cn(
            "absolute bottom-16 right-0 w-64 glass-panel rounded-2xl p-4 border border-[#94abf5]/10 transition-all duration-300 origin-bottom-right",
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          )}
        >
          <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">
            Fale connosco
          </div>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group mb-1"
          >
            <div className="w-9 h-9 rounded-full bg-tertiary/15 grid place-items-center">
              <MessageCircle size={16} className="text-tertiary" />
            </div>
            <div>
              <div className="text-sm text-white">WhatsApp</div>
              <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Resposta rápida
              </div>
            </div>
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-secondary/15 grid place-items-center">
              <Phone size={16} className="text-secondary" />
            </div>
            <div>
              <div className="text-sm text-white">{SITE.phoneDisplay}</div>
              <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                Ligar agora
              </div>
            </div>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative w-14 h-14 rounded-full bg-gradient-primary text-on-primary-container grid place-items-center shadow-[0_0_20px_rgba(0,210,253,0.3)] hover:scale-110 active:scale-95 transition-transform"
          aria-label="Contacto"
        >
          {open ? <X size={22} strokeWidth={2.5} /> : <MessageCircle size={22} strokeWidth={2.5} />}
        </button>
      </div>
    </div>
  );
}
