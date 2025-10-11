import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Deva from "../../public/deva_ai.png";
import Chatbot from "../../public/chatbot.png";
import Gym_web from "../../public/gym.png";
import dealer from "../../public/dealer.png";
import haritai from "../../public/haritai.png";
import whatsapp from "../../public/whatsapp.png";
import voice_chatbot from "../../public/deva-voice.png";
import ai_interviewer from "../../public/ai_interviewer.png";
import diabetes from "../../public/diabetes.png";

function Project() {
  const cardItem = [
    { id: 1, logo: Gym_web, name: "Gym Website", liveDemoUrl: "https://power-fitness-gym-by-moksh2333.netlify.app/" },
    { id: 2, logo: dealer, name: "Property Dealer Website", liveDemoUrl: "https://sahil03.netlify.app/" },
    { id: 3, logo: Deva, name: "Deva Voice Assistant", liveDemoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7293938971489763328/" },
    { id: 4, logo: Chatbot, name: "Deva Chatbot", liveDemoUrl: "https://deva-chatbot.onrender.com/" },
    { id: 5, logo: haritai, name: "HaritAI", liveDemoUrl: "https://haritai.onrender.com/" },
    { id: 6, logo: voice_chatbot, name: "Deva Voice Chatbot", liveDemoUrl: "https://deva-voice-chat.onrender.com/" },
    { id: 7, logo: ai_interviewer, name: "AI Interviewer", liveDemoUrl: "https://ai-interviewer-by-moksh.onrender.com/" },
    { id: 8, logo: diabetes, name: "Diabetes Prediction App", liveDemoUrl: "https://github.com/0001Moksh/Diabetes-Prediction-App" },
    { id: 9, logo: whatsapp, name: "WhatsApp Form Automation", liveDemoUrl: "#" },
  ];

  const controls = useAnimation();

  // Continuous horizontal scroll animation
  useEffect(() => {
    controls.start({
      x: [0, -1000],
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-900">My Projects</h1>
        <p className="text-lg text-gray-600">
          Showcasing my featured projects with live demos and previews.
        </p>
      </div>

      {/* Horizontal scroll animation */}
      <motion.div animate={controls} className="flex space-x-8 py-6 min-w-[200%]">
        {[...cardItem, ...cardItem].map(({ id, logo, name, liveDemoUrl }, index) => (
          <Tilt
            key={id + "-" + index}
            glareEnable={true}
            glareMaxOpacity={0.3}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
          >
            <div className="bg-gradient-to-tr from-white to-gray-100 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 p-6 flex flex-col justify-between min-w-[250px] border border-gray-200">
              <img
                src={logo}
                alt={name}
                className="w-full h-[160px] object-contain rounded-2xl mb-4 border-b border-gray-200"
              />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{name}</h3>

              <div className="flex justify-center gap-3 mt-auto">
                {liveDemoUrl && liveDemoUrl !== "#" && (
                  <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-lg shadow-md transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </Tilt>
        ))}
      </motion.div>

      <hr className="mt-20 border-gray-300" />
    </div>
  );
}

export default Project;
