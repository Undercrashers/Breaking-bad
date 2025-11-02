"use client";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Events", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Twitter", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-black border-t border-green-600/30 overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section - Branding and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-black">
              <span className="text-white">Building</span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Bad
              </span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              A premier hackathon by Google Developers Group KIIT Chapter where
              innovation meets creativity.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/50 flex items-center justify-center hover:bg-green-400/20 transition-all duration-300"
                title="Twitter"
              >
                <span className="text-green-400 text-lg">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/50 flex items-center justify-center hover:bg-green-400/20 transition-all duration-300"
                title="Instagram"
              >
                <span className="text-green-400">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/50 flex items-center justify-center hover:bg-green-400/20 transition-all duration-300"
                title="LinkedIn"
              >
                <span className="text-green-400">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/50 flex items-center justify-center hover:bg-green-400/20 transition-all duration-300"
                title="Discord"
              >
                <span className="text-green-400">💬</span>
              </a>
            </div>
          </motion.div>

          {/* Link sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-green-400 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent my-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Building Bad - GDG KIIT Chapter. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Cookie Settings
            </a>
          </div>
        </motion.div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 opacity-20" />
      </div>
    </motion.footer>
  );
};

export default Footer;
