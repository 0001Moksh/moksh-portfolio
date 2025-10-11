import React from "react";
import { motion } from "framer-motion";

import html from "../../public/html.jpg";
import css from "../../public/css.jpg";
import js from "../../public/js.jpg";
import crm from "../../public/crm.jpg";
import Matplotlib from "../../public/java.jpg";
import keras from "../../public/keras.png";
import pandas from "../../public/pandas.png";
import Sea from "../../public/Sea.png";
import numpy from "../../public/numpy.jpg";
import scipy from "../../public/scipy.jpg";
import sklearn from "../../public/sklearn.jpg";
import opencv from "../../public/opencv.jpg";
import tensorflow from "../../public/ten.png";
import Fastapi from "../../public/Fastapi.jpg";
import Flask from "../../public/Flask.jpg";
import NLP from "../../public/NLP.png";
import genai from "../../public/genai.png";
import langchain from "../../public/langchain.png";
import rag from "../../public/rag.png";
import llm from "../../public/llm.jpg";


function Experience() {
  const skills = [
    { id: 1, logo: genai, name: "GenAI" },
    { id: 2, logo: llm, name: "LLM" },
    { id: 3, logo: langchain, name: "LangChain" },
    { id: 4, logo: rag, name: "RAG" },
    { id: 5, logo: tensorflow, name: "TensorFlow" },
    { id: 6, logo: keras, name: "Keras" },
    { id: 7, logo: sklearn, name: "Scikit-learn" },
    { id: 8, logo: scipy, name: "SciPy" },
    { id: 9, logo: opencv, name: "OpenCV" },
    { id: 10, logo: Sea, name: "Seaborn" },
    { id: 11, logo: pandas, name: "Pandas" },
    { id: 12, logo: Matplotlib, name: "Matplotlib" },
    { id: 13, logo: numpy, name: "NumPy" },
    { id: 14, logo: NLP, name: "NLP" },
    { id: 15, logo: Fastapi, name: "FastAPI" },
    { id: 16, logo: Flask, name: "Flask" },
    { id: 17, logo: crm, name: "Zoho CRM" },
    { id: 18, logo: js, name: "JavaScript" },
    { id: 19, logo: css, name: "CSS" },
    { id: 20, logo: html, name: "HTML" },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <div
      name="Experience"
      className="max-w-screen-xl mx-auto py-20 px-4 md:px-10 text-center bg-white"
    >
      <h1 className="text-5xl font-bold mb-6 tracking-wide">
        Experience
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        2+ years of hands-on experience with AI, ML, and web technologies.
      </p>

      {/* Grid Layout for All Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-indigo-300 hover:border-indigo-400"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-[70px] h-[70px] object-contain mb-3 rounded-full shadow-md"
            />
            <h3 className="text-gray-800 font-semibold text-base">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      <motion.hr
        className="mt-16 border-gray-300 w-3/4 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "75%" }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default Experience;
