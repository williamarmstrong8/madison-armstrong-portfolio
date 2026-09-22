const items = [
  "Sustainability",
  "Women's Empowerment",
  "Timeless Style",
  "Modern Nostalgia",
  "Refined Mischief",
  "Effortless Elegance",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-ink py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="label text-paper/90">{item}</span>
            <span className="text-red-bright text-xs">&#10035;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
