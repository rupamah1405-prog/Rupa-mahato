import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-bg pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-[112px] font-bold text-text-primary leading-[0.9] tracking-[-0.05em] mb-12">
            Rupa Mahato
          </h1>
          <p className="text-xl md:text-3xl text-text-secondary max-w-2xl mx-auto mb-12 leading-tight font-medium">
            Digital Marketing Enthusiast, Content Writer, and UGC Creator.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-text-primary text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-sm hover:brightness-110 transition-all"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
