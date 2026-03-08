import React from "react";
import Workspace from '../assets/ABOUTME.png'
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  text-white p-8 md:p-16 gap-10" id="about">
      
      {/* الصورة */}
      <div className="md:w-1/2">
        <img 
          src={Workspace}
          alt="My Workspace" 
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {/* النص */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-yellow-400 font-semibold text-sm">ABOUT ME</p>
        <h2 className="text-3xl md:text-6xl font-bold">
         Passionate about building interactive and modern web interfaces.
        </h2>
        <p className="text-gray-300">
       I am a Front-End Developer with a strong focus on creating intuitive user experiences. My journey started recently, and since then, I have leveraged AI tools to enhance my development workflow and streamline design tasks.
        </p>
        <p className="text-gray-300">
          I also have hands-on experience in simple video editing and technical support, which helps me deliver polished and functional projects I strive to bridge the gap between design and development, ensuring that every project not only looks professional but also works flawlessly across all devices.
        </p>

        {/* المهارات */}
        <div className="flex gap-10 mt-4">
          <div>
            <h3 className="font-semibold">Design</h3>
            <p className="text-gray-400 text-sm">
             UI/UX Design, Prototyping, Simple Video Editing, AI-assisted Design
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Development</h3>
            <p className="text-gray-400 text-sm">
              React.js, Tailwind CSS, TypeScript, JavaScript, Technical Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;