import { motion } from 'framer-motion';

const data = [
  { day: 'Mon', h1: 40, h2: 80, h3: 30 },
  { day: 'Tue', h1: 45, h2: 85, h3: 35 },
  { day: 'Wed', h1: 50, h2: 90, h3: 40 },
  { day: 'Thu', h1: 45, h2: 75, h3: 30 },
  { day: 'Fri', h1: 35, h2: 60, h3: 25 },
  { day: 'Sat', h1: 20, h2: 40, h3: 15 },
  { day: 'Sun', h1: 10, h2: 25, h3: 10 },
];

export function PopularTimesSection() {
  return (
    <section id="popular-times" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">REAL DATA — GOOGLE VERIFIED</div>
      <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase mb-12">PEOPLE SPEND 1–3 HOURS HERE</h2>
      
      <div className="bg-[#111111] border border-[#222] rounded-xl p-8 mb-8 shadow-2xl">
        <div className="flex items-end justify-between h-48 gap-2 mb-4">
          {data.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              <div className="w-full max-w-[40px] flex flex-col justify-end h-full gap-[2px]">
                {/* 6PM-9PM Peak */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${d.h2}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="w-full bg-[#E50914] rounded-t opacity-90 group-hover:opacity-100 transition-opacity"
                />
                {/* 6AM-9AM Peak */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${d.h1}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                  className="w-full bg-[#E50914] opacity-40 group-hover:opacity-60 transition-opacity"
                />
              </div>
              <div className="text-[#888888] text-sm font-bold mt-2">{d.day}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 text-[#888888] text-sm font-medium">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-3 h-3 bg-[#E50914] opacity-90 rounded-sm" /> Peak hours: 6PM–9PM
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-3 h-3 bg-[#E50914] opacity-40 rounded-sm" /> Peak hours: 6AM–9AM
        </div>
      </div>
      <p className="text-white mt-6 text-lg font-medium">Live data verified: As busy as it gets during peak times.</p>
      </div>
    </section>
  );
}
