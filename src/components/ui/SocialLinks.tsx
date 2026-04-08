import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/panditashushukl", icon: <FaGithub className="w-6 h-6" />, hoverColor: "hover:text-white" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/panditashushukl", icon: <FaLinkedin className="w-6 h-6" />, hoverColor: "hover:text-blue-500" },
  { name: "X", url: "https://x.com/panditashushukl", icon: <FaXTwitter className="w-6 h-6" />, hoverColor: "hover:text-gray-300" },
  { name: "Instagram", url: "https://www.instagram.com/panditashushukl/", icon: <FaInstagram className="w-6 h-6" />, hoverColor: "hover:text-pink-500" },
  { name: "LeetCode", url: "https://leetcode.com/u/panditashushukl/", icon: <SiLeetcode className="w-6 h-6" />, hoverColor: "hover:text-yellow-400" },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "flex flex-wrap items-center gap-5 mt-10 text-gray-400" }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a 
          key={link.name} 
          href={link.url} 
          target="_blank" 
          rel="noreferrer" 
          className={`${link.hoverColor} transition-colors`} 
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
