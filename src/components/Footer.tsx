import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-primary-bg border-t border-secondary-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-display font-bold tracking-tight text-text-primary"
        >
          PORTFOLIO<span className="text-accent">.</span>
        </motion.div>
        
        <p className="text-sm text-text-secondary">
          © {currentYear} All rights reserved. Designed with intention.
        </p>
        
        <div className="flex gap-8">
          <a href="#" className="text-xs uppercase tracking-widest font-bold text-text-secondary hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="text-xs uppercase tracking-widest font-bold text-text-secondary hover:text-accent transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
