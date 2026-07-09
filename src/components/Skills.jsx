import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from './RevealSection';
import { SEOHelmet } from "../hooks/useSEO";
import webDevBg from "../assets/webdev-bg.jpg";
import mlDlBg from "../assets/mldl-bg.jpg";
import aiToolsBg from "../assets/aitools-bg.jpg";
import cloudDbBg from "../assets/clouddb-bg.jpg";
import otherToolsBg from "../assets/othertools-bg.jpg";

/* ─── per-category accent config (gold-purple luxury palette) ─── */
const CATEGORY_ACCENTS = [
  {
    color: "#ffffff",
    glow: "rgba(245,158,11,0.35)",
    border: "rgba(245,158,11,0.4)",
    label: "text-amber-400",
    tag: "APPLICATIONS",
  },
  {
    color: "#a855f7",
    glow: "rgba(168,85,247,0.35)",
    border: "rgba(168,85,247,0.4)",
    label: "text-purple-400",
    tag: "AGENTIC AI",
  },
  {
    color: "#d97706",
    glow: "rgba(217,119,6,0.35)",
    border: "rgba(217,119,6,0.4)",
    label: "text-amber-500",
    tag: "LLM STACK",
  },
  {
    color: "#c084fc",
    glow: "rgba(192,132,252,0.35)",
    border: "rgba(192,132,252,0.4)",
    label: "text-purple-300",
    tag: "RAG",
  },
  {
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.35)",
    border: "rgba(251,191,36,0.4)",
    label: "text-yellow-400",
    tag: "DEVOPS",
  },
  {
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.35)",
    border: "rgba(124,58,237,0.4)",
    label: "text-violet-400",
    tag: "ECOSYSTEM",
  },
];

