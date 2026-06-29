import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Hero background images (rotate every 3s) ─────────────────────────── */
const heroImages = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80',
  'https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=1920&q=80',
];

/* ─── Red particle canvas ──────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 40;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229,9,20,0.7)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(229,9,20,${0.45 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

/* ─── Hero Section ─────────────────────────────────────────────────────── */
export function HeroSection() {
  const [imgIndex, setImgIndex] = useState(0);
  const words = ['WHERE', 'POWER MEETS', 'PURPOSE'];

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex(i => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full bg-[#0B0B0B] overflow-hidden">

      {/* Layer 1 — rotating background photos (crossfade) */}
      <AnimatePresence>
        <motion.div
          key={imgIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          style={{
            backgroundImage: `url(${heroImages[imgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Layer 2 — dark overlay on photos */}
      <div className="absolute inset-0 z-[1] bg-[#0B0B0B]/72 pointer-events-none" />

      {/* Layer 3 — red particle canvas */}
      <div className="absolute inset-0 z-[2]">
        <ParticleCanvas />
      </div>

      {/* Layer 4 — bottom fade gradient */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent pointer-events-none" />

      {/* Layer 5 — image indicator dots */}
      <div className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 z-[5] flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            aria-label={`Hero image ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === imgIndex ? 'w-8 bg-[#E50914]' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Layer 6 — hero content */}
      <div className="absolute inset-0 z-[4] flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#E50914] text-[11px] font-bold tracking-[4px] mb-6 md:mb-8 uppercase"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          VASAI EAST'S NUMBER 1 GYM &nbsp;·&nbsp; EST. 2014 &nbsp;·&nbsp; 4.9 STARS 452 REVIEWS
        </motion.div>

        <h1
          className="font-black leading-[0.88] text-white uppercase mb-8"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(56px, 10vw, 120px)',
            letterSpacing: '-2px',
          }}
        >
          {words.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.div>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-[#888888] max-w-xl mx-auto text-base md:text-lg mb-10 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A decade of transformations. 452 members trust us. Evershine City's most elite training environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto"
        >
          <a
            href="https://wa.me/917020048231"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#E50914] text-white py-4 font-bold text-center tracking-[2px] text-sm hover:bg-[#c0070f] transition-colors shadow-[0_0_24px_rgba(229,9,20,0.35)]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '16px' }}
          >
            JOIN NOW
          </a>
          <a
            href="https://wa.me/917020048231"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white text-white py-4 font-bold text-center tracking-[2px] text-sm hover:bg-white hover:text-[#0B0B0B] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '16px' }}
          >
            BOOK FREE TRIAL
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-12 left-0 right-0 z-[4] flex flex-wrap justify-center items-center gap-0 text-[#888888] text-xs font-bold tracking-[2px] uppercase px-4">
        {['10+ YEARS', '452 MEMBERS', '4.9 STAR RATING', '6 PROGRAMS', 'OPEN TILL 11PM'].map((stat, i, arr) => (
          <motion.span
            key={stat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 + i * 0.1 }}
            className="flex items-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="px-3 py-1">{stat}</span>
            {i < arr.length - 1 && <span className="w-px h-4 bg-[#E50914] mx-0 hidden sm:block" />}
          </motion.span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-14 bg-[#222] z-[4] overflow-hidden">
        <motion.div
          className="w-full h-6 bg-white origin-top"
          animate={{ y: [-24, 56], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
