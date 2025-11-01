import React from "react";
import pic from "../../public/1ig3.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        name="Home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
          {/* LEFT SECTION */}
          <div className="md:w-1/2 space-y-2 order-2 md:order-1">
            <span className="text-xl text-gray-600 tracking-wide">Welcome In My Feed</span>

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

            <p className="text-gray-700 text-justify leading-relaxed mt-6 text-base md:text-lg">
              I am a Machine Learning and AI enthusiast specializing in Python, Scikit-learn, Keras, and TensorFlow.
              I build intelligent models, optimize data workflows, and create scalable AI-driven solutions. I also
              integrate business automation with smart AI systems using Zoho.
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="mt-8 py-8 space-y-6">
              <div>
                <h2 className="font-bold text-center text-gray-800 mb-2">Available On</h2>
                <ul className="flex justify-center space-x-6">
                  {[{
                    icon: <FaInstagram />,
                    url: "https://www.instagram.com/moksh_bhardwaj23/",
                    color: "text-pink-600"
                  },{
                    icon: <FaEnvelope />,
                    url: "mailto:mokshbhardwaj2333@gmail.com",
                    color: "text-gray-800"
                  },{
                    icon: <FaLinkedin />,
                    url: "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh",
                    color: "text-blue-700"
                  },{
                    icon: <IoLogoYoutube />,
                    url: "https://www.youtube.com/@NexYugTech",
                    color: "text-red-600"
                  },{
                    icon: <FaGithub />,
                    url: "https://github.com/0001Moksh",
                    color: "text-gray-800"
                  }].map((social, i) => (
                    <li key={i}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${social.color} text-2xl hover:scale-125 hover:brightness-125 transition-transform duration-300`}
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CURRENT PROJECTS */}
              <div>
                <h2 className="font-bold text-center text-gray-800 mb-3">Currently Working On</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {["LangChain", "RAG Model", "LLM", "AI Agent"].map((proj, i) => (
                    <div
                      key={i}
                      className={`cursor-pointer px-5 py-2 border-2 border-gray-800 rounded-full ${
                        i % 2 === 0 ? "bg-gray-800 text-white" : "bg-white text-gray-800 scale-110"
                      } hover:scale-105 hover:shadow-lg transition-transform duration-200 font-semibold`}
                    >
                      {proj}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - FLOATING IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1">
            <motion.img
              src={pic}
              alt="Profile"
              className="shadow-2xl rounded-full md:w-[450px] md:h-[450px] object-cover border-4 border-gray-200"
              animate={{
                y: [0, -10, 10, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 1, 1.05],
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
