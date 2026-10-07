"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring" }}
        className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed relative z-10 font-light">
          I build <strong className="font-semibold text-white">scalable, production-ready applications</strong> using
          <strong className="font-semibold text-white"> Spring Boot, FastAPI, and Next.js</strong>, with a strong focus on
          backend architecture, APIs, and clean, maintainable code. I also specialize in
          <strong className="font-semibold text-white"> Agentic AI and AI-powered automation</strong>, building intelligent
          systems that can reason, automate workflows, and solve real-world problems. I enjoy turning complex ideas into
          <strong className="font-semibold text-white"> reliable, impactful software</strong>.
        </p>

      </motion.div>
    </section>
  )
}