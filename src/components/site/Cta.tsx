import { BrandMark, serif } from "./shared";

export function Cta() {
  return (
    <section className="bg-white p-[10px] lg:p-[30px]">
      <div className="rounded-[20px] bg-[#070606] py-16 lg:py-28">
        <div className="container-x-inset flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center justify-center gap-[10px] rounded-lg bg-white/[0.04] px-[14px] py-2">
              <BrandMark size={24} dark={false} />
              <span className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-white">
                CTA
              </span>
            </div>
            <h2 className="max-w-[720px] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-white">
              Create a <span className={`${serif} text-white/50 whitespace-nowrap`}>brand that stands</span>{" "}
              the test of time
            </h2>
            <p className="max-w-[665px] text-[10px] sm:text-base font-medium leading-[1.5] tracking-[-0.075em] text-white">
              Ready to bring your ideas to life with creative and impactful design. Let's collaborate
              to create modern, user-focused digital experiences that help your brand stand out and
              connect.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-[80px] bg-white px-6 text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#070606] shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}