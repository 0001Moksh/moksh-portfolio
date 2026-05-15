import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiList } from "react-icons/fi";

const SECTION_ORDER = ["home", "about", "skills", "projects", "certificates", "contact", "footer"];
const NAVBAR_OFFSET = 88;
const PROBE_OFFSET = 120;

const sectionLabels = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  certificates: "Certificates",
  contact: "Contact",
  footer: "Footer",
};

function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [showSectionList, setShowSectionList] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollYRef = useRef(0);

  const activeIndex = useMemo(() => SECTION_ORDER.indexOf(activeSection), [activeSection]);

  const clampIndex = (index) => Math.max(0, Math.min(index, SECTION_ORDER.length - 1));

  const getAvailableSections = useCallback(() => {
    return SECTION_ORDER
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => ({
        id: element.id,
        top: element.getBoundingClientRect().top + window.scrollY,
      }))
      .sort((a, b) => a.top - b.top);
  }, []);

  const getCurrentSectionId = useCallback(() => {
    const sections = getAvailableSections();
    if (sections.length === 0) return "home";

    const probeLine = window.scrollY + NAVBAR_OFFSET + PROBE_OFFSET;
    let current = sections[0].id;

    for (const section of sections) {
      if (section.top <= probeLine) {
        current = section.id;
      } else break;
    }
    return current;
  }, [getAvailableSections]);

  const updateActiveSection = useCallback(() => {
    const newActive = getCurrentSectionId();
    if (newActive !== activeSection) setActiveSection(newActive);
  }, [activeSection, getCurrentSectionId]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (currentScrollY !== lastScrollYRef.current) {
            setScrollDirection(currentScrollY > lastScrollYRef.current ? "down" : "up");
            lastScrollYRef.current = currentScrollY;
          }
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }

      // Hide near bottom
      const nearBottom = currentScrollY + window.innerHeight > document.documentElement.scrollHeight - 250;
      setIsVisible(!nearBottom || activeSection !== "footer");
    };

    const handleResize = () => updateActiveSection();

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateActiveSection]);

  const handleSectionClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = NAVBAR_OFFSET + 20;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setShowSectionList(false);
  };

  const handleMainClick = () => {
    const currentId = getCurrentSectionId();
    const currentIdx = SECTION_ORDER.indexOf(currentId);
    const resolvedCurrent = currentIdx >= 0 ? currentIdx : activeIndex;

    const targetIdx = scrollDirection === "down"
      ? clampIndex(resolvedCurrent + 1)
      : clampIndex(resolvedCurrent - 1);

    const targetId = SECTION_ORDER[targetIdx] || "home";
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const offset = NAVBAR_OFFSET + 20;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isAtTop = activeIndex === 0;
  const isAtBottom = activeIndex === SECTION_ORDER.length - 1;

  const buttonMode = scrollDirection === "down"
    ? (isAtBottom ? "top" : "next")
    : (isAtTop ? "top" : "previous");

  const nextLabel = sectionLabels[SECTION_ORDER[clampIndex(activeIndex + 1)]];
  const prevLabel = sectionLabels[SECTION_ORDER[clampIndex(activeIndex - 1)]];

  return (
    <>
      {/* Vertical Dots - Desktop Only */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[70] hidden lg:flex flex-col gap-4">
        {SECTION_ORDER.map((id) => (
          <motion.button
            key={id}
            onClick={() => handleSectionClick(id)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center w-3 h-3"
            aria-label={`Go to ${sectionLabels[id]}`}
          >
            <div
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                id === activeSection
                  ? "bg-purple-500 border-purple-400 scale-125 shadow-[0_0_12px_#a855f7]"
                  : "bg-white/30 border-white/40 group-hover:bg-white/70"
              }`}
            />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all bg-zinc-900 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
              {sectionLabels[id]}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Main Floating Controls */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3"
          >
            {/* Section List Button - Visible on all screens */}
            {/* <motion.button
              onClick={() => setShowSectionList(!showSectionList)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 bg-zinc-900/90 hover:bg-zinc-900 border border-white/10 hover:border-purple-500/50 backdrop-blur-xl rounded-2xl shadow-xl text-white transition-all"
              aria-label="Show sections"
            >
              <FiList size={22} />
            </motion.button> */}

            {/* Main Navigation Button - Compact on Mobile */}
            <motion.button
              onClick={handleMainClick}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-purple-400/60 backdrop-blur-2xl text-white px-4 py-3.5 rounded-3xl shadow-2xl shadow-black/60 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 group-hover:bg-purple-500/20 transition-all">
                <AnimatePresence mode="wait">
                  {(buttonMode === "top" || buttonMode === "previous") ? (
                    <FiChevronUp size={24} key="up" />
                  ) : (
                    <FiChevronDown size={24} key="down" />
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col items-start pr-1 min-w-[90px] sm:min-w-[110px]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400/80">
                  {buttonMode === "top" ? "TOP" : buttonMode === "next" ? "NEXT" : "PREV"}
                </span>
                <span className="text-sm font-semibold text-white/90 truncate max-w-[110px]">
                  {buttonMode === "top"
                    ? "Back to Top"
                    : buttonMode === "next"
                    ? nextLabel
                    : prevLabel}
                </span>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section List Dropdown */}
      <AnimatePresence>
        {showSectionList && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="fixed bottom-28 right-5 z-[85] w-64 sm:w-72 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-2 max-h-[340px] overflow-auto">
              {SECTION_ORDER.map((id, idx) => (
                <button
                  key={id}
                  onClick={() => handleSectionClick(id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex items-center gap-3 transition-all hover:bg-white/5 ${
                    id === activeSection ? "bg-purple-500/10 text-purple-400" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-mono text-white/40 w-5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{sectionLabels[id]}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SectionNavigator;