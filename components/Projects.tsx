import Image from "next/image";
import Reveal from "./Reveal";

const projects = [
  {
    num: "P.01",
    title: "Customer Journey Map",
    tag: "Reflora",
    date: "July 2026",
    body: "Built a full customer archetype, Mason Livermoor, a 25-year-old Manhattan merchandising director who values sustainability and timeless style, and mapped her five-stage journey from discovering a piece on Pinterest through purchase, retention, and advocacy.",
    src: "/images/journey.jpg",
    alt: "Customer archetype lifestyle image for the Reflora journey map",
    wide: false,
  },
  {
    num: "P.02",
    title: "Digital Product Passport Proposal",
    tag: "The Impact of Retail Technology",
    date: "July 2026",
    body: "A proposal for scannable QR and RFID passports that disclose a garment's origin, production, environmental impact, and authenticity. Grounded in consumer data: 74% of consumers will pay more for fully traceable garments, and 54% of US and UK consumers want a sustainable fashion industry.",
    src: "/images/dpp.jpg",
    alt: "Trench coat with a scannable digital product passport tag",
    wide: false,
  },
  {
    num: "P.03",
    title: "Chanel Brand Timeline",
    tag: "Brand history research",
    date: "November 2025",
    body: "Researched and mapped Chanel's history from Coco Chanel's 1909 millinery shop through wartime closure, reinvention, and the modern ready-to-wear era, studying how the house stayed true to a chic, classic identity while evolving with each generation.",
    src: "/images/chanel-store.jpg",
    alt: "Historic Chanel storefront with period car",
    wide: false,
  },
  {
    num: "P.04",
    title: "Lookbook",
    tag: "Styling & curation",
    date: "2026",
    body: "A nine-look styling exercise: complete outfits curated head to toe, mixing high and low, vintage and new. An exploration of how composition and pairing turn individual pieces into a point of view.",
    src: "/images/lookbook.jpg",
    alt: "Grid of nine curated outfits from Madison's lookbook",
    wide: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-6">
            <span className="label text-red">03</span>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Selected projects</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={(i % 2) * 100} className={p.wide ? "sm:col-span-2" : ""}>
              <article className={p.wide ? "grid items-start gap-8 lg:grid-cols-2" : ""}>
                <div className="img-frame overflow-hidden bg-cream">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.wide ? 1400 : 800}
                    height={p.wide ? 933 : 1000}
                    className={p.wide ? "h-auto w-full object-cover" : "aspect-[4/5] w-full object-cover"}
                  />
                </div>
                <div className={p.wide ? "" : "mt-6"}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="label text-grey">{p.num}</span>
                    <span className="label text-grey">{p.date}</span>
                  </div>
                  <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-[1.65rem]">{p.title}</h3>
                  <p className="label mt-2 text-red">{p.tag}</p>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
