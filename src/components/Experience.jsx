import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import logos
import html from "../../public/html.jpg";
import css from "../../public/css.jpg";
import js from "../../public/js.jpg";
import python from "../../public/python.png";
import numpy from "../../public/numpy.jpg";
import pandas from "../../public/pandas.png";
import matplotlib from "../../public/matplotlib.png";
import seaborn from "../../public/seaborn.png";
import scipy from "../../public/scipy.jpg";
import sklearn from "../../public/sklearn.jpg";
import opencv from "../../public/opencv.jpg";
import tensorflow from "../../public/tensorflow.png";
import keras from "../../public/keras.png";
import pytorch from "../../public/pytorch.png";
import huggingface from "../../public/huggingface.png";
import langchain from "../../public/langchain.png";
import genai from "../../public/genai.png";
import llm from "../../public/llm.jpg";
import rag from "../../public/rag.png";
import nlp from "../../public/NLP.png";
import neuralnets from "../../public/neuralnets.png";
import fastapi from "../../public/Fastapi.jpg";
import flask from "../../public/Flask.jpg";
import openai from "../../public/openai.png";
import gemini from "../../public/gemini.png";
import apiintegration from "../../public/apiintegration.png";
import aws from "../../public/aws.png";
import gcp from "../../public/gcp.png";
import azure from "../../public/azure.png";
import github from "../../public/github.png";
import vercel from "../../public/vercel.png";
import netlify from "../../public/netlify.png";
import render from "../../public/render.png";
import firebase from "../../public/firebase.png";
import mongodb from "../../public/mongodb.png";
import mysql from "../../public/mysql.png";
import faiss from "../../public/faiss.png";
import chromadb from "../../public/chromadb.png";
import pinecone from "../../public/pinecone.png";
import reactLogo from "../../public/react.png";
import crm from "../../public/crm.jpg";
import streamlit from "../../public/streamlit.png";
import vectordb from "../../public/vectordb.png";

