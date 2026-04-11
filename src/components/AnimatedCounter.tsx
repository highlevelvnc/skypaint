import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animated counter that counts up when it enters the viewport.
 * Uses setInterval (RAF-independent) so it works even in headless.
 */
export function AnimatedCounter({
  to,
  suffix = "",
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          const start = Date.now();
          const interval = setInterval(() => {
            const t = Math.min(1, (Date.now() - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * to));
            if (t >= 1) clearInterval(interval);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={`counter-value ${className}`}>
      {value}
      {suffix}
    </span>
  );
}
