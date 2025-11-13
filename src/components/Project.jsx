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

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const modalRef = useRef(null);

  const cardItem = [
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
    <div className="max-w-screen-2xl container mx-auto py-16">
      <div name="Project" className="px-4 md:px-20 text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide text-gray-800">My Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my portfolio of innovative projects, featuring live demos, detailed overviews, and cutting-edge technologies.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-sm font-medium rounded-full shadow-sm transition-all duration-300 ${
              filter === cat
                ? "bg-indigo-600 text-white shadow-xl"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>


      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        animate="show"
        className="px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {filteredProjects.slice(0, visibleCount).map(({ id, logo, name, category, overview, liveDemoUrl, githubUrl }) => (
          <motion.div 
            key={id} 
            variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-500 p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="relative">
                  <img
                    src={logo}
                    alt={`${name} project screenshot`}
                    className="w-full h-48 object-cover rounded-xl mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onClick={() => {
                      setLightboxImage(logo);
                      setLightboxOpen(true);
                    }}
                  />
                  <span className="absolute top-2 left-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                    {category}
                  </span>
                </div>

                {overview && (
                  <button
                    onClick={() => setSelectedProject({ name, overview, liveDemoUrl, githubUrl, videoUrl: cardItem.find(p => p.name === name)?.videoUrl })}
                    className="absolute top-2 right-2 text-gray-500 hover:text-indigo-600 text-2xl p-1 rounded-full bg-white/80 backdrop-blur-sm transition-colors duration-300"
                  >
                    <AiOutlineInfoCircle />
                  </button>
                )}

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{overview.description}</p>

                <div className="flex justify-between gap-3 mt-auto">
                  {liveDemoUrl && (
                    <a
                      href={liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-1"
                    >
                      Live Demo
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {visibleCount < filteredProjects.length && (
        <div
      className="w-full mx-0 mt-20 flex flex-col items-center justify-center
      bg-transparent border-x border-b border-gray-800/40 
      rounded-b-[100px] md:rounded-b-[800px] py-10
      shadow-[inset_0_-15px_20px_-15px_rgba(0,0,0,0.3)]
      backdrop-blur-sm"
    >
      {/* Centered Button */}
      <motion.button
        onClick={handleLoadMore}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 10px rgba(72, 71, 70, 0.6)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="
          relative flex items-center justify-center
          px-8 py-3 font-semibold text-white tracking-wide
          bg-[#a45d48] hover:bg-[#a45d48]/90 
          rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md
          shadow-[0_4px_15px_rgba(0,0,0,0.3),_inset_0_0_10px_rgba(255,255,255,0.1)]
          border border-gray-200/60 hover:border-gray-900/60
          overflow-hidden transition-all duration-500 ease-in-out
        "
      >
        View More
      </motion.button>

      {/* Down Arrow (Centered & Animated) */}
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="mt-4"
      >
        <FiChevronDown size={38} className="text-[#a45d48]" />
      </motion.span>
    </div>
      )}
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-8 max-w-md mx-4 text-left relative shadow-2xl overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold transition-colors duration-200"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{selectedProject.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.overview.description}</p>

              <h3 className="font-semibold text-lg mb-3 text-gray-800">Key Features:</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {selectedProject.overview.features.map((f, i) => (
                  <li key={i} className="text-gray-600">
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-lg mb-3 text-gray-800">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.overview.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end gap-4 flex-wrap">
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-base bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-base bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-md transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {selectedProject.videoUrl && (
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-base bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-colors duration-300"
                  >
                    Watch Video
                  </a>
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
    </div>
  );
}

export default Project;
