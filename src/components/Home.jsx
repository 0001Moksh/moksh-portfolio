import React from "react";
import pic from "../assets/1ig3.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import RevealSection from "./RevealSection";
import AnimatedCard from "./AnimatedCard";

function Home() {
  return (
    <>
      <motion.div
        name="Home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-36"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
          {/* LEFT SECTION */}
          <RevealSection variant="slideInLeft" className="md:w-1/2 space-y-2 order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-light-gray tracking-wide animate-reveal-up"
            >
              Welcome In My Feed
            </motion.span>

            <div className="text-4xl md:text-5xl font-bold text-dark">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-3 animate-reveal-up stagger-2"
              >
                Hello, I'm a
              </motion.h1>
              <span className="gradient-primary bg-clip-text text-3xl tracking-tight text-transparent">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ReactTyped
                    className="text-5xl font-bold text-gradient"
                    strings={["Developer", "Programmer", "Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </motion.div>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-medium-gray text-justify leading-relaxed mt-6 text-base md:text-lg animate-reveal-up stagger-3"
            >
              I am a Machine Learning and AI enthusiast specializing in Python, Scikit-learn, Keras, and TensorFlow.
              I build intelligent models, optimize data workflows, and create scalable AI-driven solutions. I also
              integrate business automation with smart AI systems using Zoho.
            </motion.p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="mt-8 space-y-6">
              <div className="animate-reveal-up stagger-4">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="font-bold text-center text-dark mb-2"
                >
                  Available On
                </motion.h2>
                <ul className="flex justify-center space-x-6">
                  {[{
                    icon: <FaInstagram />,
                    url: "https://www.instagram.com/moksh_bhardwaj23/",
                    color: "text-pink-600"
                  },{
                    icon: <FaEnvelope />,
                    url: "mailto:mokshbhardwaj2333@gmail.com",
                    color: "text-white"
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
                    color: "text-white"
                  }].map((social, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.3, rotateZ: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${social.color} text-4xl hover:brightness-400 transition-all duration-300 shadow-glow rounded-full`}
                      >
                        {social.icon}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CURRENT PROJECTS */}
              <div className="animate-reveal-up stagger-5">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="font-bold text-center text-dark mb-3"
                >
                  Currently Working On
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
  "Cloud-Native",
  "CI/CD",
  "Product Engineering",
  "AI Automation"
].map((proj, i) => (
                    <AnimatedCard key={i} hoverScale={1.08}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * i }}
                        viewport={{ once: true }}
                        className={`cursor-pointer px-5 py-2 border-2 rounded-full glass-effect shadow-glow smooth-transition font-semibold ${
                          i % 2 === 0 ? "text-white border-cyan-600" : "text-white border-primary-main"
                        }`}
                      >
                        {proj}
                      </motion.div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>

          {/* RIGHT SECTION - FLOATING IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1">
            <AnimatedCard hoverScale={1.05} hover3D={true}>
              <motion.img
                src={pic}
                alt="Profile"
                className="shadow-glow-lg rounded-full md:w-[450px] md:h-[450px] object-cover border-4 border-primary-main animate-glow-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 10, 0],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1, 1.05],
                }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "#9b8cff"
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </AnimatedCard>
          </div>
        </div>
      </motion.div>
      
    </>
  );
}

export default Home;
