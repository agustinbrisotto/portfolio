import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Plus, X, ArrowRight } from 'lucide-react';
import CaseStudyModal from '@/src/components/CaseStudyModal';

const projects = [
  {
    id: 'la-pasionaria',
    title: 'La Pasionaria Argentina',
    category: 'Identidad Visual Integral',
    year: '2023 – Presente',
    desc: 'Gestión 360º de marca: desde el diseño de packaging y sistemas de papelería hasta la estrategia de contenido digital.',
    impact: [
      'Sistema visual aplicado en 60+ productos',
      'Reducción de 40% en tiempo de producción',
      'Identidad coherente en todos los canales'
    ],
    image: 'https://picsum.photos/seed/pasionaria/800/600',
  },
  {
    id: 'panaderia-santafe',
    title: 'Panadería Santa Fe',
    category: 'Desarrollo Web & UX/UI',
    year: '2022 – Presente',
    desc: 'Desarrollo de PWA con catálogo dinámico y sistema de pedidos en tiempo real, combinado con gestión de redes sociales.',
    impact: [
      'Sistema de pedidos en tiempo real vía Firebase',
      'Catálogo dinámico administrable 100%',
      'Identidad barrial digitalizada con éxito'
    ],
    image: 'https://picsum.photos/seed/bakery/800/600',
  },
  {
    id: '1001milanesas',
    title: '1001MILANESAS',
    category: 'Estrategia & Contenido',
    year: '2025 – Presente',
    desc: 'Reposicionamiento de marca gastronómica y desarrollo de estrategia de contenido semanal para Instagram.',
    impact: [
      '+150% de engagement en redes sociales',
      'Rediseño de fachada e interior integral',
      'Reposicionamiento a especialidad gastronómica'
    ],
    image: 'https://picsum.photos/seed/milanesas/800/600',
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      <CaseStudyModal 
        isOpen={!!activeCaseStudy} 
        onClose={() => setActiveCaseStudy(null)} 
        projectId={activeCaseStudy} 
      />
      <div className="max-w-[1100px] mx-auto px-10 relative z-10">
        <div className="mb-20">
          <span className="inline-block font-mono text-[0.75rem] text-accent-light uppercase tracking-[0.22em] mb-3.5 pl-3 border-l-2 border-accent">
            Clientes Activos
          </span>
          <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-medium tracking-tight">Proyectos</h2>
        </div>

        <div className="border-t border-white/10">
          {projects.map((project, index) => {
            const isOpen = openId === project.id;
            return (
              <div 
                key={project.id} 
                className={cn(
                  "border-b border-white/10 transition-colors duration-500",
                  isOpen && "border-accent/40"
                )}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  className="w-full py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left group hover-target"
                  data-cursor={isOpen ? 'CLOSE' : 'OPEN'}
                >
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-[0.62rem] text-text-secondary opacity-50">0{index + 1}</span>
                    <div>
                      <h3 className={cn(
                        "text-[clamp(1.4rem,3vw,2.2rem)] font-medium transition-colors duration-300",
                        isOpen ? "text-accent-light" : "group-hover:text-accent-light"
                      )}>
                        {project.title}
                      </h3>
                      <span className="font-mono text-[0.62rem] text-accent/80 uppercase tracking-widest">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 ml-10 md:ml-0">
                    <span className="hidden sm:block font-mono text-[0.62rem] text-text-secondary uppercase tracking-wider">{project.year}</span>
                    <div className={cn(
                      "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500",
                      isOpen ? "rotate-45 border-accent bg-accent/10" : "group-hover:border-accent group-hover:bg-accent/5"
                    )}>
                      <Plus size={18} className={cn(isOpen ? "text-accent-light" : "text-text-secondary")} />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-16 pl-12 md:pl-[66px] grid lg:grid-cols-[1fr_1.2fr] gap-12">
                        <div className="flex flex-col gap-8">
                          <p className="text-[1.05rem] text-text-secondary leading-relaxed font-light font-sans max-w-[500px]">
                            {project.desc}
                          </p>
                          
                          <div className="p-8 border border-white/[0.03] rounded-2xl bg-white/[0.01]">
                            <span className="block font-mono text-[0.6rem] text-accent-light uppercase tracking-[0.2em] mb-5">Impacto & Resultados</span>
                            <ul className="space-y-4">
                              {project.impact.map((item, i) => (
                                <li key={i} className="flex gap-4 text-[0.92rem] text-text-secondary font-light">
                                  <span className="text-accent-light font-mono text-[0.8rem]">→</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button 
                            onClick={() => setActiveCaseStudy(project.id)}
                            className="hover-target w-fit flex items-center gap-3 px-6 py-3 border border-accent/30 rounded-lg font-mono text-[0.68rem] uppercase tracking-widest text-accent-light hover:bg-accent hover:text-white transition-all group/btn"
                          >
                            Ver Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>

                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-surface group/img shadow-2xl">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
