import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: "MONTHLY", label: "", cta: "Contact for Pricing", popular: false, value: false },
  { name: "QUARTERLY", label: "", cta: "Contact for Pricing", popular: false, value: false },
  { name: "HALF-YEARLY", label: "MOST POPULAR", cta: "Contact for Pricing", popular: true, value: false },
  { name: "YEARLY", label: "BEST VALUE", cta: "Contact for Pricing", popular: false, value: true },
];

const benefits = [
  "Full Gym Access",
  "Certified Trainer Support",
  "CrossFit Sessions",
  "Nutrition Guidance",
  "Sauna Access"
];

export function MembershipSection() {
  return (
    <section id="membership" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">INVESTMENT IN YOURSELF</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">CHOOSE YOUR COMMITMENT</h2>
        </div>
        
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-4 gap-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`min-w-[280px] snap-center relative bg-[#161616] border ${plan.popular ? 'border-[#E50914] transform md:scale-105 shadow-[0_0_30px_rgba(229,9,20,0.15)] z-10' : 'border-[#222]'} rounded-xl p-8 flex flex-col`}
            >
              {plan.label && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider ${plan.popular ? 'bg-[#E50914] text-white' : 'bg-[#222] text-[#888]'}`}>
                  {plan.label}
                </div>
              )}
              <h3 className="font-heading font-black text-3xl text-white tracking-wide text-center mb-2">{plan.name}</h3>
              <div className="text-center text-[#888888] text-sm mb-8 font-medium">{plan.cta}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className={plan.popular ? "text-[#E50914]" : "text-[#555]"} />
                    {b}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/917020048231"
                target="_blank" rel="noreferrer"
                className={`w-full text-center py-4 font-bold tracking-wider text-sm transition-colors ${plan.popular ? 'bg-[#E50914] text-white hover:bg-white hover:text-black' : 'border border-[#222] text-white hover:border-[#E50914] hover:text-[#E50914]'}`}
              >
                GET STARTED
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
