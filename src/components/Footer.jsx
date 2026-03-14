import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import RevealSection from "./RevealSection";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/moksh_bhardwaj23/", color: "text-pink-600", label: "Instagram" },
    { icon: FaEnvelope, url: "mailto:mokshbhardwaj2333@gmail.com", color: "text-white", label: "Email" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh", color: "text-blue-700", label: "LinkedIn" },
    { icon: IoLogoYoutube, url: "https://www.youtube.com/@NexYugTech", color: "text-red-600", label: "YouTube" },
    { icon: FaGithub, url: "https://github.com/0001Moksh", color: "text-white", label: "GitHub" },
    { icon: FaWhatsapp, url: "https://wa.me/918882563225?text=Hi%20Moksh,%20I%20am%20contacting%20you%20from%20your%20Portfolio%20website.", color: "text-green-500", label: "WhatsApp" },
  ];

  return (
    <>
      <footer className="py-10 mt-10 border-t border-dashed border-primary-main">
        <RevealSection variant="fadeIn">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 text-center"
          >
            {/* SOCIAL MEDIA ICONS */}
            <div className="mt-8 space-y-6">
              <div className="animate-reveal-up">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="font-bold text-center text-dark mb-2"
                >
                  Available on
                </motion.h2>
                <ul className="flex justify-center space-x-6">
                  {socialLinks.map((social, i) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.05 * i + 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.3, rotateZ: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          title={social.label}
                          className={`${social.color} text-2xl smooth-transition shadow-glow rounded-full p-2 hover-lift block`}
                        >
                          <IconComponent />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Line Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="line-separator"
            />

            {/* Footer Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-medium-gray mt-6 animate-fade-reveal"
            >
              © {year} — Built with❤️ by{" "}
              <motion.a
                href="https://mokshbhardwaj.netlify.app"
                className="text-primary-dark-main underline hover:text-primary-main smooth-transition font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#9b8cff" }}
              >
                Moksh Bhardwaj
              </motion.a>
            </motion.p>

            {/* Tech Stack */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xs text-light-gray mt-4 text-gradient stagger-5"
            >
              Powered by React • Tailwind CSS • Framer Motion
            </motion.p>
          </motion.div>
        </RevealSection>
      </footer>
    </>
  );
};

export default Footer;
