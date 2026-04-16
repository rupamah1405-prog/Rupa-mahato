import { motion } from "motion/react";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="section-label">Contact</span>
              <h3 className="text-5xl font-bold text-text-primary mb-8 leading-tight">
                Let's work <br /> together.
              </h3>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-md">
                Have a project in mind or just want to say hi? I'm always open to discussing new 
                opportunities and creative collaborations.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-8">
                <a href="#" className="text-sm font-bold uppercase tracking-widest text-text-primary hover:text-accent transition-colors">LinkedIn</a>
                <a href="#" className="text-sm font-bold uppercase tracking-widest text-text-primary hover:text-accent transition-colors">Instagram</a>
              </div>
              <div className="space-y-2">
                <p className="text-text-primary font-bold">rupamah1405@gmail.com</p>
                <p className="text-text-primary font-bold">+91-6379717817</p>
                <p className="text-text-secondary text-sm">Jamshedpur, Jharkhand</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="geometric-card bg-white"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <span className="section-label mb-2">Name</span>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-0 py-4 bg-transparent border-b border-black/10 focus:border-accent outline-none transition-all text-text-primary font-medium"
                />
              </div>
              <div className="space-y-2">
                <span className="section-label mb-2">Email</span>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-0 py-4 bg-transparent border-b border-black/10 focus:border-accent outline-none transition-all text-text-primary font-medium"
                />
              </div>
              <div className="space-y-2">
                <span className="section-label mb-2">Message</span>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-0 py-4 bg-transparent border-b border-black/10 focus:border-accent outline-none transition-all resize-none text-text-primary font-medium"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-accent text-text-primary rounded-full font-bold text-sm tracking-wide shadow-sm hover:brightness-95 transition-all w-fit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
