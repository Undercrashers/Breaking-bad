"use client";

import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "Sponsor 1", logo: "/sponsor1.png" },
    { id: 2, name: "Sponsor 2", logo: "/sponsor2.png" },
    { id: 3, name: "Sponsor 3", logo: "/sponsor3.png" },
    { id: 4, name: "Sponsor 4", logo: "/sponsor4.png" },
    { id: 5, name: "Sponsor 5", logo: "/sponsor5.png" },
  ];

  // Double the array for infinite scroll
  const doubledSponsors = [...sponsors, ...sponsors];

  return (
    <section className="relative py-20 bg-black border-t border-green-500/30">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          <p className="text-white/60">
            Proudly supported by leading companies
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex gap-8 animate-carousel">
            {doubledSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-lg border border-green-500/50 backdrop-blur-sm flex items-center justify-center hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 p-4">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                    priority={index < 5}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-carousel {
          animation: carousel 25s linear infinite;
        }

        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
