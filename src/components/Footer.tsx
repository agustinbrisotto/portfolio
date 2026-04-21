export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-10">
      <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-[0.62rem] text-white/20 tracking-wider uppercase">
          &copy; {new Date().getFullYear()} AGUSTÍN BRISOTTO. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div className="flex items-center gap-2 text-[#4ade80]">
          <div className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse-dot" />
          <span className="font-mono text-[0.62rem] uppercase tracking-widest font-medium">
            Disponible para proyectos
          </span>
        </div>
      </div>
    </footer>
  );
}
