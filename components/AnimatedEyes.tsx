
'use client';

import { useEffect, useState, useRef } from 'react';

export default function AnimatedEyes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyesRef.current) {
        const rect = eyesRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePos({
          x: (e.clientX - centerX) / 20,
          y: (e.clientY - centerY) / 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Blinking animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div ref={eyesRef} className="relative flex justify-center items-center gap-16 h-96">
      {/* Left Eye */}
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-6 border-purple-400 bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden shadow-lg shadow-purple-200/50">
          <div 
            className={`absolute w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full transition-all duration-100 ease-out ${isBlinking ? 'scale-y-0' : 'scale-y-100'} shadow-inner`}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${Math.max(-40, Math.min(40, mousePos.x))}px, ${Math.max(-40, Math.min(40, mousePos.y))}px)`
            }}
          >
            <div className="absolute w-6 h-6 bg-white rounded-full top-2 left-2 shadow-sm"></div>
            <div className="absolute w-2 h-2 bg-pink-200 rounded-full top-3 left-4 opacity-70"></div>
          </div>
        </div>
        {/* Eyebrow */}
        <div 
          className="absolute -top-8 left-8 w-32 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform transition-transform duration-200 shadow-sm"
          style={{
            transform: `rotate(${mousePos.x * 0.5}deg)`
          }}
        ></div>
      </div>

      {/* Right Eye */}
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-6 border-blue-400 bg-gradient-to-br from-blue-100 to-teal-100 relative overflow-hidden shadow-lg shadow-blue-200/50">
          <div 
            className={`absolute w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full transition-all duration-100 ease-out ${isBlinking ? 'scale-y-0' : 'scale-y-100'} shadow-inner`}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${Math.max(-40, Math.min(40, mousePos.x))}px, ${Math.max(-40, Math.min(40, mousePos.y))}px)`
            }}
          >
            <div className="absolute w-6 h-6 bg-white rounded-full top-2 left-2 shadow-sm"></div>
            <div className="absolute w-2 h-2 bg-blue-200 rounded-full top-3 left-4 opacity-70"></div>
          </div>
        </div>
        {/* Eyebrow */}
        <div 
          className="absolute -top-8 left-8 w-32 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full transform transition-transform duration-200 shadow-sm"
          style={{
            transform: `rotate(${-mousePos.x * 0.5}deg)`
          }}
        ></div>
      </div>
    </div>
  );
}