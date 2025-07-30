
'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollAnimatedElementProps {
  children: React.ReactNode;
  animation?: 'bounce' | 'wave' | 'wiggle' | 'fade';
  delay?: number;
}

export function ScrollAnimatedElement({ children, animation = 'fade', delay = 0 }: ScrollAnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    bounce: `transition-all duration-700 ${isVisible ? 'animate-bounce' : 'opacity-0 translate-y-10'}`,
    wave: `transition-all duration-500 ${isVisible ? 'animate-pulse' : 'opacity-0 scale-95'}`,
    wiggle: `transition-all duration-600 ${isVisible ? 'animate-pulse' : 'opacity-0 rotate-3'}`,
    fade: `transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
  };

  return (
    <div ref={elementRef} className={animationClasses[animation]}>
      {children}
    </div>
  );
}

export function WigglyLine() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 0.1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center my-8">
      <svg width="200" height="8" className="mx-auto">
        <defs>
          <linearGradient id="wiggleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#8B5CF6", stopOpacity:1}} />
            <stop offset="25%" style={{stopColor:"#EC4899", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#3B82F6", stopOpacity:1}} />
            <stop offset="75%" style={{stopColor:"#10B981", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#F59E0B", stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path
          d={`M 0 4 Q 50 ${4 + Math.sin(offset) * 3} 100 4 T 200 4`}
          stroke="url(#wiggleGradient)"
          strokeWidth="4"
          fill="none"
          className="drop-shadow-sm"
        />
      </svg>
    </div>
  );
}