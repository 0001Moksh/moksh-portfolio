import React, { useState, useEffect } from "react";
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

/* ─── per-category accent config (gold-purple luxury palette) ─── */
const CATEGORY_ACCENTS = [
  { color: "#ffffff", glow: "rgba(245,158,11,0.35)", border: "rgba(245,158,11,0.4)", label: "text-amber-400", tag: "FULL-STACK" },
  { color: "#a855f7", glow: "rgba(168,85,247,0.35)",  border: "rgba(168,85,247,0.4)", label: "text-purple-400", tag: "ANALYTICS" },
  { color: "#d97706", glow: "rgba(217,119,6,0.35)",   border: "rgba(217,119,6,0.4)",  label: "text-amber-500", tag: "ML / DL" },
  { color: "#c084fc", glow: "rgba(192,132,252,0.35)", border: "rgba(192,132,252,0.4)",label: "text-purple-300", tag: "GEN-AI" },
  { color: "#fbbf24", glow: "rgba(251,191,36,0.35)",  border: "rgba(251,191,36,0.4)", label: "text-yellow-400", tag: "INFRA" },
  { color: "#7c3aed", glow: "rgba(124,58,237,0.35)",  border: "rgba(124,58,237,0.4)", label: "text-violet-400", tag: "TOOLS" },
];

