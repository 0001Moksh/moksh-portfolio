import React from "react";
import pic from "../../public/1ig3.png";
import { FaGithub, FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { SiScipy } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiPython } from "react-icons/si";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-10 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-pink-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am a Machine Learning and AI enthusiast with expertise in Python, Scikit-learn, Keras, and TensorFlow. My focus is on developing intelligent models, optimizing data workflows, and creating scalable AI-driven solutions. With a strong foundation in web development and automation, I strive to bridge the gap between AI and real-world applications. Additionally, I specialize in Zoho development, integrating business automation with smart AI solutions.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-col justify-between space-y-10 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.instagram.com/moksh_bhardwaj23/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/moksh-bhardwaj-0001moksh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2FgCGKUkQbq8D6ummgzcDQ%3D%3D" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@ai_factory_09?si=Vl_IKj5fc12j4g0g" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/0001Moksh" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  {/* <SiZoho className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /> */}
                  {/* <SiPython className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /> */}
                  {/* <SiNumpy className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /> */}
                  {/* <SiPandas className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /> */}
                  <SiScipy className="text-3xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiScikitlearn className="text-3xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiTensorflow className="text-3xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiKeras className="text-3xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 md:ml-48 md:mt-0 mt-8 order-1">
            <img
              src={pic}
              className="shadow-lg rounded-full md:w-[500px] md:h-[380px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;