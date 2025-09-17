import React from "react";
import pic from "../../public/1ig3.png";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { SiScipy, SiKeras, SiTensorflow, SiScikitlearn } from "react-icons/si";
import { motion } from "framer-motion";

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
          <div className="md:w-1/2 mt-12 md:mt-10 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>

            <div className="flex space-x-1 text-2xl md:text-4xl">
              <div className="">
                <h1 className="lg:text-3xl text-5xl mb-5">Hello, I'm a</h1>
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
            </div>

            <br />

            <p className="text-sm md:text-md text-justify">
              I am a Machine Learning and AI enthusiast with expertise in Python, Scikit-learn, Keras, and TensorFlow. My focus is on developing intelligent models, optimizing data workflows, and creating scalable AI-driven solutions. With a strong foundation in web development and automation, I strive to bridge the gap between AI and real-world applications. Additionally, I specialize in Zoho development, integrating business automation with smart AI solutions.
            </p>

            <br />

            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-col justify-between space-y-10 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li><a href="https://www.instagram.com/moksh_bhardwaj23/" target="_blank"><FaInstagram className="text-2xl cursor-pointer" /></a></li>
                  <li><a href="https://www.linkedin.com/in/moksh-bhardwaj-0001moksh" target="_blank"><FaLinkedin className="text-2xl cursor-pointer" /></a></li>
                  <li><a href="https://www.youtube.com/@NexYugTech" target="_blank"><IoLogoYoutube className="text-2xl cursor-pointer" /></a></li>
                  <li><a href="https://github.com/0001Moksh" target="_blank"><FaGithub className="text-2xl cursor-pointer" /></a></li>
                </ul>
              </div>
           <div className="space-y-2">
  <h1 className="font-bold text-center text-gray-800">Currently working on</h1>
  <div className="flex space-x-5 justify-center">
    {/* LangChain */}
    <div className="text-center cursor-pointer p-3 border-2 border-black rounded-full hover:scale-110 duration-200 bg-black text-white font-semibold">
      LangChain
    </div>

    {/* RAG Model */}
    <div className="text-center cursor-pointer p-3 border-2 border-black rounded-full hover:scale-110 duration-200 bg-white text-black font-semibold">
      RAG Model
    </div>

    {/* LLM */}
    <div className="text-center cursor-pointer p-3 border-2 border-black rounded-full hover:scale-110 duration-200 bg-black text-white font-semibold">
      LLM
    </div>

    {/* AI Agent */}
    <div className="text-center cursor-pointer p-3 border-2 border-black rounded-full hover:scale-110 duration-200 bg-white text-black font-semibold">
      AI Agent
    </div>
  </div>
</div>

            </div>
          </div>

          {/* 3D floating profile image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start sm:flex md:ml-48 md:mt-0 mt-8 order-1">
            <motion.img
              src={pic}
              alt="Profile"
              className="shadow-lg rounded-full md:w-[500px] md:h-[480px] object-cover"
              animate={{
                x: ["0%", "5%", "-5%", "0%"],
                y: ["0%", "5%", "-5%", "0%"],
                rotateY: [0, 15, -15, 0],
                rotateX: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>

      <hr />
    </>
  );
}

export default Home;
