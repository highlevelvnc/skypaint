import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState(0); // 0=hidden 1=visible 2=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 30);
    const t2 = setTimeout(() => {
      setPhase(2);
      onComplete?.();
    }, 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === 2) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06092f]"
      style={{
        opacity: phase >= 1 ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        className="text-2xl sm:text-3xl font-bold tracking-tighter bg-gradient-to-r from-[#94abf5] to-[#00d2fd] bg-clip-text text-transparent"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        Skypaint
      </div>
      <div className="mt-6 w-40 h-px bg-[#94abf5]/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#94abf5] to-[#00d2fd]"
          style={{
            width: phase >= 1 ? "100%" : "0%",
            transition: "width 1s ease-out",
          }}
        />
      </div>
    </div>
  );
}
