import React from "react";

const experiences = [
  {
    period: "Jan 2026 – Present",
    title: "Technical Support Specialist",
    company: "SAFAA SOFT",
    description: [
      "Providing technical support to clients and resolving software-related issues.",
      "Diagnosing and troubleshooting system and application errors.",
      "Reporting bugs and coordinating with the development team for fixes.",
      "Ensuring high customer satisfaction through timely issue resolution.",
    ],
  },
  // {
  //   period: "Jan 2025 – Dec 2025",
  //   title: "Operation Team  / Instructor",
  //   company: "CODE FORGE",
  //   description: [
  //     "Led operations team to ensure smooth workflow and project delivery.",
  //     "Coordinated between departments to enhance efficiency and communication.",
  //     "Delivered programming training sessions and workshops.",
  //     "Mentored students through practical projects and technical challenges.",
  //   ],
  // },
  {
    period: "Jun 2024 – Dec 2024",
    title: "Front-End Developer",
    company: "EFM HUB",
    description: [
      "Developed responsive and user-friendly web interfaces.",
      "Optimized website performance and improved load times.",
      "Collaborated with back-end developers for API integration.",
    ],
  },
  {
    period: "Jan 2024 – May 2024",
    title: "Front-End Developer (Freelance)",
    company: "MINAS",
    description: [
      "Developed responsive web applications for freelance clients.",
      "Integrated APIs and enhanced website performance.",
      "Delivered user-focused solutions based on client requirements.",
    ],
  },
  // {
  //   period: "2022 – Dec 2023",
  //   title: "Sales Specialist (Mobile Devices & Accessories)",
  //   company: "Mobile Sales Representative",
  //   description: [
  //     "Sold mobile phones and accessories while achieving monthly sales targets.",
  //     "Assisted customers in selecting suitable devices based on needs and budget.",
  //     "Handled customer inquiries and after-sales support professionally.",
  //     "Developed strong communication, persuasion, and negotiation skills.",
  //   ],
  // },
  // {
  //   period: "2021",
  //   title: "Sales Representative (Clothing)",
  //   company: "Clothing Store",
  //   description: [
  //     "Assisted customers in selecting clothing items.",
  //     "Managed sales transactions and inventory organization.",
  //     "Achieved monthly sales targets.",
  //   ],
  // },
];

const WorkExperience = () => {
  return (
    <section className=" text-white py-24 px-6 md:px-20" id="experience">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#facc15] tracking-[4px] uppercase text-sm font-semibold">
            Career Path
          </p>
          <h2 className="text-5xl font-bold mt-3">
            Work Experience
          </h2>
        </div>

{/* Timeline */}
<div className="relative">

  {/* الخط اللامع */}
  <div className="absolute  top-0 h-full w-[2px]
    bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent
    -translate-x-1/2">
  </div>

  {experiences.map((exp, index) => (
    <div key={index} className="mb-16 relative">

      {/* النقطة اللامعة */}
      <span className="absolute  top-0
        w-4 h-4
        bg-[#facc15]
        rounded-full
        border-4 border-[#0d0d0d]
        shadow-[0_0_12px_rgba(250,204,21,0.8)]
        -translate-x-1/2">
      </span>

      <div className="ml-16"> {/* Shift content right of the line */}
        <p className="text-[#facc15] text-sm font-semibold">
          {exp.period}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {exp.title}
        </h3>

        <p className="text-[#9ca3af] mt-1 mb-4">
          {exp.company}
        </p>

        <ul className="space-y-2 text-[#6b7280]">
          {exp.description.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

    </div>
  ))}

</div>
      </div>
    </section>
  );
};

export default WorkExperience;