"use client"
import { motion, Variants } from "framer-motion"
import { SiLeetcode, SiGithub } from "react-icons/si"

export default function Stats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  }

  return (
    <section id="stats" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Coding <span className="text-gradient">Stats</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">My ongoing journey in problem-solving and open-source contributions.</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* LeetCode Card */}
        <motion.div variants={itemVariants} className="w-full h-full flex justify-center lg:justify-end">
          <a 
            href="https://leetcode.com/panditashushukl/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col w-full h-full max-w-[550px] glass-panel rounded-2xl p-5 hover:border-accent/50 hover:bg-slate-800/30 transition-all duration-300 transform hover:-translate-y-2 group shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-accent transition-colors flex items-center gap-2">
                <SiLeetcode className="w-6 h-6 text-yellow-500" />
                LeetCode Profile
              </h3>
              <span className="text-sm text-gray-400 group-hover:text-gray-300">View →</span>
            </div>
            <div className="relative w-full flex-1 flex flex-col justify-center rounded-xl overflow-hidden bg-slate-900/80 p-4 shadow-inner border border-slate-700/50">
              <img 
                src="https://leetcard.jacoblin.cool/panditashushukl?theme=chartreuse&font=Jolly%20Lodger&ext=heatmap" 
                alt="LeetCode Stats" 
                className="w-full h-auto max-h-full object-contain drop-shadow-md rounded-lg"
              />
            </div>
          </a>
        </motion.div>

        {/* GitHub Cards */}
        <motion.div variants={itemVariants} className="w-full h-full flex justify-center lg:justify-start">
          <a 
            href="https://github.com/panditashushukl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col w-full h-full max-w-[550px] glass-panel rounded-2xl p-5 hover:border-accent/50 hover:bg-slate-800/30 transition-all duration-300 transform hover:-translate-y-2 group shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-accent transition-colors flex items-center gap-2">
                <SiGithub className="w-6 h-6 text-white" />
                GitHub Activity
              </h3>
              <span className="text-sm text-gray-400 group-hover:text-gray-300">View →</span>
            </div>
            
            <div className="flex flex-col gap-4 flex-1 justify-center">
              <div className="relative w-full flex-1 flex flex-col justify-center rounded-xl overflow-hidden bg-slate-900/80 p-2 shadow-inner border border-slate-700/50">
                <img 
                  src="https://awesome-github-stats.azurewebsites.net/user-stats/panditashushukl?cardType=level&theme=dark&fontFamily=&preferLogin=false" 
                  alt="GitHub Stats" 
                  className="w-full h-auto max-h-full object-contain drop-shadow-md rounded-lg mx-auto"
                />      
              </div>
              <div className="relative w-full flex-1 flex flex-col justify-center rounded-xl overflow-hidden bg-slate-900/80 p-2 shadow-inner border border-slate-700/50">
                <img 
                  src="https://streak-stats.demolab.com?user=panditashushukl&theme=dark&hide_border=true&short_numbers=true&mode=weekly&card_width=479&card_height=170" 
                  alt="GitHub Streak Stats" 
                  className="w-full h-auto max-h-full object-contain drop-shadow-md rounded-lg mx-auto"
                />
              </div>
            </div>
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}
