import { cn } from '@/src/lib/utils';

export default function Marquee({ text, className }: { text: string, className?: string }) {
  return (
    <div className={cn("relative flex overflow-x-hidden border-y border-white/5 bg-surface/30 backdrop-blur-sm py-4", className)}>
      <div className="marquee-track">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-accent-light/60">
            {text} •
          </span>
        ))}
      </div>
      <div className="marquee-track">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-accent-light/60">
            {text} •
          </span>
        ))}
      </div>
    </div>
  );
}
