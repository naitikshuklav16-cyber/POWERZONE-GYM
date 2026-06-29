import { motion } from 'framer-motion';
import { Dumbbell, Zap, User, Leaf, Star, Flame } from 'lucide-react';

const services = [
  { icon: Dumbbell, title: 'WEIGHT TRAINING', desc: 'Progressive overload programs designed around your goals. Barbells, dumbbells, machines, all premium imported equipment.' },
  { icon: Zap, title: 'CROSSFIT', desc: 'High-intensity functional training. Build endurance, strength, and mental toughness simultaneously.' },
  { icon: User, title: 'PERSONAL TRAINING', desc: 'One-on-one sessions with certified trainers. Customized programming, form correction, maximum accountability.' },
  { icon: Leaf, title: 'NUTRITION CONSULTING', desc: 'Your diet is 70% of your result. Our consultants build meal plans aligned with your training goals.' },
  { icon: Star, title: 'PRIVATE LESSONS', desc: 'Exclusive focused sessions for skill development. Perfect for beginners or athletes targeting specific lifts.' },
  { icon: Flame, title: 'SAUNAS', desc: 'Post-workout recovery done right. Reduce soreness, improve circulation, and accelerate muscle repair.' },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">WHAT WE OFFER</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">BUILT FOR EVERY GOAL</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#161616] border border-[#222] rounded-lg p-8 group hover:border-[#E50914] hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(229,9,20,0.12)]"
            >
              <svc.icon className="text-[#E50914] w-10 h-10 mb-6 transition-transform group-hover:scale-110 duration-300" />
              <h3 className="text-2xl font-heading font-black text-white mb-3 tracking-wide">{svc.title}</h3>
              <p className="text-[#888888]">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
