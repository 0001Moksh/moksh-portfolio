import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import TechBadge from "./TechBadge";

const ProjectCard = ({ project, onInfoClick, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.02} transitionSpeed={2000}>
        <div className="relative h-full rounded-2xl overflow-hidden background-clip-padding backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col">
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300 -z-10" />

          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
            {/* Image */}
            <motion.img
              src={project.logo}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => onImageClick(project.logo)}
              whileHover={{ scale: 1.15 }}
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ staggerChildren: 0.05 }}
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
            >
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
              {project.category}
            </motion.div>

            {/* Info Button */}
            {project.overview && (
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onInfoClick(project)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white shadow-lg border border-white/30 transition-all duration-300 group-hover:border-white/60"
                title="View Details"
              >
                <FaInfoCircle className="text-lg" />
              </motion.button>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-4 line-clamp-2 flex-grow group-hover:text-gray-200 transition-colors duration-300">
              {project.overview?.description || project.name}
            </p>

            {/* Tech Stack */}
            {project.overview?.techStack && (
              <div className="mb-6 flex flex-wrap gap-2">
                {project.overview.techStack.slice(0, 3).map((tech, idx) => (
                  <TechBadge key={tech} tech={tech} index={idx} />
                ))}
                {project.overview.techStack.length > 3 && (
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-xs font-semibold text-purple-300 bg-purple-950/50 px-3 py-1 rounded-full border border-purple-400/30"
                  >
                    +{project.overview.techStack.length - 3} more
                  </motion.span>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
              {project.liveDemoUrl && (
                <motion.a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 border border-purple-400/50"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Demo</span>
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <FaGithub className="text-xs" />
                  <span>Code</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
