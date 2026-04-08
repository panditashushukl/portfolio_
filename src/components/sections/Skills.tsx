"use client"
import { motion, Variants } from "framer-motion"
import { skills } from "@/src/lib/skills";

export default function Skills() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  }

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  }

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-gradient">Skills</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">The technologies and tools I work with every day to build modern applications.</p>
      </div>

      <motion.div 
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={skillVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="px-6 py-3 glass-panel rounded-xl text-md font-medium hover:border-blue-500/50 hover:bg-blue-900/20 transition-all cursor-default shadow-lg shadow-black/20"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}