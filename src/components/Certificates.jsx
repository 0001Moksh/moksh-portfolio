import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaImages } from "react-icons/fa";
import { SEOHelmet } from "../hooks/useSEO";
import RevealSection from "./RevealSection";

function prettifyCertificateName(fileName) {
  const withoutExtension = fileName.replace(/\.[^.]+$/, "");
  return withoutExtension
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeCertificateEntry(entry) {
  if (typeof entry === "string") {
    return { file: entry, title: prettifyCertificateName(entry) };
  }

  if (!entry || typeof entry !== "object") {
    return null;
  }

  const file = entry.file || entry.src || entry.image || entry.name;
  if (!file) {
    return null;
  }

  return {
    file,
    title: entry.title || prettifyCertificateName(file),
    description: entry.description || "Certificate",
  };
}

export default function Certificates() {
  const [certificateItems, setCertificateItems] = useState([]);
  const [loadError, setLoadError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let active = true;

    const loadCertificates = async () => {
      try {
        const response = await fetch("/certificates/certificates.json");
        if (!response.ok) {
          throw new Error("Certificate manifest not found");
        }

        const data = await response.json();
        const normalized = Array.isArray(data)
          ? data.map(normalizeCertificateEntry).filter(Boolean)
          : [];

        if (active) {
          setCertificateItems(normalized);
        }
      } catch (error) {
        if (active) {
          setLoadError(true);
          setCertificateItems([]);
        }
      }
    };

    loadCertificates();

    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => [
    { value: `${certificateItems.length || 0}+`, label: "Certificates" },
    { value: "100%", label: "Image Support" },
  ], [certificateItems.length]);

  const visibleCertificates = showAll ? certificateItems : certificateItems.slice(0, 6);
  const hasMoreCertificates = certificateItems.length > 6;

  return (
    <section
      id="certificates"
      name="Certificates"
      className="relative overflow-hidden py-24 bg-bg-primary scroll-mt-24"
      aria-label="Certificates section"
    >
      <SEOHelmet pageKey="certificates" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-6 left-[-8rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-6 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 md:px-20">
        <RevealSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
              <FaAward className="text-amber-300" />
              Certificates
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
              Verified Learning
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                and Achievements
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-lg text-white/65">
              A flexible gallery that displays your certificates in a clean, responsive layout.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.05}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-center backdrop-blur-xl"
              >
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          {certificateItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleCertificates.map((certificate, index) => (
                <motion.article
                  key={`${certificate.file}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                    <img
                      src={`/certificates/${certificate.file}`}
                      alt={certificate.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
                      <FaImages className="text-cyan-300" />
                      Certificate
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                      <p className="mt-1 text-sm text-white/65">
                        {certificate.description || "Credential image from the certificates folder."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 px-5 py-4">
                    <a
                      href={`/certificates/${certificate.file}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-colors hover:border-cyan-300/40 hover:text-white"
                    >
                      View
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </motion.article>
                ))}
              </div>

              {hasMoreCertificates && (
                <div className="mt-12 flex justify-center">
                  <motion.button
                    type="button"
                    onClick={() => setShowAll((prev) => !prev)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-cyan-300/40 hover:bg-white/12"
                  >
                    {showAll ? "Load Less" : `Load More (${certificateItems.length - 6})`}
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 text-cyan-300">
                <FaImages size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-white">No certificates added yet</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-white/60">
                Add certificate image entries to the manifest file and the section will automatically render them.
              </p>

              {loadError && (
                <p className="mt-4 text-sm text-amber-300">
                  The manifest file could not be loaded, so the gallery is showing this empty state.
                </p>
              )}
            </div>
          )}
        </RevealSection>
      </div>
    </section>
  );
}
