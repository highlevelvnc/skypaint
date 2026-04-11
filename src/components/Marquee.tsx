interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-10 sm:py-14 bg-[#0a0e38] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6">
            <span className="font-headline text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white/90">
              {item}
            </span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
