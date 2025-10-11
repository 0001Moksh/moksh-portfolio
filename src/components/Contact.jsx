import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bejryrva", userInfo);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Contact Me</h1>
      <span className="text-gray-700">Please fill out the form below to contact me</span>
      
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-lg border border-gray-300 bg-white w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4 text-gray-800">Send Your Message</h1>

          <div className="flex flex-col mb-5">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="hover:shadow-lg rounded-lg border border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400"
              id="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="hover:shadow-lg rounded-lg border border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="hover:shadow-lg rounded-lg border border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400"
              id="message"
              placeholder="Enter your query"
            />
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-xl px-3 py-2 hover:bg-indigo-700 transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
