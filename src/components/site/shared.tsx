import React from "react";

export const serif = "font-serif italic";

export function BrandMark({ size = 38, dark = true }: { size?: number; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center shadow-sm"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.2,
        background: dark ? "var(--foreground)" : "var(--surface)",
      }}
    >
      <svg
        viewBox="0 0 13.44 13.4111"
        fill={dark ? "#ffffff" : "var(--foreground)"}
        style={{ width: size * 0.56, height: size * 0.56 }}
      >
        <path d="M13.1829 6.35083L11.2547 5.79982C10.3864 5.55501 9.59543 5.09147 8.95751 4.45355C8.31958 3.81562 7.85604 3.02466 7.61124 2.15634L7.06023 0.228154C7.03252 0.160693 6.98538 0.102993 6.9248 0.0623858C6.86421 0.0217787 6.79293 9.76562e-05 6.72 9.76562e-05C6.64707 9.76562e-05 6.57578 0.0217787 6.5152 0.0623858C6.45462 0.102993 6.40748 0.160693 6.37977 0.228154L5.82876 2.15634C5.58396 3.02466 5.12042 3.81562 4.48249 4.45355C3.84457 5.09147 3.0536 5.55501 2.18529 5.79982L0.257098 6.35083C0.183062 6.37184 0.117901 6.41643 0.0715024 6.47783C0.0251038 6.53924 0 6.6141 0 6.69106C0 6.76802 0.0251038 6.84288 0.0715024 6.90428C0.117901 6.96568 0.183062 7.01027 0.257098 7.03128L2.18529 7.5823C3.0536 7.8271 3.84457 8.29064 4.48249 8.92857C5.12042 9.56649 5.58396 10.3575 5.82876 11.2258L6.37977 13.154C6.40079 13.228 6.44538 13.2932 6.50678 13.3396C6.56818 13.386 6.64304 13.4111 6.72 13.4111C6.79696 13.4111 6.87182 13.386 6.93322 13.3396C6.99462 13.2932 7.03921 13.228 7.06023 13.154L7.61124 11.2258C7.85604 10.3575 8.31958 9.56649 8.95751 8.92857C9.59543 8.29064 10.3864 7.8271 11.2547 7.5823L13.1829 7.03128C13.2569 7.01027 13.3221 6.96568 13.3685 6.90428C13.4149 6.84288 13.44 6.76802 13.44 6.69106C13.44 6.6141 13.4149 6.53924 13.3685 6.47783C13.3221 6.41643 13.2569 6.37184 13.1829 6.35083Z" />
      </svg>
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <BrandMark dark={!light} />
      <span className={`${serif} font-bold text-[32px] leading-[1.1] tracking-[-0.075em] ${light ? "text-white" : "text-foreground"}`}>
        Airnova
      </span>
    </div>
  );
}

export function Pill({
  children,
  variant = "grey",
}: {
  children: React.ReactNode;
  variant?: "grey" | "white";
}) {
  return (
    <div
      className={`inline-flex items-center gap-[10px] rounded-lg px-[14px] py-2 ${
        variant === "white" ? "bg-white" : "bg-[#f5f5f5]"
      }`}
    >
      <BrandMark size={24} />
      <span className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-black">
        {children}
      </span>
    </div>
  );
}