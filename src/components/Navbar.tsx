import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const links = [
    { label: 'Trabajos', href: '/#proyectos' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Sobre mí', href: '/#about' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] h-20 glass flex items-center border-b">
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent-light origin-[0%]"
        style={{ scaleX }}
      />
      
      <div className="max-w-[1400px] w-full mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="font-mono text-[1.1rem] font-medium tracking-[0.1em] uppercase hover:text-accent-light transition-colors">
          Agustín Brisotto
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[30px]">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "relative font-mono text-[0.75rem] uppercase tracking-[0.15em] text-text-secondary pb-1 transition-colors hover:text-text group",
                location.pathname === link.href && "text-text"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-0 left-0 h-[1px] bg-accent-light transition-[width] duration-300",
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <Link
            to="/#contacto"
            className="px-6 py-2.5 bg-accent hover:bg-accent-light rounded-sm text-[0.75rem] font-medium font-mono uppercase tracking-[0.1em] transition-all hover:-translate-y-0.5"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden p-2 text-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: '100%', opacity: 0 }
        }}
        className="fixed inset-0 top-20 bg-bg/95 backdrop-blur-xl md:hidden z-[999] p-8 flex flex-col gap-6"
      >
        {links.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ x: 20, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={link.href}
              className="text-2xl font-light tracking-tight hover:text-accent-light transition-colors flex items-baseline gap-4"
            >
              <span className="font-mono text-[0.6rem] text-text-secondary">0{i+1}</span>
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={isOpen ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/#contacto"
            className="w-full flex justify-between items-center p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent-light"
          >
            <span>Contacto</span>
            <span className="font-mono text-[0.6rem]">04</span>
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
