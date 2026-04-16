import { motion } from "motion/react";
import { 
  Palette, 
  Megaphone, 
  Search, 
  Camera, 
  Layout, 
  MessageSquare,
  PenTool,
  BarChart
} from "lucide-react";

const skills = [
  { name: "SEO", icon: Search, description: "Optimizing content for better search visibility and organic growth." },
  { name: "Keyword Research", icon: BarChart, description: "Identifying high-impact keywords to drive targeted traffic." },
  { name: "Social Media Marketing", icon: Megaphone, description: "Strategic campaigns across social platforms to build brand presence." },
  { name: "Content Writing", icon: PenTool, description: "Crafting professional and engaging narratives for various platforms." },
  { name: "UGC Content Creation", icon: Camera, description: "Creating authentic, trend-based content that resonates with audiences." },
  { name: "Basic Google Ads", icon: Layout, description: "Setting up and managing basic search and display ad campaigns." },
  { name: "Canva", icon: Palette, description: "Designing professional visuals and marketing materials." },
  { name: "Video Editing", icon: Camera, description: "Creating engaging reels and short-form video content." },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Expertise & Tools</span>
            <h3 className="text-4xl font-bold text-text-primary mb-8 leading-tight">
              Skills & Tools for <br /> Digital Success.
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill.name}
                  className="px-6 py-3 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:border-accent transition-all cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <span className="section-label mb-4">Other Tools</span>
              <div className="flex gap-6">
                <span className="text-sm font-medium text-text-secondary">MS Office</span>
                <span className="text-sm font-medium text-text-secondary">Google Analytics (Basic)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="geometric-card bg-white"
          >
            <div className="grid grid-cols-2 gap-8">
              {skills.slice(0, 4).map((skill) => (
                <div key={skill.name}>
                  <skill.icon className="text-accent mb-4" size={24} />
                  <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">{skill.name}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
