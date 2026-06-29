import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { text: "If you're looking for someone who's effective and supportive, Satyam sir might be worth working with. His supportive style and helpful tips makes a real difference.", author: "Google Reviewer" },
  { text: "It's a good place to workout with nice staff and trainers. The vibe is amazing for serious lifters.", author: "Google Reviewer" },
  { text: "Amazing vibe and good equipment's to work with with a friendly staff. Highly recommend for CrossFit.", author: "Google Reviewer" }
];

export function AboutSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">OUR STORY</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase mb-6 leading-[0.9]">
            A DECADE OF BUILDING CHAMPIONS
          </h2>
          <p className="text-[#888888] text-lg mb-8 leading-relaxed">
            Since 2014, Powerzone Gym has been the training ground for Vasai East's most committed athletes and everyday warriors. We don't believe in shortcuts. We believe in showing up, putting in the work, and watching the results compound month after month, year after year. Our gym isn't for everyone. It's for people who are serious.
          </p>
          <div className="flex gap-8 border-t border-[#222] pt-8">
            <div>
              <div className="text-4xl font-heading font-black text-white">10+</div>
              <div className="text-xs text-[#888888] font-bold uppercase tracking-wider mt-1">Years Open</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-black text-white">452</div>
              <div className="text-xs text-[#888888] font-bold uppercase tracking-wider mt-1">Members</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-black text-white flex items-center gap-1">4.9 <Star size={20} className="text-[#E50914] fill-[#E50914] mb-1" /></div>
              <div className="text-xs text-[#888888] font-bold uppercase tracking-wider mt-1">Google Rating</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161616] border-l-4 border-[#E50914] rounded-lg p-8 relative h-72 overflow-hidden shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-[#E50914]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-white text-lg font-medium italic leading-snug">
                  "{reviews[currentReview].text}"
                </p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-[#888888] text-sm font-medium">{reviews[currentReview].author}</span>
                <span className="text-[#888888] text-sm font-bold bg-[#111111] px-2 py-1 rounded">Google</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
