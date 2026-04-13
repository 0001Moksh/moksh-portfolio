import React from "react";
import pic from "../assets/1ig3.png"; // ← Your purple-hoodie AI avatar
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import { Link } from "react-scroll";
import { SEOHelmet } from "../hooks/useSEO";

function Home() {
  return (
    <>
      <SEOHelmet pageKey="home" />

      {/* HERO - 100% MATCHING YOUR MOCKUP + YOUR OFFICIAL COLOR SYSTEM */}
      <motion.main
        name="Home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 md:pt-0"
        role="main"
        aria-label="Hero section"
      >
        {/* Background using your global particle system + custom orbs from :root */}
        <div className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10">
          {/* Orb 1 - Primary Purple */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
          {/* Orb 2 - Teal Accent */}
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1.8s" }} />
          {/* Orb 3 - Accent Pink */}
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-pink/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-12 lg:pt-10">

            {/* LEFT - TEXT (Modern AI Hero Section) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2 space-y-6 z-10"
            >

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Building Intelligent
                </span>
                <br />
                <span className="text-white">
                  Digital Experiences
                </span>
              </h1>

              {/* Subtext */}
              <p className="max-w-xl text-lg md:text-sm text-gray-300 leading-relaxed">
                I design and develop <span className="text-purple-400 md:text-lg font-semibold">AI-powered systems </span>
                and scalable web applications using{" "}
                <span className="text-cyan-400  md:text-lg font-semibold">Machine Learning</span>,{" "}
                <span className="text-pink-400 md:text-lg font-semibold">Generative AI</span>, and{" "}
                <span className="text-teal-400 md:text-lg font-semibold">Modern Full Stack</span>.
                <br />
                Turning complex ideas into real-world products.
              </p>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">

                {/* Primary */}
                <Link to="Project" smooth duration={700} offset={-80}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full justify-center text-sm sm:text-base
        px-4 sm:px-8 py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-purple-500 to-cyan-500 
        shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 
        transition-all duration-300 flex items-center gap-2"
                  >
                    Explore Work
                    <span className="text-lg sm:text-xl">→</span>
                  </motion.button>
                </Link>

                {/* Secondary */}
                <Link to="Contact" smooth duration={700} offset={-80}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full justify-center text-sm sm:text-base
        px-4 sm:px-8 py-3 rounded-xl font-semibold text-white 
        border border-white/20 bg-white/5 backdrop-blur-md
        hover:border-purple-400 hover:bg-white/10
        transition-all duration-300 flex items-center gap-2"
                  >
                    Let's Connect
                    <span className="text-lg sm:text-xl">✉</span>
                  </motion.button>
                </Link>

              </div>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 text-center">

                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">3+</p>
                  <p className="text-xs sm:text-base text-gray-400">Years Experience</p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">15+</p>
                  <p className="text-xs sm:text-base text-gray-400">Projects Built</p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">AI</p>
                  <p className="text-xs sm:text-base text-gray-400">Specialization</p>
                </div>

              </div>
            </motion.div>

            {/* RIGHT - FUTURISTIC AVATAR HUD (UPGRADED 🔥) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:w-1/2 flex justify-center relative z-10"
            >
              <AnimatedCard hoverScale={1.05} hover3D={true}>
                <div className="mb-36 lg:mb-0 relative w-[320px] md:w-[400px] lg:w-[460px] aspect-square">

                  {/* 🌌 Background Pulse Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-teal-400/20 to-pink-500/20 blur-3xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* 🌀 Rotating SVG Rings (Premium Look) */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="90" stroke="#2dd4bf40" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="100" r="70" stroke="#a855f740" strokeWidth="2" fill="none" />
                    </svg>
                  </motion.div>

                  {/* 🔁 Reverse Ring */}
                  <motion.div
                    className="absolute inset-6"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="60" stroke="#ec489940" strokeWidth="2" fill="none" />
                    </svg>
                  </motion.div>

                  {/* 👤 Avatar Frame */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-[10px] border-purple-400/20">

                    {/* 📡 Scan Line Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/90 to-transparent"
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <motion.img
                      src={pic}
                      alt="Moksh Bhardwaj - AI Engineer"
                      className="w-full h-full object-cover scale-110"
                      animate={{ y: [0, -10, 10, 0], scale: [1.1, 1.12, 1.1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* 🧠 AI Status Panel */}
                  <motion.div
                    className="absolute -top-8 left-6 bg-zinc-900/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-teal-400/40 text-teal-300 text-xs font-mono shadow-xl"
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    STATUS: TRAINING ⚡
                  </motion.div>

                  {/* ⚙️ API Call */}
                  <motion.div
                    className="absolute -bottom-6 right-10 bg-zinc-900/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-purple-400/40 text-purple-300 text-xs font-mono shadow-xl"
                    animate={{ y: [6, -6, 6] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    End to End Project... 200 OK ✅
                  </motion.div>

                  {/* 📊 Model Stats */}
                  <motion.div
                    className="absolute hidden lg:block -left-12 bottom-16 w-44 bg-zinc-950/90 backdrop-blur-xl p-3 rounded-xl border border-teal-400/30 text-[10px] font-mono text-teal-300 shadow-xl"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Epoch: 42 <br />
                    Loss: 0.021 <br />
                    Accuracy: 98.7%
                  </motion.div>

                  {/* 🧬 Neural Tag */}
                  <motion.div
                    className="absolute top-20 -left-10 bg-zinc-900/80 backdrop-blur-xl px-4 py-1.5 rounded-3xl border border-pink-400/30 text-pink-400 text-xs font-medium flex items-center gap-2 shadow-xl"
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🤖 Gen AI
                  </motion.div>

                  {/* 🧬 Neural Tag */}
                  <motion.div
                    className="absolute top-20 -right-10 bg-zinc-900/80 backdrop-blur-xl px-4 py-1.5 rounded-3xl border border-pink-400/30 text-pink-400 text-xs font-medium flex items-center gap-2 shadow-xl"
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🧠 Neural Network
                  </motion.div>

                  {/* ✨ Orbit Particles */}
                  <motion.div
                    className="absolute w-3 h-3 bg-teal-400 rounded-full"
                    animate={{
                      x: [0, 120, 0, -120, 0],
                      y: [120, 0, -120, 0, 120],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ top: "50%", left: "50%" }}
                  />

                  <motion.div
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      x: [0, -100, 0, 100, 0],
                      y: [-100, 0, 100, 0, -100],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ top: "50%", left: "50%" }}
                  />

                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade using your gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
      </motion.main>
    </>
  );
}

export default Home;