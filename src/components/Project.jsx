import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
  const cardItem = [
    { id: 1, logo: Gym_web, name: "Gym Website", liveDemoUrl: "https://power-fitness-gym-by-moksh2333.netlify.app/" },
    { id: 2, logo: dealer, name: "Property Dealer Website", liveDemoUrl: "https://sahil03.netlify.app/" },
    { id: 9, logo: whatsapp, name: "WhatsApp Form Automation", liveDemoUrl: "#" },
    { id: 8, logo: diabetes, name: "Diabetes Prediction App", liveDemoUrl: "https://github.com/0001Moksh/Diabetes-Prediction-App" },
    { id: 3, logo: Deva, name: "Deva Voice Assistant", liveDemoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7293938971489763328/" },
    { id: 4, logo: Chatbot, name: "Deva Chatbot", liveDemoUrl: "https://deva-chatbot.onrender.com/" },
    { id: 5, logo: haritai, name: "HaritAI", liveDemoUrl: "https://haritai.onrender.com/" },
    { id: 6, logo: voice_chatbot, name: "Deva Voice Chatbot", liveDemoUrl: "https://deva-voice-chat.onrender.com/" },
    { id: 7, logo: ai_interviewer, name: "AI Interviewer", liveDemoUrl: "https://ai-interviewer-by-moksh.onrender.com/" },
    { id: 10, logo: resume_analyzer, name: "AI Resume Analyzer", liveDemoUrl: "https://www.linkedin.com/posts/moksh-bhardwaj-0001moksh_resumeanalyzer-recruitment-hrtech-activity-7375703203616817152-Tekt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_o2XoBykUQc7Wc7eq2JRdjIvCobQ7DLNc", githubUrl: "https://github.com/0001Moksh/AI-Resume-Analyzer" },
    { id: 13, logo: import_medicine, name: "Import Medicine", githubUrl: "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Import%20Medicine%20using%202%20LLm", liveDemoUrl: "#" },
    { id: 11, logo: ai_filter_medicine, name: "Medicine Filtering", githubUrl: "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Medicine%20Filtering%20using%20Embedding%20%2B%20Vector%20DB", liveDemoUrl: "#" },
    { id: 12, logo: Symptoms_to_Medicine, name: "Symptoms to Medicine", githubUrl: "https://github.com/0001Moksh/Aushidi-360-Sub-Projects/tree/main/Symptoms%20to%20Medicine%20using%20langchain%20%2B%201%20LLM", liveDemoUrl: "#" },
  ].reverse();
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-900">My Projects</h1>
        <p className="text-lg text-gray-600">Showcasing my featured projects with live demos and previews.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cardItem.map(({ id, logo, name, liveDemoUrl, githubUrl }) => (
          <motion.div key={id} variants={item}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col justify-between">
                
                {/* 🔹 Zoomable Image */}
                <Zoom>
                  <img src={logo} alt={name} className="w-full h-[160px] object-contain rounded-2xl mb-4 border-b border-gray-100 cursor-pointer" />
                </Zoom>

                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{name}</h3>

                <div className="flex justify-center gap-3 mt-auto">
                  {liveDemoUrl && liveDemoUrl !== "#" && (
                    <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-lg shadow-md transition-all duration-300">
                      Live Demo
                    </a>
                  )}
                  {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-gray-800 hover:bg-black text-white rounded-lg shadow-md transition-all duration-300">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      <hr className="mt-20 border-gray-300" />
    </div>
  );
}

export default Project;
