import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="text-2xl font-bold tracking-tighter text-text-primary"
        >
          RUPA.M
        </motion.a>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-text-primary uppercase tracking-widest hover:text-text-secondary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu could be added here if needed, but keeping it minimal as requested */}
      </nav>
    </motion.header>
  );
}
