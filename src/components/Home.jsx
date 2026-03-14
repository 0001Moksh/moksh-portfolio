import React from "react";
import pic from "../assets/1ig3.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import RevealSection from "./RevealSection";
import AnimatedCard from "./AnimatedCard";
import { Link } from "react-scroll";
import { SEOHelmet } from "../hooks/useSEO";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <SEOHelmet pageKey="home" />
      <motion.main
        name="Home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-4 md:px-0"
        role="main"
        aria-label="Hero section"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.75s" }} />
        </div>

        <div className="max-w-screen-2xl w-full">
          
          <div className="flex flex-col pt-24 pb-20 pl-20 lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
            {/* LEFT SECTION */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/2 space-y-8 order-2 lg:order-1"
            >
              {/* Main Title */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                  <span>AI Engineer &</span>
                  <br />
                  <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Building intelligent systems with 3+ years of experience in <span className="text-purple-400 font-semibold">Machine Learning</span>, 
                <span className="text-cyan-400 font-semibold"> Generative AI</span>, and 
                <span className="text-teal-400 font-semibold"> Full-Stack Development</span>. 
                Transforming ideas into production-ready applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link to="Project" smooth={true} duration={500}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm cursor-pointer w-full sm:w-auto text-center"
                  >
                    View Projects ↗
                  </motion.button>
                </Link>
                
                <Link to="Contact" smooth={true} duration={500}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl shadow-lg border border-white/20 hover:border-purple-400/60 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer w-full sm:w-auto text-center"
                  >
                    Get In Touch ✉
                  </motion.button>
                </Link>
              </motion.div>
             
            </motion.div>

            {/* RIGHT SECTION - FLOATING IMAGE */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 flex justify-center order-1 lg:order-2"
            >
              <AnimatedCard hoverScale={1.05} hover3D={true}>
                <motion.div
                  className="relative w-full max-w-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-cyan-600/40 rounded-3xl blur-3xl" />
                  
                  <motion.img
                    src={pic}
                    alt="Moksh Bhardwaj"
                    className="relative w-full rounded-3xl rounded-full border-b-4 object-cover aspect-square"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -15, 15, 0],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                  />
                </motion.div>
              </AnimatedCard>
            </motion.div>
          </div>
           {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 py-8 border-b border-t border-white/10"
              >
                {[
                  { number: "15+", label: "Projects" },
                  { number: "3+", label: "Years" },
                  { number: "50+", label: "Technologies" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
        </div>
      </motion.main>
    </>
  );
}

export default Home;
