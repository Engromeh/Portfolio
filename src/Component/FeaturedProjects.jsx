import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import tasketImg from "../assets/TaskMangment.png";
import ecommerceImg from "../assets/E-Commers.png";
import minasImg from "../assets/Mins.png";
import a2zenonImg from "../assets/A2zeenno.png";

const projects = [
  {
    title: "Tasket - Task Management",
    desc: "A task management web application built with Redux and MUI for efficient task organization and state management.",
    tech: ["React", "Redux", "MUI"],
    image: tasketImg,
    github: "https://github.com/abdelrahman-elkhateeb/taskTrackr",
    live: "https://depi-final-project-m1eh.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    desc: "A modern e-commerce platform featuring product listing, cart system and global state handling using Context API.",
    tech: ["React", "Pure CSS", "Context API"],
    image: ecommerceImg,
    github: "https://github.com/Engromeh/E-Commerce",
    live: "https://e-commerce-one-virid-95.vercel.app/",
  },
  {
    title: "Minas - Travel Dashboard",
    desc: "A responsive travel admin dashboard for managing flights and analytics using Tailwind CSS and Redux.",
    tech: ["React JS", "Tailwind CSS", "Redux"],
    image: minasImg,
    github: "https://github.com/Engromeh/Minas",
    live: "https://userdash.minasagency.com/Dashbord",
  },
  {
    title: "A2Zenon Software Solutions",
    desc: "A software solution platform focused on workflow organization and project management using Bootstrap and Redux.",
    tech: ["React", "Bootstrap", "Redux"],
    image: a2zenonImg,
    github: "https://github.com/yourusername/a2z",
    live: "https://a2zenon.com/",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="text-center mb-14">
        <p className="text-yellow-500 tracking-widest text-sm">PORTFOLIO</p>
        <h2 className="text-4xl font-bold text-white glow-text">
          Featured Projects
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111] rounded-2xl overflow-hidden border border-yellow-600/20 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black p-3 rounded-full hover:scale-110 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black p-3 rounded-full hover:scale-110 transition"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-600/10 text-yellow-500 px-3 py-1 rounded-full border border-yellow-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}