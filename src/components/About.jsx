import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from './RevealSection';
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
    icon: <FaGraduationCap className="text-primary-dark-main text-3xl" />,
    title: "Education & Advanced Training",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-3 text-[15px] leading-relaxed">
        <li>
          <span className="font-semibold">B.Tech in Artificial Intelligence & Machine Learning</span>,
          MDU University — <span className="italic">2023–2027</span>
        </li>
        <li>
          <span className="font-semibold">Zoho Developer Certified</span>, Zoho Corporation — 2024
        </li>
        <li>
          <span className="font-semibold">AI & Deep Learning Specialization</span>{" "}
          <a
            href="https://nexyugtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary hover:text-primary-dark-main transition-colors"
          >
            (NexYug Tech, 2025)
          </a>
        </li>
        <li>
          Practical exposure to{" "}
          <span className="font-semibold">
            Generative AI, LLMs, LangChain, RAG pipelines, NLP & Computer Vision
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: <FaTools className="text-primary-dark-main text-3xl" />,
    title: "AI, ML & Engineering Skillset",
    content: (
      <div className="text-white-700 leading-relaxed text-[15px] space-y-4">
        <div>
          <span className="font-semibold text-white block mb-1">Programming & Backend:</span>
          Python, JavaScript, Flask, FastAPI, REST APIs
        </div>
        <div>
          <span className="font-semibold text-white block mb-1">AI / ML Stack:</span>
          TensorFlow, Keras, Scikit-learn, OpenCV, NumPy, Pandas, Matplotlib, Seaborn
        </div>
        <div>
          <span className="font-semibold text-white block mb-1">GenAI Systems:</span>
          LLMs, RAG architectures, LangChain, Prompt Engineering, AI Agents
        </div>
        <div>
          <span className="font-semibold text-white block mb-1">Automation & CRM:</span>
          Zoho CRM, Zoho Creator, Deluge, Zapier, Workflow Automation
        </div>
        <div>
          <span className="font-semibold text-white block mb-1">Deployment:</span>
          Model serving, API integration, full-stack AI product deployment
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: <FaBriefcase className="text-primary-dark-main text-3xl" />,
    title: "Professional Experience & Projects",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-3 text-[15px] leading-relaxed">
        <li>
          <span className="font-semibold">
            Zoho Developer — Business Raiser (2024–Present):
          </span>{" "}
          Designed and customized Zoho CRM solutions, integrated AI-powered
          automation, Amazon SP-API workflows, and data-driven analytics to
          improve sales and operational efficiency.
        </li>
        <li>
          <span className="font-semibold">
            Corporate Trainer — Excel & BI (2023–Present):
          </span>{" "}
          Delivered professional training on data analysis, visualization,
          automation, Python, and AI-driven business intelligence.
        </li>
        <li>
          <span className="font-semibold">Key AI Projects:</span> Deva AI Chatbot,
          AI Resume Analyzer, AI Interview System, Diabetes Prediction App,
          HaritAI (Sustainability AI), WhatsApp Automation Systems, and
          production-ready full-stack AI applications.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: <FaAward className="text-primary-dark-main text-3xl" />,
    title: "Achievements & Industry Recognition",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-3 text-[15px] leading-relaxed">
        <li>Recognized Zoho Creator Expert in low-code automation & AI workflows</li>
        <li>Amazon Smbhav Hackathon 2024 — Built sustainable AI-powered logistics solutions</li>
        <li>AI4Humanity Hackathon (NSUT) — Human-centric and ethical AI innovations</li>
        <li>Multiple AI & ML systems deployed with live demos and GitHub repositories</li>
      </ul>
    ),
  },
  {
    id: 5,
    icon: <FaBullseye className="text-primary-dark-main text-3xl" />,
    title: "Mission, Vision & Philosophy",
    content: (
      <p className="text-white-700 leading-relaxed text-[15px]">
        My mission is to design{" "}
        <span className="font-semibold text-white">
          intelligent, ethical, and scalable AI systems
        </span>{" "}
        that solve real-world problems. I focus on combining AI, ML, and automation
        to enhance decision-making, streamline workflows, and create measurable
        business impact. I strongly believe in continuous learning, innovation,
        and contributing to the global AI community through practical solutions.
      </p>
    ),
  },
];

export default function About() {
  return (
    <div name="About" className="bg-bg-primary relative overflow-hidden py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <RevealSection>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Premium separator */}
            <motion.div
              className="inline-flex items-center gap-3 mb-6 bg-purple-950/70 px-8 py-3 rounded-full border border-primary/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
              <span className="uppercase tracking-[6px] text-xs font-semibold text-primary">MY JOURNEY</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4 text-gradient">
              About Me
            </h1>

            <p className="text-muted text-xl max-w-2xl mx-auto">
              Hi, I’m <span className="font-semibold text-white">Moksh</span> — an AI & ML Engineer and Zoho Developer.
              Turning complex problems into production-ready intelligent systems.
            </p>
          </motion.div>
        </RevealSection>

        {/* Enhanced Vertical Timeline - Best UX */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous glowing line */}
          <div className="absolute left-8 top-10 bottom-10 w-[3px] bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full z-0" />

          {aboutCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 10 }}
              className="relative mb-20 last:mb-0 group"
            >
              {/* Icon Circle - Always visible & glowing on hover */}
              <div className="absolute left-6 -translate-x-1/2 top-6 z-20">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-bg-tertiary border-4 border-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:shadow-purple-lg transition-all"
                >
                  {card.icon}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="ml-20 bg-bg-tertiary border border-primary/30 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter">
                  {card.title}
                </h2>
                <div className="text-white-700">{card.content}</div>
              </div>

              {/* Decorative year badge (for first & third card only as example) */}
              {index === 0 && (
                <div className="absolute -top-4 right-8 bg-primary text-black text-xs font-bold px-5 py-1 rounded-full shadow-glow">
                  2023–2027
                </div>
              )}
              {index === 2 && (
                <div className="absolute -top-4 right-8 bg-primary text-black text-xs font-bold px-5 py-1 rounded-full shadow-glow">
                  2024–Present
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}