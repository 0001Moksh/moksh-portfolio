import { FiDownload } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import ProjectCard from "./ProjectCard";
import TechBadge from "./TechBadge";
import { SEOHelmet } from "../hooks/useSEO";

// Import images
import Deva from "../assets/deva_ai.png";
import Chatbot from "../assets/chatbot.png";
import Gym_web from "../assets/gym.png";
import dealer from "../assets/dealer.png";
import haritai from "../assets/haritai.png";
import whatsapp from "../assets/whatsapp.png";
import voice_chatbot from "../assets/deva-voice.png";
import ai_interviewer from "../assets/ai_interviewer.png";
import diabetes from "../assets/diabetes.png";
import resume_analyzer from "../assets/resume_analyzer.png";
import ai_filter_medicine from "../assets/ai_filter_medicine.png";
import Symptoms_to_Medicine from "../assets/Symptoms_to_Medicine.png";
import import_medicine from "../assets/Import_Medicine.png";
import Seema_iq from "../assets/seema_iq_logo.png";
import Aushadhi360 from "../assets/aushadhi360.png";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const modalRef = useRef(null);

  const cardItem = [
    {
      id: 15,
      logo: Aushadhi360,
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
          "React", "Node.js", "Python", "Flask", "MongoDB", "Google Gemini AI", "OCR Technology", "SMTP",
        ],
      },
      githubUrl: "https://github.com/0001Moksh/aushadhi-360",
      liveDemoUrl: "https://aushadhi-360.vercel.app/",
      videoUrl: "https://youtu.be/pl2SnZezJK0?si=B2gW4O6ztwNBBjwj"
    },
    {
      id: 14,
      logo: Seema_iq,
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
          "Break & resume interview flow"
        ],
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "MongoDB",
          "Google Gemini API",
          "Google Services",
          "SMTP",
        ],
      },
      githubUrl:
        "https://github.com/0001Moksh/seemaIQ",

      liveDemoUrl:
        "https://seema-iq.vercel.app/",
    },
    {
      id: 13,
      logo: import_medicine,
      name: "Import Medicine",
      category: "AI & Data Management",
      overview: {
        description:
          "Medicine inventory management app with AI enrichment and batch validation.",
        features: [
          "Excel upload & validation",
          "MongoDB updates",
          "AI-powered data enrichment",
        ],
        techStack: ["Python", "Flask", "MongoDB", "Google Gemini AI"],
      },
      githubUrl:
        "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Import%20Medicine%20using%202%20LLm",
    },
    {
      id: 12,
      logo: Symptoms_to_Medicine,
      name: "Symptoms to Medicine",
      category: "AI & Healthcare",
      overview: {
        description:
          "AI-powered medicine recommendation web app using semantic search and GenAI guidance.",
        features: [
          "Natural language queries",
          "Structured JSON output",
          "Doctor-style guidance",
        ],
        techStack: [
          "Python",
          "Flask",
          "dotenv",
          "SentenceTransformer",
          "FAISS",
          "Google Gemini AI",
        ],
      },
      githubUrl:
        "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Symptoms%20to%20Medicine%20using%20langchain%20%2B%201%20LLM",
    },
    {
      id: 11,
      logo: ai_filter_medicine,
      name: "Medicine Filtering",
      category: "AI & Search",
      overview: {
        description:
          "Intelligent medicine retrieval via fuzzy matching and semantic vector search.",
        features: ["Batch ID & name search", "Typo tolerance", "Semantic similarity ranking"],
        techStack: ["Python", "Flask", "FAISS", "SentenceTransformer", "RapidFuzz"],
      },
      githubUrl:
        "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Medicine%20Filtering%20using%20Embedding%20%2B%20Vector%20DB",
    },
    {
      id: 10,
      logo: resume_analyzer,
      name: "AI Resume Analyzer",
      category: "AI & Productivity",
      overview: {
        description:
          "Streamlined resume evaluation with ML-based insights and MongoDB storage.",
        features: [
          "PDF/DOCX upload",
          "Structured data extraction",
          "Interactive query chat",
        ],
        techStack: ["Python", "Flask", "MongoDB", "Google Generative AI"],
      },
      githubUrl: "https://github.com/0001Moksh/AI-Resume-Analyzer",
      liveDemoUrl: "https://ai-resume-analyzer-9jxc.onrender.com/",
      videoUrl:
        "https://www.linkedin.com/posts/moksh-bhardwaj-0001moksh_resumeanalyzer-recruitment-hrtech-activity-7375703203616817152-Tekt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
    },
    {
      id: 9,
      logo: whatsapp,
      name: "WhatsApp Form Automation",
      category: "Automation",
      overview: {
        description:
          "Automates form submissions via WhatsApp using API integration.",
        features: ["Prefilled WhatsApp messages", "API-based automation"],
        techStack: ["JavaScript", "WhatsApp API"],
      },
    },
    {
      id: 8,
      logo: diabetes,
      name: "Diabetes Prediction App",
      category: "ML & Healthcare",
      overview: {
        description:
          "Predicts diabetes risk using ML models with a Streamlit interface.",
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
      name: "AI Interviewer",
      category: "AI & Education",
      overview: {
        description:
          "Web app for Excel skill assessment with structured mock interviews and AI evaluation.",
        features: [
          "Automated scoring & feedback",
          "Leaderboard for top performers",
          "Firebase tracking",
        ],
        techStack: ["Python", "Flask", "Google Gemini LLM", "Firebase"],
      },
      liveDemoUrl: "https://ai-interviewer-by-moksh.onrender.com/",
    },
    {
      id: 6,
      logo: voice_chatbot,
      name: "Deva Voice Chatbot",
      category: "AI & Voice",
      overview: {
        description:
          "Flask-based AI voice assistant with multiple characters, accents, and audio responses.",
        features: ["Deva & Devi characters", "Audio playback", "Conversation history"],
        techStack: ["Python", "Flask", "Google Gemini API", "gTTS"],
      },
      liveDemoUrl: "https://deva-voice-chat.onrender.com/",
    },
    {
      id: 5,
      logo: haritai,
      name: "HaritAI",
      category: "AI & Environment",
      overview: {
        description:
          "Eco-friendly product generator transforming waste images into sustainable product ideas.",
        features: ["Waste classification", "AI-generated product ideas", "Interactive frontend"],
        techStack: ["Python", "Flask", "Pillow", "Google Gemini AI"],
      },
      liveDemoUrl: "https://haritai.onrender.com/",
      videoUrl:
        "https://www.linkedin.com/posts/nexyugtech_nexyugtech-techstartup-madeinindia-ugcPost-7338819436818190336-xy_W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
    },
    {
      id: 4,
      logo: Chatbot,
      name: "Deva Chatbot",
      category: "AI & Chat",
      overview: {
        description:
          "Flask-based conversational AI chatbot powered by Google Gemini, with session history.",
        features: ["Personalized conversation", "HTML/Markdown cleaning", "Web deployment"],
        techStack: ["Python", "Flask", "BeautifulSoup", "markdown2"],
      },
      liveDemoUrl: "https://deva-chatbot.onrender.com/",
    },
    {
      id: 3,
      logo: Deva,
      name: "Deva Voice Assistant",
      category: "AI & Voice",
      overview: {
        description:
          "Advanced desktop AI assistant with voice commands, chat, TTS, and system control.",
        features: [
          "Voice-controlled system commands",
          "Real-time translation",
          "Task management",
        ],
        techStack: ["Python", "PyQt5", "Google Gemini"],
      },
      liveDemoUrl:
        "https://www.linkedin.com/posts/dpg-institute-of-technology-and-management_dpgitm-voiceassistant-aiassistant-ugcPost-7329051618228822016-u8MJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",
      videoUrl:
        "https://www.linkedin.com/posts/dpg-institute-of-technology-and-management_dpgitm-voiceassistant-aiassistant-ugcPost-7329051618228822016-u8MJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc",

    },
    {
      id: 2,
      logo: dealer,
      name: "Property Dealer Website",
      category: "Web Development",
      overview: {
        description:
          "Responsive landing page showcasing Godrej Aristocrat luxury 4 BHK residences.",
        features: [
          "Interactive image slider",
          "Project & amenities overview",
          "Location advantages",
        ],
        techStack: ["HTML", "CSS", "JavaScript"],
      },
      liveDemoUrl: "https://sahil-dealer.netlify.app/",
    },
    {
      id: 1,
      logo: Gym_web,
      name: "Gym Website",
      category: "Web Development",
      overview: {
        description:
          "Dynamic and user-friendly gym website with hero sections, testimonials, stats, and membership forms.",
        features: [
          "WhatsApp prefilled form",
          "Interactive stats charts",
          "Floating contact button",
        ],
        techStack: ["HTML", "CSS", "JS", "Netlify Deployment"],
      },
      liveDemoUrl: "https://power-fitness-gym-by-moksh2333.netlify.app/",
    },
  ];

  const categories = ["all", ...new Set(cardItem.map((item) => item.category))];
  const filteredProjects =
    filter === "all"
      ? cardItem
      : cardItem.filter((item) => item.category === filter);

  useEffect(() => setVisibleCount(6), [filter]);
  const handleLoadMore = () => setVisibleCount((p) => p + 6);

  return (
    <section className="max-w-screen-2xl container mx-auto py-16" aria-label="Projects section">
      <SEOHelmet pageKey="projects" />
      <div name="Project" className="px-4 md:px-20 text-center mb-12">
        {/* Line separator above title */}
        <motion.div
          className="line-separator animate-line-reveal"
          style={{ marginTop: 0 }}
        />

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide text-dark">
          My Projects
        </h2>

        {/* Decorative line below title */}
        <motion.div
          className="line-separator animate-line-reveal"
          style={{ animationDelay: '0.3s' }}
        />
        <p className="text-lg text-light-gray max-w-2xl mx-auto">
          Explore my portfolio of innovative projects, featuring live demos, detailed overviews, and cutting-edge technologies.
        </p>
      </div>

  

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-12 flex-wrap gap-3 px-4"
      >
        {[ ...categories].map((cat) => (
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

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
      >
        {filteredProjects.slice(0, visibleCount).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onInfoClick={(proj) =>
              setSelectedProject({
                name: proj.name,
                overview: proj.overview,
                liveDemoUrl: proj.liveDemoUrl,
                githubUrl: proj.githubUrl,
                videoUrl: proj.videoUrl,
              })
            }
            onImageClick={(image) => {
              setLightboxImage(image);
              setLightboxOpen(true);
            }}
          />
        ))}
      </motion.div>

      {visibleCount < filteredProjects.length && (
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
 className="w-full mx-0 mt-20 flex flex-col items-center justify-center
      bg-transparent border-x border-b border-lighter-gray 
      rounded-b-[100px] md:rounded-b-[800px] py-10
      shadow-[inset_0_-15px_20px_-15px_rgba(0,0,0,0.3)]
      backdrop-blur-sm"        >
          <motion.button
            onClick={handleLoadMore}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm"
          >
            Load More Projects
          </motion.button>
           <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-4"
          >
            <FiChevronDown size={38} className="text-primary-dark" />
          </motion.span>
        </motion.div>
      )}
      {/* Modal */}
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
              className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-8 max-w-2xl w-full text-left relative shadow-2xl border border-white/10 overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-200 bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full"
              >
                ✕
              </button>

              <h2 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent pr-10">
                {selectedProject.name}
              </h2>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {selectedProject.overview.description}
              </p>

              {selectedProject.overview.features && (
                <>
                  <h3 className="font-bold text-xl mb-4 text-white">Key Features</h3>
                  <ul className="space-y-3 mb-8">
                    {selectedProject.overview.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}

              {selectedProject.overview.techStack && (
                <>
                  <h3 className="font-bold text-xl mb-4 text-white">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.overview.techStack.map((tech, i) => (
                      <TechBadge key={tech} tech={tech} index={i} />
                    ))}
                  </div>
                </>
              )}

              <div className="flex gap-4 flex-wrap pt-6 border-t border-white/10">
                {selectedProject.liveDemoUrl && (
                  <motion.a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 border border-purple-400/50"
                  >
                    Live Demo
                  </motion.a>
                )}
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </motion.a>
                )}
                {selectedProject.videoUrl && (
                  <motion.a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg shadow-lg shadow-teal-500/40 hover:shadow-xl hover:shadow-teal-500/60 transition-all duration-300 border border-teal-400/50"
                  >
                    Watch Video
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
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
