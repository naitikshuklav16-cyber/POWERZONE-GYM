export function CtaBanner() {
  return (
    <section id="cta" className="relative py-24 bg-[#0B0B0B] border-y border-[#E50914]/20 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E50914]"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#E50914]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-black text-5xl md:text-7xl text-white uppercase mb-6">
          READY TO TRANSFORM YOUR BODY?
        </h2>
        <p className="text-[#888888] text-xl mb-12">
          Join Vasai East's most trusted training community. 10+ years. 452 transformations. Your turn.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/917020048231" className="bg-[#E50914] text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(229,9,20,0.3)]">
            JOIN NOW
          </a>
          <a href="tel:07020048231" className="border border-white text-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-colors">
            CALL 07020048231
          </a>
          <a href="https://wa.me/917020048231" className="border border-[#222] text-[#888888] px-8 py-4 font-bold tracking-wider hover:border-[#25D366] hover:text-[#25D366] transition-colors">
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}
