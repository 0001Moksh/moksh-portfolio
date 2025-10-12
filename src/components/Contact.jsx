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
      await axios.post("https://getform.io/f/bejryrva", data);
      toast.success("Your message has been sent 🎉");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">Contact Me</h1>
        <p className="text-gray-600 text-lg">
          Fill out the form below to get in touch with me.
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/3 lg:w-1/2 bg-white border border-gray-200 rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div className="relative">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Full Name"
              className={`peer w-full border-b-2 py-2 px-1 text-gray-800 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-colors`}
            />
            <label className="absolute left-1 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Full Name
            </label>
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="relative">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="peer w-full border-b-2 py-2 px-1 text-gray-800 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <label className="absolute left-1 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Email Address
            </label>
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="relative">
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              className="peer w-full border-b-2 py-2 px-1 text-gray-800 placeholder-transparent focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
            <label className="absolute left-1 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Your Message
            </label>
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-lg transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;