function Skills() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = [
    {
      title: "Application Engineering",
      description: "Modern web and API foundations tailored for production AI applications.",
      bgImage: webDevBg,
      skills: [
        { id: 1, name: "Python", docUrl: "https://www.python.org/doc/" },
        { id: 2, name: "FastAPI", docUrl: "https://fastapi.tiangolo.com/" },
        { id: 3, name: "Flask", docUrl: "https://flask.palletsprojects.com/" },
        { id: 4, name: "React", docUrl: "https://react.dev/" },
        { id: 5, name: "Tailwind CSS", docUrl: "https://tailwindcss.com/docs" },
        { id: 6, name: "Vite", docUrl: "https://vitejs.dev/guide/" },
        { id: 7, name: "REST APIs", docUrl: "https://restfulapi.net/" },
        { id: 8, name: "Authentication (JWT/OAuth)", docUrl: "https://oauth.net/2/" },
        { id: 9, name: "Pydantic", docUrl: "https://docs.pydantic.dev/latest/" },
        { id: 10, name: "Supabase", docUrl: "https://supabase.com/docs" },
      ],
    },
    {
      title: "Agentic AI",
      description: "Designing intelligent workflows, multi-agent orchestration, and prompt-driven LLM systems.",
      bgImage: aiToolsBg,
      skills: [
        { id: 11, name: "Agentic AI", docUrl: "https://platform.openai.com/docs/guides/agents" },
        { id: 12, name: "AI Agents", docUrl: "https://platform.openai.com/docs/guides/agents" },
        { id: 13, name: "Multi-Agent Systems", docUrl: "https://www.ibm.com/topics/multi-agent-systems" },
        { id: 14, name: "AI Workflows", docUrl: "https://platform.openai.com/docs/guides/agents" },
        { id: 15, name: "Prompt Engineering", docUrl: "https://platform.openai.com/docs/guides/prompt-engineering" },
        { id: 16, name: "LLMs", docUrl: "https://platform.openai.com/docs/introduction" },
        { id: 17, name: "Generative AI", docUrl: "https://developers.google.com/machine-learning/generative-ai" },
        { id: 18, name: "Tool Calling", docUrl: "https://platform.openai.com/docs/guides/gpt/function-calling" },
        { id: 19, name: "Function Calling", docUrl: "https://platform.openai.com/docs/guides/gpt/function-calling" },
        { id: 20, name: "Model Context Protocol (MCP)", docUrl: "https://learn.microsoft.com/en-us/azure/ai-services/" },
        { id: 21, name: "LLMOps", docUrl: "https://learn.microsoft.com/en-us/azure/ai-services/overview-llmops" },
      ],
    },
    {
      title: "LLM Infrastructure",
      description: "End-to-end model context, routing, and API platforms for modern LLM engineering.",
      bgImage: mlDlBg,
      skills: [
        { id: 22, name: "LangChain", docUrl: "https://langchain.com/docs/" },
        { id: 23, name: "LangGraph", docUrl: "https://www.langgraph.com/docs" },
        { id: 24, name: "LangSmith", docUrl: "https://www.langsmith.com/docs" },
        { id: 25, name: "OpenAI API", docUrl: "https://platform.openai.com/docs/api-reference/introduction" },
        { id: 26, name: "Gemini API", docUrl: "https://developers.google.com/gemini" },
        { id: 27, name: "Claude API", docUrl: "https://www.anthropic.com/index/claude" },
        { id: 28, name: "LLaMA", docUrl: "https://ai.meta.com/llama/" },
        { id: 29, name: "LiteLLM", docUrl: "https://www.litellm.ai/" },
        { id: 30, name: "OpenRouter", docUrl: "https://openrouter.ai/docs" },
        { id: 31, name: "DeepSeek API", docUrl: "https://api.deepseek.ai/docs" },
      ],
    },
    {
      title: "RAG & Semantic Search",
      description: "Scaling retrieval pipelines with embeddings, hybrid search, and production-grade vector systems.",
      bgImage: cloudDbBg,
      skills: [
        { id: 32, name: "RAG", docUrl: "https://platform.openai.com/docs/guides/rag" },
        { id: 33, name: "Hybrid Search", docUrl: "https://learn.microsoft.com/en-us/azure/search/search-hybrid-search" },
        { id: 34, name: "Embeddings", docUrl: "https://platform.openai.com/docs/guides/embeddings" },
        { id: 35, name: "Semantic Search", docUrl: "https://learn.microsoft.com/en-us/azure/search/semantic-search-overview" },
        { id: 36, name: "Vector Search", docUrl: "https://www.pinecone.io/learn/vector-database/" },
        { id: 37, name: "Document Processing", docUrl: "https://learn.microsoft.com/en-us/azure/applied-ai-services/form-recognizer/" },
        { id: 38, name: "Chunking Strategies", docUrl: "https://platform.openai.com/docs/guides/embeddings" },
        { id: 39, name: "FAISS", docUrl: "https://faiss.ai/" },
        { id: 40, name: "ChromaDB", docUrl: "https://www.trychroma.com/docs/" },
        { id: 41, name: "Pinecone", docUrl: "https://www.pinecone.io/docs/" },
        { id: 42, name: "NLP", docUrl: "https://www.nltk.org/" },
      ],
    },
    {
      title: "Cloud & Observability",
      description: "Deploying and monitoring AI systems with cloud-native infrastructure and developer workflows.",
      bgImage: otherToolsBg,
      skills: [
        { id: 43, name: "PostgreSQL", docUrl: "https://www.postgresql.org/docs/" },
        { id: 44, name: "MongoDB", docUrl: "https://www.mongodb.com/docs/" },
        { id: 45, name: "MySQL", docUrl: "https://dev.mysql.com/doc/" },
        { id: 46, name: "Docker", docUrl: "https://docs.docker.com/" },
        { id: 47, name: "Git", docUrl: "https://git-scm.com/doc" },
        { id: 48, name: "GitHub", docUrl: "https://docs.github.com/" },
        { id: 49, name: "AWS", docUrl: "https://aws.amazon.com/documentation/" },
        { id: 50, name: "GCP", docUrl: "https://cloud.google.com/docs" },
        { id: 51, name: "Azure", docUrl: "https://learn.microsoft.com/en-us/azure/" },
        { id: 52, name: "CI/CD", docUrl: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
        { id: 53, name: "Monitoring", docUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview" },
        { id: 54, name: "Tracing", docUrl: "https://opentelemetry.io/docs/" },
      ],
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

  /* ESC to close modal */
  useEffect(() => {
    if (!isSkillsOpen) return;
    const fn = (e) => { if (e.key === "Escape") setIsSkillsOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isSkillsOpen]);

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.92, y: 40, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="bg-bg-primary relative overflow-x-clip overflow-y-visible scroll-mt-24" aria-label="Experience and skills section">
      <SEOHelmet pageKey="experience" />

      {/* ── Luxury ambient background orbs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: "min(70vw, 600px)", height: "min(70vw, 600px)", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "5%",
          width: "min(78vw, 700px)", height: "min(78vw, 700px)", borderRadius: "50%",
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

      <div className="max-w-screen-xl mx-auto px-6 pt-32 relative z-10">
        <RevealSection>
          <div name="Skills" className="text-center  mb-10">
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
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-16 max-w-2xl mx-auto">
            {[
              { value: `${allSkills.length}+`, label: "Technologies" },
              { value: "3+", label: "Years Experience" },
              { value: "15+", label: "Live Projects" },
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "12px 8px",
                borderRadius: 16,
                background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(168,85,247,0.06))",
                border: "1px solid rgba(245,158,11,0.2)",
              }}>
                <div style={{
                  fontSize: "clamp(1.15rem, 4.6vw, 2rem)", fontWeight: 800, lineHeight: 1,
                  WebkitBackgroundClip: "text",
                  marginBottom: 6,
                }}>{stat.value}</div>
                <div style={{ fontSize: "clamp(0.5rem, 1.9vw, 0.75rem)", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
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
                      <motion.a
                        key={skill.id}
                        href={skill.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        whileHover={{ x: 6 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 18,
                          padding: "14px 20px",
                          borderRadius: 16,
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(148,163,184,0.20)", // Default gray border
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          textDecoration: "none",
                        }}
                        className="skill-row-item"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${accent.color}0d, rgba(168,85,247,0.05))`;
                          e.currentTarget.style.borderColor = accent.color; // Accent color on hover
                          e.currentTarget.style.boxShadow = `0 4px 24px ${accent.glow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                          e.currentTarget.style.borderColor = "rgba(148,163,184,0.20)"; // Back to gray
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                            {skill.name}
                          </div>

                        </div>

                        {/* trailing arrow */}
                        <div style={{ color: accent.color, opacity: 0.5, fontSize: "1rem" }}>›</div>
                      </motion.a>
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
                        {["#ef4444", "#ffffff", "#10b981"].map((c) => (
                          <div key={c} style={{ width: 11, height: 11, background: c, borderRadius: "50%" }} />
                        ))}
                      </div>
                      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <div style={{
                          fontSize: "0.65rem", fontWeight: 700,
                          letterSpacing: "0.4em", color: accent.color, marginBottom: 10,
                        }}>
                          STACK {String(index + 1).padStart(2, "0")} · {accent.tag}
                        </div>
                      </div>
                    </div>

                    {/* bg image */}
                    <div
                      className="h-[120px] lg:h-[520px]"
                      style={{
                        backgroundImage: `url(${category.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                      }}
                    >
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
                        padding: "20px 20px",
                        display: "flex", flexDirection: "column", justifyContent: "space-between",
                      }}>
                        <div>
                          {/* stack number + title */}
                          <div style={{ marginBottom: 28 }}>

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
                          <div className="hidden lg:flex gap-2 flex-wrap">

                            <p
                              style={{
                                fontSize: "1rem", lineHeight: 1.7,
                                color: "rgba(255,255,255,0.65)", maxWidth: 380,
                                marginBottom: 36,
                              }}>
                              {category.description}
                            </p>
                          </div>

                          {/* bottom row: skill icon strip */}
                          <div className="hidden lg:flex gap-2 flex-wrap">
                            {category.skills.slice(0, 6).map((skill) => (
                              <motion.div
                                key={skill.id}
                                whileHover={{ y: -4, scale: 1.03 }}
                                style={{
                                  minWidth: 140,
                                  padding: "10px 12px",
                                  background: "rgba(255,255,255,0.08)",
                                  borderRadius: 9999,
                                  border: `1px solid rgba(255,255,255,0.12)`,
                                  color: "#fff",
                                  fontSize: "0.75rem",
                                  fontWeight: 700,
                                  letterSpacing: "0.02em",
                                  textAlign: "center",
                                }}
                                className="flex items-center justify-center"
                              >
                                {skill.name}
                              </motion.div>
                            ))}

                            {category.skills.length > 6 && (
                              <div
                                className="hidden lg:flex items-center justify-center"
                                style={{
                                  minWidth: 140,
                                  padding: "10px 12px",
                                  background: `linear-gradient(135deg, ${accent.color}33, rgba(168,85,247,0.2))`,
                                  border: `1px solid ${accent.border}`,
                                  borderRadius: 9999,
                                  color: accent.color,
                                  fontSize: "0.75rem",
                                  fontWeight: 700,
                                  textAlign: "center",
                                }}
                              >
                                +{category.skills.length - 6} more
                              </div>
                            )}
                          </div>
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
                        <motion.a
                          key={skill.id}
                          href={skill.docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(i * 0.025, 0.4) }}
                          whileHover={{ y: -8, scale: 1.03 }}
                          style={{
                            borderRadius: 20,
                            padding: "24px 16px 20px",
                            display: "flex", flexDirection: "column", alignItems: "center",
                            textAlign: "center",
                            cursor: "pointer",
                            textDecoration: "none",
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
                        </motion.a>
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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full mx-0 flex flex-col items-center justify-center
      bg-transparent border-x border-b border-lighter-gray 
      rounded-b-[100px] md:rounded-b-[800px] py-10
      shadow-[inset_0_-15px_20px_-15px_rgba(0,0,0,0.3)]
      backdrop-blur-sm"        >
        <br /><br /><br /><br />
      </motion.div>
    </section>
  );
}

export default Skills;