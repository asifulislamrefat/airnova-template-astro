import { useEffect, useState } from "react";
import { Logo } from "./shared";

function FullscreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const links = ["Home", "About Us", "Services", "Blog", "Contact"];
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute inset-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      />
      <button
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute right-6 top-6 z-20 flex h-10 w-10 cursor-pointer items-center justify-center text-white transition-all duration-500 md:right-[93px] md:top-8 hover:rotate-90 ${
          open ? "opacity-100 delay-500" : "opacity-0"
        }`}
      >
        <span className="relative block h-6 w-6">
          <span className="pointer-events-none absolute left-0 top-1/2 block h-px w-full rotate-45 bg-white" />
          <span className="pointer-events-none absolute left-0 top-1/2 block h-px w-full -rotate-45 bg-white" />
        </span>
      </button>
      <nav className="relative z-10 flex h-full w-full items-center justify-center p-8">
        <ul className="flex flex-col items-center gap-[22px] text-center">
          {links.map((label, i) => (
            <li
              key={label}
              className="py-1"
              style={{
                transform: open ? "translateY(0)" : "translateY(120%)",
                opacity: open ? 1 : 0,
                transition: `transform 700ms cubic-bezier(0.65,0,0.35,1) ${
                  open ? 300 + i * 80 : 0
                }ms, opacity 500ms ease ${open ? 300 + i * 80 : 0}ms`,
              }}
            >
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={onClose}
                className="inline-block px-2 py-2 text-[48px] font-semibold leading-[1.2] tracking-[-0.065em] text-white/70 transition-colors duration-300 ease-out hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Studio", href: "#studio" },
    { label: "Projects", href: "#projects", sup: "15" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="bg-surface">
      <div className="container-x flex items-center justify-center py-6">
        <div className="flex w-full items-center justify-between gap-6 lg:hidden">
          <Logo />
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-[10px] w-14 cursor-pointer flex-col justify-between"
          >
            <span className="block h-px w-full bg-foreground" />
            <span className="block h-px w-full bg-foreground" />
          </button>
        </div>
        <div className="hidden w-full items-center justify-between gap-8 lg:flex">
          <Logo />
          <div className="flex items-center gap-10 xl:gap-16">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex items-start text-base font-medium leading-[1.5] tracking-[-0.075em] text-foreground/70 transition-colors duration-300 ease-out hover:text-foreground"
            >
              <span>{l.label}</span>
              {l.sup && (
                <sup className="ml-px text-[10px] font-semibold leading-[0.9] tracking-[-0.075em] text-foreground/40">
                  {l.sup}
                </sup>
              )}
            </a>
          ))}
          </div>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-[10px] w-14 cursor-pointer flex-col justify-between"
          >
            <span className="block h-px w-full bg-foreground" />
            <span className="block h-px w-full bg-foreground" />
          </button>
        </div>
      </div>
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}