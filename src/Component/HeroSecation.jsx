import React from "react";
import Profile from '../assets/Romeh.jpg'

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">

          <p className="text-yellow-500 font-medium">
            👋 Hello, I'm Mahmoud Romeh
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting Digital <br />
            <span className="text-yellow-500">
              Experiences
            </span>{" "}
            That Inspire.
          </h1>

          <p className="text-gray-400 max-w-lg">
            A creative Front-End Developer leveraging Artificial Intelligence to build
  intuitive and high-performing web applications. I also have experience 
  in teaching courses and video editing, combining technical skills with 
  content creation to deliver engaging digital experiences.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
              View My Work →
            </button>

            <a
  href="/Mahmoud_Saaed_Romeh_CV.pdf" // اسم الملف بالظبط
  download
  className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
>
  Download Resume
</a>
          </div>
        </div>

        {/* Right Side */}
    
<div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
  <div className="relative flex items-center justify-center">

    {/* الدائرة الخفيفة اللي ورا */}
    <div className="absolute w-96 h-96 rounded-full border border-yellow-500 opacity-30"></div>

    {/* الصورة */}
    <img
      src={Profile}
      alt="Profile"
      className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full   z-10"
    />

  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;