function Experience() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [flippedCategories, setFlippedCategories] = useState({});
  const modalRef = useRef(null);

  // Close modal on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsSkillsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsSkillsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleFlip = (catIndex) => {
    setFlippedCategories((prev) => ({
      ...prev,
      [catIndex]: !prev[catIndex],
    }));
  };

  // Refined categories
  const categories = [
    {
      title: "Web Development Basics",
      skills: [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: js, name: "JavaScript" },
        { id: 4, logo: reactLogo, name: "React" },
      ],
    },
    {
      title: "Python & Data Tools",
      skills: [
        { id: 5, logo: python, name: "Python" },
        { id: 6, logo: numpy, name: "NumPy" },
        { id: 7, logo: pandas, name: "Pandas" },
        { id: 8, logo: matplotlib, name: "Matplotlib" },
        { id: 9, logo: seaborn, name: "Seaborn" },
        { id: 10, logo: scipy, name: "SciPy" },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { id: 11, logo: sklearn, name: "Scikit-learn" },
        { id: 12, logo: opencv, name: "OpenCV" },
      ],
    },
    {
      title: "Deep Learning & AI",
      skills: [
        { id: 13, logo: tensorflow, name: "TensorFlow" },
        { id: 14, logo: keras, name: "Keras" },
        { id: 15, logo: pytorch, name: "PyTorch" },
        { id: 16, logo: neuralnets, name: "Neural Networks" },
      ],
    },
    {
      title: "Generative AI & LLMs",
      skills: [
        { id: 17, logo: genai, name: "GenAI" },
        { id: 18, logo: llm, name: "LLM" },
        { id: 19, logo: rag, name: "RAG" },
        { id: 20, logo: nlp, name: "NLP" },
        { id: 21, logo: huggingface, name: "Hugging Face" },
        { id: 22, logo: langchain, name: "LangChain" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { id: 23, logo: fastapi, name: "FastAPI" },
        { id: 24, logo: flask, name: "Flask" },
        { id: 25, logo: openai, name: "OpenAI API" },
        { id: 26, logo: gemini, name: "Gemini API" },
        { id: 27, logo: apiintegration, name: "API Integration" },
      ],
    },
    {
      title: "Cloud & Deployment",
      skills: [
        { id: 28, logo: aws, name: "AWS" },
        { id: 29, logo: gcp, name: "GCP" },
        { id: 30, logo: azure, name: "Azure" },
        { id: 31, logo: github, name: "GitHub" },
        { id: 32, logo: vercel, name: "Vercel" },
        { id: 33, logo: netlify, name: "Netlify" },
        { id: 34, logo: render, name: "Render" },
        { id: 35, logo: firebase, name: "Firebase" },
        { id: 36, logo: streamlit, name: "Streamlit" },
      ],
    },
    {
      title: "Databases & Vector Search",
      skills: [
        { id: 37, logo: mongodb, name: "MongoDB" },
        { id: 38, logo: mysql, name: "MySQL" },
        { id: 39, logo: vectordb, name: "Vector DB" },
        { id: 40, logo: faiss, name: "FAISS" },
        { id: 41, logo: chromadb, name: "ChromaDB" },
        { id: 42, logo: pinecone, name: "Pinecone" },
      ],
    },
    {
      title: "Business & Productivity Tools",
      skills: [
        { id: 43, logo: crm, name: "Zoho CRM" },
      ],
    },
  ];

  const allSkills = categories.flatMap((category) => category.skills);

  // Motion variants
  const containerVariant = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const categoryVariant = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } } };
  const modalVariant = { hidden: { opacity: 0, scale: 0.95, y: -20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }, exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } } };
  const skillItemVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  return (
    <div name="Experience" className="max-w-screen-xl mx-auto py-20 px-4 md:px-10 text-center bg-white">
      <motion.h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide text-gray-800" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>Experience</motion.h1>

      <div className="relative flex flex-col sm:flex-row items-center justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.p className="text-base sm:text-lg text-gray-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
          3+ years of hands-on experience in AI, ML, Web & Cloud technologies.
        </motion.p>
        <motion.button className="relative px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2" onClick={() => setIsSkillsOpen(!isSkillsOpen)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z" />
          </svg>
          <span className="text-sm font-medium">View All Skills Together</span>
          <motion.span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isSkillsOpen && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div ref={modalRef} className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 max-w-6xl w-full max-h-[85vh] overflow-y-auto border border-gray-200/30 relative" variants={modalVariant} initial="hidden" animate="visible" exit="exit">
              <div className="flex justify-between items-center mb-6 sticky top-0 z-10 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-cyan-900 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  All Skills
                </h3>
                <button className="text-gray-500 hover:text-gray-800 transition-colors duration-200" onClick={() => setIsSkillsOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5" variants={containerVariant} initial="hidden" animate="visible">
                {allSkills.map((skill) => (
                  <motion.div key={skill.id} className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/80 rounded-2xl shadow-md hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer" variants={skillItemVariant} whileHover={{ scale: 1.08, y: -5 }}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2 sm:mb-3 rounded-full shadow-inner border border-gray-200 overflow-hidden">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-900 font-semibold text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Flip Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {categories.map((category, catIndex) => (
          <motion.div key={catIndex} variants={categoryVariant} className="w-full min-h-[280px] sm:min-h-[300px] flex items-center justify-center cursor-pointer" onClick={() => toggleFlip(catIndex)} style={{ perspective: "1000px" }}>
            <motion.div className="relative w-full h-full group" animate={{ rotateY: flippedCategories[catIndex] ? 180 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }}>
              {/* Front Side */}
              <motion.div className="absolute w-full h-full bg-white border border-gray-300 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300 group-hover:shadow-indigo-300 group-hover:border-indigo-400" style={{ backfaceVisibility: "hidden" }}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide border-b-2 border-indigo-400 pb-2">{category.title}</h2>
                <p className="text-gray-600 mt-4 text-xs sm:text-sm">Click to explore skills</p>
              </motion.div>

              {/* Back Side */}
              <motion.div className="absolute w-full h-full bg-white border border-gray-300 rounded-2xl shadow-lg p-4 sm:p-6 overflow-auto transition-all duration-300 group-hover:shadow-indigo-300 group-hover:border-indigo-400" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide mb-4 border-b-2 border-indigo-400 pb-2">{category.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 place-items-center">
                  {category.skills.map((skill) => (
                    <motion.div key={skill.id} className="bg-white border border-gray-300 rounded-xl shadow-md p-3 sm:p-4 flex flex-col items-center justify-center w-full transition-all duration-300 hover:shadow-indigo-300 hover:border-indigo-400" whileHover={{ scale: 1.05, rotate: 2 }}>
                      <img src={skill.logo} alt={skill.name} className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain mb-2 rounded-full shadow-sm" loading="lazy" />
                      <h3 className="text-gray-800 font-semibold text-xs sm:text-sm text-center">{skill.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr className="mt-16 border-gray-300 w-3/4 mx-auto" initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
    </div>
  );
}

export default Experience;
