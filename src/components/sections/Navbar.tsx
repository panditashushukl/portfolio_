"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl glass-panel rounded-full z-50 border border-white/10"
    >
      <div className="flex justify-between items-center px-6 py-4">

        <Link href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/icon.svg" alt="Ashu.dev Logo" className="w-10 h-10 md:w-12 md:h-12" />
        </Link>

        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
        </div>

      </div>
    </motion.nav>
  )
}