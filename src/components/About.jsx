import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaAward,
  FaBullseye,
} from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold mb-10 text-center md:text-left text-gray-800">
          About Me
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-700 text-justify mb-10"
        >
          Hello, I'm{" "}
          <span className="font-semibold text-cyan-600">Moksh</span>, a
          passionate{" "}
          <span className="font-semibold text-cyan-600">Zoho Developer</span>{" "}
          and AI Enthusiast with expertise in building intelligent, scalable
          solutions. I specialize in AI, ML, Zoho automation, and business
          process optimization to enhance workflow efficiency.
        </motion.p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-6 rounded-xl shadow-lg bg-white border-l-4 border-cyan-500"
        >
          <div className="flex items-center space-x-3 mb-3">
            <FaGraduationCap className="text-cyan-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Education & Training
            </h2>
          </div>
          <ul className="list-disc ml-7 text-gray-700">
            <li>
              B.Tech in Artificial Intelligence & Machine Learning, MDU
              University, 2027
            </li>
            <li>Zoho Developer Certification, Zoho Corp, 2024</li>
            <li>
              Machine Learning & Deep Learning Specialization,{" "}
              <a
                href="https://nexyugtech.com"
                target="_blank"
                className="underline text-cyan-600"
              >
                NexYug Tech, 2025
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-6 rounded-xl shadow-lg bg-white border-l-4 border-black"
        >
          <div className="flex items-center space-x-3 mb-3">
            <FaTools className="text-black text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-gray-700">
            <span className="font-semibold">Programming Languages:</span>{" "}
            Python, JavaScript, C++ <br />
            <span className="font-semibold">Zoho Development:</span> Zoho CRM,
            Zoho Creator, Zoho Deluge <br />
            <span className="font-semibold">AI & Data Science:</span>{" "}
            TensorFlow, Keras, NumPy, Pandas, Matplotlib, Seaborn <br />
            <span className="font-semibold">Web Development:</span> HTML, CSS,
            JavaScript <br />
            <span className="font-semibold">Automation & Integration:</span>{" "}
            Zapier, APIs, Webhooks
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-6 rounded-xl shadow-lg bg-white border-l-4 border-green-500"
        >
          <div className="flex items-center space-x-3 mb-3">
            <FaBriefcase className="text-green-500 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Professional Experience
            </h2>
          </div>
          <ul className="list-disc ml-7 text-gray-700">
            <li>
              <span className="font-semibold">
                Zoho Developer – Business Raiser (2024 - Present):
              </span>{" "}
              Customized Zoho CRM for a USA client, AI-powered automation,
              integrated Amazon SP-API for MCF.
            </li>
            <li>
              <span className="font-semibold">
                Corporate Trainer – Excel & BI Tools (Freelance, 2023 - Present):
              </span>{" "}
              Conducted online sessions on Excel, Power BI, and data
              visualization.
            </li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-6 rounded-xl shadow-lg bg-white border-l-4 border-yellow-500"
        >
          <div className="flex items-center space-x-3 mb-3">
            <FaAward className="text-yellow-500 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Achievements & Awards
            </h2>
          </div>
          <ul className="list-disc ml-7 text-gray-700">
            <li>
              Zoho Creator Expert – Recognized for workflow automation and
              low-code development
            </li>
            <li>
              Amazon Smbhav Hackathon 2024 Participant – Sustainable logistics
              solutions
            </li>
            <li>
              AI4Humanity Hackathon at NSUT University – Contributed AI
              solutions for human-centric problems
            </li>
          </ul>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-6 rounded-xl shadow-lg bg-white border-l-4 border-red-500"
        >
          <div className="flex items-center space-x-3 mb-3">
            <FaBullseye className="text-red-500 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Mission Statement
            </h2>
          </div>
          <p className="text-gray-700">
            My mission is to leverage AI and automation to develop efficient,
            scalable, and user-friendly solutions. I am committed to continuous
            learning, innovation, and helping businesses optimize workflows with
            Zoho and AI.
          </p>
        </motion.div>
      </motion.div>
      <hr className="mt-10 border-gray-300" />
    </div>
  );
}

export default About;
