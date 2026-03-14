import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from './RevealSection';
import { SEOHelmet } from "../hooks/useSEO";

import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import crm from "../assets/crm.jpg";
import Matplotlib from "../assets/matplotlib.png";
import keras from "../assets/keras.png";
import pandas from "../assets/pandas.png";
import Sea from "../assets/seaborn.png";
import numpy from "../assets/numpy.jpg";
import scipy from "../assets/scipy.jpg";
import sklearn from "../assets/sklearn.jpg";
import opencv from "../assets/opencv.jpg";
import tensorflow from "../assets/tensorflow.png";
import Fastapi from "../assets/Fastapi.jpg";
import Flask from "../assets/Flask.jpg";
import NLP from "../assets/NLP.png";
import genai from "../assets/genai.png";
import langchain from "../assets/langchain.png";
import rag from "../assets/rag.png";
import llm from "../assets/llm.jpg";
import python from "../assets/python.png";
import aws from "../assets/aws.png";
import gcp from "../assets/gcp.png";
import azure from "../assets/azure.png";
import github from "../assets/github.png";
import vercel from "../assets/vercel.png";
import netlify from "../assets/netlify.png";
import render from "../assets/render.png";
import firebase from "../assets/firebase.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import huggingface from "../assets/huggingface.png";
import pytorch from "../assets/pytorch.png";
import faiss from "../assets/faiss.png";
import chromadb from "../assets/chromadb.png";
import pinecone from "../assets/pinecone.png";
import openai from "../assets/openai.png";
import gemini from "../assets/gemini.png";
import streamlit from "../assets/streamlit.png";
import neuralnets from "../assets/neuralnets.png";
import apintegration from "../assets/apiintegration.png";
import vectordb from "../assets/vectordb.png";
import docker from "../assets/docker.png";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import tailwind from "../assets/tailwind.png";
import llama from "../assets/llama.png";
import webDevBg from "../assets/webdev-bg.jpg";
import dataScienceBg from "../assets/datascience-bg.jpg";
import mlDlBg from "../assets/mldl-bg.jpg";
import aiToolsBg from "../assets/aitools-bg.jpg";
import cloudDbBg from "../assets/clouddb-bg.jpg";
import otherToolsBg from "../assets/othertools-bg.jpg";

