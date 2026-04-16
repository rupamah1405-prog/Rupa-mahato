import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-primary-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="geometric-card flex flex-col justify-between min-h-[400px]"
        >
          <div>
            <span className="section-label">About Me</span>
            <h3 className="text-4xl font-bold text-text-primary mb-8 leading-tight">
              Motivated Digital Marketing Enthusiast.
            </h3>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                I am a motivated digital marketing enthusiast with skills in content writing, SEO, and social media marketing. 
                I focus on creating meaningful connections between brands and their audiences.
              </p>
              <p>
                With a background in English literature, I bring a unique storytelling perspective to digital campaigns, 
                ensuring that every message is clear, professional, and engaging.
              </p>
              <p>
                I am dedicated to helping brands bridge the gap between creative vision and market impact through 
                strategic content creation and intentional digital marketing.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <span className="section-label mb-2">Languages</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-black/10 rounded-full text-[11px] font-semibold uppercase tracking-wider">Hindi</span>
                <span className="px-3 py-1 border border-black/10 rounded-full text-[11px] font-semibold uppercase tracking-wider">English</span>
                <span className="px-3 py-1 border border-black/10 rounded-full text-[11px] font-semibold uppercase tracking-wider">Bengali</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
