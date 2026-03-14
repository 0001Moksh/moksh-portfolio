import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import RevealSection from "./RevealSection";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/moksh_bhardwaj23/", color: "text-white", label: "Instagram" },
    { icon: FaEnvelope, url: "mailto:mokshbhardwaj2333@gmail.com", color: "text-white", label: "Email" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh", color: "text-white", label: "LinkedIn" },
    { icon: IoLogoYoutube, url: "https://www.youtube.com/@NexYugTech", color: "text-white", label: "YouTube" },
    { icon: FaGithub, url: "https://github.com/0001Moksh", color: "text-white", label: "GitHub" },
    { icon: FaWhatsapp, url: "https://wa.me/918882563225?text=Hi%20Moksh,%20I%20am%20contacting%20you%20from%20your%20Portfolio%20website.", color: "text-white", label: "WhatsApp" },
  ];

  return (
    <>
      <footer className="py-10 mt-10 border-t-2 border-dashed" style={{borderImage: "linear-gradient(90deg, #a855f7, #20c997, #f59e0b, #f43f5e) 1"}}>
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
                  className="font-bold text-center text-dark mb-4 text-2xl"
                >
                  Available On
                </motion.h2>
                <ul className="flex justify-center space-x-6 flex-wrap gap-4">
                  {[{icon: FaInstagram, url: "https://www.instagram.com/moksh_bhardwaj23/", label: "Instagram", color: "text-rose shadow-rose-lg"},
                    {icon: FaEnvelope, url: "mailto:mokshbhardwaj2333@gmail.com", label: "Email", color: "text-gold-500 shadow-gold-lg"},
                    {icon: FaLinkedin, url: "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh", label: "LinkedIn", color: "text-cyan shadow-cyan-lg"},
                    {icon: IoLogoYoutube, url: "https://www.youtube.com/@NexYugTech", label: "YouTube", color: "text-error shadow-rose-lg"},
                    {icon: FaGithub, url: "https://github.com/0001Moksh", label: "GitHub", color: "text-teal-500 shadow-teal-lg"},
                    {icon: FaWhatsapp, url: "https://wa.me/918882563225?text=Hi%20Moksh,%20I%20am%20contacting%20you%20from%20your%20Portfolio%20website.", label: "WhatsApp", color: "text-emerald shadow-emerald-lg"}
                  ].map((social, i) => {
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
                          className={`${social.color} text-2xl smooth-transition rounded-full p-3 hover-lift block transition-all`}
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
                className="bg-gradient-to-r from-gold-500 via-teal-500 to-rose bg-clip-text text-teal underline hover:opacity-80 smooth-transition font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                Moksh Bhardwaj
              </motion.a>
            </motion.p>

          </motion.div>
        </RevealSection>
      </footer>
    </>
  );
};

export default Footer;
