import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,

} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-orange-50 py-12">
        <div className="decoration-sky-500/30 max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/0001Moksh" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={50} />
              </a>
              <a href="https://www.instagram.com/moksh_bhardwaj23/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={50} />
              </a>
              <a href="https://www.linkedin.com/in/moksh-bhardwaj-0001moksh/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={50} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                Supportive Partner ❤️{" "}
                <a href="https://aksh06.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Akshat Rai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
