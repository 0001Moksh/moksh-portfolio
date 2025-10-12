import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <hr />
      <footer className="bg-orange-50 py-10 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
            <div>
              <h2 className="font-bold text-center text-gray-800 mb-2">
                Available on
              </h2>
              <ul className="flex justify-center space-x-6">
                <li>
                  <a
                    href="https://www.instagram.com/moksh_bhardwaj23/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="text-2xl text-pink-600 hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mokshbhardwaj2333@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaEnvelope className="text-2xl hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/moksh-bhardwaj-0001moksh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-2xl text-blue-700 hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@NexYugTech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoYoutube className="text-2xl text-red-600 hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/0001Moksh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-2xl text-gray-800 hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
                {/* WhatsApp */}
                <li>
                  <a
                    href="https://wa.me/918882563225?text=Hi%20Moksh,%20I%20am%20contacting%20you%20from%20your%20resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp className="text-2xl text-green-500 hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-700 mt-6">
            © {year} — Built with ❤️ by{" "}
            <a
              href="https://mokshbhardwaj.netlify.app"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moksh Bhardwaj
            </a>{" "}
            | All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
