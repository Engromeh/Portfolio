import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaVideo,
  FaBrain,
  FaBriefcase,
} from "react-icons/fa";

import { SiRedux, SiGithub } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "AI", icon: <FaBrain /> },
  // { name: "Video Editing", icon: <FaVideo /> },
  { name: "UI/UX", icon: <MdOutlineDesignServices /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  // { name: "Business", icon: <FaBriefcase /> },
];
export default function Skills() {
  return (
    <div className="min-h-screen bg-black py-16 px-6" id="skills">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12 glow-text">
        My Skills
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#111] border border-yellow-600 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-yellow-500 glow-icon">
                  {skill.icon}
                </span>
                <h3 className="text-white font-semibold glow-text">
                  {skill.name}
                </h3>
              </div>
              
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}
