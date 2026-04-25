import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import RevealSection from './RevealSection';
import { SEOHelmet } from "../hooks/useSEO";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Send to our secure backend API endpoint
      const response = await axios.post("/.netlify/functions/contact", {
        name: data.name,
        email: data.email,
        message: data.message,
      });

      // Show success message from backend
      if (response.data.success) {
        toast.success(response.data.message || "Your message has been sent 🎉");
        reset();
      } else {
        toast.error(response.data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      
      // Handle different error scenarios
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data?.error || "Failed to send message. Please try again.";
        toast.error(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        toast.error("Network error. Please check your connection and try again.");
      } else {
        // Something else went wrong
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" name="Contact" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16" aria-label="Contact section">
      <SEOHelmet pageKey="contact" />
      <RevealSection className="w-full">
        <motion.div className="text-center mb-12 animate-reveal-up">
          {/* Line separator above title */}
          <motion.div 
            className="line-separator animate-line-reveal"
            style={{ marginTop: 0 }}
          />
          
          <h2 className="text-5xl font-bold text-dark mb-3">Contact Me</h2>
          
          {/* Decorative line below title */}
          <motion.div 
            className="line-separator animate-line-reveal"
            style={{ animationDelay: '0.3s' }}
          />
          
          <p className="text-light-gray text-lg mt-6 animate-reveal-up stagger-1">
            Fill out the form below to get in touch with me.
          </p>
        </motion.div>
      </RevealSection>

      <RevealSection variant="slideInUp" delay={0.3} className="w-full">
        <div className="flex justify-center animate-scale-reveal">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-2/3 lg:w-1/2 border border-muted rounded-2xl shadow-xl shadow-glow p-8 space-y-6 glass-effect hover-lift"
          >
            
            <div className="relative animate-reveal-up stagger-1">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                className={`peer bg-transparent w-full border-b-2 border-muted py-2 px-1 text-dark placeholder-transparent focus:outline-none focus:border-primary transition-colors smooth-transition`}
              />
              <label className="absolute left-1 -top-3.5 text-light-gray text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-lighter-gray peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                Full Name
              </label>
              {errors.name && <span className="text-error text-sm block mt-1 animate-reveal-up">This field is required</span>}
            </div>

            <div className="relative animate-reveal-up stagger-2">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address"
                className="peer bg-transparent w-full border-b-2 border-muted py-2 px-1 text-dark placeholder-transparent focus:outline-none focus:border-primary transition-colors smooth-transition"
              />
              <label className="absolute left-1 -top-3.5 text-light-gray text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-lighter-gray peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                Email Address
              </label>
              {errors.email && <span className="text-error text-sm block mt-1 animate-reveal-up">This field is required</span>}
            </div>

            <div className="relative animate-reveal-up stagger-3">
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Message"
                className="peer bg-transparent w-full border-b-2 border-muted py-2 px-1 text-dark placeholder-transparent focus:outline-none focus:border-primary transition-colors resize-none smooth-transition"
              />
              <label className="absolute left-1 -top-3.5 text-light-gray text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-lighter-gray peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                Your Message
              </label>
              {errors.message && <span className="text-error text-sm block mt-1 animate-reveal-up">This field is required</span>}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`btn-gold w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 smooth-transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <motion.span className="flex items-center justify-center gaps-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block mr-2"
                  >
                    ↻
                  </motion.span>
                  Sending...
                </motion.span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>
      </RevealSection>

    </section>
  );
}

export default Contact;