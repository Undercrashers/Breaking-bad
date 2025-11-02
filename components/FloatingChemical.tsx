"use client";

import { useEffect, useState } from "react";

interface ChemicalParticle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  scale: number;
}

export default function FloatingChemical() {
  const [particles, setParticles] = useState<ChemicalParticle[]>([]);

  useEffect(() => {
    // Generate floating chemical particles
    const generatedParticles = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 40 + 20,
      delay: Math.random() * 3,
      duration: 15 + Math.random() * 5,
      scale: 0.6 + Math.random() * 0.6,
    }));

    requestAnimationFrame(() => {
      setParticles(generatedParticles);
    });
  }, []);

  return (
    <div className="w-full h-full pointer-events-none overflow-hidden absolute inset-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float-chemical ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            transform: `scale(${particle.scale})`,
          }}
        >
          {/* Skeletal Structure / Bond-Line Formula Display */}
          <div className="relative">
            {/* Glowing text with retro green CRT effect */}
            <div
              className="font-mono text-center whitespace-nowrap px-6 py-5 bg-black/50 backdrop-blur-md border-2 border-green-500 rounded-lg"
              style={{
                textShadow: `
                  0 0 12px rgba(34, 197, 94, 0.9),
                  0 0 24px rgba(34, 197, 94, 0.7),
                  0 0 36px rgba(34, 197, 94, 0.5)
                `,
                fontFamily: "'Courier New', monospace",
              }}
            >
              {/* Skeletal Structure Title */}
              <div className="text-green-300 font-bold text-xs uppercase tracking-widest opacity-75 mb-2">
                ◆ Skeletal Structure ◆
              </div>

              {/* Bond-Line Formula - Visual Representation */}
              <div className="text-green-400 font-bold text-sm leading-tight my-3">
                <svg
                  width="80"
                  height="60"
                  viewBox="0 0 80 60"
                  className="inline-block mx-auto opacity-90"
                >
                  {/* Benzene ring (6-membered carbon ring) */}
                  <polygon
                    points="40,10 55,18 55,34 40,42 25,34 25,18"
                    fill="none"
                    stroke="rgba(34, 197, 94, 0.8)"
                    strokeWidth="1.5"
                  />
                  {/* Carbon vertices (implicit in skeletal) */}
                  <circle
                    cx="40"
                    cy="10"
                    r="1.5"
                    fill="rgba(34, 197, 94, 0.9)"
                  />
                  <circle
                    cx="55"
                    cy="18"
                    r="1.5"
                    fill="rgba(34, 197, 94, 0.9)"
                  />
                  <circle
                    cx="55"
                    cy="34"
                    r="1.5"
                    fill="rgba(34, 197, 94, 0.9)"
                  />
                  <circle
                    cx="40"
                    cy="42"
                    r="1.5"
                    fill="rgba(34, 197, 94, 0.9)"
                  />
                  <circle
                    cx="25"
                    cy="34"
                    r="1.5"
                    fill="rgba(34, 197, 94, 0.9)"
                  />
                  <circle
                    cx="25"
                    cy="18"
                    r="1.5"
                    fill="rgba(34, 197, 94, 0.9)"
                  />
                  {/* Side chain */}
                  <line
                    x1="55"
                    y1="34"
                    x2="70"
                    y2="45"
                    stroke="rgba(34, 197, 94, 0.8)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="72"
                    y="48"
                    fontSize="8"
                    fill="rgba(34, 197, 94, 0.9)"
                    fontWeight="bold"
                  >
                    N
                  </text>
                </svg>
              </div>

              {/* Chemical Formula & Reaction */}
              <div className="text-green-500 font-bold text-xs space-y-1">
                <div className="opacity-80">C₁₇H₂₁NO₄ → C₁₀H₁₅N</div>
                <div className="text-green-400 text-xs">
                  ↓ Crystallization ↓
                </div>
              </div>

              {/* Scanlines effect for CRT authenticity */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none rounded-lg"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.05) 2px, rgba(34, 197, 94, 0.05) 4px)",
                }}
              />
            </div>

            {/* Corner brackets for retro aesthetic */}
            <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-green-400 opacity-60"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-green-400 opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-green-400 opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-green-400 opacity-60"></div>

            {/* Glow aura */}
            <div
              className="absolute inset-0 rounded-lg opacity-50 blur-xl -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)",
              }}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float-chemical {
          0%,
          100% {
            transform: translateY(0) rotateZ(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) rotateZ(5deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
