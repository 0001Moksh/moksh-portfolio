import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-orange-50 py-12">
        <div className="decoration-sky-500/30 max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={50} />
              <FaTwitter size={50} />
              <FaInstagram size={50} />
              <FaLinkedinIn size={50} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Akshat Rai</p>
            </div> 
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;