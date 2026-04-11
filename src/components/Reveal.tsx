import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Variant = "up" | "up-lg" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  variant?: Variant;
  className?: string;
  as?: "div" | "section" | "ul" | "li" | "header";
  style?: CSSProperties;
}

const VARIANTS: Record<
  Variant,
  { hidden: CSSProperties; visible: CSSProperties }
> = {
  up: {
    hidden: { opacity: 0, transform: "translateY(24px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "up-lg": {
    hidden: { opacity: 0, transform: "translateY(64px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  right: {
    hidden: { opacity: 0, transform: "translateX(-32px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  scale: {
    hidden: { opacity: 0, transform: "scale(0.95)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function Reveal({
  children,
  delay = 0,
  duration = 900,
  variant = "up",
  className,
  as = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isInView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 1.05 && r.bottom > -50;
    };

    if (isInView()) {
      // Schedule on next tick to allow transition
      const t = setTimeout(() => setVisible(true), 30);
      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.05 }
    );
    obs.observe(el);

    // Fallback: also re-check on scroll in case mutations pushed it into view
    const onScroll = () => {
      if (isInView()) {
        setVisible(true);
        obs.disconnect();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const v = VARIANTS[variant];
  const Tag = as as React.ElementType;

  const dynamicStyle: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "opacity, transform",
    ...(visible ? v.visible : v.hidden),
    ...style,
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={dynamicStyle}
      className={className}
    >
      {children}
    </Tag>
  );
}
