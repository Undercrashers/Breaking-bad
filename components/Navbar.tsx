"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 bg-clip-text text-transparent">
                  GDG
                </div>
                <div className="text-xs text-green-400 font-semibold tracking-widest mt-1">
                  KIIT CHAPTER
                </div>
              </div>
            </Link>
          </div>

          {/* Submission Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/challenges">
              <button className="hidden md:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/50 hover:scale-105">
                Submit
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white/70 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="/challenges" onClick={() => setIsOpen(false)}>
                <button className="text-white/70 hover:text-white transition-colors text-sm font-medium px-4 py-2">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Crystal decorative elements */}
      <div className="absolute top-2 right-10 w-8 h-8 opacity-20 rotate-45 bg-gradient-to-br from-green-400 to-transparent rounded-sm"></div>
      <div className="absolute top-6 right-20 w-5 h-5 opacity-15 rotate-12 bg-gradient-to-br from-emerald-400 to-transparent rounded-sm"></div>
      <div className="absolute top-3 left-20 w-6 h-6 opacity-10 rotate-45 bg-gradient-to-br from-green-500 to-transparent rounded-sm"></div>
    </nav>
  );
}
