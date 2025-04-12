import React from "react";
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

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: js, name: "JavaScript" },
    { id: 4, logo: crm, name: "Zoho CRM" },
    { id: 5, logo: numpy, name: "NumPy" },
    { id: 6, logo: Matplotlib, name: "Matplotlib" },
    { id: 7, logo: pandas, name: "Pandas" },
    { id: 8, logo: Sea, name: "Seaborn" },
    { id: 9, logo: opencv, name: "OpenCV" },
    { id: 10, logo: scipy, name: "SciPy" },
    { id: 11, logo: sklearn, name: "Scikit-learn" },
    { id: 12, logo: keras, name: "Keras" },
    { id: 13, logo: tensorflow, name: "TensorFlow" },
    { id: 14, logo: Fastapi, name: "FastAPI" },
    { id: 15, logo: Flask, name: "Flask" },
    { id: 16, logo: NLP, name: "NLP" },
  ];

  return (
    
 
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20"
    >
      <div>
      <h1 className="text-5xl mb-5">Experience</h1>
      <p className="  ">
          I've more than 2 years of Experience in below technologies.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl shadow-md transition-transform transform hover:-rotate-3 hover:scale-105 duration-300 bg-white hover:shadow-xl"
            >
              <img
                src={logo}
                alt={name}
                className="w-[70px] h-[70px] object-contain mb-4 rounded-full"
              />
              <div className="text-center text-sm font-semibold text-gray-800">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Experience;
