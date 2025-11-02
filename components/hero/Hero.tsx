"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <main className="overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-screen overflow-hidden relative bg-black"
        style={{
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: "url('/Hiesenberg.png')",
          minHeight: "500px",
          width: "100%",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        {/* Submit Tag - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute top-10 right-10 z-20"
        >
          <div className="px-4 py-2 bg-green-400/10 border border-green-400/50 rounded-full">
            <p className="text-sm font-semibold text-green-400 uppercase tracking-wider">
              SUBMIT NOW!
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-start items-end h-full ml-6 sm:ml-10 pb-10 sm:pb-16 relative z-10"
        >
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            {/* Main Heading */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
              style={{ fontFamily: "Baskerville, serif" }}
            >
              <span className="block text-white">Building</span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Bad
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="font-semibold text-sm sm:text-base md:text-lg text-white/90 max-w-md"
              style={{ fontFamily: "Baskerville, serif" }}
            >
              No chemistry experience required. Just the courage to mix things
              up.
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-lg">
              Join us for an exciting hackathon where innovation meets
              creativity. Build projects, collaborate with peers, and showcase
              your skills in a supportive community dedicated to learning and
              growth.
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a href="/challenges">
                <Button
                  className="rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-4 bg-gradient-to-r from-green-400/30 to-emerald-600/30 hover:from-green-400/50 hover:to-emerald-600/50 hover:scale-105 backdrop-blur-lg border border-green-400/50 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300"
                  style={{ fontFamily: "Baskerville, serif" }}
                >
                  🚀 SUBMIT YOUR MADNESS! 💀
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Hero;