function Skills() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = [
    {
      title: "Web Development",
      description: "Production-grade full-stack stack that powers lightning-fast, pixel-perfect web applications.",
      bgImage: webDevBg,
      skills: [
        { id: 1,  logo: html,          name: "HTML" },
        { id: 2,  logo: css,           name: "CSS" },
        { id: 3,  logo: js,            name: "JavaScript" },
        { id: 45, logo: react,         name: "React" },
        { id: 46, logo: vite,          name: "Vite" },
        { id: 47, logo: tailwind,      name: "Tailwind CSS" },
        { id: 4,  logo: python,        name: "Python" },
        { id: 25, logo: Flask,         name: "Flask" },
        { id: 24, logo: Fastapi,       name: "FastAPI" },
        { id: 23, logo: apintegration, name: "API Integration" },
      ],
    },
    {
      title: "Data Science & Visualization",
      description: "End-to-end data engineering & beautiful interactive dashboards that tell compelling stories.",
      bgImage: dataScienceBg,
      skills: [
        { id: 5, logo: numpy,      name: "NumPy" },
        { id: 6, logo: pandas,     name: "Pandas" },
        { id: 7, logo: Matplotlib, name: "Matplotlib" },
        { id: 8, logo: Sea,        name: "Seaborn" },
        { id: 9, logo: scipy,      name: "SciPy" },
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Battle-tested frameworks that deliver state-of-the-art models in production environments.",
      bgImage: mlDlBg,
      skills: [
        { id: 10, logo: sklearn,     name: "Scikit-learn" },
        { id: 11, logo: opencv,      name: "OpenCV" },
        { id: 12, logo: tensorflow,  name: "TensorFlow" },
        { id: 13, logo: keras,       name: "Keras" },
        { id: 14, logo: pytorch,     name: "PyTorch" },
        { id: 22, logo: neuralnets,  name: "Neural Networks" },
      ],
    },
    {
      title: "AI Tools & Generative AI",
      description: "Agentic AI, RAG pipelines & LLM orchestration that powers intelligent applications.",
      bgImage: aiToolsBg,
      skills: [
        { id: 15, logo: huggingface, name: "Hugging Face" },
        { id: 17, logo: langchain,   name: "LangChain" },
        { id: 18, logo: genai,       name: "GenAI" },
        { id: 19, logo: llm,         name: "LLM" },
        { id: 20, logo: rag,         name: "RAG" },
        { id: 21, logo: NLP,         name: "NLP" },
        { id: 26, logo: openai,      name: "OpenAI API" },
        { id: 27, logo: gemini,      name: "Gemini API" },
        { id: 28, logo: llama,       name: "LLaMA" },
      ],
    },
    {
      title: "Cloud, Deployment & Databases",
      description: "Enterprise-grade infrastructure & vector stores that scale to millions of users.",
      bgImage: cloudDbBg,
      skills: [
        { id: 29, logo: aws,       name: "AWS" },
        { id: 30, logo: gcp,       name: "GCP" },
        { id: 31, logo: azure,     name: "Azure" },
        { id: 44, logo: docker,    name: "Docker" },
        { id: 32, logo: github,    name: "GitHub" },
        { id: 33, logo: vercel,    name: "Vercel" },
        { id: 34, logo: netlify,   name: "Netlify" },
        { id: 35, logo: render,    name: "Render" },
        { id: 36, logo: firebase,  name: "Firebase" },
        { id: 37, logo: streamlit, name: "Streamlit" },
        { id: 38, logo: mongodb,   name: "MongoDB" },
        { id: 39, logo: mysql,     name: "MySQL" },
        { id: 40, logo: vectordb,  name: "Vector DB" },
        { id: 41, logo: faiss,     name: "FAISS" },
        { id: 42, logo: chromadb,  name: "ChromaDB" },
        { id: 43, logo: pinecone,  name: "Pinecone" },
      ],
    },
    {
      title: "Other Tools",
      description: "Enterprise productivity & CRM platforms that complete the modern AI stack.",
      bgImage: otherToolsBg,
      skills: [{ id: 48, logo: crm, name: "Zoho CRM" }],
    },
  ];

  const allSkills = categories.flatMap((cat) => cat.skills);

  const filteredSkills = allSkills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      filterCategory === "All" ||
      categories.find((c) => c.title === filterCategory)?.skills.some((s) => s.id === skill.id);
    return matchesSearch && matchesCat;
  });

  /* Intersection observer for sticky nav highlight */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(parseInt(entry.target.id.split("-")[1]));
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -20% 0px" }
    );
    categories.forEach((_, i) => {
      const el = document.getElementById(`cat-${i}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ESC to close modal */
  useEffect(() => {
    if (!isSkillsOpen) return;
    const fn = (e) => { if (e.key === "Escape") setIsSkillsOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isSkillsOpen]);

  const modalVariant = {
    hidden:  { opacity: 0, scale: 0.9,  y: 50 },
    visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, scale: 0.92, y: 40, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-bg-primary relative overflow-x-clip overflow-y-visible" aria-label="Experience and skills section">
      <SEOHelmet pageKey="experience" />

      {/* ── Luxury ambient background orbs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "5%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }} />
      </div>

      <div name="Skills"  className="max-w-screen-xl mx-auto px-6 pt-36 pb-24 relative z-10">
        <RevealSection>
          <div  className="text-center mb-20">
            {/* Gold crown badge */}
            <div className="inline-flex items-center gap-3 mb-8" style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(168,85,247,0.12))",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: "9999px",
              padding: "10px 28px",
            }}>
              <span style={{ fontSize: 18 }}>✦</span>
              <span style={{
                letterSpacing: "0.35em",
                fontSize: "0.7rem",
                fontWeight: 700,
                background: "linear-gradient(90deg, #ffffff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>PRODUCTION AI STACK</span>
              <span style={{ fontSize: 18 }}>✦</span>
            </div>

            <h2 style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #a855f7 70%, #d8b4fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
            }}>
              Technical Skills
            </h2>

            {/* Gold rule */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 16, marginBottom: "1.5rem",
            }}>
              <div style={{ height: 1, width: 80, background: "linear-gradient(90deg, transparent, #ffffff)" }} />
              <span style={{ color: "#ffffff", fontSize: 12 }}>◆</span>
              <div style={{ height: 1, width: 80, background: "linear-gradient(90deg, #ffffff, transparent)" }} />
            </div>

            <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", maxWidth: 540, margin: "0 auto" }}>
              3+ years shipping intelligent systems. Every tool below has been battle-tested in real client projects.
            </p>
          </div>
        </RevealSection>

        {/* ── Stats row ── */}
        <RevealSection delay={0.05}>
          <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
            {[
              { value: `${allSkills.length}+`, label: "Technologies" },
              { value: "3+",                  label: "Years Experience" },
              { value: "10+",                  label: "Live Projects" },
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "20px 16px",
                borderRadius: 16,
                background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(168,85,247,0.06))",
                border: "1px solid rgba(245,158,11,0.2)",
              }}>
                <div style={{
                  fontSize: "2rem", fontWeight: 800, lineHeight: 1,
                  WebkitBackgroundClip: "text",
                  marginBottom: 6,
                }}>{stat.value}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* ── CTA Button ── */}
        <RevealSection delay={0.1}>
          <motion.button
            onClick={() => setIsSkillsOpen(true)}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              margin: "0 auto",
              padding: "18px 48px",
              borderRadius: 9999,
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#fff",
              background: "linear-gradient(135deg, #92400e 0%, #d97706 30%, #a855f7 70%, #6d28d9 100%)",
              border: "1px solid rgba(245,158,11,0.5)",
              boxShadow: "0 0 40px rgba(245,158,11,0.25), 0 0 80px rgba(168,85,247,0.15)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* shimmer sweep */}
            <motion.span
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
            />
            <span>EXPLORE ENTIRE SKILL MATRIX</span>
            <motion.span
              animate={{ rotate: [0, 45, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              style={{ fontSize: "1.4rem" }}
            >↗</motion.span>
          </motion.button>
        </RevealSection>
      </div>

      {/* ══════════════════════════════════════════════
          CATEGORY SECTIONS — improved visuals
      ══════════════════════════════════════════════ */}
      {categories.map((category, index) => {
        const accent = CATEGORY_ACCENTS[index];
        return (
          <section
            key={index}
            id={`cat-${index}`}
            style={{
              position: "relative",
              padding: "7rem 0",
              overflowX: "clip",
              borderTop: `1px solid rgba(245,158,11,0.1)`,
            }}
          >
            {/* faint section number watermark */}
            <div style={{
              position: "absolute",
              top: "50%", left: index % 2 === 0 ? "-2rem" : "auto",
              right: index % 2 === 1 ? "-2rem" : "auto",
              transform: "translateY(-50%)",
              fontSize: "clamp(6rem, 12vw, 10rem)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: `1px ${accent.border}`,
              opacity: 0.18,
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1,
              zIndex: 0,
            }}>
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* LEFT — SKILLS LIST */}
                <div className={`order-2 lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  {/* section label */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
                    padding: "6px 18px",
                    borderRadius: 9999,
                    background: `linear-gradient(135deg, ${accent.color}18, rgba(168,85,247,0.1))`,
                    border: `1px solid ${accent.border}`,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent.color, display: "block" }} />
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", color: accent.color }}>
                      {accent.tag}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        whileHover={{ x: 6 }}
                        style={{
                          display: "flex", alignItems: "center", gap: 18,
                          padding: "14px 20px",
                          borderRadius: 16,
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid transparent",
                          cursor: "default",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                        }}
                        className="skill-row-item"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${accent.color}0d, rgba(168,85,247,0.05))`;
                          e.currentTarget.style.borderColor = accent.border;
                          e.currentTarget.style.boxShadow = `0 4px 24px ${accent.glow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                          e.currentTarget.style.borderColor = "transparent";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {/* icon */}
                        <div style={{
                          width: 52, height: 52, flexShrink: 0,
                          background: "#fff",
                          borderRadius: 14,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: `0 4px 16px ${accent.glow}`,
                          padding: 8,
                        }}>
                          <img src={skill.logo} alt={skill.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                            {skill.name}
                          </div>
                          
                        </div>

                        {/* trailing arrow */}
                        <div style={{ color: accent.color, opacity: 0.5, fontSize: "1rem" }}>›</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — PREMIUM STICKY CARD */}
                <div
                  className={`order-1 lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                  style={{ position: "sticky", top: "7rem", alignSelf: "start", height: "fit-content" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.93, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      borderRadius: 28,
                      overflow: "hidden",
                      border: `1px solid ${accent.border}`,
                      boxShadow: `0 30px 80px ${accent.glow}, 0 0 0 1px rgba(255,255,255,0.04) inset`,
                      position: "relative",
                    }}
                  >
                    {/* top gold accent line */}
                    <div style={{
                      height: 3,
                      background: `linear-gradient(90deg, transparent, ${accent.color}, rgba(168,85,247,0.8), transparent)`,
                    }} />

                    {/* browser chrome */}
                    <div style={{
                      height: 52, background: "rgba(0,0,0,0.9)",
                      display: "flex", alignItems: "center", padding: "0 24px", gap: 16,
                    }}>
                      <div style={{ display: "flex", gap: 7 }}>
                        {["#ef4444","#ffffff","#10b981"].map((c) => (
                          <div key={c} style={{ width: 11, height: 11, background: c, borderRadius: "50%" }} />
                        ))}
                      </div>
                      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <div style={{
                          background: "rgba(255,255,255,0.08)",
                          borderRadius: 9999,
                          padding: "4px 28px",
                          fontSize: "0.72rem", color: "rgba(255,255,255,0.5)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}>
                          live-project-dashboard.local
                        </div>
                      </div>
                    </div>

                    {/* bg image */}
                    <div style={{
                      height: 520,
                      backgroundImage: `url(${category.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}>
                      {/* layered overlay */}
                      <div style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(160deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.95) 100%)`,
                      }} />
                      {/* accent color tint */}
                      <div style={{
                        position: "absolute", inset: 0,
                        background: `radial-gradient(ellipse at top left, ${accent.color}18 0%, transparent 60%)`,
                      }} />

                      {/* floating content */}
                      <div style={{
                        position: "absolute", inset: 0,
                        padding: "40px 44px",
                        display: "flex", flexDirection: "column", justifyContent: "space-between",
                      }}>
                        <div>
                          {/* stack number + title */}
                          <div style={{ marginBottom: 28 }}>
                            <div style={{
                              fontSize: "0.65rem", fontWeight: 700,
                              letterSpacing: "0.4em", color: accent.color, marginBottom: 10,
                            }}>
                              STACK {String(index + 1).padStart(2, "0")} · {accent.tag}
                            </div>
                            <h2 style={{
                              fontSize: "clamp(2rem, 4vw, 3rem)",
                              fontWeight: 800, lineHeight: 1.1,
                              letterSpacing: "-0.025em",
                              background: `linear-gradient(135deg, #fff 0%, ${accent.color} 100%)`,
                              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            }}>
                              {category.title}
                            </h2>
                          </div>

                          {/* gold rule */}
                          <div style={{
                            width: 60, height: 2, marginBottom: 24,
                            background: `linear-gradient(90deg, ${accent.color}, transparent)`,
                          }} />

                          <p style={{
                            fontSize: "1rem", lineHeight: 1.7,
                            color: "rgba(255,255,255,0.65)", maxWidth: 380,
                            marginBottom: 36,
                          }}>
                            {category.description}
                          </p>

                          {/* pill count */}
                          <div style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            padding: "8px 20px",
                            borderRadius: 9999,
                            background: `linear-gradient(135deg, ${accent.color}22, rgba(168,85,247,0.15))`,
                            border: `1px solid ${accent.border}`,
                          }}>
                            <span style={{ color: accent.color, fontSize: "0.85rem", fontWeight: 700 }}>
                              {category.skills.length}
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem" }}>
                              technologies mastered
                            </span>
                          </div>
                        </div>

                        {/* bottom row: skill icon strip */}
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                          {category.skills.slice(0, 6).map((skill) => (
                            <motion.div
                              key={skill.id}
                              whileHover={{ y: -4, scale: 1.1 }}
                              style={{
                                width: 42, height: 42, background: "rgba(255,255,255,0.95)",
                                borderRadius: 10, padding: 6,
                                boxShadow: `0 4px 12px ${accent.glow}`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                              }}
                            >
                              <img src={skill.logo} alt={skill.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
                            </motion.div>
                          ))}
                          {category.skills.length > 6 && (
                            <div style={{
                              width: 42, height: 42,
                              background: `linear-gradient(135deg, ${accent.color}33, rgba(168,85,247,0.2))`,
                              border: `1px solid ${accent.border}`,
                              borderRadius: 10,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              color: accent.color, fontSize: "0.7rem", fontWeight: 700,
                            }}>
                              +{category.skills.length - 6}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════════════════════════════════════════
          ALL SKILLS MODAL — glassmorphism cards
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {isSkillsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSkillsOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 999,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(24px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 1100,
                borderRadius: 28,
                overflow: "hidden",
                background: "linear-gradient(160deg, rgba(20,12,40,0.97) 0%, rgba(10,8,20,0.98) 100%)",
                border: "1px solid rgba(245,158,11,0.25)",
                boxShadow: "0 40px 120px rgba(245,158,11,0.15), 0 0 0 1px rgba(168,85,247,0.15)",
              }}
            >
              {/* Modal header */}
              <div style={{
                padding: "28px 36px",
                borderBottom: "1px solid rgba(245,158,11,0.15)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(168,85,247,0.06))",
                position: "sticky", top: 0, zIndex: 10,
              }}>
                <div>
                  <div style={{
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.35em",
                    background: "linear-gradient(90deg, #ffffff, #a855f7)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    marginBottom: 6,
                  }}>COMPLETE INVENTORY</div>
                  <h3 style={{
                    fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em",
                    background: "linear-gradient(135deg, #fbbf24, #e9d5ff)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    All {allSkills.length} Skills
                  </h3>
                </div>

                {/* close */}
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSkillsOpen(false)}
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff", fontSize: "1.2rem", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                >×</motion.button>
              </div>

              <div style={{ padding: "28px 36px", maxHeight: "75vh", overflowY: "auto" }}>
                {/* Search + category filter row */}
                <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 240, position: "relative" }}>
                    <span style={{
                      position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)",
                      fontSize: "1rem", opacity: 0.5,
                    }}>🔍</span>
                    <input
                      type="text"
                      placeholder="Search any skill…"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        width: "100%", padding: "13px 20px 13px 46px",
                        borderRadius: 14,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        color: "#fff", fontSize: "0.9rem", outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(245,158,11,0.6)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(245,158,11,0.25)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Category filter pills */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    {["All", ...categories.map((c) => c.title)].map((cat, i) => {
                      const acc = i === 0 ? null : CATEGORY_ACCENTS[i - 1];
                      const active = filterCategory === cat;
                      return (
                        <motion.button
                          key={cat}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFilterCategory(cat)}
                          style={{
                            padding: "7px 14px", borderRadius: 9999,
                            fontSize: "0.72rem", fontWeight: 700,
                            cursor: "pointer",
                            letterSpacing: "0.05em",
                            background: active
                              ? `linear-gradient(135deg, ${acc ? acc.color : "#ffffff"}, rgba(168,85,247,0.8))`
                              : "rgba(255,255,255,0.04)",
                            border: active
                              ? `1px solid ${acc ? acc.color : "#ffffff"}`
                              : "1px solid rgba(255,255,255,0.1)",
                            color: active ? "#fff" : "rgba(255,255,255,0.5)",
                            boxShadow: active ? `0 4px 16px ${acc ? acc.glow : "rgba(245,158,11,0.3)"}` : "none",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {i === 0 ? "All" : CATEGORY_ACCENTS[i - 1].tag}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Skills grid — glassmorphism cards */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                  gap: 16,
                }}>
                  {filteredSkills.length === 0 ? (
                    <div style={{
                      gridColumn: "1 / -1",
                      display: "flex", flexDirection: "column", alignItems: "center",
                      justifyContent: "center", padding: "64px 0", textAlign: "center",
                    }}>
                      <div style={{ fontSize: "3rem", marginBottom: 16 }}>✦</div>
                      <p style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff" }}>No skills matched</p>
                      <p style={{ color: "var(--color-text-muted)", marginTop: 6 }}>Try different keywords</p>
                    </div>
                  ) : (
                    filteredSkills.map((skill, i) => {
                      /* find which category this skill belongs to for accent */
                      const catIdx = categories.findIndex((c) => c.skills.some((s) => s.id === skill.id));
                      const acc = catIdx >= 0 ? CATEGORY_ACCENTS[catIdx] : CATEGORY_ACCENTS[0];
                      return (
                        <motion.div
                          key={skill.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(i * 0.025, 0.4) }}
                          whileHover={{ y: -8, scale: 1.03 }}
                          style={{
                            borderRadius: 20,
                            padding: "24px 16px 20px",
                            display: "flex", flexDirection: "column", alignItems: "center",
                            textAlign: "center",
                            cursor: "default",
                            /* glassmorphism */
                            background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(12px)",
                            border: `1px solid rgba(255,255,255,0.08)`,
                            boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(160deg, ${acc.color}15 0%, rgba(168,85,247,0.1) 100%)`;
                            e.currentTarget.style.borderColor = acc.border;
                            e.currentTarget.style.boxShadow = `0 12px 40px ${acc.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)";
                          }}
                        >
                          {/* top shine line */}
                          <div style={{
                            position: "absolute", top: 0, left: "20%", right: "20%",
                            height: 1,
                            background: `linear-gradient(90deg, transparent, ${acc.color}80, transparent)`,
                          }} />

                          {/* icon */}
                          <div style={{
                            width: 60, height: 60, marginBottom: 14,
                            background: "rgba(255,255,255,0.96)",
                            borderRadius: 16, padding: 10,
                            boxShadow: `0 6px 20px ${acc.glow}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <img src={skill.logo} alt={skill.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
                          </div>

                          <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#fff", lineHeight: 1.3 }}>
                            {skill.name}
                          </span>

                          {/* category dot */}
                          <div style={{
                            marginTop: 8,
                            width: 6, height: 6, borderRadius: "50%",
                            background: acc.color,
                            boxShadow: `0 0 8px ${acc.color}`,
                          }} />
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Modal footer */}
              <div style={{
                padding: "16px 36px",
                borderTop: "1px solid rgba(245,158,11,0.1)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(0,0,0,0.3)",
              }}>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                  Showing {filteredSkills.length} of {allSkills.length} skills
                </span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {CATEGORY_ACCENTS.map((acc, i) => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: acc.color,
                      opacity: 0.7,
                    }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Skills;