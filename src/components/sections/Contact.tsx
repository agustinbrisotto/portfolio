import { Mail, MessageCircle, Linkedin, ArrowUpRight } from 'lucide-react';

const links = [
  { 
    label: 'Email', 
    value: 'agustinbrisotto@gmail.com', 
    href: 'mailto:agustinbrisotto@gmail.com',
    icon: Mail 
  },
  { 
    label: 'WhatsApp', 
    value: '+54 9 341 580-0255', 
    href: 'https://wa.me/5493415800255',
    icon: MessageCircle 
  },
  { 
    label: 'LinkedIn', 
    value: 'linkedin.com/in/agustinbrisotto', 
    href: 'https://linkedin.com/in/agustinbrisotto',
    icon: Linkedin 
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-bg to-surface border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-[-60px] right-[-20px] font-mono text-[clamp(6rem,16vw,18rem)] font-bold text-white/[0.018] tracking-tighter leading-none pointer-events-none select-none">
        HABLEMOS
      </div>

      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-15 items-start">
          <div>
            <span className="inline-block font-mono text-[0.75rem] text-accent-light uppercase tracking-[0.22em] mb-3.5 pl-3 border-l-2 border-accent">
              Trabajemos Juntos
            </span>
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-tight mb-7">
              ¿Tenés un<br/>proyecto<br/>
              <span className="bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent">en mente?</span>
            </h2>
            <p className="text-[0.95rem] font-light text-text-secondary leading-relaxed max-w-[360px] mb-8">
              Estoy disponible para colaboraciones, proyectos freelance y nuevas oportunidades. Hablemos sobre cómo puedo potenciar tu marca.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-green-400/20 rounded-full bg-green-400/[0.05]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="font-mono text-[0.62rem] text-green-400 uppercase tracking-widest">
                Disponible para proyectos
              </span>
            </div>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center justify-between py-6 transition-all hover:pl-2 border-b border-white/10 overflow-hidden"
              >
                <div className="absolute inset-x-0 h-full w-full bg-gradient-to-r from-accent/[0.06] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                
                <div className="relative z-10 flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent-light group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
                    <link.icon size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-mono text-[0.62rem] text-accent-light uppercase tracking-[0.2em]">{link.label}</span>
                    <span className="text-[0.95rem] text-text break-words line-clamp-1">{link.value}</span>
                  </div>
                </div>

                <div className="relative z-10 text-text-secondary group-hover:text-accent-light group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
