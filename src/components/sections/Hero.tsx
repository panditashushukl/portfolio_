"use client"

import HeroBackground from "./hero/HeroBackground"
import HeroText from "./hero/HeroText"
import HeroProfileImage from "./hero/HeroProfileImage"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full">
      <HeroBackground />

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <HeroText />
        <HeroProfileImage />
      </div>
    </section>
  )
}