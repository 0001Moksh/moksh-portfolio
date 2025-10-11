import React from "react";
import pic from "../../public/1ig3.png";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";


function Home() {
  return (
    <>
      <motion.div
        name="Home"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          {/* LEFT SECTION */}
          <div className="md:w-1/2 mt-12 md:mt-10 space-y-4 order-2 md:order-1">
            <span className="text-xl text-gray-600">Welcome In My Feed</span>

            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <h1 className="mb-3">Hello, I'm a</h1>
               <span className="bg-gradient-to-r from-[#ba4d17] via-[#fdbf53] to-[#ba4d17] bg-clip-text text-3xl tracking-tight text-transparent">
                  <ReactTyped
                    className="text-5xl text-[#a45d48] font-bold"
                    strings={["Developer", "Programmer", "Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
            </div>

            <p className="text-gray-700 text-justify leading-relaxed mt-4">
              I am a Machine Learning and AI enthusiast with expertise in Python, Scikit-learn, Keras, and TensorFlow.
              My focus is on developing intelligent models, optimizing data workflows, and creating scalable AI-driven
              solutions. I also specialize in Zoho development, integrating business automation with smart AI systems.
            </p>

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
                </ul>
              </div>

              {/* CURRENT PROJECTS */}
              <div>
                <h2 className="font-bold text-center text-gray-800 mb-3">
                  Currently Working On
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="cursor-pointer px-5 py-2 border-2 border-gray-800 rounded-full bg-gray-800 text-white hover:scale-110 transition-transform duration-200 font-semibold">
                    LangChain
                  </div>
                  <div className="cursor-pointer px-5 py-2 border-2 border-gray-800 rounded-full bg-white text-gray-800 hover:scale-110 transition-transform duration-200 font-semibold">
                    RAG Model
                  </div>
                  <div className="cursor-pointer px-5 py-2 border-2 border-gray-800 rounded-full bg-gray-800 text-white hover:scale-110 transition-transform duration-200 font-semibold">
                    LLM
                  </div>
                  <div className="cursor-pointer px-5 py-2 border-2 border-gray-800 rounded-full bg-white text-gray-800 hover:scale-110 transition-transform duration-200 font-semibold">
                    AI Agent
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-0 order-1">
            <motion.img
              src={pic}
              alt="Profile"
              className="shadow-lg rounded-full md:w-[450px] md:h-[450px] object-cover border-4 border-gray-200"
              animate={{
                x: ["0%", "5%", "-5%", "0%"],
                y: ["0%", "5%", "-5%", "0%"],
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
      <hr className="border-gray-300" />
    </>
  );
}

export default Home;
