import { motion } from 'motion/react';
import StatCounter from '@/src/components/StatCounter';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[calc(var(--nav-height)+56px)] pb-[72px] overflow-hidden isolate">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-35" 
           style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: 'min(24vw, 320px) 100%, 100% 180px' }} />
      
      <div className="max-w-[1100px] mx-auto px-10 relative z-10">
        <motion.div
          initial={{ x: 24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-col"
        >
          <span className="inline-flex items-center w-fit font-mono text-[0.68rem] text-accent-light uppercase tracking-[0.22em] mb-6 px-3.5 py-2.5 border border-accent-light/20 rounded-full bg-gradient-to-b from-[#10151f]/90 to-[#0a0d14]/70 shadow-2xl">
            ✦ Director Creativo & UX/UI · Rosario, AR
          </span>
          
          <h1 className="font-sans text-[clamp(3.6rem,7vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.045em] mb-6 text-balance max-w-[8.2ch]">
            Diseño estratégico para marcas que buscan <span className="text-accent-light text-glow">escalar</span>.
          </h1>
          
          <p className="text-[1.08rem] text-text-secondary mb-10 max-w-[38rem] leading-relaxed font-light">
            Diseño identidades visuales y experiencias digitales claras para marcas gastronómicas y de estilo de vida.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="min-w-[160px] px-5 py-4 border border-white/5 rounded-2xl bg-gradient-to-b from-[#131720]/88 to-[#0a0d14]/70 shadow-xl backdrop-blur-md">
              <span className="block font-mono text-[clamp(1.6rem,2.8vw,2.2rem)] font-medium leading-none tracking-tighter mb-1.5">
                <StatCounter target={15} suffix="+" />
              </span>
              <span className="block font-mono text-[0.6rem] text-text-secondary uppercase tracking-[0.15em]">Marcas<br/>acompañadas</span>
            </div>
            <div className="min-w-[160px] px-5 py-4 border border-white/5 rounded-2xl bg-gradient-to-b from-[#131720]/88 to-[#0a0d14]/70 shadow-xl backdrop-blur-md">
              <span className="block font-mono text-[clamp(1.6rem,2.8vw,2.2rem)] font-medium leading-none tracking-tighter mb-1.5">
                <StatCounter target={3} />
              </span>
              <span className="block font-mono text-[0.6rem] text-text-secondary uppercase tracking-[0.15em]">Áreas que<br/>integro</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#proyectos" className="hover-target inline-flex items-center justify-center min-h-[50px] px-7 bg-gradient-to-br from-accent-light to-accent border-none rounded-full font-mono text-[0.72rem] tracking-[0.14em] uppercase text-[#f7fbff] shadow-xl transition-all hover:bg-gradient-to-br hover:from-[#82b3e2] hover:to-[#5c89c3] hover:-translate-y-0.5">
              Ver trabajos ↓
            </a>
            <a href="#contacto" className="hover-target inline-flex items-center justify-center min-h-[50px] px-7 bg-white/5 border border-white/10 rounded-full font-mono text-[0.72rem] tracking-[0.14em] uppercase transition-all hover:bg-accent/10 hover:border-accent-light hover:text-text hover:-translate-y-0.5">
              Agendar Llamada →
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        href="#proyectos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 opacity-0 md:flex hidden"
      >
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-secondary">Seguir</span>
        <div className="w-4 h-6 border-white/20 border-px rounded-full flex justify-center pt-1.5">
          <div className="w-[1.5px] h-1 bg-white/50 rounded-full animate-[scrollDot_2s_infinite]" />
        </div>
      </motion.a>
    </section>
  );
}
