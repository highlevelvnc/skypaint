import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const showT = setTimeout(() => setPhase(1), 50);
    const start = Date.now();
    const duration = 1900;
    const interval = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t >= 1) {
        clearInterval(interval);
        setTimeout(() => { setPhase(2); onComplete?.(); }, 350);
        setTimeout(() => setRemoved(true), 1100);
      }
    }, 16);
    return () => { clearTimeout(showT); clearInterval(interval); };
  }, [onComplete]);

  if (removed) return null;

  const dash = 2 * Math.PI * 74;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06092f] transition-opacity duration-700",
        phase === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 kinetic-bg opacity-60" />

      {/* Top label */}
      <div className={cn(
        "absolute top-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-[#94abf5]/50 font-label transition-opacity duration-700",
        phase >= 1 ? "opacity-100" : "opacity-0"
      )}>
        Skypaint • Cascais — Lisboa
      </div>

      {/* Center mark */}
      <div className={cn(
        "relative transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94abf5" />
              <stop offset="100%" stopColor="#00d2fd" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="74" stroke="rgba(148,171,245,0.08)" strokeWidth="1" />
          <circle
            cx="80" cy="80" r="74"
            stroke="url(#loaderGrad)" strokeWidth="2" strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={dash * (1 - progress / 100)}
            style={{ transform: "rotate(-90deg)", transformOrigin: "80px 80px", transition: "stroke-dashoffset 80ms linear" }}
          />
          <path
            d="M55 100 Q80 100 80 80 T105 60"
            stroke="#e3e3ff" strokeWidth="3" strokeLinecap="round" fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 * (1 - Math.min(1, progress / 80))}
            style={{ transition: "stroke-dashoffset 80ms linear" }}
          />
          <circle cx="105" cy="60" r="3" fill="#00d2fd" opacity={progress > 75 ? 1 : 0} style={{ transition: "opacity 0.3s" }} />
        </svg>
      </div>

      {/* Brand */}
      <div className={cn(
        "mt-7 text-3xl font-bold tracking-tighter transition-[opacity,transform] duration-700 delay-300 bg-gradient-to-r from-[#94abf5] to-[#00d2fd] bg-clip-text text-transparent",
        phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        Skypaint
      </div>

      {/* Progress bar */}
      <div className={cn("mt-8 w-[220px] transition-opacity duration-700 delay-500", phase >= 1 ? "opacity-100" : "opacity-0")}>
        <div className="h-px w-full bg-[#94abf5]/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#94abf5] to-[#00d2fd]" style={{ width: `${progress}%`, transition: "width 60ms linear" }} />
        </div>
        <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-[#94abf5]/40">
          <span>Loading</span>
          <span>{progress.toString().padStart(3, "0")}</span>
        </div>
      </div>

      {/* Bottom */}
      <div className={cn(
        "absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-[#94abf5]/30 font-label transition-opacity duration-700 delay-500",
        phase >= 1 ? "opacity-100" : "opacity-0"
      )}>
        Pinturas · Reformas · Acabamentos
      </div>
    </div>
  );
}
