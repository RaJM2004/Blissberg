
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText = ({ text, className, once = false }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animateLetters = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const letters = container.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('animate-in');
          }, 30 * index);
        });

        // If animating only once, disconnect the observer
        if (once && observerRef.current) {
          observerRef.current.disconnect();
        }
      } else if (!once) {
        // Reset animation if not 'once'
        const letters = container.querySelectorAll('.letter');
        letters.forEach(letter => {
          letter.classList.remove('animate-in');
        });
      }
    };

    // Create an observer
    observerRef.current = new IntersectionObserver(animateLetters, {
      threshold: 0.5,
    });

    // Observe the container
    observerRef.current.observe(container);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [text, once]);

  return (
    <div ref={containerRef} className={cn("inline-block", className)}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={cn(
            "letter inline-block opacity-0 translate-y-4 transition-all duration-300 ease-out",
            char === ' ' ? 'w-2' : ''
          )}
          style={{ transitionDelay: `${index * 30}ms` }}
        >
          {char}
        </span>
      ))}

      <style>
        {`.letter.animate-in {
          opacity: 1;
          transform: translateY(0);
        }`}
      </style>
    </div>
  );
};

export default AnimatedText;
