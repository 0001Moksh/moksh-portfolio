import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaAward,
  FaBullseye,
} from "react-icons/fa";

const aboutCards = [
  {
    id: 1,
    icon: <FaGraduationCap className="text-cyan-600 text-3xl" />,
    title: "Education & Training",
    content: (
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li>B.Tech in AI & ML, MDU University, 2027</li>
        <li>Zoho Developer Certification, Zoho Corp, 2024</li>
        <li>
          ML & Deep Learning Specialization,{" "}
          <a href="https://nexyugtech.com" target="_blank" className="underline text-cyan-600">
            NexYug Tech, 2025
          </a>
        </li>
      </ul>
    ),
    border: "border-cyan-500",
  },
  {
    id: 2,
    icon: <FaTools className="text-black text-3xl" />,
    title: "Skills & Expertise",
    content: (
      <p className="text-gray-700 space-y-1">
        <span className="font-semibold">Programming Languages:</span> Python, JavaScript, C++ <br />
        <span className="font-semibold">Zoho Development:</span> Zoho CRM, Zoho Creator, Deluge <br />
        <span className="font-semibold">AI & Data Science:</span> TensorFlow, Keras, NumPy, Pandas, Matplotlib, Seaborn <br />
        <span className="font-semibold">Web Development:</span> HTML, CSS, JavaScript <br />
        <span className="font-semibold">Automation & Integration:</span> Zapier, APIs, Webhooks
      </p>
    ),
    border: "border-black",
  },
  {
    id: 3,
    icon: <FaBriefcase className="text-green-500 text-3xl" />,
    title: "Professional Experience",
    content: (
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li>
          <span className="font-semibold">Zoho Developer – Business Raiser (2024-Present):</span> Customized Zoho CRM, AI automation, Amazon SP-API integration for MCF
        </li>
        <li>
          <span className="font-semibold">Corporate Trainer – Excel & BI (2023-Present):</span> Online sessions on Excel, Power BI, and data visualization
        </li>
      </ul>
    ),
    border: "border-green-500",
  },
  {
    id: 4,
    icon: <FaAward className="text-yellow-500 text-3xl" />,
    title: "Achievements & Awards",
    content: (
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li>Zoho Creator Expert – Workflow automation & low-code recognition</li>
        <li>Amazon Smbhav Hackathon 2024 – Sustainable logistics solution</li>
        <li>AI4Humanity Hackathon at NSUT – Human-centric AI solutions</li>
      </ul>
    ),
    border: "border-yellow-500",
  },
  {
    id: 5,
    icon: <FaBullseye className="text-red-500 text-3xl" />,
    title: "Mission Statement",
    content: (
      <p className="text-gray-700">
        Leverage AI & automation to build efficient, scalable, user-friendly solutions. Continuous learning, innovation, and helping businesses optimize workflows with Zoho and AI.
      </p>
    ),
    border: "border-red-500",
  },
];

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-12 text-center md:text-left text-gray-800">About Me</h1>
        <p className="text-gray-700 text-justify mb-12 text-lg">
          Hello, I'm <span className="font-semibold text-cyan-600">Moksh</span>, a passionate <span className="font-semibold text-cyan-600">Zoho Developer</span> and AI Enthusiast. I build intelligent, scalable solutions specializing in AI, ML, Zoho automation, and business process optimization to enhance workflow efficiency.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutCards.map(({ id, icon, title, content, border }) => (
            <motion.div
              key={id}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`bg-white shadow-lg rounded-3xl p-6 border-l-4 ${border} hover:shadow-2xl transition-all duration-500`}>
                <div className="flex items-center space-x-4 mb-4">
                  {icon}
                  <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                </div>
                <div>{content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <hr className="mt-16 border-gray-300" />
    </div>
  );
}

export default About;
