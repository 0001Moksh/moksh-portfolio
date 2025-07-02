import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // <-- Add reset here
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
      reset(); // <-- Clear form after successful submission
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 max-w-screen-2xl container mx-auto px-4 md:px-20"
    >
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-6 sm:px-6 md:px-8 lg:px-12 md:w-1/2
 w-full mx-auto"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-5">
            <label className="block">FullName</label>
            <input
              {...register("name", { required: true })}
              className="hover:shadow-lg rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="hover:shadow-lg shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="hover:shadow-lg shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              type="text"
              placeholder="Enter your Query"
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <div className="w-full max-w-md mx-auto mt-6">
  <div className="w-full max-w-md mx-auto mt-6">
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-cyan-800 via-gray-700 to-pink-900 text-white rounded-lg px-6 py-3 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out hover:from-pink-800 hover:via-gray-700 hover:to-cyan-900 dark:text-white"
  >
    Send
  </button>
</div>
          </div>


        </form>
      </div>
      <hr className="relative w-3/4 md:w-3/2 ml-0 mx-auto mt-20 h-2 rounded-full border-none bg-gradient-to-r from-pink-500 via-cyan-500 to-black-500 animate-gradient shadow-lg shadow-pink-500/10 dark:shadow-blue-500/40" />
      <hr className="relative w-3/4 md:w-3/2 mr-0 mx-auto mt-20 h-2 rounded-full border-none bg-gradient-to-l from-pink-500 via-cyan-500 to-black-500 animate-gradient shadow-lg shadow-pink-500/10 dark:shadow-blue-500/40" />
      
    </div>
  );
}

export default Contact;
