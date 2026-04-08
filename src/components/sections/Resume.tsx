"use client"
import { motion, Variants } from "framer-motion"
import { GraduationCap, Award, CheckCircle2 } from "lucide-react"

export default function Resume() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Academic background and key achievements that shape my journey.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Education Section */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2">Master of Computer Applications [MCA]</h4>
              <div className="text-blue-400 font-medium mb-3">2024 - 2026</div>
              <p className="text-gray-300 mb-2">Institute of Engineering and Technology, Lucknow, UP</p>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-semibold">
                GPA: <span className="text-white">9.05 / 10.00</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2">Bachelor of Computer Applications [BCA]</h4>
              <div className="text-blue-400 font-medium mb-3">2021 - 2024</div>
              <p className="text-gray-300 mb-2">University of Allahabad, Prayagraj, UP</p>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-semibold">
                GPA: <span className="text-white">7.68 / 10.00</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Achievements & Certifications</h3>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-2xl h-full relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all"></div>
            
            <ul className="relative z-10 space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                <p className="text-gray-300 leading-relaxed">
                  Solved <strong className="text-white">300+</strong> Problems on LeetCode 
                  <a href="https://leetcode.com/u/panditashushukl" target="_blank" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">@panditashushukl</a>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                <p className="text-gray-300 leading-relaxed">
                  Led a team in the Internal <strong className="text-white">Smart India Hackathon</strong>, driving innovation and collaboration.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                <p className="text-gray-300 leading-relaxed">
                  Completed 4-week <strong className="text-white">IBM SkillsBuild</strong> Project-Based Learning Program (Agentic AI).
                </p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                <p className="text-gray-300 leading-relaxed">
                  Attended <strong className="text-white">AWS Cloud Clubs</strong> seminar hosted by University of Lucknow.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
