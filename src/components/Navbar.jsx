import React, { useState } from "react";
import pic from "../../public/image.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 3,
      text: "Project",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="h-15 bg-gradient-to-r from-sky-500 to-white-500 max-w-screen-2xl container mx-auto px-4 md:px-20 h-200 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={pic} className="h-12 w-12" alt="" />
            <h1 className="font-semibold text-x1 cursor-pointer">
              <span className="text-white-500 text-2xl">Moksh</span>
              <p className="text-sm">AI-ML Engineer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;