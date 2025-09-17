import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import html from "../../public/html.jpg";
import css from "../../public/css.jpg";
import js from "../../public/js.jpg";
import crm from "../../public/crm.jpg";
import Matplotlib from "../../public/java.jpg";
import keras from "../../public/keras.png";
import pandas from "../../public/pandas.png";
import Sea from "../../public/Sea.png";
import numpy from "../../public/numpy.jpg";
import scipy from "../../public/scipy.jpg";
import sklearn from "../../public/sklearn.jpg";
import opencv from "../../public/opencv.jpg";
import tensorflow from "../../public/ten.png";
import Fastapi from "../../public/Fastapi.jpg";
import Flask from "../../public/Flask.jpg";
import NLP from "../../public/NLP.png";
import genai from "../../public/genai.png";
import langchain from "../../public/langchain.png";
import rag from "../../public/rag.png";

function Experience() {
  const cardItem = [
  { id: 1, logo: genai, name: "GenAI" },
  { id: 2, logo: langchain, name: "LangChain" },
  { id: 3, logo: rag, name: "RAG" },
  { id: 4, logo: tensorflow, name: "TensorFlow" },
  { id: 5, logo: keras, name: "Keras" },
  { id: 6, logo: sklearn, name: "Scikit-learn" },
  { id: 7, logo: scipy, name: "SciPy" },
  { id: 8, logo: opencv, name: "OpenCV" },
  { id: 9, logo: Sea, name: "Seaborn" },
  { id: 10, logo: pandas, name: "Pandas" },
  { id: 11, logo: Matplotlib, name: "Matplotlib" },
  { id: 12, logo: numpy, name: "NumPy" },
  { id: 13, logo: NLP, name: "NLP" },
  { id: 14, logo: Fastapi, name: "FastAPI" },
  { id: 15, logo: Flask, name: "Flask" },
  { id: 16, logo: crm, name: "Zoho CRM" },
  { id: 17, logo: js, name: "JavaScript" },
  { id: 18, logo: css, name: "CSS" },
  { id: 19, logo: html, name: "HTML" },
];


  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [-2000, 0],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto py-20 px-4 md:px-20 overflow-hidden"
    >
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Experience</h1>
        <p className="text-lg text-gray-600">
          I've more than 2 years of experience working with these technologies.
        </p>
      </div>

      {/* Continuous horizontal scrolling showcase */}
      <motion.div animate={controls} className="flex space-x-8 py-6">
        {[...cardItem, ...cardItem].map(({ id, logo, name }, index) => (
          <div
            key={id + "-" + index}
            className="flex flex-col items-center justify-center min-w-[180px] p-6 border border-gray-200 rounded-2xl shadow-lg transition-transform transform hover:-rotate-2 hover:scale-110 duration-300 bg-white hover:shadow-2xl"
          >
            <img
              src={logo}
              alt={name}
              className="w-[80px] h-[80px] object-contain mb-4 rounded-full"
            />
            <div className="text-center text-base font-semibold text-gray-900">
              {name}
            </div>
          </div>
        ))}
      </motion.div>

      <hr className="mt-12 border-gray-300" />
    </div>
  );
}

export default Experience;
