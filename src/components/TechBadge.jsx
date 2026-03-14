import React from "react";
import { motion } from "framer-motion";

const TechBadge = ({ tech, index = 0 }) => {
  const colors = {
    "React": "from-blue-500 to-cyan-500",
    "Node.js": "from-green-500 to-emerald-500",
    "Python": "from-yellow-500 to-orange-500",
    "Flask": "from-amber-500 to-yellow-500",
    "FastAPI": "from-red-500 to-pink-500",
    "MongoDB": "from-green-600 to-green-500",
    "Firebase": "from-orange-500 to-red-500",
    "Google Gemini AI": "from-purple-500 to-pink-500",
    "TensorFlow": "from-orange-400 to-red-500",
    "Streamlit": "from-red-500 to-pink-500",
    "Next.js": "from-black to-white",
    "TypeScript": "from-blue-600 to-blue-400",
    "Keras": "from-red-500 to-orange-500",
    "Scikit-learn": "from-orange-500 to-yellow-500",
    "OpenAI API": "from-green-500 to-teal-500",
    "LangChain": "from-purple-600 to-blue-500",
    "default": "from-purple-500 to-pink-500"
  };

  const colorPair = colors[tech] || colors.default;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -2 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${colorPair} shadow-md hover:shadow-lg transition-all duration-200 border border-white/20 backdrop-blur-sm`}
    >
      <span className="w-1.5 h-1.5 bg-white/80 rounded-full" />
      {tech}
    </motion.div>
  );
};

export default TechBadge;
