"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroProfileImage() {
  return (
    <motion.div 
      className="flex-shrink-0"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
    >
      <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full group">
        {/* Glowing ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-indigo-500">
          <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
            <Image 
              src="/shukla-profile.jpg" 
              alt="Ashutosh Shukla"
              fill
              priority
              sizes="(max-width: 768px) 192px, 320px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
