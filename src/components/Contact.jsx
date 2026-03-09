import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
    <div name="Contact" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-dark mb-3">Contact Me</h1>
        <p className="text-light-gray text-lg">
          Fill out the form below to get in touch with me.
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/3 lg:w-1/2 border border-muted rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div className="relative">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Full Name"
              className={`peer bg-transparent w-full border-b-2 py-2 px-1 text-dark placeholder-transparent focus:outline-none focus:border-primary transition-colors`}
            />
            <label className="absolute left-1 -top-3.5 text-light-gray text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-lighter-gray peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-medium-gray peer-focus:text-sm">
              Full Name
            </label>
            {errors.name && <span className="text-error text-sm">This field is required</span>}
          </div>

          <div className="relative">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="peer bg-transparent w-full border-b-2 py-2 px-1 text-dark placeholder-transparent focus:outline-none focus:border-primary transition-colors"
            />
            <label className="absolute left-1 -top-3.5 text-light-gray text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-lighter-gray peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-medium-gray peer-focus:text-sm">
              Email Address
            </label>
            {errors.email && <span className="text-error text-sm">This field is required</span>}
          </div>

          <div className="relative">
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              className="peer bg-transparent w-full border-b-2 py-2 px-1 text-dark placeholder-transparent focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <label className="absolute left-1 -top-3.5 text-light-gray text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-lighter-gray peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-medium-gray peer-focus:text-sm">
              Your Message
            </label>
            {errors.message && <span className="text-error text-sm">This field is required</span>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-lg gradient-primary hover:shadow-lg shadow-lg transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;