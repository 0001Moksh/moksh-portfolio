import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic from "../../public/image.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 4, text: "Experience" },
    { id: 3, text: "Project" },
    { id: 5, text: "Contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("scroll-progress-bar");
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
        progressBar.style.boxShadow = `0 0 10px rgba(255, 255, 255, ${scrollPercent / 100})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 px-4 md:px-20 h-16 flex items-center justify-between transition-colors duration-300 shadow-md">
        <div
          id="scroll-progress-bar"
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 w-0 transition-all duration-150 ease-out"
        ></div>

        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
          <h1 className="font-semibold text-xl cursor-pointer text-gray-800 dark:text-white">
            <span className="text-2xl">Moksh</span>
            <p className="text-sm text-gray-600 dark:text-gray-300">AI-ML Engineer</p>
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-100">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
              <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="md:hidden text-gray-800 dark:text-gray-100" onClick={() => setMenu(true)}>
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-100vw" }}
              transition={{ type: "spring", stiffness: 120, damping: 13 }}
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300"
            >
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Menu</h2>
                <IoCloseSharp size={30} className="cursor-pointer text-gray-800 dark:text-gray-100" onClick={() => setMenu(false)} />
              </div>
              <ul className="flex flex-col space-y-6 p-6 text-lg text-gray-800 dark:text-gray-100">
                {navItems.map(({ id, text }) => (
                  <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                    <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full bg-black"
              onClick={() => setMenu(false)}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
