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
  { name: "HTML", percent: 100, icon: <FaHtml5 /> },
  { name: "CSS", percent: 100, icon: <FaCss3Alt /> },
  { name: "JavaScript", percent: 90, icon: <FaJs /> },
  { name: "React JS", percent: 85, icon: <FaReact /> },
  { name: "Redux", percent: 70, icon: <SiRedux /> },
  { name: "GitHub", percent: 85, icon: <SiGithub /> },
  { name: "AI", percent: 60, icon: <FaBrain /> },
  { name: "Video Editing", percent: 40, icon: <FaVideo /> },
  { name: "UI/UX", percent: 40, icon: <MdOutlineDesignServices /> },
  { name: "Tailwind CSS", percent: 70, icon: <SiTailwindcss /> },
  { name: "Bootstrap", percent: 100, icon: <FaBootstrap /> },
  { name: "Business", percent: 40, icon: <FaBriefcase /> },
];
export default function Skills() {
  return (
    <div className="min-h-screen bg-black py-16 px-6">
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
              <span className="text-yellow-500 font-bold glow-text">
                {skill.percent}%
              </span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
                className="bg-yellow-500 h-3 rounded-full transition-all duration-1000 shadow-yellow-500 shadow-md"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}