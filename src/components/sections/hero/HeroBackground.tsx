import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image 
        src="/shukla-bg.webp" 
        alt="Abstract Background"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617]/50 to-transparent"></div>
    </div>
  );
}
