import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

const testimonials = [
  { text: "Satyam sir is an amazing trainer. Very motivating and technical. My form has improved drastically in just 2 months.", author: "Raj K.", platform: "Google" },
  { text: "Amazing vibe and good equipment's to work with with a friendly staff.", author: "Neha S.", platform: "Google" },
  { text: "Best gym in Vasai. Clean, spacious, and the trainers actually care about your progress.", author: "Vikram P.", platform: "Google" },
  { text: "Joined 8 months ago for weight loss. Down 22kg and feeling incredible. This gym changed my life.", author: "Amit D.", platform: "Google" },
  { text: "The CrossFit program here is top-notch. Intense but safe. Highly recommend to anyone serious.", author: "Pooja M.", platform: "Google" },
];

export function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true });

  return (
    <section id="testimonials" className="py-24 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#E50914] font-bold tracking-widest text-sm mb-4">WHAT MEMBERS SAY</div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">452 PEOPLE CAN'T BE WRONG</h2>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t, i) => (
              <div key={i} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                <div className="bg-[#161616] p-8 rounded-xl h-full flex flex-col relative border border-[#222]">
                  <div className="absolute top-4 left-4 text-7xl font-serif text-[#E50914] opacity-10 leading-none">"</div>
                  <div className="flex gap-1 mb-6 text-[#E50914] relative z-10">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-white text-lg font-medium leading-relaxed flex-1 relative z-10 italic">
                    "{t.text}"
                  </p>
                  <div className="mt-8 flex items-center justify-between relative z-10">
                    <span className="text-[#888888] font-bold">{t.author}</span>
                    <span className="text-[#888888] text-xs font-bold uppercase bg-[#0B0B0B] px-2 py-1 rounded">{t.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#161616] px-8 py-4 rounded-full border border-[#222] text-white font-bold tracking-wider">
            <span className="text-[#E50914] text-xl flex items-center gap-2"><Star fill="currentColor" size={20} /> 4.9</span>
            <span className="hidden sm:block text-[#444]">|</span>
            <span>452 REVIEWS</span>
            <span className="hidden sm:block text-[#444]">|</span>
            <span className="text-[#888888]">VERIFIED ON GOOGLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
