import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaGithub size={28} />,
    url: "https://github.com/0001Moksh",
    label: "GitHub",
    hover: "hover:text-gray-800",
  },
  {
    icon: <FaInstagram size={28} />,
    url: "https://www.instagram.com/moksh_bhardwaj23/",
    label: "Instagram",
    hover: "hover:text-pink-600",
  },
  {
    icon: <FaLinkedinIn size={28} />,
    url: "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh/",
    label: "LinkedIn",
    hover: "hover:text-blue-700",
  },
];

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

          {/* 🔗 Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.2 }}
                className={`${link.hover} transition-colors duration-300`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* 💬 Footer Text */}
          <p className="text-sm text-gray-700">
            © {year} — Built with ❤️ by{" "}
            <a
              href="https://mokshbhardwaj.netlify.app"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moksh Bhardwaj
            </a>{" "}
            | Support by{" "}
            <a
              href="https://aksh06.netlify.app/"
              className="text-red-500 underline hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akshat Rai
            </a>
          </p>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
