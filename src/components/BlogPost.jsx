import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { SEOHelmet } from "../hooks/useSEO";
import RevealSection from "./RevealSection";

/**
 * BlogPost Component - Individual blog post page
 * Uses semantic HTML with article tag and structured metadata
 * Includes JSON-LD BlogPosting schema
 */
const BlogPost = ({ posts = [] }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find post by slug
    const foundPost = posts.find((p) => p.slug === slug);
    setPost(foundPost);
  }, [slug, posts]);

  if (!post) {
    return (
      <section className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate("/#Blog")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl"
          >
            ← Back to Blog
          </button>
        </div>
      </section>
    );
  }

  // Generate BlogPosting schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    articleBody: post.content,
    keywords: post.tags.join(", "),
  };

  return (
    <article className="min-h-screen bg-bg-primary py-12" role="main">
      <SEOHelmet pageKey="blog-post" />

      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema)}
      </script>

      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate("/#Blog")}
            className="mb-8 text-purple-400 hover:text-purple-300 transition flex items-center gap-2"
          >
            ← Back to Blog
          </button>

          {/* Category Badge */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-gray-400 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">{post.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {post.content}
          </p>
          
          {/* Extended Content - Placeholder */}
          <p className="text-gray-400 leading-relaxed">
            This is a sample blog post. In a production environment, this would fetch the full article content from your CMS, database, or markdown files. The component is structured with semantic HTML and includes proper metadata for search engines and social sharing.
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 py-8 border-t border-white/10"
        >
          <h3 className="text-white font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={`#`}
                className="text-sm bg-white/5 border border-white/10 text-purple-400 hover:border-purple-400/60 px-3 py-1 rounded transition"
              >
                #{tag}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Related Posts - Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="py-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <p className="text-gray-400">
            Related articles would be loaded here dynamically based on shared tags and categories.
          </p>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPost;
