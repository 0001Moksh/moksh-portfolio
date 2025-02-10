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
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "Javascript",
    },
    {
      id: 4,
      logo: crm,
      name: "Zoho crm",
    },
    {
      id: 5,
      logo: numpy,
      name: "Numpy",
    },
    {
      id: 6,
      logo: Matplotlib,
      name: "Matplotlib",
    },
    {
      id: 7,
      logo: pandas,
      name: "Pandas",
    },
    {
      id: 8,
      logo: Sea,
      name: "Seaborn",
    },
    {
      id: 9,
      logo: opencv,
      name: "OpenCV2",
    },
    {
      id: 10,
      logo: scipy,
      name: "Scipy",
    },
    {
      id: 11,
      logo: sklearn,
      name: "Sk-learn",
    },
    {
      id: 12,
      logo: keras,
      name: "Keras",
    },
    {
      id: 13,
      logo: tensorflow,
      name: "Tensorflow",
    },
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
        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-lg md:w-[150px] md:h-[150px] shadow-md p-1"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full sm:w-[50px]" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div><br /><br /><hr />
    </div>
  );
}

export default Experience;