function Experience() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // === DATA FIRST (fixed original reference error) ===
  const categories = [
    {
      title: "Web Development",
      description: "Production-grade full-stack stack that powers lightning-fast, pixel-perfect web applications.",
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
        { id: 23, logo: apintegration, name: "API Integration" }, // fixed duplicate ID
      ],
    },
    {
      title: "Data Science & Visualization",
      description: "End-to-end data engineering & beautiful interactive dashboards that tell compelling stories.",
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
      description: "Battle-tested frameworks that deliver state-of-the-art models in production environments.",
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
      description: "Agentic AI, RAG pipelines & LLM orchestration that powers intelligent applications.",
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
        { id: 28, logo: llama, name: "LLaMA" },
      ],
    },
    {
      title: "Cloud, Deployment & Databases",
      description: "Enterprise-grade infrastructure & vector stores that scale to millions of users.",
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
      description: "Enterprise productivity & CRM platforms that complete the modern AI stack.",
      bgImage: otherToolsBg,
      skills: [{ id: 48, logo: crm, name: "Zoho CRM" }],
    },
  ];

  const allSkills = categories.flatMap((category) => category.skills);

  const filteredSkills = allSkills.filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sticky category highlight on scroll (now after data definition)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.id.split("-")[1]);
            setActiveCategory(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-80px 0px -20% 0px" }
    );

    categories.forEach((_, i) => {
      const section = document.getElementById(`cat-${i}`);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []); // static data → runs once

  // Escape key + better modal UX
  useEffect(() => {
    if (!isSkillsOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsSkillsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isSkillsOpen]);

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.92, y: 40, transition: { duration: 0.3 } },
  };

  return (
    <section name="Experience" className="bg-bg-primary relative overflow-hidden" aria-label="Experience and skills section">
      <SEOHelmet pageKey="experience" />
      <div className="max-w-screen-xl mx-auto px-6 pt-36 pb-24">
        <RevealSection>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 bg-purple-950/70 px-8 py-3 rounded-full border border-primary/30">
              <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
              <span className="uppercase tracking-[6px] text-xs font-semibold text-primary">PRODUCTION AI STACK</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4 text-gradient">
              Experience &amp; Skills
            </h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              3+ years shipping intelligent systems. Every tool below has been battle-tested in real client projects.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <motion.button
            onClick={() => setIsSkillsOpen(true)}
            className="mx-auto flex items-center gap-4 btn-primary text-lg px-10 py-5 rounded-3xl shadow-glow-xl hover:shadow-purple-lg group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            EXPLORE ENTIRE SKILL MATRIX
            <span className="text-2xl group-hover:rotate-45 transition-transform">↗</span>
          </motion.button>
        </RevealSection>
      </div>

     

      {/* PREMIUM SECTIONS */}
      {categories.map((category, index) => (
        <section
          key={index}
          id={`cat-${index}`}
          className="relative py-28 border-t border-purple-900/30"
        >
          <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* LEFT — SKILLS LIST */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="space-y-8">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 group hover-glow"
                  >
                    <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xl group-hover:text-primary transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-xs text-teal-400 font-medium">Used in 8+ live projects</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT — STICKY PREMIUM CARD */}
            <div
              className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""} 
                         lg:sticky lg:top-28 lg:self-start`}
            >
              <motion.div
                className="card-glow relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/40 border border-purple-700/30"
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.95, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Browser top bar */}
                <div className="h-12 bg-black/80 flex items-center px-6 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white/10 text-white/70 text-xs px-8 py-1 rounded-full inline-block">
                      live-project-dashboard.local
                    </div>
                  </div>
                </div>

                {/* Background */}
                <div
                  className="h-[520px] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

                  {/* Floating content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-6 mb-10 bg-black/40 py-4 rounded-2xl px-6">
                        <div>
                          <div className="text-teal-500 text-xs font-medium tracking-[4px] mb-1">
                            STACK {String(index + 1).padStart(2, "0")}
                          </div>
                          <h2 className="text-5xl font-bold tracking-tighter text-white">
                            {category.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-[17px] leading-relaxed text-muted max-w-md mb-12">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center text-[10px] text-white/50 tracking-widest font-medium">
                      POWERED BY {category.title.toUpperCase()} • DEPLOYED ON PRODUCTION
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ALL SKILLS MODAL - ENHANCED UX */}
      <AnimatePresence>
        {isSkillsOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[999] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSkillsOpen(false)}
          >
            <motion.div
              id="skills-modal"
              className="bg-bg-tertiary w-full max-w-7xl rounded-3xl overflow-hidden border border-primary/30 shadow-2xl"
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-bg-tertiary px-10 py-8 border-b border-purple-900/30 flex items-center justify-between z-10">
                <div>
                  <div className="text-primary text-xs tracking-[4px] font-semibold">COMPLETE INVENTORY</div>
                  <h3 className="text-4xl font-bold text-white">All {allSkills.length} Skills</h3>
                </div>
                <button
                  onClick={() => setIsSkillsOpen(false)}
                  className="text-4xl text-muted hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-10 max-h-[75vh] overflow-y-auto">
                {/* Live Search - huge UX upgrade */}
                <div className="mb-10 flex justify-center">
                  <input
                    type="text"
                    placeholder="🔍 Search any skill (e.g. LangChain, Docker...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-lg bg-white/5 border border-white/20 focus:border-primary focus:bg-white/10 rounded-3xl px-8 py-4 text-lg text-white placeholder:text-white/50 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8">
                  {filteredSkills.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                      <div className="text-6xl mb-6">🔍</div>
                      <p className="text-2xl font-medium text-white">No skills matched</p>
                      <p className="text-muted mt-2">Try different keywords</p>
                    </div>
                  ) : (
                    filteredSkills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        whileHover={{ y: -12, scale: 1.05 }}
                        className="bg-white/5 border border-white/10 hover:border-primary rounded-3xl p-8 flex flex-col items-center text-center transition-all group shadow-purple"
                      >
                        <div className="w-24 h-24 bg-white rounded-3xl p-6 mb-6 shadow-2xl">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <span className="font-semibold text-xl text-white group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Experience;