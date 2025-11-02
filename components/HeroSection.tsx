"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FloatingCrystals from "./FloatingCrystals";
import FloatingChemical from "./FloatingChemical";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>

      {/* Floating Components - Behind Everything (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="opacity-40">
          <FloatingCrystals />
        </div>
        <FloatingChemical />
      </div>

      {/* Main Content - Above Floating Elements (z-10) */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Hero Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Tagline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent block mb-2">
                  Who said Hackathons
                </span>
                <span className="text-white block">
                  are only for{" "}
                  <span className="relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 blur-lg"></span>
                    <span className="relative">tech people?</span>
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 mt-6 max-w-lg leading-relaxed font-light">
                Break into tech. <span className="text-green-400">Cook up</span>{" "}
                amazing projects.
                <br />
                <span className="text-sm opacity-70 mt-2 block">
                  C<sub className="text-xs">code</sub> + Heat + Creativity →
                  Breakthrough
                </span>
              </p>
            </div>

            {/* Submission Button */}
            <div className="flex gap-3 pt-4">
              <Link href="/challenges">
                <button className="group relative px-7 py-3 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/50 hover:scale-105 overflow-hidden flex items-center gap-2">
                  <span className="relative z-10">Submit Challenge</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="px-7 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 transition-all duration-300 hover:border-green-400/50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Breaking Bad Logo */}
          <div className="relative flex items-center justify-center lg:justify-end h-96">
            {/* Breaking Bad Logo Center */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/Breaking_Bad_logo.png"
                alt="Breaking Bad Logo"
                width={300}
                height={300}
                className="drop-shadow-2xl relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
