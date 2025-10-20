import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html from "../../public/html.jpg";
import css from "../../public/css.jpg";
import js from "../../public/js.jpg";
import crm from "../../public/crm.jpg";
import Matplotlib from "../../public/matplotlib.png";
import keras from "../../public/keras.png";
import pandas from "../../public/pandas.png";
import Sea from "../../public/seaborn.png";
import numpy from "../../public/numpy.jpg";
import scipy from "../../public/scipy.jpg";
import sklearn from "../../public/sklearn.jpg";
import opencv from "../../public/opencv.jpg";
import tensorflow from "../../public/tensorflow.png";
import Fastapi from "../../public/Fastapi.jpg";
import Flask from "../../public/Flask.jpg";
import NLP from "../../public/NLP.png";
import genai from "../../public/genai.png";
import langchain from "../../public/langchain.png";
import rag from "../../public/rag.png";
import llm from "../../public/llm.jpg";
import python from "../../public/python.png";
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
import huggingface from "../../public/huggingface.png";
import pytorch from "../../public/pytorch.png";
import faiss from "../../public/faiss.png";
import chromadb from "../../public/chromadb.png";
import pinecone from "../../public/pinecone.png";
import openai from "../../public/openai.png";
import gemini from "../../public/gemini.png";
import streamlit from "../../public/streamlit.png";
import neuralnets from "../../public/neuralnets.png";
import apintegration from "../../public/apiintegration.png";
import vectordb from "../../public/vectordb.png";
import docker from "../../public/docker.png";
import react from "../../public/react.png";
import vite from "../../public/vite.png";
import tailwind from "../../public/tailwind.png";
import webDevBg from "../../public/g-webdev-bg.jpg";
import dataScienceBg from "../../public/g-datascience-bg.jpg";
import mlDlBg from "../../public/g-mldl-bg.jpg";
import aiToolsBg from "../../public/g-aitools-bg.jpg";
import cloudDbBg from "../../public/g-clouddb-bg.jpg";
import otherToolsBg from "../../public/g-othertools-bg.jpg";

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
      if (event.key === "Escape") {
        setIsSkillsOpen(false);
      }
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

  const categories = [
    {
      title: "Web Development",
      description: "Tools for building modern web apps using React, Vite, Tailwind CSS for frontend and Flask/FastAPI for backend.",
      bgImage: webDevBg,
      skills: [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: js, name: "JavaScript" },
        { id: 45, logo: react, name: "React" },
        { id: 46, logo: vite, name: "Vite" },
        { id: 47, logo: tailwind, name: "Tailwind CSS" },
        { id: 4, logo: python, name: "Python" },
        { id: 25, logo: Flask, name: "Flask" },
        { id: 24, logo: Fastapi, name: "FastAPI" },
        { id: 28, logo: apintegration, name: "API Integration" },
      ],
    },
    {
      title: "Data Science & Visualization",
      description: "Libraries for data manipulation, analysis, and visualization.",
      bgImage: dataScienceBg,
      skills: [
        { id: 5, logo: numpy, name: "NumPy" },
        { id: 6, logo: pandas, name: "Pandas" },
        { id: 7, logo: Matplotlib, name: "Matplotlib" },
        { id: 8, logo: Sea, name: "Seaborn" },
        { id: 9, logo: scipy, name: "SciPy" },
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Frameworks for building and training ML/DL models.",
      bgImage: mlDlBg,
      skills: [
        { id: 10, logo: sklearn, name: "Scikit-learn" },
        { id: 11, logo: opencv, name: "OpenCV" },
        { id: 12, logo: tensorflow, name: "TensorFlow" },
        { id: 13, logo: keras, name: "Keras" },
        { id: 14, logo: pytorch, name: "PyTorch" },
        { id: 22, logo: neuralnets, name: "Neural Networks" },
      ],
    },
    {
      title: "AI Tools & Generative AI",
      description: "Advanced AI libraries, APIs, and concepts like LLMs and RAG.",
      bgImage: aiToolsBg,
      skills: [
        { id: 15, logo: huggingface, name: "Hugging Face" },
        { id: 17, logo: langchain, name: "LangChain" },
        { id: 18, logo: genai, name: "GenAI" },
        { id: 19, logo: llm, name: "LLM" },
        { id: 20, logo: rag, name: "RAG" },
        { id: 21, logo: NLP, name: "NLP" },
        { id: 26, logo: openai, name: "OpenAI API" },
        { id: 27, logo: gemini, name: "Gemini API" },
      ],
    },
    {
      title: "Cloud, Deployment & Databases",
      description: "Platforms for hosting, deploying apps, and managing data.",
      bgImage: cloudDbBg,
      skills: [
        { id: 29, logo: aws, name: "AWS" },
        { id: 30, logo: gcp, name: "GCP" },
        { id: 31, logo: azure, name: "Azure" },
        { id: 44, logo: docker, name: "Docker" },
        { id: 32, logo: github, name: "GitHub" },
        { id: 33, logo: vercel, name: "Vercel" },
        { id: 34, logo: netlify, name: "Netlify" },
        { id: 35, logo: render, name: "Render" },
        { id: 36, logo: firebase, name: "Firebase" },
        { id: 37, logo: streamlit, name: "Streamlit" },
        { id: 38, logo: mongodb, name: "MongoDB" },
        { id: 39, logo: mysql, name: "MySQL" },
        { id: 40, logo: vectordb, name: "Vector DB" },
        { id: 41, logo: faiss, name: "FAISS" },
        { id: 42, logo: chromadb, name: "ChromaDB" },
        { id: 43, logo: pinecone, name: "Pinecone" },
      ],
    },
    {
      title: "Other Tools",
      description: "Miscellaneous tools for business, productivity, and CRM management.",
      bgImage: otherToolsBg,
      skills: [
        { id: 48, logo: crm, name: "Zoho CRM" },
      ],
    },
  ];

  const allSkills = categories.flatMap((category) => category.skills);

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } },
  };

  const skillItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      name="Experience"
      className="max-w-screen-xl mx-auto py-20 px-4 md:px-10 text-center bg-gradient-to-b from-white to-gray-50"
    >
      <style>
        {`
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #f3f4f6;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #a45d48;
            border-radius: 10px;
            border: 2px solid #f3f4f6;
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: #a45d48;
          }
        `}
      </style>
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience & Skills
      </motion.h1>
      <div className="relative flex flex-col sm:flex-row items-center justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Over 3 years of experience in AI, ML, and web technologies. Skills grouped into simple categories for easy browsing.
        </motion.p>
        <motion.button
          className="relative px-6 py-3 bg-[#a45d48] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2 font-medium"
          onClick={() => setIsSkillsOpen(!isSkillsOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z"
            />
          </svg>
          <span>View All Skills</span>
          <motion.span
            className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-50"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {isSkillsOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50 relative"
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#a45d48 #ffffff',
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 sticky top-0 z-10 px-4 py-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-[#a45d48]">
                  All Skills Overview
                </h3>
                <button
                  className="text-gray-600 hover:text-gray-600 transition-colors duration-200"
                  onClick={() => setIsSkillsOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Skills Grid - Improved with larger icons and tooltips */}
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
              >
                {allSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md hover:shadow-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-gray-100"
                    variants={skillItemVariant}
                    whileHover={{ scale: 1.1, y: -5 }}
                    title={`Proficient in ${skill.name}`}
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full shadow-md border border-gray-100 overflow-hidden bg-white">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm text-gray-800 font-semibold text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            variants={categoryVariant}
            className="w-full min-h-[320px] flex items-center justify-center cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => toggleFlip(catIndex)}
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="relative w-full h-full group"
              animate={{ rotateY: flippedCategories[catIndex] ? 180 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <motion.div
                className="absolute w-full h-full border border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:border-gray-400"
                style={{
                  backfaceVisibility: "hidden",
                  backgroundImage: `url(${category.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <h2 className="relative text-2xl font-bold text-white tracking-wide border-b-2 border-gray-300 pb-2 mb-4">
                  {category.title}
                </h2>
                <p className="relative text-gray-200 text-sm text-center">{category.description}</p>
                <p className="relative text-gray-300 mt-4 text-sm font-medium">Click to view skills</p>
              </motion.div>

              {/* Back Side */}
              <motion.div
                className="absolute w-full h-full border border-gray-200 rounded-2xl p-6 overflow-auto transition-all duration-300 group-hover:border-gray-400"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  backgroundColor: "white", // Changed to white background
                }}
              >
                <h2 className="relative text-2xl font-bold text-gray-800 tracking-wide mb-4 border-b-2 border-gray-300 pb-2">
                  {category.title}
                </h2>
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="bg-white bg-opacity-90 border border-gray-100 rounded-xl shadow-sm p-3 flex flex-col items-center justify-center w-full transition-all duration-300 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      title={`Used in projects: ${skill.name}`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mb-2 rounded-full shadow-sm"
                        loading="lazy"
                      />
                      <h3 className="text-gray-800 font-semibold text-sm text-center">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr
        className="mt-16 border-gray-200 w-3/4 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "75%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  );
}

export default Experience;