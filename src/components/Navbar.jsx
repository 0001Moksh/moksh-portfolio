import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic from "../../public/image.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4 md:px-20 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12" alt="logo" />
          <h1 className="font-semibold text-xl cursor-pointer">
            <span className="text-gray-800 text-2xl">Moksh</span>
            <p className="text-sm text-gray-600">AI-ML Engineer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
              <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={() => setMenu(true)}>
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {/* AnimatePresence for enter & exit animations */}
      <AnimatePresence>
        {menu && (
          <>
            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-100vw" }} // Exit animation
              transition={{ type: "spring", stiffness: 120, damping: 13 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">Menu</h2>
                <IoCloseSharp size={30} className="cursor-pointer" onClick={() => setMenu(false)} />
              </div>
              <ul className="flex flex-col space-y-6 p-6 text-lg">
                {navItems.map(({ id, text }) => (
                  <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                    <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }} // Fade out when closing
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
