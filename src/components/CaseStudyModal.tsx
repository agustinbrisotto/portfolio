import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, MousePointer2 } from 'lucide-react';
import { useEffect } from 'react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

export default function CaseStudyModal({ isOpen, onClose, projectId }: CaseStudyModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/90 backdrop-blur-md cursor-none"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[900px] h-[90vh] bg-bg border-x border-white/5 overflow-hidden flex flex-col cursor-auto shadow-2xl"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 sticky top-0 bg-bg z-20">
              <span className="font-mono text-[0.62rem] text-accent-light uppercase tracking-[0.2em]">
                ✦ Case Study — {projectId === 'panaderia-santafe' ? 'Panadería Santa Fe' : 'Proyecto Seleccionado'}
              </span>
              <button
                onClick={onClose}
                className="hover-target flex items-center gap-2 font-mono text-[0.62rem] text-text-secondary uppercase tracking-widest border border-white/10 px-4 py-2 rounded-md hover:text-text hover:border-white/20 transition-all"
              >
                <X size={12} /> Cerrar
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto p-10 md:p-16 space-y-20 custom-scrollbar">
              {projectId === 'panaderia-santafe' ? (
                <>
                  <section>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 font-mono text-[0.65rem] text-accent-light uppercase tracking-widest mb-6">
                      Deep Dive · UX/UI & Firebase
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
                      De un Instagram saturado a una <span className="text-accent-light italic">PWA con pedidos en tiempo real</span>.
                    </h2>
                    <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
                      Una panadería de barrio con años de historia necesitaba pasar de perder pedidos entre DMs a un sistema propio: sitio web, catálogo dinámico y una identidad digital que acompañe el crecimiento sin perder cercanía.
                    </p>
                  </section>

                  {/* Problem Grid */}
                  <section>
                    <p className="font-mono text-[0.65rem] text-text-secondary uppercase tracking-[0.25em] mb-10 border-l-2 border-accent pl-4">01 — El Problema</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { title: 'Sin catálogo online', desc: 'Precios se consultaban uno por uno vía DMs.' },
                        { title: 'Pedidos perdidos', desc: 'Mensajes mezclados en IG y WhatsApp sin seguimiento.' },
                        { title: 'Invisibilidad', desc: 'Las viandas del día no tenían un lugar destacado.' },
                        { title: 'Dependencia total', desc: 'Cualquier cambio mínimo requería ayuda externa.' }
                      ].map((item, i) => (
                        <div key={i} className="p-6 rounded-xl border border-white/5 bg-surface/50">
                          <span className="font-mono text-xs text-red-400/60 block mb-3">!</span>
                          <h4 className="font-medium text-text mb-2">{item.title}</h4>
                          <p className="text-sm text-text-secondary leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Decision Grid */}
                  <section>
                    <p className="font-mono text-[0.65rem] text-text-secondary uppercase tracking-[0.25em] mb-10 border-l-2 border-accent pl-4">02 — Decisiones de Diseño</p>
                    <div className="grid sm:grid-cols-2 gap-8">
                      {[
                        { num: '01', title: 'PWA Single-File', desc: 'Cero complejidad de despliegue y velocidad de carga instantánea.' },
                        { num: '02', title: 'Admin Personalizado', desc: 'Pensado para el dueño, no para devs. Actualizaciones desde el móvil.' },
                        { num: '03', title: 'Firebase backend', desc: 'Sincronización en tiempo real (onSnapshot) para pedidos inmediatos.' },
                        { num: '04', title: 'Mobile-first UX', desc: '80% del tráfico es móvil. Todo optimizado para navegación con pulgar.' }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-4">
                          <span className="font-mono text-[0.65rem] text-accent/60">{item.num}</span>
                          <h4 className="font-medium text-lg">{item.title}</h4>
                          <p className="text-sm text-text-secondary leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section className="pt-10 border-t border-white/5">
                    <div className="flex flex-wrap gap-3">
                      {['HTML/JS Vanilla', 'Firebase Auth', 'Firestore', 'IntersectionObserver', 'PWA'].map(tech => (
                        <span key={tech} className="px-4 py-2 rounded-lg bg-surface border border-white/5 text-[0.65rem] font-mono text-text-secondary uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <span className="text-accent-light/40 mb-6"><MousePointer2 size={40} /></span>
                  <h2 className="text-3xl font-medium mb-4">Caso de estudio en desarrollo</h2>
                  <p className="text-text-secondary max-w-sm font-light">Estamos preparando el análisis detallado de este proyecto. Vuelve pronto para ver el proceso completo.</p>
                </div>
              )}
            </div>

            {/* Bottom bar / CTA */}
            <div className="p-8 border-t border-white/5 bg-surface/30">
              <button 
                onClick={onClose}
                className="hover-target w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-accent text-white font-mono text-xs uppercase tracking-[0.2em] transition-all hover:bg-accent-light"
              >
                Volver al portafolio <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
