"use client"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6";

export function ProjectCard({ project, index = 0 }: any) {

  const hasLive = project?.live && project.live.trim() !== ""

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-panel rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full bg-[#0f172a]/80"
    >

      {/* Preview Section */}
      <div className="relative w-full h-64 border-b border-white/10 bg-[#020617] flex flex-col">

        {/* Header */}
        <div className="flex items-center px-4 py-2 bg-white/5 gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          <div className="mx-auto bg-black/40 px-3 py-1 rounded-md text-[10px] text-gray-500 font-mono truncate max-w-[200px]">
            {hasLive ? project.live.replace('https://', '') : "preview-not-available"}
          </div>
        </div>

        {/* Preview / Fallback */}
        <div className="relative flex-1 overflow-hidden bg-black/50">

          {hasLive ? (
            <iframe 
              src={project.live} 
              title={project.title}
              className="w-[120%] h-[120%] origin-top-left scale-[0.833] border-none absolute inset-0 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          ) : (
            <FallbackPreview project={project} />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-transparent z-10 group-hover:hidden"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* 🔥 FEATURES SECTION */}
        {project.features && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
            <ul className="space-y-1">
              {project.features.map((f: string, i: number) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="text-xs bg-blue-900/30 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">

          <a 
            href={project.github} 
            target="_blank"
            rel="noreferrer" 
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4" /> Code
          </a>

          {hasLive && (
            <a 
              href={project.live} 
              target="_blank"
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors ml-auto"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  )
}


/* 🌟 Fallback Preview Component */
function FallbackPreview({ project }: any) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center px-4">
      
      <div className="text-4xl mb-2">🚀</div>

      <h4 className="text-white font-semibold text-sm">
        Preview Not Available
      </h4>

      <p className="text-gray-500 text-xs mt-1">
        Live demo is not deployed yet
      </p>

      <div className="mt-3 text-xs text-blue-400 font-mono">
        {project.title}
      </div>
    </div>
  )
}