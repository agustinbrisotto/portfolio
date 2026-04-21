import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Download } from 'lucide-react';

const tabs = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'herramientas', label: 'Herramientas' },
];

const tools = [
  { group: 'Diseño gráfico', items: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'] },
  { group: 'Motion & Video', items: ['After Effects', 'Premiere', 'CapCut'] },
  { group: 'Producto & Desarrollo', items: ['UX/UI', 'Firebase', 'VS Code'] },
  { group: 'IA Creativa', items: ['Claude', 'ChatGPT', 'Midjourney'] },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('perfil');

  return (
    <section id="about" className="py-24 bg-surface border-y border-white/5 relative isolate">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-10 grid md:grid-cols-[1fr_1.8fr] gap-15 items-start">
        <div className="relative">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[clamp(5rem,12vw,9rem)] font-medium text-white opacity-[0.035] tracking-tighter leading-none pointer-events-none select-none">
            02
          </span>
          <span className="inline-block font-mono text-[0.75rem] text-accent-light uppercase tracking-[0.22em] mb-3.5 pl-3 border-l-2 border-accent">
            Perfil Profesional
          </span>
          <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-medium tracking-tight leading-[1.15] mb-8">
            Estrategia,<br/>Creatividad &<br/>UX
          </h2>
          
          <div className="flex border-b border-white/10 mb-8 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-5 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.15em] transition-colors",
                  activeTab === tab.id ? "text-text" : "text-text-secondary hover:text-text"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="about-active-tab"
                    className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'perfil' ? (
              <motion.div
                key="perfil"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-5.5"
              >
                <div className="text-[1.05rem] font-light text-text-secondary leading-relaxed max-w-[700px] space-y-4">
                  <p>
                    Soy diseñador gráfico especializado en <strong className="text-text font-medium">identidad de marca y comunicación digital</strong>. Trabajo con marcas gastronómicas y de estilo de vida creando sistemas visuales que funcionan en redes sociales, packaging y cada punto de contacto.
                  </p>
                  <p>
                    Combino diseño gráfico con <strong className="text-text font-medium">estrategia de contenido y desarrollo web</strong>, lo que me permite acompañar a cada cliente de forma integral: desde la identidad hasta la presencia online.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {['Identidad de Marca', 'Dirección de Arte', 'UX / UI', 'Desarrollo Web'].map(tag => (
                    <span key={tag} className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-text-secondary border border-white/10 px-3.5 py-2 rounded-sm bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/cv.pdf"
                  className="group relative w-fit mt-8 flex items-center gap-3.5 px-5.5 py-3.5 border border-white/10 rounded-md font-mono text-[0.72rem] uppercase tracking-[0.15em] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10 text-accent-light group-hover:text-text transition-colors">
                    <Download size={14} />
                  </span>
                  <span className="relative z-10 group-hover:text-text transition-colors">Descargar CV</span>
                  <span className="relative z-10 pl-3.5 border-l border-white/20 text-[0.62rem] text-text-secondary group-hover:text-text/70 transition-colors">PDF · 2026</span>
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="herramientas"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {tools.map((group) => (
                    <div key={group.group}>
                      <span className="block font-mono text-[0.62rem] text-accent-light uppercase tracking-[0.25em] mb-5 pl-2.5 border-l-px border-accent/60">
                        {group.group}
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {group.items.map(item => (
                          <div key={item} className="flex items-center gap-3 p-3.5 border border-white/5 rounded-xl bg-bg/50 hover:border-accent/30 hover:bg-accent/5 transition-all group/item shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/item:bg-accent-light transition-colors" />
                            <span className="font-mono text-[0.65rem] text-text-secondary group-hover/item:text-text transition-colors uppercase tracking-wide">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
