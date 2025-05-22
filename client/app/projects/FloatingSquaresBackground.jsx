"use client";

import React, { useEffect, useState } from "react";

const FloatingSquaresBackground = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const generatedSquares = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 10, // 10-30px
      left: Math.floor(Math.random() * 100), // %
      delay: Math.random() * 10, // seconds
      duration: 10 + Math.random() * 10, // seconds
    }));
    setSquares(generatedSquares);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {squares.map(({ id, size, left, delay, duration }) => (
        <div
          key={id}
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
          className="absolute bg-[var(--primary)] opacity-20 rounded-sm animate-float"
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-20vh);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingSquaresBackground;
