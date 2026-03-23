import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaPython, FaBrain, FaRocket, FaGithub, FaGraduationCap,
  FaAward, FaServer, FaDatabase,
} from "react-icons/fa";
import {
  SiTensorflow, SiLangchain, SiFastapi, SiNextdotjs, SiDocker,
  SiOpenai, SiMongodb, SiPostgresql,
} from "react-icons/si";
import profileImage from "../assets/profile.png";
import hrWhiteFrame from "../assets/hr_white_frame.png";

/* ─── Animated counter ──────────────────────────────────────────────────────── */
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const end = parseInt(to);
    const dur = 1600;
    const interval = Math.max(dur / end, 16);
    let cur = 0;
    const t = setInterval(() => {
      cur += 1;
      setVal(cur);
      if (cur >= end) clearInterval(t);
    }, interval);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Particle canvas ───────────────────────────────────────────────────────── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.3, o: Math.random() * 0.4 + 0.1,
    }));
    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.07 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55, pointerEvents: "none" }}
    />
  );
}

/* ─── Typing effect ─────────────────────────────────────────────────────────── */
function TypeWriter({ strings, speed = 65 }) {
  const [display, setDisplay] = useState("");
  const [si, setSi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[si];
    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, ci + 1);
        setDisplay(next);
        if (ci + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
        else setCi(c => c + 1);
      } else {
        const next = current.slice(0, ci - 1);
        setDisplay(next);
        if (ci - 1 === 0) {
          setDeleting(false);
          setSi(s => (s + 1) % strings.length);
          setCi(0);
        } else setCi(c => c - 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, deleting, si, strings, speed]);

  return (
    <span>
      {display}
      <span style={{ color: "#a855f7", animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
}

/* ─── 3D Tilt card ──────────────────────────────────────────────────────────── */
function TiltCard({ children, style, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Terminal line ─────────────────────────────────────────────────────────── */
function TermLine({ prefix, text, color = "#a855f7", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", lineHeight: 1.9, display: "flex", gap: 8 }}
    >
      <span style={{ color }}>{prefix}</span>
      <span style={{ color: "#cbd5e1" }}>{text}</span>
    </motion.div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────────────────── */
const STACK = [
  { label: "Python", icon: <FaPython />, color: "#a855f7" },
  { label: "TensorFlow", icon: <SiTensorflow />, color: "#c084fc" },
  { label: "LangChain", icon: <SiLangchain />, color: "#2dd4bf" },
  { label: "OpenAI / LLMs", icon: <SiOpenai />, color: "#e2e8f0" },
  { label: "FastAPI", icon: <SiFastapi />, color: "#34d399" },
  { label: "Next.js", icon: <SiNextdotjs />, color: "#94a3b8" },
  { label: "RAG Pipelines", icon: <FaDatabase />, color: "#f472b6" },
  { label: "Multi-Agent AI", icon: <FaBrain />, color: "#fb923c" },
  { label: "Docker", icon: <SiDocker />, color: "#38bdf8" },
  { label: "PostgreSQL", icon: <SiPostgresql />, color: "#60a5fa" },
  { label: "MongoDB", icon: <SiMongodb />, color: "#4ade80" },
  { label: "REST APIs", icon: <FaServer />, color: "#e879f9" },
];

const STATS = [
  { num: "15", suffix: "+", label: "AI Apps Shipped", color: "#a855f7", glow: "rgba(168,85,247,0.4)" },
  { num: "10", suffix: "+", label: "Projects Built", color: "#2dd4bf", glow: "rgba(45,212,191,0.35)" },
  { num: "3", suffix: "+", label: "Years Experience", color: "#f472b6", glow: "rgba(244,114,182,0.35)" },
];

const TIMELINE = [
  { year: "2023 – 2027", title: "B.Tech — AI & ML", sub: "DPG Institute of Technology & Management", icon: <FaGraduationCap />, color: "#a855f7" },
  { year: "2023 – Now", title: "Technical Lead", sub: "Nexyug Tech", icon: <FaRocket />, color: "#2dd4bf" },
  { year: "2024", title: "2nd Place — Best Project", sub: "College-level AI Competition", icon: <FaAward />, color: "#fbbf24" },
];

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN ABOUT COMPONENT
══════════════════════════════════════════════════════════════════════════════ */
export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const fade = (i = 0) => ({
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: "7rem", paddingBottom: "7rem", position: "relative", overflow: "hidden" }}
      aria-label="About Moksh Bhardwaj"
    >
      {/* ── Global keyframe styles ── */}
      <style>{`
        @keyframes blink       { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes orb-drift   { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-20px) scale(1.08)} }
        @keyframes scan-line   { 0%{top:-60%} 100%{top:160%} }
        @keyframes ring-spin   { to{transform:rotate(360deg)} }
        @keyframes pulse-dot   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        @media(max-width:900px){ .about-grid{grid-template-columns:1fr!important} .timeline-grid{grid-template-columns:1fr!important} }
        @media(max-width:600px){ .stats-row{grid-template-columns:1fr!important} }
      `}</style>

      {/* ── Ambient BG ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Particles />
        <div style={{ position: "absolute", width: 700, height: 700, top: 200, left: -250, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.22) 0%,transparent 65%)", filter: "blur(70px)", animation: "orb-drift 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 500, height: 500, bottom: 150, right: -150, borderRadius: "50%", background: "radial-gradient(circle,rgba(20,184,166,0.15) 0%,transparent 65%)", filter: "blur(60px)", animation: "orb-drift 14s ease-in-out infinite reverse" }} />
        {/* dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(168,85,247,0.18) 1px,transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse at 50% 50%,black 35%,transparent 78%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "full", margin: "0 auto", padding: "0 2rem" }}>


        {/* ══ HEADER ═══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mx-0 flex flex-col items-center justify-center">

          <motion.img
            src={hrWhiteFrame}
            alt="bg white frame"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.18, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              transform: "translateX(-50%)",
              width: "full",
              maxWidth: 1200,
              top: -120,
              pointerEvents: "none",

              // 🔥 Glow effect
              filter: "drop-shadow(0 40px 40px rgb(0, 0, 0))",

              // 🔥 Soft blending
              opacity: 0.18,
              mixBlendMode: "screen",

              // 🔥 smooth edge fade
              maskImage:
                "linear-gradient(to top, rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0.23) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 40%, rgb(0, 0, 0) 100%)",
            }}
          />

          <motion.div initial="hidden" animate={inView ? "show" : "hidden"} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <motion.h2 variants={fade(1)} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: "clamp(2.6rem,5.5vw,5rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
              <span style={{ color: "#ffffff" }}>Crafting </span>
              <span style={{ background: "linear-gradient(135deg,#a855f7 0%,#ec4899 45%,#2dd4bf 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Intelligent</span>
              <br />
              <span style={{ color: "#ffffff" }}>Systems </span>
              <span style={{ color: "rgba(246, 246, 246, 0.37)", fontStyle: "italic" }}>that matter</span>
            </motion.h2>
          </motion.div>
          <motion.div variants={fade(0)} style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: "3.2rem" }}>
            <div style={{ height: 1, width: 40, background: "linear-gradient(90deg,transparent,#a855f7)" }} />
            <motion.p variants={fade(2)} style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.85rem", color: "#475569", maxWidth: 440, margin: "0 auto" }}>
              <TypeWriter strings={["AI & ML Engineer", "Full-Stack Developer", "Generative AI Specialist", "LLM Architect"]} />
            </motion.p>
            <div style={{ height: 1, width: 40, background: "linear-gradient(90deg,#a855f7,transparent)" }} />
          </motion.div>
        </motion.div>

        {/* ══ MAIN GRID ════════════════════════════════════════════════════════ */}
        <motion.div name="About"
          initial="hidden" animate={inView ? "show" : "hidden"}
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: "1.6rem", marginBottom: "1.6rem", alignItems: "start" }}
        >

          {/* ── LEFT: Photo + badges ── */}
          <div style={{ perspective: "1000px", width: "100%" }}>
            <TiltCard
              style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                width: "100%",
                maxWidth: 320,
                margin: "0 auto",
              }}
            >
              {/* Image */}
              <img
                src={profileImage}
                alt="Moksh Bhardwaj"
                className="border-r-2 rounded-full border-b-2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextSibling;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
            </TiltCard>
          </div>
          {/* ── RIGHT: Bio + stats + terminal ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

            {/* Bio */}
            <motion.div
              variants={fade(3)}
              style={{ borderRadius: 22, padding: "2rem", background: "rgba(6,3,14,0.88)", border: "1px solid rgba(168,85,247,0.17)", backdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,0.12) 0%,transparent 70%)", filter: "blur(24px)", pointerEvents: "none" }} />

              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.67rem", color: "rgba(168,85,247,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1rem" }}>// biography</div>

              <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "0.975rem", marginBottom: "0.9rem", position: "relative" }}>
                I'm an{" "}
                <span style={{ background: "linear-gradient(90deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700 }}>AI & ML Engineer</span>
                {" "}pursuing my B.Tech at DPG ITM (Batch 2027), obsessed with building intelligent systems, automation, and driving real-world impact.
              </p>

              <p style={{ color: "#64748b", lineHeight: 1.85, fontSize: "0.95rem", position: "relative" }}>
                Specialising in{" "}
                <span style={{ color: "#2dd4bf", fontWeight: 600 }}>Generative AI</span>, LLM orchestration, RAG pipelines &amp; multi-agent architectures — with{" "}
                <span style={{ color: "#fbbf24", fontWeight: 600 }}>15+ production AI apps</span>{" "}
                shipped and hands-on experience leading technical teams. My mission is to bridge cutting-edge research with scalable web architectures to build solutions that{" "}
                <em style={{ color: "#a855f7" }}>actually move the needle.</em>
              </p>

              <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                <a href="#contact" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.85rem", borderRadius: 12, fontWeight: 700 }}>
                  Hire Me →
                </a>
                <a href="https://github.com/0001Moksh" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem", borderRadius: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>


            {/* Stats */}
            <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.85rem" }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fade(i + 4)}
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${s.glow}` }}
                  style={{ borderRadius: 18, padding: "1.3rem 0.9rem", textAlign: "center", background: "rgba(6,3,14,0.92)", border: `1px solid ${s.color}25`, backdropFilter: "blur(12px)", position: "relative", overflow: "hidden", transition: "all 0.3s ease", cursor: "default" }}
                >
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%,${s.glow} 0%,transparent 65%)`, pointerEvents: "none", opacity: 0.55 }} />
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: "2.3rem", lineHeight: 1, color: s.color, marginBottom: 5 }}>
                    <Counter to={s.num} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.63rem", color: "#475569", lineHeight: 1.4 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══ TECH STACK MARQUEE ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{ borderRadius: 18, overflow: "hidden", background: "rgba(4,2,10,0.88)", border: "2px solid rgba(255, 255, 255, 0.42)", backdropFilter: "blur(12px)", marginBottom: "1.6rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", padding: "0.85rem 1.4rem", gap: 16 }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.63rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(168,85,247,0.4)", flexShrink: 0 }}>Tech Stack</span>
            <div style={{ flex: 1, overflow: "hidden", maskImage: "linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)" }}>
              <motion.div
                style={{ display: "flex", gap: 9 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {[...STACK, ...STACK].map((s, i) => (
                  <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 13px", borderRadius: 10, background: `${s.color}12`, border: `1px solid ${s.color}28`, color: s.color, fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", whiteSpace: "nowrap", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.8rem" }}>{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>



      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full mx-0 mt-20 flex flex-col items-center justify-center
            bg-transparent border-x border-b border-lighter-gray 
            rounded-b-[100px] md:rounded-b-[800px] py-10
            shadow-[inset_0_-15px_20px_-15px_rgba(0,0,0,0.3)]
            backdrop-blur-sm">
        {/* ══ CLOSING CTA ═══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", position: "relative" }}
        >
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%,rgba(168,85,247,0.07) 0%,transparent 60%)", pointerEvents: "none" }} />
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#1e293b", marginBottom: "0.8rem" }}>
            ready to build something extraordinary?
          </div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.1, marginBottom: "2rem" }}>
            <span style={{ color: "#fff" }}>Let's create the </span>
            <span style={{ background: "linear-gradient(135deg,#a855f7,#ec4899,#2dd4bf)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>future of AI</span>
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.85rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary" style={{ padding: "0.75rem 2rem", fontSize: "0.9rem", borderRadius: 14, fontWeight: 700 }}>
              Let's Connect →
            </a>

            <a href="#projects" className="btn-ghost" style={{ padding: "0.75rem 2rem", fontSize: "0.9rem", borderRadius: 14 }}>
              View Projects
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}