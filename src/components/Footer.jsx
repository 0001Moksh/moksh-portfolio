import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import RevealSection from "./RevealSection";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/moksh_bhardwaj23/", label: "Instagram", color: "hover:text-pink-500", shadow: "hover:shadow-pink-500/50" },
    { icon: FaEnvelope, url: "mailto:mokshbhardwaj2333@gmail.com", label: "Email", color: "hover:text-amber-400", shadow: "hover:shadow-amber-400/50" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh", label: "LinkedIn", color: "hover:text-sky-500", shadow: "hover:shadow-sky-500/50" },
    { icon: IoLogoYoutube, url: "https://www.youtube.com/@NexYugTech", label: "YouTube", color: "hover:text-red-600", shadow: "hover:shadow-red-600/50" },
    { icon: FaGithub, url: "https://github.com/0001Moksh", label: "GitHub", color: "hover:text-gray-200", shadow: "hover:shadow-gray-400/50" },
    { icon: FaWhatsapp, url: "https://wa.me/918882563225?text=Hi%20Moksh,%20I%20am%20contacting%20you%20from%20your%20Portfolio%20website.", label: "WhatsApp", color: "hover:text-emerald-500", shadow: "hover:shadow-emerald-500/50" },
  ];

  return (
    <footer className="relative py-16 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <RevealSection variant="fadeIn">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20"
        >
          {/* Let's Connect + Social Icons */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-teal-300 bg-clip-text text-transparent mb-3"
            >
              Let's Connect
            </motion.h2>
            <p className="text-zinc-400 text-lg">Available across the internet</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-6 md:gap-8 mb-16">
            {socialLinks.map((social, i) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * i, type: "spring", stiffness: 120 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  className="group"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`block p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 transition-all duration-300 hover:border-zinc-600 ${social.color} ${social.shadow}`}
                  >
                    <IconComponent className="text-4xl transition-all duration-300 group-hover:scale-110" />
                  </a>
                  <p className="text-xs text-zinc-500 mt-3 tracking-widest font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label.toUpperCase()}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Back to Top + Separator */}
          <div className="flex flex-col items-center gap-6 mb-10">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 text-sm uppercase tracking-[3px] text-zinc-400 hover:text-white transition-colors font-medium"
            >
              ↑ BACK TO TOP
            </motion.a>

            {/* Strong Separator Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-zinc-600 via-30% to-transparent"
            />
          </div>

          {/* Copyright - Centered at Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm text-zinc-400"
          >
            © {year} • Built with{" "}
            <span className="text-rose-500">❤️</span> by{" "}
            <a
              href="https://mokshbhardwaj.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-teal-400 transition-colors"
            >
              Moksh Bhardwaj
            </a>
          </motion.div>
        </motion.div>
      </RevealSection>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
    </footer>
  );
};

export default Footer;