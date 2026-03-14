import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEOHelmet } from "../hooks/useSEO";
import RevealSection from "./RevealSection";

// Sample blog posts - can be replaced with API data or CMS integration
const blogPosts = [
  {
    id: 1,
    slug: "building-rag-chatbots",
    title: "Building Production-Ready RAG Chatbots",
    excerpt: "A comprehensive guide to building Retrieval-Augmented Generation systems using LangChain and modern vector databases.",
    author: "Moksh Bhardwaj",
    date: "2025-03-10",
    readTime: "8 min",
    category: "AI/ML",
    image: "https://via.placeholder.com/600x400?text=RAG+Chatbots",
    tags: ["LangChain", "RAG", "LLMs", "Python"],
    content: "Building production-ready RAG chatbots requires understanding vector embeddings, semantic search, and prompt engineering...",
  },
  {
    id: 2,
    slug: "zoho-automation-best-practices",
    title: "Zoho CRM Automation Best Practices",
    excerpt: "Learn how to build scalable automation workflows in Zoho CRM without custom code.",
    author: "Moksh Bhardwaj",
    date: "2025-03-05",
    readTime: "6 min",
    category: "Automation",
    image: "https://via.placeholder.com/600x400?text=Zoho+Automation",
    tags: ["Zoho", "CRM", "Automation", "Workflow"],
    content: "Zoho Creator and Workflow Automation enable building complex business logic without traditional coding...",
  },
  {
    id: 3,
    slug: "ai-powered-data-analysis",
    title: "AI-Powered Data Analysis with Python",
    excerpt: "Using Pandas, Scikit-learn, and machine learning to extract insights from complex datasets.",
    author: "Moksh Bhardwaj",
    date: "2025-02-28",
    readTime: "10 min",
    category: "Data Science",
    image: "https://via.placeholder.com/600x400?text=Data+Analysis",
    tags: ["Python", "ML", "Data Science", "Analytics"],
    content: "Machine learning models can help uncover hidden patterns in data that drive business decisions...",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredPost, setHoveredPost] = useState(null);

  const categories = ["all", "AI/ML", "Automation", "Data Science"];
  
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // <section name="Blog" className="min-h-screen bg-bg-primary py-24" aria-label="Blog section">
    //   <SEOHelmet pageKey="blog" />
      
    //   <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
    //     {/* Header */}
    //     <RevealSection>
    //       <motion.div
    //         initial={{ opacity: 0, y: 40 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="text-center mb-20"
    //       >
    //         <motion.div
    //           className="inline-flex items-center gap-3 mb-6 bg-purple-950/70 px-8 py-3 rounded-full border border-primary/30"
    //           initial={{ scale: 0.8, opacity: 0 }}
    //           animate={{ scale: 1, opacity: 1 }}
    //         >
    //           <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
    //           <span className="uppercase tracking-[6px] text-xs font-semibold text-primary">INSIGHTS</span>
    //         </motion.div>

    //         <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4 text-gradient">
    //           Blog & Insights
    //         </h1>

    //         <p className="text-gray-300 text-xl max-w-2xl mx-auto">
    //           Deep dives into AI, ML, automation, and full-stack development. Practical guides and technical insights from building production systems.
    //         </p>
    //       </motion.div>
    //     </RevealSection>

    //     {/* Category Filter */}
    //     <motion.div
    //       className="flex flex-wrap justify-center gap-3 mb-16"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.2 }}
    //     >
    //       {categories.map((category) => (
    //         <motion.button
    //           key={category}
    //           onClick={() => setSelectedCategory(category)}
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className={`px-6 py-2 rounded-full font-semibold transition-all ${
    //             selectedCategory === category
    //               ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40"
    //               : "bg-white/10 text-gray-300 border border-white/20 hover:border-purple-400/60 hover:bg-white/20"
    //           }`}
    //         >
    //           {category.charAt(0).toUpperCase() + category.slice(1)}
    //         </motion.button>
    //       ))}
    //     </motion.div>

    //     {/* Blog Posts Grid */}
    //     <motion.div
    //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate="visible"
    //     >
    //       <AnimatePresence>
    //         {filteredPosts.map((post) => (
    //           <motion.article
    //             key={post.id}
    //             variants={itemVariants}
    //             layout
    //             className="group cursor-pointer"
    //             onMouseEnter={() => setHoveredPost(post.id)}
    //             onMouseLeave={() => setHoveredPost(null)}
    //           >
    //             <motion.div
    //               whileHover={{ y: -8 }}
    //               className="h-full bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/60 transition-all duration-300"
    //             >
    //               {/* Image Container */}
    //               <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
    //                 <motion.img
    //                   src={post.image}
    //                   alt={post.title}
    //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    //                   loading="lazy"
    //                 />
    //                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    
    //                 {/* Category Badge */}
    //                 <motion.div
    //                   initial={{ opacity: 0, y: -20 }}
    //                   animate={{ opacity: 1, y: 0 }}
    //                   className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full"
    //                 >
    //                   {post.category}
    //                 </motion.div>
    //               </div>

    //               {/* Content */}
    //               <div className="p-6 space-y-4">
    //                 {/* Title */}
    //                 <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
    //                   {post.title}
    //                 </h2>

    //                 {/* Excerpt */}
    //                 <p className="text-gray-400 text-sm leading-relaxed">
    //                   {post.excerpt}
    //                 </p>

    //                 {/* Tags */}
    //                 <div className="flex flex-wrap gap-2">
    //                   {post.tags.slice(0, 2).map((tag) => (
    //                     <span
    //                       key={tag}
    //                       className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded"
    //                     >
    //                       #{tag}
    //                     </span>
    //                   ))}
    //                   {post.tags.length > 2 && (
    //                     <span className="text-xs text-gray-500">+{post.tags.length - 2} more</span>
    //                   )}
    //                 </div>

    //                 {/* Meta */}
    //                 <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
    //                   <span>{post.date}</span>
    //                   <span className="text-purple-400">{post.readTime}</span>
    //                 </div>
    //               </div>

    //               {/* Read More Button */}
    //               <motion.div
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
    //                 className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none"
    //               >
    //                 <motion.button
    //                   whileHover={{ scale: 1.1 }}
    //                   className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl"
    //                 >
    //                   Read Article →
    //                 </motion.button>
    //               </motion.div>
    //             </motion.div>
    //           </motion.article>
    //         ))}
    //       </AnimatePresence>
    //     </motion.div>

    //     {/* Empty State */}
    //     {filteredPosts.length === 0 && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         className="text-center py-12"
    //       >
    //         <p className="text-gray-400 text-lg">No articles found in this category yet.</p>
    //       </motion.div>
    //     )}
    //   </div>
    // </section>
    <br/>
  );
}
