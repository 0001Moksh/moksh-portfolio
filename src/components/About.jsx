import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from './RevealSection';
import { SEOHelmet } from "../hooks/useSEO";
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
    title: "Formal Education & Certifications",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-2 text-[15px] leading-relaxed">
        <li>B.Tech in Artificial Intelligence & Machine Learning (MDU University, 2023–2027)</li>
        <li>Zoho Developer Certified (Zoho Corporation, 2024)</li>
        <li>AI & Deep Learning Specialization (NexYug Tech, 2025)</li>
        <li>Expertise: Generative AI, LLMs, LangChain, RAG systems, NLP, Computer Vision</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: <FaTools className="text-primary-dark-main text-3xl" />,
    title: "Core Technology Stack",
    content: (
      <div className="text-white-700 leading-relaxed text-[15px] space-y-3">
        <p><span className="font-semibold text-white">Languages & Backend:</span> Python, JavaScript, REST APIs, Flask, FastAPI</p>
        <p><span className="font-semibold text-white">Machine Learning:</span> TensorFlow, Keras, Scikit-learn, PyTorch, OpenCV, XGBoost</p>
        <p><span className="font-semibold text-white">AI Specialization:</span> LLMs, RAG architectures, LangChain, Prompt Engineering, AI Agents</p>
        <p><span className="font-semibold text-white">Automation & Low-Code:</span> Zoho CRM, Zoho Creator, Zapier, Workflow Automation</p>
        <p><span className="font-semibold text-white">Data & Analytics:</span> Pandas, NumPy, Matplotlib, Seaborn, Power BI, Excel</p>
      </div>
    ),
  },
  {
    id: 3,
    icon: <FaBriefcase className="text-primary-dark-main text-3xl" />,
    title: "Professional Work & Deployments",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-2 text-[15px] leading-relaxed">
        <li><span className="font-semibold">Zoho Business Developer</span> — Customized Zoho CRM, implemented AI workflows, Amazon SP-API integration, data analytics (2024–Present)</li>
        <li><span className="font-semibold">Corporate Trainer</span> — Python, Data Analysis, AI, Excel, BI tools, Business Intelligence (2023–Present)</li>
        <li><span className="font-semibold">Deployed AI Systems:</span> Deva AI Chatbot, Resume Analyzer, Interview System, Diabetes Predictor, HaritAI (Sustainability), WhatsApp Automation</li>
        <li><span className="font-semibold">Architecture:</span> Full-stack AI applications with model serving, API integration, production deployment</li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: <FaAward className="text-primary-dark-main text-3xl" />,
    title: "Recognition & Achievements",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-2 text-[15px] leading-relaxed">
        <li>Zoho Creator Expert — Low-code automation and AI workflow specialist</li>
        <li>Amazon Smbhav Hackathon 2024 — Built sustainable AI logistics solution</li>
        <li>AI4Humanity Hackathon (NSUT) — Developed ethical, human-centric AI innovations</li>
        <li>15+ production AI projects deployed with open-source GitHub repositories</li>
      </ul>
    ),
  },
  {
    id: 5,
    icon: <FaBullseye className="text-primary-dark-main text-3xl" />,
    title: "Mission & Philosophy",
    content: (
      <div className="text-white-700 leading-relaxed text-[15px] space-y-3">
        <p><span className="font-semibold text-white">Core Mission:</span> Design intelligent, ethical, and scalable AI systems that solve real-world problems and create measurable business impact.</p>
        <p><span className="font-semibold text-white">Approach:</span> Combine AI, machine learning, and automation to enhance decision-making, streamline workflows, and build sustainable solutions.</p>
        <p><span className="font-semibold text-white">Philosophy:</span> Continuous learning, ethical innovation, and contributing to the global AI community through practical, production-ready systems.</p>
      </div>
    ),
  },
];

export default function About() {
  return (
    <section name="About" className="bg-bg-primary relative overflow-hidden py-24" aria-label="About me section">
      <SEOHelmet pageKey="about" />
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

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4 text-gradient">
              About Me
            </h2>

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
            <motion.article
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
                  className="w-16 h-16 bg-dark border-4 border-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:shadow-purple-lg transition-all"
                >
                  {card.icon}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="ml-20 bg-bg-tertiary border border-primary/30 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter">
                  {card.title}
                </h3>
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}