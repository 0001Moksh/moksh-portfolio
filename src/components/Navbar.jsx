import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic from "../../public/image.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  // Close menu on Escape key press for better accessibility
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenu(false);
      }
    };
    if (menu) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menu]);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 px-4 md:px-20 h-16 flex items-center justify-between"
      >
        {/* Logo - Make it clickable to scroll to Home */}
        <Link
          to="Home"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src={pic}
            className="h-12 w-12 rounded-full object-cover"
            alt="Moksh's logo"
            loading="lazy"
          />
          <div className="hidden sm:flex flex-col">
            <h1 className="font-bold text-xl tracking-tight text-gray-900">Moksh</h1>
            <p className="text-sm text-gray-500">AI-ML Engineer</p>
          </div>
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold items-center">
          {navItems.map(({ id, text }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative hover:text-indigo-600 cursor-pointer transition-colors duration-300"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-indigo-600 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-indigo-600"
                className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {text}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          {/* Download CV */}
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1mXnS-dNLi5DShw50UvgzyJ93ldOqgcMU"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block px-5 py-2.5 bg-gradient-to-r from-[#a45d48] to-[#8b4a3d] hover:from-[#8b4a3d] hover:to-[#723a31] text-white rounded-full text-sm font-bold shadow-md transition-all duration-300"
          >
            Download CV
          </motion.a>

          {/* Mobile menu button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden cursor-pointer text-gray-800"
            onClick={() => setMenu(true)}
            aria-label="Open menu"
          >
            <AiOutlineMenu size={28} />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer text-gray-800"
                  onClick={() => setMenu(false)}
                  aria-label="Close menu"
                >
                  <IoCloseSharp size={28} />
                </motion.div>
              </div>
              <ul className="flex flex-col mt-8 space-y-6 p-6 text-gray-700 text-lg font-semibold">
                {navItems.map(({ id, text }) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: id * 0.1 }}
                    className="hover:text-indigo-600 cursor-pointer transition-colors duration-300"
                  >
                    <Link
                      onClick={() => setMenu(false)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="text-indigo-600"
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CV Button */}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1mXnS-dNLi5DShw50UvgzyJ93ldOqgcMU"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mx-6 mt-auto mb-8 px-6 py-3 bg-gradient-to-r from-[#a45d48] to-[#8b4a3d] hover:from-[#8b4a3d] hover:to-[#723a31] text-white rounded-full text-center font-bold shadow-md transition-all duration-300"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Overlay with better transition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full bg-black z-40"
              onClick={() => setMenu(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;