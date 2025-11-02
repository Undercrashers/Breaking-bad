"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "motion/react";

export default function HeisenbergSubmission() {
  const [formData, setFormData] = useState({
    teamName: "",
    memberNames: "",
    promptDescription: "",
    promptUsed: "",
    imageDescription: "",
    submissionLink: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submission Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        teamName: "",
        memberNames: "",
        promptDescription: "",
        promptUsed: "",
        imageDescription: "",
        submissionLink: "",
      });
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="relative w-full py-20 bg-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-8">
              <div className="text-6xl mb-4">🎯</div>
              <h1 className="text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Heisenberg&apos;s Certainty Principle
                </span>
              </h1>
              <p className="text-white/70 text-lg">
                Replicate an image using prompt engineering. Bonus points for
                the 5-second flash image!
              </p>
              <div className="pt-4 space-x-2">
                <span className="inline-block px-4 py-2 bg-green-400/20 border border-green-400/50 rounded-full">
                  <span className="text-green-400 font-bold">25 Points</span>
                </span>
                <span className="inline-block px-4 py-2 bg-emerald-400/20 border border-emerald-400/50 rounded-full">
                  <span className="text-emerald-400 font-bold">
                    + Bonus Points
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Form */}
        <section className="relative w-full py-20 bg-black overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Team Name */}
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  Team Name *
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your team name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-green-400/30 text-white placeholder-white/40 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Member Names */}
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  Team Member Names *
                </label>
                <textarea
                  name="memberNames"
                  value={formData.memberNames}
                  onChange={handleChange}
                  required
                  placeholder="Enter names of all team members (comma-separated)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-green-400/30 text-white placeholder-white/40 focus:border-green-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Challenge Description */}
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  Challenge Description *
                </label>
                <textarea
                  name="promptDescription"
                  value={formData.promptDescription}
                  onChange={handleChange}
                  required
                  placeholder="Describe the image you need to replicate (color, style, objects, composition, etc.)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-green-400/30 text-white placeholder-white/40 focus:border-green-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Prompt Used */}
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  Prompt You Used *
                </label>
                <textarea
                  name="promptUsed"
                  value={formData.promptUsed}
                  onChange={handleChange}
                  required
                  placeholder="Enter the exact prompt you used for image generation"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-green-400/30 text-white placeholder-white/40 focus:border-green-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Generated Image Description */}
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  Generated Image Description *
                </label>
                <textarea
                  name="imageDescription"
                  value={formData.imageDescription}
                  onChange={handleChange}
                  required
                  placeholder="Describe the image your prompt generated"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-green-400/30 text-white placeholder-white/40 focus:border-green-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submission Link */}
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  Image/Portfolio Link (Optional for bonus points)
                </label>
                <input
                  type="url"
                  name="submissionLink"
                  value={formData.submissionLink}
                  onChange={handleChange}
                  placeholder="Link to your generated image or portfolio"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-green-400/30 text-white placeholder-white/40 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/50"
              >
                {submitted ? "✓ Submitted Successfully!" : "Submit Challenge"}
              </motion.button>
            </motion.form>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 p-6 rounded-lg bg-green-500/20 border border-green-400/50"
              >
                <p className="text-green-400 font-semibold text-center text-lg">
                  🎉 Your submission has been recorded! Good luck with the
                  challenge!
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
