import { motion } from 'framer-motion';

const results = [
  { name: "Rahul M.", result: "Lost 18kg in 5 months" },
  { name: "Priya S.", result: "Built lean muscle in 4 months" },
  { name: "Aarav K.", result: "CrossFit transformation in 6 months" },
];

export function TransformationsSection() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">REAL RESULTS</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase mb-4">TRANSFORMATIONS DON'T LIE</h2>
          <p className="text-[#888888] text-lg max-w-2xl">Real members. Real effort. Real results. See what 3-6 months at Powerzone looks like.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#161616] border-l-4 border-[#E50914] p-6 rounded-r-lg shadow-lg"
            >
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <div className="text-xs text-[#888888] mb-2 font-bold tracking-wider">BEFORE</div>
                  <img src="https://placehold.co/200x280/111111/444444?text=BEFORE" alt="Before" className="w-full object-cover aspect-[2/3] rounded border border-[#222]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#E50914] mb-2 font-bold tracking-wider">AFTER</div>
                  <img src="https://placehold.co/200x280/161616/E50914?text=AFTER" alt="After" className="w-full object-cover aspect-[2/3] rounded border border-[#E50914]/30" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{r.name}</h4>
              <p className="text-[#E50914] text-sm font-bold tracking-wide uppercase">{r.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
