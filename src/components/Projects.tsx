import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Social Media Content",
    description: "Engaging posts and visuals for various social platforms.",
    image: "https://picsum.photos/seed/social/800/600",
    tools: ["Canva", "Social Media"],
    link: "#"
  },
  {
    id: 2,
    title: "Blog & Content Writing",
    description: "Professional articles, blogs, and scripts for digital platforms.",
    image: "https://picsum.photos/seed/writing/800/600",
    tools: ["Content Writing", "SEO"],
    link: "#"
  },
  {
    id: 3,
    title: "UGC Videos & Reels",
    description: "Trend-based short videos and authentic brand content.",
    image: "https://picsum.photos/seed/ugc/800/600",
    tools: ["Video Editing", "UGC"],
    link: "#"
  },
  {
    id: 4,
    title: "Captions & Scripts",
    description: "Creative storytelling and persuasive copy for digital media.",
    image: "https://picsum.photos/seed/copy/800/600",
    tools: ["Copywriting", "Storytelling"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="work" className="section-padding bg-primary-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">My Work</span>
            <h3 className="text-4xl font-bold text-text-primary mb-6">Portfolio Showcase</h3>
            <p className="text-text-secondary max-w-md leading-relaxed">
              A showcase of my work in social media, content writing, and UGC creation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="geometric-card"
          >
            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  whileHover={{ x: 10 }}
                  className="block pb-12 border-b border-black/5 last:border-0 last:pb-0 group"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] uppercase tracking-widest font-bold text-accent">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-text-primary group-hover:text-text-secondary transition-colors mb-3">
                    {project.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
