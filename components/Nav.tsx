const links = [
  { href: "#about", label: "About" },
  { href: "#capstone", label: "Case Study" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg tracking-tight hover:text-red transition-colors"
        >
          Madison Armstrong
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label text-ink-soft hover:text-red transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="label text-ink-soft hover:text-red transition-colors sm:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}
