import { motion } from "motion/react";

const experiences = [
  {
    id: 1,
    role: "Freelance UGC Content Creator",
    organization: "Self-Employed",
    duration: "Present",
    contributions: [
      "Created engaging social media content for various brands.",
      "Worked on trend-based content to maximize reach.",
      "Produced high-quality reels and short videos."
    ]
  },
  {
    id: 2,
    role: "Digital Marketing Intern",
    organization: "Thesis Eduventures",
    duration: "Internship",
    contributions: [
      "Assisted in digital marketing campaigns and strategy.",
      "Learned and applied SEO and social media marketing techniques.",
      "Contributed to brand growth through digital initiatives."
    ]
  },
  {
    id: 3,
    role: "Content Writing Intern",
    organization: "Tinplate Computer Training Center",
    duration: "Internship",
    contributions: [
      "Wrote professional content for training materials and blogs.",
      "Focused on clear and effective communication for students.",
      "Collaborated with the team to refine content quality."
    ]
  },
  {
    id: 4,
    role: "Education & Certifications",
    organization: "Kolhan University & Others",
    duration: "Academic",
    contributions: [
      "M.A. in English – Kolhan University",
      "Digital Marketing Internship Certification",
      "Content Writing Internship Certification",
      "Diploma in Computer Application (DCA)"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-primary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <span className="section-label">Journey</span>
            <h3 className="text-4xl font-bold text-text-primary mb-6 leading-tight">
              Experience & <br /> Education
            </h3>
            <p className="text-text-secondary leading-relaxed">
              A timeline of my professional growth, internships, and academic background.
            </p>
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="geometric-card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent mb-1 block">
                      {exp.duration}
                    </span>
                    <h4 className="text-xl font-bold text-text-primary">{exp.role}</h4>
                    <p className="text-text-secondary font-medium">{exp.organization}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="text-sm text-text-secondary flex gap-3">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
