import React from "react";
import Deva from "../../public/deva_ai.png";
import mongoDB from "../../public/keras.png";
import Chatbot from "../../public/chatbot.png";
import Gym_web from "../../public/gym.png";
import dealer from "../../public/dealer.png";
import haritai from "../../public/haritai.png";
import whatsapp from "../../public/whatsapp.png";
import whatsapp from "../../public/whatsapp.png";
function Project() {
  const cardItem = [
    {
      id: 1,
      logo: Gym_web,
      name: "Gym web",
    },
    {
      id: 2,
      logo: dealer,
      name: "Property Dealer Website",
    },
    {
      id: 3,
      logo: whatsapp,
      name: "Whatsapp Form Automation",
    },
    {
      id: 4,
      logo: Deva,
      name: "Deva Voice Assistant",
    },
    {
      id: 5,
      logo: Chatbot,
      name: "Chatbot",
    },
    {
      id: 6,
      logo: haritai,
      name: "HaritAI",
    },
  ];
  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-10 md:px-50 mt-10"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-1 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1"
              key={id}
            >
              <img
                src={logo}
                className="w-[full] h-[full] p-1 border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  ______________________________________
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-[#000000bf] text-white font-bold px-4 py-2 rounded hover:bg-slate-700 duration-300">
                  View
                </button>
                <button className="bg-[#000000bf] text-white font-bold px-4 py-2 rounded  hover:bg-slate-700 duration-300">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;