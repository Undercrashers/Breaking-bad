"use client";
import React from "react";
import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";

export function EventTimeline() {
  const data = [
    {
      title: "The 25-Point Challenges",
      content: (
        <div>
          <p className="mb-4 text-xs font-semibold text-green-400 md:text-sm uppercase tracking-wide">
            10:00 AM - 2:00 PM
          </p>
          <p className="mb-6 text-xs font-normal text-neutral-300 md:text-sm leading-relaxed">
            Compete in 4 exciting challenges! Each is worth 25 points. The
            highest total score wins.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-green-400 font-bold text-xl">💼</span>
                <div className="text-xs md:text-sm text-neutral-400 flex-1">
                  <p className="font-semibold text-neutral-200">
                    Challenge: Pitch it Bad
                  </p>
                  <p>Pitch your own startup concept. (25 points)</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-green-400 font-bold text-xl">🎯</span>
                <div className="text-xs md:text-sm text-neutral-400 flex-1">
                  <p className="font-semibold text-neutral-200">
                    Challenge: Heisenberg&apos;s Certainty Principle
                  </p>
                  <p>
                    Replicate an image using prompt engineering. Bonus points
                    for 5-sec flash! (25 points)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-green-400 font-bold text-xl">🔧</span>
                <div className="text-xs md:text-sm text-neutral-400 flex-1">
                  <p className="font-semibold text-neutral-200">
                    Challenge: Fix the Lab
                  </p>
                  <p>Redesign and fix a flawed UI/UX. (25 points)</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-green-400 font-bold text-xl">📝</span>
                <div className="text-xs md:text-sm text-neutral-400 flex-1">
                  <p className="font-semibold text-neutral-200">
                    Challenge: Word Bank Mayhem
                  </p>
                  <p>
                    Read the passage and guess the hidden words. (25 points)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Morning Schedule",
      content: (
        <div>
          <p className="mb-4 text-xs font-semibold text-green-400 md:text-sm uppercase tracking-wide">
            10:00 AM - 12:00 PM
          </p>
          <p className="mb-6 text-xs font-normal text-neutral-300 md:text-sm leading-relaxed">
            The event kicks off! We'll reveal the "Pitch it Bad" theme, then
            jump into two challenges before the performance.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🚀</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  Opening & Pitch Reveal
                </p>
                <p>10:00 AM - Welcome & "Pitch it Bad" theme announced</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🎯</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  Challenge: Heisenberg's Certainty Principle
                </p>
                <p>The prompt engineering challenge kicks off</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">📝</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  Challenge: Word Bank Mayhem
                </p>
                <p>The word guessing challenge begins</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🎭</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  Special Performance
                </p>
                <p>12:00 PM - A mid-event performance!</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Afternoon Finale",
      content: (
        <div>
          <p className="mb-4 text-xs font-semibold text-green-400 md:text-sm uppercase tracking-wide">
            12:30 PM - 2:00 PM
          </p>
          <p className="mb-6 text-xs font-normal text-neutral-300 md:text-sm leading-relaxed">
            Right after the performance, tackle the final design challenge, then
            get ready to present your "Pitch it Bad" ideas!
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🔧</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  Challenge: Fix the Lab
                </p>
                <p>12:30 PM - The UI/UX redesign challenge</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">💼</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  "Pitch it Bad" Presentations
                </p>
                <p>Teams present their startup pitch ideas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🏆</span>
              <div className="text-xs md:text-sm text-neutral-400">
                <p className="font-semibold text-neutral-200">
                  Awards & Closing
                </p>
                <p>Final calculations & celebration to close the event</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Prizes & Goodies",
      content: (
        <div>
          <p className="mb-6 text-xs font-normal text-neutral-300 md:text-sm leading-relaxed">
            Winners are selected by total points from all 4 events. Goodies for
            the top 50 participants!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30">
              <h4 className="text-sm font-bold text-green-400 mb-2">
                🥇 1st Prize
              </h4>
              <p className="text-xs text-neutral-400">Prize: ₹7,000</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30">
              <h4 className="text-sm font-bold text-green-400 mb-2">
                🥈 2nd Prize
              </h4>
              <p className="text-xs text-neutral-400">Prize: ₹4,500</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30">
              <h4 className="text-sm font-bold text-green-400 mb-2">
                🥉 3rd Prize
              </h4>
              <p className="text-xs text-neutral-400">Prize: ₹2,500</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30">
              <h4 className="text-sm font-bold text-green-400 mb-2">
                ⭐ Top 50
              </h4>
              <p className="text-xs text-neutral-400">
                Prize: Exclusive Goodies & Recognition
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full py-12 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            A full day of challenges, competitions, and prizes. Compete, pitch,
            and showcase your skills!
          </p>
        </motion.div>{" "}
        {/* Timeline Component */}
        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </motion.section>
  );
}
