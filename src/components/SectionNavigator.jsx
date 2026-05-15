import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiArrowUp, FiChevronUp } from "react-icons/fi";

const SECTION_ORDER = ["home", "about", "skills", "projects", "certificates", "contact", "footer"];
const NAVBAR_OFFSET = 88;

function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollYRef = useRef(0);

  const activeIndex = useMemo(() => SECTION_ORDER.indexOf(activeSection), [activeSection]);

  const clampIndex = (index) => Math.max(0, Math.min(index, SECTION_ORDER.length - 1));

  const getAvailableSections = () => SECTION_ORDER
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .map((element) => ({
      id: element.id,
      top: element.getBoundingClientRect().top + window.scrollY,
    }))
    .sort((a, b) => a.top - b.top);

  const getCurrentSectionId = () => {
    const sections = getAvailableSections();

    if (sections.length === 0) {
      return "home";
    }

    const probeLine = window.scrollY + NAVBAR_OFFSET + 20;
    let current = sections[0].id;

    for (const section of sections) {
      if (section.top <= probeLine) {
        current = section.id;
      } else {
        break;
      }
    }

    return current;
  };

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(getCurrentSectionId());
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollYRef.current) {
        return;
      }

      setScrollDirection(currentScrollY > lastScrollYRef.current ? "down" : "up");
      lastScrollYRef.current = currentScrollY;
      updateActiveSection();
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const currentIndex = activeIndex >= 0 ? activeIndex : 0;
  const targetIndex = scrollDirection === "down"
    ? clampIndex(currentIndex + 1)
    : clampIndex(currentIndex - 1);

  const targetId = SECTION_ORDER[targetIndex] || "home";
  const isBoundary = targetIndex === currentIndex;
  const buttonMode = scrollDirection === "down"
    ? (isBoundary && currentIndex === SECTION_ORDER.length - 1 ? "top" : "next")
    : (isBoundary && currentIndex === 0 ? "top" : "previous");

  const handleClick = () => {
    const currentId = getCurrentSectionId();
    const currentSectionIndex = SECTION_ORDER.indexOf(currentId);
    const resolvedCurrentIndex = currentSectionIndex >= 0 ? currentSectionIndex : currentIndex;
    const resolvedTargetIndex = scrollDirection === "down"
      ? clampIndex(resolvedCurrentIndex + 1)
      : clampIndex(resolvedCurrentIndex - 1);
    const resolvedTargetId = SECTION_ORDER[resolvedTargetIndex] || "home";
    const target = document.getElementById(resolvedTargetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 20, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.92 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={handleClick}
        aria-label={buttonMode === "top" ? "Back to top" : buttonMode === "next" ? "Go to next section" : "Go to previous section"}
        title={buttonMode === "top" ? "Back to top" : buttonMode === "next" ? "Next section" : "Previous section"}
        className="fixed bottom-5 right-5 z-[80] group flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-3 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all hover:border-purple-400/40 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
        style={{ scrollMarginTop: `${NAVBAR_OFFSET}px` }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-transform duration-300 group-hover:scale-105">
          {buttonMode === "previous" ? <FiChevronUp size={18} /> : buttonMode === "top" ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </span>
        <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
          {buttonMode === "top" ? "Top" : buttonMode === "previous" ? "Prev" : "Next"}
        </span>
      </motion.button>
    </AnimatePresence>
  );
}

export default SectionNavigator;