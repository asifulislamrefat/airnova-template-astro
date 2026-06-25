import { Logo, serif } from "./shared";

export function Footer() {
  const cols = [
    { title: "Pages", links: ["Home", "About Us", "Services", "Projects", "Blog"] },
    { title: "Pages", links: ["Blog Details", "Projects Details", "Services Details", "Pricing"] },
    { title: "Information", links: ["Book a call", "Instagram", "LinkedIn", "Twitter"] },
    { title: "Inner Pages", links: ["404", "Licenses", "Changelog", "Style Guide"] },
  ];
  return (
    <footer className="relative overflow-hidden bg-foreground pb-8 pt-16 lg:pt-28 text-background">
      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo light />
            <p className="max-w-sm text-[28px] font-semibold leading-[1.2] tracking-[-0.03em]">
              Social media that <span className={`${serif} text-background/50`}>drives<br />real</span> results
            </p>
            <p className="text-base text-background/80">Built for creators, businesses and brands.</p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {cols.map((c, i) => (
              <div key={i} className="flex flex-col gap-5">
                <h4 className="text-2xl font-semibold tracking-[-0.02em]">{c.title}</h4>
                <ul className="space-y-3 text-base text-background/85">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="inline-block transition-all duration-300 ease-out hover:translate-x-1 hover:text-background"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 h-px bg-white/10" />

        <div className="mt-6 rounded-lg bg-white/5 px-6 py-4 text-center text-base text-background/80">
          Copyright © Airnova. "All rights reserved" | Design and Develop By Airdute LLC
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        className={`${serif} pointer-events-none mt-12 select-none overflow-hidden text-center font-semibold leading-none tracking-[-0.075em] text-background`}
        style={{ fontSize: "clamp(120px, 28vw, 420px)" }}
      >
        Airnova
      </div>
    </footer>
  );
}