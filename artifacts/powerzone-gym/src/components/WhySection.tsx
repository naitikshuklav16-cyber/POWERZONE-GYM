import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const points = [
  "Imported Premium Equipment",
  "Certified and Experienced Trainers",
  "CrossFit, Strength, Cardio Zones",
  "Nutrition and Recovery Support",
  "Sauna Facility",
  "Spacious Clean Environment",
  "Open Until 11 PM",
  "10+ Years of Proven Results"
];

export function WhySection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-7xl md:text-[120px] text-white uppercase leading-[0.85] opacity-90"
          >
            10+ YEARS.<br/>ONE<br/>STANDARD.
          </motion.h2>
        </div>
        
        <div>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8 border-b border-[#222] pb-6">NOT JUST A GYM. A STANDARD.</h3>
          <ul className="space-y-5">
            {points.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 text-lg text-gray-300 font-medium"
              >
                <div className="bg-[#161616] p-1.5 rounded-full border border-[#222]">
                  <Check className="text-[#E50914]" size={18} strokeWidth={3} />
                </div>
                {pt}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
