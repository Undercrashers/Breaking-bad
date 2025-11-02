"use client";

import { useEffect, useState } from "react";

interface FloatingCrystal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function FloatingCrystals() {
  const [crystals, setCrystals] = useState<FloatingCrystal[]>([]);

  useEffect(() => {
    // Generate crystals on mount
    const generatedCrystals = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 40,
      opacity: 0.3 + Math.random() * 0.4,
    }));

    // Use a microtask to set state after render
    requestAnimationFrame(() => {
      setCrystals(generatedCrystals);
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className="absolute animate-float"
          style={{
            left: `${crystal.left}%`,
            top: "100%",
            width: `${crystal.size}px`,
            height: `${crystal.size}px`,
            opacity: crystal.opacity,
            animation: `float ${crystal.duration}s ease-in-out ${crystal.delay}s infinite`,
          }}
        >
          {/* Rotating crystal/meth compound visual */}
          <div
            className="w-full h-full animate-spin"
            style={{ animationDuration: "6s", animationDirection: "alternate" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 clip-path-polygon opacity-60 rounded-2xl transform rotate-45"></div>
          </div>

          {/* Inner glow */}
          <div
            className="absolute inset-2 bg-gradient-to-t from-green-200 to-transparent rounded-lg animate-pulse"
            style={{
              boxShadow:
                "0 0 20px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(187, 247, 208, 0.3)",
            }}
          ></div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: ${crystals[0]?.opacity || 0.3};
          }
          90% {
            opacity: ${crystals[0]?.opacity || 0.3};
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        .clip-path-polygon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
      `}</style>
    </div>
  );
}
