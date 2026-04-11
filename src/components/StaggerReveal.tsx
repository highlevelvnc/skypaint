import { useEffect, useRef, useState, type ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reveals children with staggered delays when the container enters the viewport.
 * Uses the CSS class `.stagger-children` + `.visible` defined in index.css.
 */
export function StaggerReveal({ children, className = "" }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stagger-children ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
