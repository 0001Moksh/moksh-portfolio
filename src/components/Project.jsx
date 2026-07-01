import { FiChevronDown } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaGithub, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { MdPlayCircle } from "react-icons/md";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import TechBadge from "./TechBadge";
import { SEOHelmet } from "../hooks/useSEO";

// Import images
import Deva from "../assets/deva_ai.png";
import Chatbot from "../assets/chatbot.png";
import haritai from "../assets/haritai.png";
import voice_chatbot from "../assets/deva-voice.png";
import ai_interviewer from "../assets/ai_interviewer.png";
import diabetes from "../assets/diabetes.png";
import resume_analyzer from "../assets/resume_analyzer.png";
import ai_filter_medicine from "../assets/ai_filter_medicine.png";
import Symptoms_to_Medicine from "../assets/Symptoms_to_Medicine.png";
import import_medicine from "../assets/Import_Medicine.png";
import Seema_iq from "../assets/seema_iq_logo.png";
import Aushadhi360 from "../assets/aushadhi360.png";
import OutreachXDeva from "../assets/OutreachXDeva.png";
import Deva_Admin from "../assets/deva-admin.png";
import Deva_BI from "../assets/deva-bi.png";

// ── Animated Project Card ───────────────────────────────────────────────────
function CinematicCard({ project, index, onInfoClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);

  // Alternate fly-in direction per card index
  const directions = [
    { x: -120, y: 60, rotate: -6 },
    { x: 0,   y: 120, rotate: 0  },
    { x: 120, y: 60, rotate: 6  },
    { x: -80, y: 100, rotate: -4 },
    { x: 80,  y: 100, rotate: 4 },
    { x: 0,   y: 80,  rotate: 0 },
  ];
  const dir = directions[index % directions.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.82 }}
      animate={isInView
        ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
        : { opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.82 }
      }
      transition={{
        duration: 0.75,
        delay: (index % 6) * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        zIndex: isHovered ? 40 : 'auto',
      }}
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ── SEO structured data (hidden) ── */}
      <meta itemProp="name" content={project.name} />
      <meta itemProp="description" content={project.overview.description} />
      {project.liveDemoUrl && <meta itemProp="url" content={project.liveDemoUrl} />}
      {project.githubUrl && <link itemProp="codeRepository" href={project.githubUrl} />}
      <meta itemProp="applicationCategory" content={project.category} />
      {project.overview.techStack && (
        <meta itemProp="keywords" content={project.overview.techStack.join(", ")} />
      )}

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899, #06b6d4)" }}
      />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3" onClick={() => onInfoClick(project)}>
        {/* Project preview image: fixed reserved area to avoid layout shift; low opacity by default, full on hover */}
        <div className="relative overflow-hidden rounded-xl h-36 transition-all duration-500">
          <img
            src={project.image || project.logo}
            alt={`${project.name} preview`}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-60'}`}
            loading="lazy"
            style={{ transformOrigin: 'center' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {/* Logo + Category */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
            style={{
              background: "rgba(168,85,247,0.15)",
              border: "1px solid rgba(168,85,247,0.30)",
              color: "#d8b4fe",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-bold text-white leading-tight"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
          itemProp="name"
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2 flex-1"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {project.overview.description}
        </p>

        {/* Tech stack preview */}
        {project.overview.techStack && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.overview.techStack.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{
                  background: "rgba(6,182,212,0.10)",
                  border: "1px solid rgba(6,182,212,0.20)",
                  color: "#67e8f9",
                }}
              >
                {t}
              </span>
            ))}
            {project.overview.techStack.length > 3 && (
              <span
                className="text-xs px-2 py-0.5 rounded-md"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
              >
                +{project.overview.techStack.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 mt-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Details */}
          <motion.button
            onClick={() => onInfoClick(project)}
            whileTap={{ scale: 0.94 }}
            className="flex-1 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 flex items-center justify-center gap-1.5"
            style={{
              background: "linear-gradient(135deg, rgba(168,85,247,0.30), rgba(236,72,153,0.20))",
              border: "1px solid rgba(168,85,247,0.35)",
            }}
          >
            Details
          </motion.button>

          {/* Video button — only if videoUrl exists */}
          {project.videoUrl && (
            <motion.a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.94 }}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, rgba(20,184,166,0.30), rgba(6,182,212,0.20))",
                border: "1px solid rgba(20,184,166,0.35)",
                color: "#5eead4",
              }}
              title="Watch Video"
            >
              <MdPlayCircle size={15} />
              <span>Video</span>
            </motion.a>
          )}

          {/* Live Demo */}
          {project.liveDemoUrl && (
            <motion.a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.94 }}
              className="flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                color: "rgba(255,255,255,0.6)",
              }}
              title="Live Demo"
            >
              <FaExternalLinkAlt size={11} />
            </motion.a>
          )}

          {/* GitHub */}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.94 }}
              className="flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                color: "rgba(255,255,255,0.6)",
              }}
              title="GitHub"
            >
              <FaGithub size={13} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section heading with cinematic reveal ──────────────────────────────────
function SectionTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = ["My", "Projects"];

  return (
    <div ref={ref} className="text-center mb-3">
      <div className="overflow-hidden mb-2">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="line-separator"
          style={{ transformOrigin: "left", marginTop: 0 }}
        />
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {words.map((word, wi) => (
          <div key={word} className="overflow-hidden">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: wi * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
              style={{
                fontSize: "clamp(3rem, 8vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #a855f7 70%, #d8b4fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="line-separator"
        style={{ transformOrigin: "right", animationDelay: "0.3s", marginTop: "1rem" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-lg text-light-gray max-w-2xl mx-auto mt-4"
      >
        Explore my portfolio of innovative projects, featuring live demos, detailed overviews, and cutting-edge technologies.
      </motion.p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const modalRef = useRef(null);

  const cardItem = [
    {
      id: 18,
      logo: Deva_BI,
      image: Deva_BI,
      name: "Deva AI: Business Insight Creator",
      category: "AI & Productivity",
      overview: {
        description:
          "A fully autonomous AI-powered Business Intelligence agent that transforms raw datasets into actionable insights, visualizations, and predictive analytics using Agentic workflows and LLM reasoning.",
        features: [
          "Autonomous CSV ingestion with metadata extraction (shape, nulls, duplicates)",
          "LangGraph-based agentic workflows for multi-step data analysis",
          "Dynamic dashboard with charts (bar, line, scatter, heatmap, pie)",
          "Context-aware conversational AI over uploaded datasets",
          "Predictive forecasting and trend analysis using ML",
          "One-click PDF report generation from dashboard",
          "Asynchronous email feedback system using background tasks",
          "Secure sandboxed data processing with in-memory session handling",
        ],
        techStack: [
          "React.js (Vite)", "FastAPI", "Python", "Pandas", "Recharts",
          "Framer Motion", "LangChain", "LangGraph", "LangSmith",
          "Groq API (LLaMA 3.1 / Mixtral)", "Uvicorn", "SMTP",
        ],
      },
      githubUrl: "https://github.com/0001Moksh/AI-Agent-For-Business-Insights",
      liveDemoUrl: "https://deva-ai-business-insight-creator.vercel.app",
      videoUrl: "https://www.linkedin.com/posts/moksh-bhardwaj_ai-machinelearning-dataanalytics-ugcPost-7448963248583995392-DM9j",
    },
    {
      id: 19,
      logo: OutreachXDeva,
      image: OutreachXDeva,
      name: "OutreachX Deva",
      category: "Agentic AI & AI Infrastructure",
      overview: {
        description:
          "A production-ready multi-agent AI cold outreach platform that automates lead research, email personalization, campaign generation, analytics, and AI-powered sales workflows using an enterprise-grade agent architecture.",
        features: [
          "Multi-agent architecture with Campaign, Research, Lead, Template, Analysis, and General Agents.",
          "AI-powered personalized cold email generation for every prospect.",
          "Automated company and lead research using LLMs and web intelligence.",
          "Bulk outreach campaign management with customizable templates.",
          "Analytics dashboard for campaign performance and optimization.",
          "LLM routing and multi-provider support through LiteLLM.",
          "Scalable AI infrastructure with FastAPI backend and modern React frontend.",
        ],
        techStack: [
          "React",
          "FastAPI",
          "Python",
          "LangGraph",
          "LiteLLM",
          "Google Gemini",
          "Groq",
          "OpenRouter",
          "MongoDB",
          "Docker",
          "SMTP",
          "JWT",
        ],
      },
      githubUrl: "https://github.com/0001Moksh/OutreachX-AI-Cold-Mail-Sender",
      liveDemoUrl: "https://outreachx-deva.vercel.app/",
      videoUrl:
        "https://www.linkedin.com/posts/moksh-bhardwaj_ai-agenticai-generativeai-ugcPost-7477763206741118976-vnWq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
    },
    {
      id: 17,
      logo: Deva_Admin,
      image: Deva_Admin,
      name: "Deva: AI Admin Chatbot",
      category: "AI & Education",
      overview: {
        description:
          "An AI-powered Admin Assistant designed for academic project management, enabling administrators to manage students, supervisors, teams, and projects using natural language with an Agentic architecture.",
        features: [
          "Natural language-based CRUD operations for Students, Supervisors, Teams & Projects",
          "Agentic workflow using LangGraph for multi-step reasoning and task execution",
          "Interactive UI actions (dropdown selection & confirmation prompts)",
          "Dynamic team creation, project assignment & supervisor workload handling",
          "Fail-safe deletion system with confirmation UI for secure operations",
          "Real-time analytics (total students, supervisors, active projects)",
          "Session-based conversational memory for continuous admin workflows",
          "Custom action parser converting LLM outputs into UI components",
        ],
        techStack: [
          "React.js", "FastAPI", "PostgreSQL", "LangChain",
          "LangGraph", "LangSmith", "Groq API (LLaMA 3.3 70B)", "WebSockets", "psycopg2",
        ],
      },
      githubUrl: "https://github.com/0001Moksh/deva-ai-agent",
      videoUrl: "https://www.linkedin.com/posts/moksh-bhardwaj_deva-ai-academic-admin-assistant-deva-ugcPost-7449148819079856128-Gnkh",
    },
    {
      id: 15,
      logo: Aushadhi360,
      image: Aushadhi360,
      name: "Aushadhi 360",
      category: "AI & Healthcare",
      overview: {
        description:
          "A complete medical store software workflow designed to support pharmacists, improve safety, and modernize pharmacy operations with AI-assisted features.",
        features: [
          "Secure, role-based login for store owners and admins.",
          "Dashboard with manual & AI search, plus low stock/expiry alerts.",
          "Offline billing with automated calculations and email invoices.",
          "AI-driven, symptom-based OTC medicine recommendations.",
          "Stock import from bill photos using OCR technology.",
          "Automated alerts and reporting for inventory management.",
          "Chatbot for exporting disease-wise medicine lists.",
        ],
        techStack: [
          "React", "Node.js", "Python", "Flask", "MongoDB",
          "Google Gemini AI", "OCR Technology", "SMTP",
        ],
      },
      githubUrl: "https://github.com/0001Moksh/aushadhi-360",
      liveDemoUrl: "https://aushadhi-360.vercel.app/",
      videoUrl: "https://youtu.be/pl2SnZezJK0?si=B2gW4O6ztwNBBjwj",
    },
    {
      id: 14,
      logo: Seema_iq,
      image: Seema_iq,
      name: "Seema IQ",
      category: "AI & Productivity",
      overview: {
        description:
          "An AI-powered interview preparation platform with resume parsing, multi-round interviews, and real-time feedback.",
        features: [
          "Email-based authentication",
          "Resume upload & auto-profile generation",
          "HR, Expert & Manager interview rounds",
          "AI-generated questions & feedback",
          "Break & resume interview flow",
        ],
        techStack: [
          "Next.js", "React", "TypeScript", "MongoDB",
          "Google Gemini API", "Google Services", "SMTP",
        ],
      },
      githubUrl: "https://github.com/0001Moksh/seemaIQ",
      liveDemoUrl: "https://seema-iq.vercel.app/",
    },
    {
      id: 13,
      logo: import_medicine,
      image: import_medicine,
      name: "Import Medicine",
      category: "AI & Data Management",
      overview: {
        description: "Medicine inventory management app with AI enrichment and batch validation.",
        features: ["Excel upload & validation", "MongoDB updates", "AI-powered data enrichment"],
        techStack: ["Python", "Flask", "MongoDB", "Google Gemini AI"],
      },
      githubUrl: "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Import%20Medicine%20using%202%20LLm",
    },
    {
      id: 12,
      logo: Symptoms_to_Medicine,
      image: Symptoms_to_Medicine,
      name: "Symptoms to Medicine",
      category: "AI & Healthcare",
      overview: {
        description: "AI-powered medicine recommendation web app using semantic search and GenAI guidance.",
        features: ["Natural language queries", "Structured JSON output", "Doctor-style guidance"],
        techStack: ["Python", "Flask", "dotenv", "SentenceTransformer", "FAISS", "Google Gemini AI"],
      },
      githubUrl: "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Symptoms%20to%20Medicine%20using%20langchain%20%2B%201%20LLM",
    },
    {
      id: 11,
      logo: ai_filter_medicine,
      image: ai_filter_medicine,
      name: "Medicine Filtering",
      category: "AI & Search",
      overview: {
        description: "Intelligent medicine retrieval via fuzzy matching and semantic vector search.",
        features: ["Batch ID & name search", "Typo tolerance", "Semantic similarity ranking"],
        techStack: ["Python", "Flask", "FAISS", "SentenceTransformer", "RapidFuzz"],
      },
      githubUrl: "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Medicine%20Filtering%20using%20Embedding%20%2B%20Vector%20DB",
    },
    {
      id: 10,
      logo: resume_analyzer,
      image: resume_analyzer,
      name: "AI Resume Analyzer",
      category: "AI & Productivity",
      overview: {
        description: "Streamlined resume evaluation with ML-based insights and MongoDB storage.",
        features: ["PDF/DOCX upload", "Structured data extraction", "Interactive query chat"],
        techStack: ["Python", "Flask", "MongoDB", "Google Generative AI"],
      },
      githubUrl: "https://github.com/0001Moksh/AI-Resume-Analyzer",
      liveDemoUrl: "https://ai-resume-analyzer-9jxc.onrender.com/",
      videoUrl: "https://www.linkedin.com/posts/moksh-bhardwaj-0001moksh_resumeanalyzer-recruitment-hrtech-activity-7375703203616817152-Tekt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
    },
    {
      id: 8,
      logo: diabetes,
      image: diabetes,
      name: "Diabetes Prediction App",
      category: "ML & Healthcare",
      overview: {
        description: "Predicts diabetes risk using ML models with a Streamlit interface.",
        features: [
          "Real-time predictions",
          "Model comparison & feature importance",
          "Slider inputs for health data",
        ],
        techStack: ["Python", "Streamlit", "scikit-learn", "Pandas", "Seaborn"],
      },
      githubUrl: "https://github.com/0001Moksh/Diabetes-Prediction-App",
    },
    {
      id: 7,
      logo: ai_interviewer,
      image: ai_interviewer,
      name: "AI Interviewer",
      category: "AI & Education",
      overview: {
        description: "Web app for Excel skill assessment with structured mock interviews and AI evaluation.",
        features: ["Automated scoring & feedback", "Leaderboard for top performers", "Firebase tracking"],
        techStack: ["Python", "Flask", "Google Gemini LLM", "Firebase"],
      },
      liveDemoUrl: "https://ai-interviewer-by-moksh.onrender.com/",
    },
    {
      id: 6,
      logo: voice_chatbot,
      image: voice_chatbot,
      name: "Deva Voice Chatbot",
      category: "AI & Voice",
      overview: {
        description: "Flask-based AI voice assistant with multiple characters, accents, and audio responses.",
        features: ["Deva & Devi characters", "Audio playback", "Conversation history"],
        techStack: ["Python", "Flask", "Google Gemini API", "gTTS"],
      },
      liveDemoUrl: "https://deva-voice-chat.onrender.com/",
    },
    {
      id: 5,
      logo: haritai,
      image: haritai,
      name: "HaritAI",
      category: "AI & Environment",
      overview: {
        description: "Eco-friendly product generator transforming waste images into sustainable product ideas.",
        features: ["Waste classification", "AI-generated product ideas", "Interactive frontend"],
        techStack: ["Python", "Flask", "Pillow", "Google Gemini AI"],
      },
      liveDemoUrl: "https://haritai.onrender.com/",
      videoUrl: "https://www.linkedin.com/posts/nexyugtech_nexyugtech-techstartup-madeinindia-ugcPost-7338819436818190336-xy_W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
    },
    {
      id: 4,
      logo: Chatbot,
      image: Chatbot,
      name: "Deva Chatbot",
      category: "AI & Chat",
      overview: {
        description: "Flask-based conversational AI chatbot powered by Google Gemini, with session history.",
        features: ["Personalized conversation", "HTML/Markdown cleaning", "Web deployment"],
        techStack: ["Python", "Flask", "BeautifulSoup", "markdown2"],
      },
      liveDemoUrl: "https://deva-chatbot.onrender.com/",
    },
    {
      id: 3,
      logo: Deva,
      image: Deva,
      name: "Deva Voice Assistant",
      category: "AI & Voice",
      overview: {
        description: "Advanced desktop AI assistant with voice commands, chat, TTS, and system control.",
        features: ["Voice-controlled system commands", "Real-time translation", "Task management"],
        techStack: ["Python", "PyQt5", "Google Gemini"],
      },
      videoUrl: "https://www.linkedin.com/posts/dpg-institute-of-technology-and-management_dpgitm-voiceassistant-aiassistant-ugcPost-7329051618228822016-u8MJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
    },
  ];

  const categories = ["all", ...new Set(cardItem.map((item) => item.category))];
  const filteredProjects = filter === "all" ? cardItem : cardItem.filter((item) => item.category === filter);

  useEffect(() => setVisibleCount(6), [filter]);
  const handleLoadMore = () => setVisibleCount((p) => p + 6);

  // ── SEO: JSON-LD structured data for all projects ──────────────────────
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Moksh Bhardwaj's Projects",
    "description": "Portfolio of innovative AI, web, and machine learning projects by Moksh Bhardwaj",
    "numberOfItems": cardItem.length,
    "itemListElement": cardItem.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.name,
        "description": project.overview.description,
        "applicationCategory": project.category,
        ...(project.liveDemoUrl && { "url": project.liveDemoUrl }),
        ...(project.githubUrl && { "codeRepository": project.githubUrl }),
        ...(project.videoUrl && {
          "video": {
            "@type": "VideoObject",
            "name": `${project.name} Demo Video`,
            "url": project.videoUrl,
          }
        }),
        "keywords": project.overview.techStack?.join(", ") || "",
        "featureList": project.overview.features?.join("; ") || "",
        "programmingLanguage": project.overview.techStack?.join(", ") || "",
      },
    })),
  };

  return (
    <section
      id="projects"
      name="Project"
      className="max-w-screen-2xl container mx-auto py-16"
      aria-label="Projects section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <SEOHelmet pageKey="projects" />

      {/* JSON-LD for full project data — parsers will read this */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hidden SEO content for plain-text scrapers */}
      <div style={{ display: "none" }} aria-hidden="false">
        <h1>Projects by Moksh Bhardwaj — Full Stack Developer &amp; AI Engineer</h1>
        {cardItem.map((project) => (
          <article key={project.id}>
            <h2>{project.name}</h2>
            <p>Category: {project.category}</p>
            <p>{project.overview.description}</p>
            {project.overview.features && (
              <ul>
                {project.overview.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            )}
            {project.overview.techStack && (
              <p>Technologies: {project.overview.techStack.join(", ")}</p>
            )}
            {project.liveDemoUrl && <a href={project.liveDemoUrl}>Live Demo</a>}
            {project.githubUrl && <a href={project.githubUrl}>GitHub Repository</a>}
            {project.videoUrl && <a href={project.videoUrl}>Watch Video Demo</a>}
          </article>
        ))}
      </div>

      {/* ── Header ── */}
      <div className="px-4 md:px-20 mb-12">
        <SectionTitle />
      </div>

      {/* ── Category Filter ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-12 flex-wrap gap-3 px-4"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 border border-purple-400/50"
                : "bg-white/10 text-gray-300 border border-white/20 hover:border-purple-400/50 hover:bg-white/20"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* ── Projects Grid ── */}
      <div className="px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
        <AnimatePresence>
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <CinematicCard
              key={project.id}
              project={project}
              index={index}
              onInfoClick={(proj) =>
                  setSelectedProject({
                    id: proj.id,
                    name: proj.name,
                    overview: proj.overview,
                    liveDemoUrl: proj.liveDemoUrl,
                    githubUrl: proj.githubUrl,
                    videoUrl: proj.videoUrl,
                    image: proj.image || proj.logo,
                    logo: proj.logo,
                  })
                }
            />
          ))}
        </AnimatePresence>
      </div>

      {/* ── Load More ── */}
      {visibleCount < filteredProjects.length && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mx-0 mt-20 flex flex-col items-center justify-center
            bg-transparent border-x border-b border-lighter-gray
            rounded-b-[100px] md:rounded-b-[800px] py-10
            shadow-[inset_0_-15px_20px_-15px_rgba(0,0,0,0.3)]
            backdrop-blur-sm"
        >
          <motion.button
            onClick={handleLoadMore}
            whileTap={{ scale: 0.97, y: 1 }}
            className="group relative px-8 py-3 rounded-3xl font-semibold text-lg
              bg-gradient-to-r from-white/6 to-white/10 backdrop-blur-xl border border-white/14
              text-white shadow-lg shadow-black/40
              hover:from-white/10 hover:to-white/16 hover:border-white/28
              transition-all duration-300
              flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-transparent opacity-40" />
            <div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-300 group-hover:w-full transition-all duration-500 opacity-20 rounded-3xl" />
            <span className="relative z-10 flex items-center gap-2">
              {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg> */}
              <span>See More Projects</span>
            </span>
          </motion.button>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-4"
          >
            <FiChevronDown size={58} className="text-white" />
          </motion.span>
        </motion.div>
      )}

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-4 max-w-5xl w-full text-left relative shadow-2xl border border-white/10 overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-200 bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: large preview image on desktop */}
                <div className="md:w-1/2 w-full rounded-lg overflow-hidden flex-shrink-0 bg-black/40">
                  <img
                    src={selectedProject.image || selectedProject.logo}
                    alt={selectedProject.name}
                    className="w-full h-64 md:h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Right: details */}
                <div className="md:w-1/2 w-full pr-2 pl-2 md:pl-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent pr-10">
                    {selectedProject.name}
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {selectedProject.overview.description}
                  </p>

                  {selectedProject.overview.features && (
                    <>
                      <h3 className="font-bold text-lg mb-3 text-white">Key Features</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.overview.features.map((f, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-3 flex-shrink-0" />
                            <span>{f}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </>
                  )}

                  {selectedProject.overview.techStack && (
                    <>
                      <h3 className="font-bold text-lg mb-3 text-white">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.overview.techStack.map((tech, i) => (
                          <TechBadge key={tech} tech={tech} index={i} />
                        ))}
                      </div>
                    </>
                  )}

                  <div className="flex gap-3 flex-wrap pt-3 border-t border-white/10 mt-3">
                    {selectedProject.liveDemoUrl && (
                      <motion.a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200 border border-purple-400/30"
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 bg-white/8 hover:bg-white/16 text-white font-semibold rounded-lg shadow-md border border-white/14 transition-all duration-200 flex items-center gap-2"
                      >
                        <FaGithub /> Code
                      </motion.a>
                    )}
                    {selectedProject.videoUrl && (
                      <motion.a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200 border border-teal-400/30 flex items-center gap-2"
                      >
                        <FaPlay size={12} /> Watch Video
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: lightboxImage }]}
          plugins={[Captions, Thumbnails]}
        />
      )}
    </section>
  );
}

export default Project;