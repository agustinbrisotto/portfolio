import { motion } from 'motion/react';
import { Palette, Globe, Instagram, Package, CheckCircle2 } from 'lucide-react';
import Contact from '@/src/components/sections/Contact';

const processSteps = [
  { id: '01', title: 'Brief', desc: 'Análisis profundo de la marca, el mercado y los objetivos. Definimos exactamente qué problema vamos a resolver.' },
  { id: '02', title: 'Exploración', desc: 'Búsqueda de caminos visuales y conceptuales. Presentación de propuestas estratégicas antes de pulir detalles.' },
  { id: '03', title: 'Iteración', desc: 'Ajustes basados en feedback. Refinamos el diseño hasta que cumpla tanto visual como funcionalmente con lo acordado.' },
  { id: '04', title: 'Entrega', desc: 'Armado de archivos finales, manuales de uso o despliegue en producción para garantizar una implementación impecable.' },
];

const services = [
  { 
    title: 'Identidad de Marca', 
    desc: 'Sistemas visuales con criterio: logo, paleta, tipografía y las reglas para aplicarlos. Pensado para que la marca se sostenga en el tiempo.',
    tags: ['Logo', 'Brandbook'],
    icon: Palette
  },
  { 
    title: 'Web & UX/UI', 
    desc: 'Sitios y productos digitales que funcionan. Diseño de interfaces, desarrollo front-end y soluciones enfocadas en conversión.',
    tags: ['UI/UX', 'Desarrollo'],
    icon: Globe
  },
  { 
    title: 'Contenido y Redes', 
    desc: 'Estrategia de contenido, planificación semanal y dirección creativa. Comunicación con tono y consistencia para cada marca.',
    tags: ['Social Media', 'Estrategia'],
    icon: Instagram
  },
  { 
    title: 'Packaging', 
    desc: 'Diseño de envases y etiquetas que funcionan en góndola y comunican la marca. Desde el concepto hasta los archivos listos para imprenta.',
    tags: ['Etiquetas', 'Envases'],
    icon: Package
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <header className="max-w-[1440px] mx-auto px-10 py-24 text-center">
        <span className="font-mono text-[0.75rem] text-accent-light uppercase tracking-[0.15em] mb-4 inline-block">
          Proceso y Valor
        </span>
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-tight mb-8">
          Servicios &<br/>Metodología
        </h1>
        <p className="text-[1.15rem] leading-relaxed text-text-secondary max-w-[600px] mx-auto font-light">
          Ofrezco soluciones integrales para marcas que buscan destacar. Desde la concepción de la identidad visual hasta la ejecución técnica de su plataforma digital.
        </p>
      </header>

      {/* Methodology Section */}
      <section className="max-w-[1440px] mx-auto px-10 mb-32">
        <div className="mb-12 relative flex items-center gap-6">
          <span className="font-mono text-[4rem] font-medium text-white opacity-[0.035] leading-none pointer-events-none select-none">01</span>
          <h2 className="text-2xl font-medium">Así trabajo</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-[#121722]/92 to-[#0d111a]/98 hover:border-accent-light/20 transition-all hover:-translate-y-1.5"
            >
              <span className="font-mono text-3xl text-white/10 block mb-4">{step.id}</span>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-[0.95rem] font-light text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1440px] mx-auto px-10 mb-32">
        <div className="mb-12 relative flex items-center gap-6">
          <span className="font-mono text-[4rem] font-medium text-white opacity-[0.035] leading-none pointer-events-none select-none">02</span>
          <h2 className="text-2xl font-medium">Servicios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/5 rounded-2xl bg-surface flex flex-col gap-4 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 text-accent-light group-hover:scale-110 transition-transform">
                <service.icon size={48} strokeWidth={1.3} />
              </div>
              <h3 className="text-2xl font-medium">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed font-light">{service.desc}</p>
              <div className="flex gap-2 flex-wrap mt-auto pt-5">
                {service.tags.map(tag => (
                  <span key={tag} className="font-mono text-[0.7rem] px-2.5 py-1 rounded bg-white/5 border border-white/5 text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
