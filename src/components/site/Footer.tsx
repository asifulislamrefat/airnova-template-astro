import { Link } from "@tanstack/react-router";
import { BrandMark, serif } from "./shared";

// Map footer link labels to internal routes. Add an entry when a new page route is created.
const ROUTE_MAP: Record<string, string> = {
  "About Us": "/about",
  "Projects": "/projects",
};

export function Footer() {
  const cols = [
    { title: "Pages", links: ["Home", "About Us", "Services", "Projects", "Blog"] },
    { title: "Pages", links: ["Blog Details", "Projects Details", "Services Details", "Pricing"] },
    { title: "Information", links: ["Book a call", "Instagram", "Linkeding", "Twitter"] },
    { title: "Inner Pages", links: ["404", "Licenses", "Chang loge", "Style Guide"] },
  ];
  return (
    <footer className="relative z-50 overflow-hidden bg-foreground px-6 pb-8 pt-16 text-background sm:px-10 lg:h-[757px] lg:px-20 lg:pt-[112px] lg:pb-[32px]">
      {/* Giant wordmark sitting behind everything (Figma: top:362.49, h:368.805) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 z-0 hidden -translate-x-1/2 select-none items-center justify-center overflow-hidden lg:flex"
        style={{ top: "362.49px", height: "368.805px", width: "100vw" }}
      >
        <span
          className={`${serif} block font-semibold italic leading-[1.1] tracking-[-0.075em] text-background whitespace-nowrap`}
          style={{ fontSize: "clamp(170px, 20.93vw, 301.422px)" }}
        >
          Airnova
        </span>
      </div>

      {/* Mobile wordmark below */}
      <div className="pointer-events-none mt-12 select-none overflow-hidden text-center lg:hidden">
        <span
          className={`${serif} inline-block font-semibold italic leading-[1.1] tracking-[-0.075em] text-background`}
          style={{ fontSize: "clamp(80px, 20vw, 200px)" }}
        >
          Airnova
        </span>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-12 lg:gap-[48px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex shrink-0 flex-col items-start gap-6">
            <div className="flex flex-col gap-4">
              <Link to="/" aria-label="Airnova — home" className="flex items-center gap-[8.064px]">
                <BrandMark size={38.304} dark={false} />
                <span className={`${serif} font-bold text-[32.26px] leading-[1.1] tracking-[-0.075em] text-background`}>
                  Airnova
                </span>
              </Link>
              <p className="w-full max-w-[326px] text-[32px] font-semibold leading-[1.2] tracking-[-0.065em]">
                <span>Social media that </span>
                <span className={`${serif} text-background/50`}>drives real </span>
                <span>results</span>
              </p>
            </div>
            <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-background">
              Built for creators businesses and brands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 font-medium leading-[1.5] text-background md:grid-cols-4 lg:flex lg:items-start lg:gap-[80px] lg:whitespace-nowrap">
            {cols.map((c, i) => (
              <div key={i} className="flex flex-col items-start gap-6">
                <h4 className="text-[26px] font-medium tracking-[-0.075em]">{c.title}</h4>
                <ul className="flex flex-col items-start gap-6 text-[16px] tracking-[-0.075em]">
                  {c.links.map((l) => (
                    <li key={l}>
                      {ROUTE_MAP[l] ? (
                        <Link
                          to={ROUTE_MAP[l]}
                          className="inline-block"
                        >
                          {l}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="inline-block"
                        >
                          {l}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-background/10" />

        <div className="relative z-10 flex w-full items-center justify-center rounded-lg bg-background/[0.03] px-6 py-3.5 text-center text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-background">
          Design & Developed By Airdute - License | Powered By Webflow
        </div>
      </div>
    </footer>
  );
}