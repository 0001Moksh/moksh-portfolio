import React, { useState } from "react";
import pic from "../../public/vite.svg";
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
      <div className="h-15 max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12" alt="logo" />
            <h1 className="font-semibold text-xl cursor-pointer">
              <span className="text-gray-700 text-2xl">Moksh</span>
              <p className="text-sm">AI-ML Engineer</p>
            </h1>
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer transform transition-transform duration-300"
          >
            {menu ? <IoCloseSharp size={30} className="rotate-90" /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <IoCloseSharp
            size={30}
            className="cursor-pointer transform transition-transform duration-300 rotate-90"
            onClick={() => setMenu(false)}
          />
        </div>
        <ul className="flex flex-col p-4 space-y-4 text-lg">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                onClick={() => setMenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
