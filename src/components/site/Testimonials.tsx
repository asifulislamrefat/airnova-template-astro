import { ArrowUpRight, Star } from "lucide-react";
import michaelAvatar from "@/assets/michael.png.asset.json";
import airnova1 from "@/assets/airnova-1.png.asset.json";
import { Pill, serif } from "./shared";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Founder",
      text: "Their creativity and professionalism truly stand out. Our website looks ",
      avatar: "https://i.pravatar.cc/120?img=32",
      headerTop: true,
      lgOrder: "lg:order-2",
    },
    {
      name: "Michael Turner",
      role: "Product Manager",
      text: "Fast delivery, great communication, and outstanding design work !",
      avatar: michaelAvatar.url,
      headerTop: true,
      lgOrder: "lg:order-1",
    },
    {
      name: "David Lee",
      role: "Marketing Manager",
      text: "They understood our vision perfectly and delivered a design that elevated our brand identity.",
      avatar: "https://i.pravatar.cc/120?img=47",
      headerTop: true,
      lgOrder: "lg:order-3",
    },
  ];
  return (
    <section className="bg-surface py-16 lg:py-28">
      <div className="container-x flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[150px]">
          <Pill>Testimonials</Pill>
          <h2 className="flex-1 text-[clamp(24px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.05em] text-black">
            Client Experiences That Highlight Our{" "}
            <span className={`${serif} text-black/50`}>commitment to quality</span> and Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:h-[454px]">
          {/* Rating card */}
          <div className="flex flex-col justify-between rounded-lg bg-white p-4">
            <div className="flex items-center gap-3">
              <p className="shrink-0 font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                <span className="text-[56px]">4.9 </span>
                <span className="text-[32px] text-black/50">/5</span>
              </p>
              <p className="flex-1 text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                We've delivered 56+ Project that help companies generate
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className={`${serif} text-[24px] font-bold leading-[1.1] tracking-[-0.075em] text-[#070606]`}>
                  Airnova
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-[10px]">
                    {[airnova1.url, `https://i.pravatar.cc/80?img=32`, `https://i.pravatar.cc/80?img=47`, `https://i.pravatar.cc/80?img=58`].map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="size-[27px] rounded-[5px] border border-white object-cover"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-[11px] fill-[#FF2626] text-[#FF2626]" />
                      ))}
                    </div>
                    <span className="text-[12px] font-semibold leading-[1.4] tracking-[-0.05em] text-black">
                      Trusted by <span className="text-black/40">clients worldwide</span>
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="#"
                data-hover-lift
                className="inline-flex h-12 w-full items-center justify-between rounded-[80px] bg-[#070606] px-6 text-base font-medium tracking-[-0.075em] text-white shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
              >
                Leave a review <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>

          {reviews.map((r) => {
            const header = (pos: "top" | "bottom") => (
              <div
                className={`flex items-center gap-2 rounded bg-white px-4 py-2 transition-[border-radius] duration-500 ease-out ${
                  pos === "top" ? "group-hover:rounded-b-none" : "group-hover:rounded-t-none"
                }`}
              >
                <img src={r.avatar} alt={r.name} className="h-[38px] w-[41px] rounded-[5px] border border-white object-cover" />
                <div className="flex flex-col">
                  <div className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-black">{r.name}</div>
                  <div className="text-[14px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">{r.role}</div>
                </div>
              </div>
            );
            const body = (pos: "top" | "bottom") => (
              <div
                className={`flex flex-1 flex-col justify-between rounded-lg bg-white p-4 transition-[border-radius] duration-500 ease-out ${
                  pos === "top" ? "group-hover:rounded-b-none" : "group-hover:rounded-t-none"
                }`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-[#FF2626] text-[#FF2626]" />
                  ))}
                </div>
                <p className="text-[20px] font-semibold leading-[1.3] tracking-[-0.065em] text-black">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            );
            return (
              <div
                key={r.name}
                className={`group flex flex-col gap-2 transition-[gap] duration-500 ease-out hover:gap-0 ${r.lgOrder}`}
              >
                {r.headerTop ? header("top") : body("top")}
                {r.headerTop ? body("bottom") : header("bottom")}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}