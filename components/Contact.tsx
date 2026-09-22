import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink px-6 py-28 text-paper sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-6">
            <span className="label text-red-bright">05</span>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Contact</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display mt-14 max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
            Excited to bring a fresh, creative perspective to the teams and
            brands I work with. <span className="italic text-red-bright">Let&rsquo;s connect.</span>
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:mearmstrong2006@gmail.com"
              className="label border border-paper/30 px-6 py-4 transition-colors hover:border-red-bright hover:bg-red-bright hover:text-paper"
            >
              mearmstrong2006@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/madison-armstrongsf"
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-paper/30 px-6 py-4 transition-colors hover:border-red-bright hover:bg-red-bright hover:text-paper"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
        <div className="mt-24 flex flex-col gap-3 border-t border-paper/15 pt-8 text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">Madison Armstrong</p>
          <p className="label">Fashion merchandising &middot; Editorial &middot; Buying</p>
          <p className="label">&copy; 2026</p>
        </div>
      </div>
    </footer>
  );
}
