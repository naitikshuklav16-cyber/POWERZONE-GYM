import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Membership', id: 'membership' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
      let current = 'home';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0B0B0B] border-b border-[#222]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            className="font-heading font-black text-white text-2xl tracking-wide"
            onClick={() => scrollTo('home')}
            aria-label="POWERZONE GYM — scroll to top"
          >
            POWERZONE GYM
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#E50914] ${activeId === link.id ? 'text-[#E50914]' : 'text-white'}`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://wa.me/917020048231"
              target="_blank" rel="noreferrer"
              className="border border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white transition-colors px-6 py-2 font-bold text-sm tracking-wider"
            >
              JOIN NOW
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col p-6"
          >
            <div className="flex justify-end h-14 items-center">
              <button className="text-white" onClick={() => setMobileOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.id)}
                  className={`font-heading text-5xl font-black ${activeId === link.id ? 'text-[#E50914]' : 'text-white'}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.1 }}
                href="https://wa.me/917020048231"
                className="mt-8 border border-[#E50914] bg-[#E50914] text-white px-10 py-4 font-bold text-xl tracking-wider w-full max-w-sm text-center"
              >
                JOIN NOW
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
