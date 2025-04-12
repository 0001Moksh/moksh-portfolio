import React from "react";
import Deva from "../../public/deva_ai.png";
import Chatbot from "../../public/chatbot.png";
import Gym_web from "../../public/gym.png";
import dealer from "../../public/dealer.png";
import haritai from "../../public/haritai.png";
import whatsapp from "../../public/whatsapp.png";
import voice_chatbot from "../../public/deva-voice.png";

function Project() {
  // --- Project Data ---
  // Consider what 'viewUrl' should link to. Currently, some link to static images.
  // 'liveDemoUrl' links to the deployed application or relevant page.
  const cardItem = [
    {
      id: 1,
      logo: Gym_web,
      name: "Gym web",
      // TODO: Verify if this viewUrl (image link) is the intended behavior for the "View" button.
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/gym-eyjU2jWE.png",
      liveDemoUrl: "https://power-fitness-gym-by-moksh2333.netlify.app/", // Renamed from sourceUrl
    },
    {
      id: 2,
      logo: dealer,
      name: "Property Dealer Website",
      // TODO: Verify viewUrl
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/dealer-D0MNy4je.png",
      liveDemoUrl: "https://sahil03.netlify.app/", // Renamed from sourceUrl
    },
    {
      id: 3,
      logo: whatsapp,
      name: "Whatsapp Form Automation",
      // TODO: Verify viewUrl
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/whatsapp-DbZBb8E7.png",
      liveDemoUrl: "https://mokshbhardwaj.netlify.app/assets/whatsapp-DbZBb8E7.png", // Renamed from sourceUrl - Is this also just an image?
    },
    {
      id: 4,
      logo: Deva,
      name: "Deva Voice Assistant",
      // TODO: Verify viewUrl
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/deva_ai-BFScOjB4.png",
      liveDemoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7293938971489763328/?originTrackingId=z7DfvmzPQOOuss4kdSpvOw%3D%3D", // Renamed from sourceUrl (Links to LinkedIn post - okay if intended)
    },
    {
      id: 5,
      logo: Chatbot,
      name: "Chatbot",
      // TODO: Verify viewUrl
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/chatbot-BVlcI7YC.png",
      liveDemoUrl: "https://deva-chatbot.onrender.com/", // Renamed from sourceUrl
    },
    {
      id: 6,
      logo: haritai,
      name: "HaritAI",
      // TODO: Verify viewUrl
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/haritai-CdDTkKb_.png",
      liveDemoUrl: "https://haritai.onrender.com/", // Renamed from sourceUrl
    },
    {
      id: 7,
      logo: voice_chatbot,
      name: "Deva Voice chatbot",
      // TODO: Verify viewUrl
      viewUrl: "https://mokshbhardwaj.netlify.app/assets/deva-voice-xWDN8Of6.png",
      liveDemoUrl: "https://deva-voice-chat.onrender.com/", // Renamed from sourceUrl & set to null/undefined or remove if no demo exists
    },
  ];

  return (
    <div
      name="Project"
      // Corrected padding class, increased top margin for spacing
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16" // Adjusted padding for responsiveness
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center md:text-left">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center md:text-left">
            Here are some of the projects I've worked on. Explore the live demos or view more details.
        </p>
        {/* Increased gap for better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {/* Destructure liveDemoUrl (renamed from sourceUrl) */}
          {cardItem.map(({ id, logo, name, viewUrl, liveDemoUrl }) => (
            <div
              // Added min-height, increased padding, subtle hover effect
              className="md:min-h-[300px] border dark:border-gray-700 rounded-lg shadow-lg p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-slate-800"
              key={id}
            >
              {/* Image and Title Container */}
              <div>
                <img
                  src={logo}
                  // Ensure image scales well within its container
                  className="w-full h-[150px] object-contain p-1 mb-3 border-b dark:border-gray-600"
                  alt={`${name} project screenshot`} // More descriptive alt text
                />
                <h3 className="px-2 font-bold text-xl mb-2 text-gray-800 dark:text-white">{name}</h3>
                {/* Optional: Add a short description here if desired */}
                {/* <p className="px-2 text-sm text-gray-600 dark:text-gray-400 mb-3">A brief description of the project...</p> */}
              </div>

              {/* Buttons Container */}
              <div className="px-2 py-3 space-x-3 text-center border-t dark:border-gray-600 mt-auto"> {/* mt-auto pushes buttons down */}
                {/* View Button */}
                {/* Consider changing href if viewUrl shouldn't be just an image */}
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 duration-300 text-sm" // Adjusted styling
                >
                  View
                </a>

                {/* Live Demo Button - Conditionally Rendered */}
                {liveDemoUrl && liveDemoUrl !== "#" && ( // Only render if liveDemoUrl is valid
                  <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 duration-300 text-sm" // Adjusted styling
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Project;
