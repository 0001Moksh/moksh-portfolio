import React from "react";
import { motion } from "framer-motion";
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
    icon: <FaGraduationCap className="text-primary-dark-main text-2xl" />,
    title: "Education & Advanced Training",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-2">
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
            className="underline text-cyan-600"
          >
            (NexYug Tech, 2025)
          </a>
        </li>
        <li>
          Practical exposure to <span className="font-semibold">
            Generative AI, LLMs, LangChain, RAG pipelines, NLP & Computer Vision
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: <FaTools className="text-primary-dark-main text-2xl" />,
    title: "AI, ML & Engineering Skillset",
    content: (
      <p className="text-white-700 leading-relaxed">
        <span className="font-semibold">Programming & Backend:</span> Python, JavaScript,
        Flask, FastAPI, REST APIs <br />
        <span className="font-semibold">AI / ML Stack:</span> TensorFlow, Keras,
        Scikit-learn, OpenCV, NumPy, Pandas, Matplotlib, Seaborn <br />
        <span className="font-semibold">GenAI Systems:</span> LLMs, RAG architectures,
        LangChain, Prompt Engineering, AI Agents <br />
        <span className="font-semibold">Automation & CRM:</span> Zoho CRM, Zoho Creator,
        Deluge, Zapier, Workflow Automation <br />
        <span className="font-semibold">Deployment:</span> Model serving, API integration,
        full-stack AI product deployment
      </p>
    ),
  },
  {
    id: 3,
    icon: <FaBriefcase className="text-primary-dark-main text-2xl" />,
    title: "Professional Experience & Projects",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-2">
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
    icon: <FaAward className="text-primary-dark-main text-2xl" />,
    title: "Achievements & Industry Recognition",
    content: (
      <ul className="list-disc ml-6 text-white-700 space-y-2">
        <li>Recognized Zoho Creator Expert in low-code automation & AI workflows</li>
        <li>Amazon Smbhav Hackathon 2024 — Built sustainable AI-powered logistics solutions</li>
        <li>AI4Humanity Hackathon (NSUT) — Human-centric and ethical AI innovations</li>
        <li>Multiple AI & ML systems deployed with live demos and GitHub repositories</li>
      </ul>
    ),
  },
  {
    id: 5,
    icon: <FaBullseye className="text-primary-dark-main text-2xl" />,
    title: "Mission, Vision & Philosophy",
    content: (
      <p className="text-white-700 leading-relaxed">
        My mission is to design <span className="font-semibold">
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
    <div
      name="About"
      className="max-w-screen-xl container mx-auto px-4 md:px-16 mt-20"
    >
      <RevealSection className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Line separator reveal above title */}
          <motion.div 
            className="line-separator animate-line-reveal"
            style={{ marginTop: 0 }}
          />
          
          <h1 className="text-5xl font-bold mb-10 text-center text-white-800 animate-reveal-up">
            About Me
          </h1>
          
          {/* Decorative line below title */}
          <motion.div 
            className="line-separator animate-line-reveal"
            style={{ animationDelay: '0.3s' }}
          />

          <p className="text-white-700 text-justify mb-16 text-lg leading-relaxed animate-reveal-up stagger-1">
            Hi, I'm{" "}
            <span className="font-semibold text-cyan-600">Moksh</span> — an{" "}
            <span className="font-semibold text-cyan-600">AI & ML Engineer</span> and{" "}
            <span className="font-semibold text-cyan-600">Zoho Developer</span>{" "}
            passionate about building intelligent systems that scale.
            With <span className="font-semibold">2+ years of hands-on experience</span> in
            Artificial Intelligence, Machine Learning, Generative AI, NLP, Computer
            Vision, and full-stack development, I specialize in transforming complex
            problems into practical, production-ready AI solutions.
          </p>

          {/* Timeline */}
          <div className="relative border-l-4 border-cyan-600 ml-6 space-y-12">
            {aboutCards.map(({ id, icon, title, content, border }, index) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative ml-6 animate-reveal-up ${`stagger-${(index % 6) + 1}`}`}
              >
                <div
                  className={`absolute bg-dark -left-20 top-5 ${border} p-3 border-t-2 border-l-8 border-b-2 border-r-2 border-cyan-600 rounded-full shadow-lg shadow-glow hover-lift`}
                >
                  {icon}
                </div>

                <div className="p-6 border-2 border-l-4 border-t-4 border-cyan-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 glass-effect hover-lift">
                  <h2 className="text-2xl font-semibold text-white-800 mb-3 animate-reveal-up stagger-1">
                    {title}
                  </h2>
                  <div className="animate-reveal-up stagger-2">{content}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </RevealSection>

      
    </div>
  );
}
