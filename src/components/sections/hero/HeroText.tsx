"use client";

import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { SocialLinks } from "@/src/components/ui/SocialLinks";

export default function HeroText() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="inline-block px-3 py-1 mb-6 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide">
        Available for new opportunities
      </motion.div>
      
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
      >
        Hi, I'm <br className="hidden md:block" />
        <span className="text-gradient">Ashutosh Shukla</span> 👋
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
      >
        Full Stack Developer specializing in scalable backend systems using SpringBoot, FastApi, and modern frontend applications using Next.js.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
        <a href="#projects" className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
          View Work
        </a>
        <a href="mailto:panditashushukl@gmail.com" className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-colors flex items-center gap-2">
          <Mail className="w-4 h-4" /> Contact Me
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className="flex w-full justify-center md:justify-start">
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
