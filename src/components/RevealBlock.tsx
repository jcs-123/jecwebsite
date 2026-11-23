import React, { useState, useEffect, useRef } from 'react';

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function useScrollReveal(threshold = 0.08, once = true) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    let rafId = 0;
    const triggerReveal = () => {
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          setIsInView(true);
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerReveal();
          if (once) observer.disconnect();
        } else if (!once) {
          cancelAnimationFrame(rafId);
          setIsInView(false);
        }
      },
      { threshold, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [threshold, once]);

  return [elementRef, isInView] as const;
}

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  once?: boolean;
}

export const RevealBlock: React.FC<RevealBlockProps> = ({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  once = true,
}) => {
  const [ref, inView] = useScrollReveal(0.08, once);
  const reducedMotion = usePrefersReducedMotion();

  const hiddenTransform =
    direction === 'left'
      ? '-translate-x-12 sm:-translate-x-16'
      : direction === 'right'
        ? 'translate-x-12 sm:translate-x-16'
        : 'translate-y-8';

  return (
    <div
      ref={ref}
      style={
        reducedMotion
          ? undefined
          : { transitionDelay: inView ? `${delay}ms` : '0ms' }
      }
      className={`${
        reducedMotion
          ? ''
          : `transition-[opacity,transform] duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
              inView
                ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                : `opacity-0 ${hiddenTransform} scale-[0.98]`
            }`
      } ${className}`}
    >
      {children}
    </div>
  );
};

