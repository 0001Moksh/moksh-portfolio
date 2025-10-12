import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

// Import images (assuming they are optimized and in public folder)
import Deva from "../../public/deva_ai.png";
import Chatbot from "../../public/chatbot.png";
import Gym_web from "../../public/gym.png";
import dealer from "../../public/dealer.png";
import haritai from "../../public/haritai.png";
import whatsapp from "../../public/whatsapp.png";
import voice_chatbot from "../../public/deva-voice.png";
import ai_interviewer from "../../public/ai_interviewer.png";
import diabetes from "../../public/diabetes.png";
import resume_analyzer from "../../public/resume_analyzer.png";
import ai_filter_medicine from "../../public/ai_filter_medicine.png";
import Symptoms_to_Medicine from "../../public/Symptoms_to_Medicine.png";
import import_medicine from "../../public/Import_Medicine.png";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const modalRef = useRef(null);
  
  // Sorted card items by ID descending for newest first (assuming higher ID is newer)
  const cardItem = [
    {
      id: 13,
      logo: import_medicine,
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
      name: "AI Resume Analyzer",
      category: "AI & Productivity",
      overview: {
        description: "Streamlined resume evaluation with ML-based insights and MongoDB storage.",
        features: ["PDF/DOCX upload", "Structured data extraction", "Interactive query chat"],
        techStack: ["Python", "Flask", "MongoDB", "Google Generative AI"],
      },
      githubUrl: "https://github.com/0001Moksh/AI-Resume-Analyzer",
    },
    {
      id: 9,
      logo: whatsapp,
      name: "WhatsApp Form Automation",
      category: "Automation",
      overview: {
        description: "Automates form submissions via WhatsApp using API integration.",
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
        description: "Predicts diabetes risk using ML models with a Streamlit interface.",
        features: ["Real-time predictions", "Model comparison & feature importance", "Slider inputs for health data"],
        techStack: ["Python", "Streamlit", "scikit-learn", "Pandas", "Seaborn"],
      },
      liveDemoUrl: "https://github.com/0001Moksh/Diabetes-Prediction-App",
    },
    {
      id: 7,
      logo: ai_interviewer,
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
      name: "HaritAI",
      category: "AI & Environment",
      overview: {
        description: "Eco-friendly product generator transforming waste images into sustainable product ideas.",
        features: ["Waste classification", "AI-generated product ideas", "Interactive frontend"],
        techStack: ["Python", "Flask", "Pillow", "Google Gemini AI"],
      },
      liveDemoUrl: "https://haritai.onrender.com/",
    },
    {
      id: 4,
      logo: Chatbot,
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
      name: "Deva Voice Assistant",
      category: "AI & Voice",
      overview: {
        description: "Advanced desktop AI assistant with voice commands, chat, TTS, and system control.",
        features: ["Voice-controlled system commands", "Real-time translation", "Task management"],
        techStack: ["Python", "PyQt5", "Google Gemini"],
      },
      liveDemoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7293938971489763328/",
    },
    {
      id: 2,
      logo: dealer,
      name: "Property Dealer Website",
      category: "Web Development",
      overview: {
        description: "Responsive landing page showcasing Godrej Aristocrat luxury 4 BHK residences.",
        features: ["Interactive image slider", "Project & amenities overview", "Location advantages"],
        techStack: ["HTML", "CSS", "JavaScript"],
      },
      liveDemoUrl: "https://sahil03.netlify.app/",
    },
    {
      id: 1,
      logo: Gym_web,
      name: "Gym Website",
      category: "Web Development",
      overview: {
        description: "Dynamic and user-friendly gym website with hero sections, testimonials, stats, and membership forms.",
        features: ["WhatsApp prefilled form", "Interactive stats charts", "Floating contact button"],
        techStack: ["HTML", "CSS", "JS", "Netlify Deployment"],
      },
      liveDemoUrl: "https://power-fitness-gym-by-moksh2333.netlify.app/",
    },
  ];

  // Extract unique categories
  const categories = ["all", ...new Set(cardItem.map((item) => item.category))];

  // Filtered projects based on category
  const filteredProjects = filter === "all" ? cardItem : cardItem.filter((item) => item.category === filter);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  // Handle outside click and ESC key for modal close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedProject]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-900">My Projects</h1>
        <p className="text-lg text-gray-600">Showcasing featured projects with live demos and professional overviews.</p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm rounded-lg shadow-md transition-all duration-300 ${
              filter === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        {filteredProjects.slice(0, visibleCount).map(({ id, logo, name, overview, liveDemoUrl, githubUrl }) => (
          <motion.div key={id} variants={item}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col justify-between relative">
                <Zoom>
                  <img
                    src={logo}
                    alt={`${name} project screenshot`}
                    className="w-full h-[160px] object-contain rounded-2xl mb-4 border-b border-gray-100 cursor-pointer"
                    loading="lazy"
                  />
                </Zoom>

                {overview && (
                  <button
                    onClick={() => setSelectedProject({ name, overview, liveDemoUrl, githubUrl })}
                    className="absolute bottom-3 right-3 text-gray-500 hover:text-gray-800 text-3xl p-1 rounded-full transition-colors duration-300"
                    aria-label={`View details for ${name}`}
                  >
                    <AiOutlineInfoCircle />
                  </button>
                )}

                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{name}</h3>
                <p className="text-gray-600 text-sm text-center line-clamp-3 mb-4">{overview.description}</p>

                <div className="flex justify-center gap-3 mt-auto">
                  {liveDemoUrl && liveDemoUrl !== "#" && (
                    <a
                      href={liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-1"
                    >
                      Live Demo
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-gray-800 hover:bg-black text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-1"
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
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="relative inline-block px-10 py-3 font-semibold text-white rounded-lg overflow-hidden group"
          >
            {/* Animated Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 
                            animate-gradient-x opacity-70 transition-all duration-500 ease-in-out 
                            group-hover:opacity-100"></span>
            
            {/* Overlay for depth */}
            <span className="absolute inset-0 bg-black opacity-20 rounded-lg"></span>
            
            {/* Button Text */}
            <span className="relative z-10 text-lg group-hover:scale-105 transition-transform duration-300">
              view more
            </span>
            
            {/* Border Animation */}
            <span className="absolute top-0 left-0 w-0 h-0 border-t-2 border-r-2 border-white rounded-lg
                            group-hover:w-full group-hover:h-full transition-all duration-500"></span>
          </button>
        </div>
      )}

      {/* Enhanced Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 max-w-lg mx-4 text-left relative shadow-xl overflow-y-auto max-h-[80vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProject.overview.description}</p>

              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.overview.features.map((f, idx) => (
                  <li key={idx} className="text-gray-600">{f}</li>
                ))}
              </ul>

              <h3 className="font-semibold mb-2">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.overview.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-sm">{tech}</span>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                {selectedProject.liveDemoUrl && selectedProject.liveDemoUrl !== "#" && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-lg shadow-md transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-gray-800 hover:bg-black text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-1"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <hr className="mt-20 border-gray-300" />
    </div>
  );
}

export default Project;