import { useEffect, useState, useRef } from 'react';

export default function StatCounter({ target, suffix = '', duration = 2000 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animate();
      }
    }, { threshold: 0.5 });

    if (countRef.current) observer.observe(countRef.current);

    const animate = () => {
      let start = 0;
      const end = target;
      if (start === end) return;

      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / 16));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
    };

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
}
