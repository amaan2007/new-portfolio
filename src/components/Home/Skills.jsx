import React from "react";

const skills = [
  {
    name: "C",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 128 128">
        <path fill="#00599C" d="M117.5 33.5l-47.9-27.6c-3.4-2-7.8-2-11.2 0L10.5 33.5c-3.4 2-5.5 5.7-5.5 9.7v55.3c0 4 2.1 7.7 5.5 9.7l47.9 27.6c3.4 2 7.8 2 11.2 0l47.9-27.6c3.4-2 5.5-5.7 5.5-9.7V43.2c0-4-2.1-7.7-5.5-9.7z"/>
        <path fill="#FFFFFF" d="M85.4 79.4c-4.2 6.7-11.4 10.8-19.4 10.8-12.7 0-23-10.3-23-23s10.3-23 23-23c8 0 15.2 4.1 19.4 10.8l10.8-6.2C89.5 37.7 77.4 32 66 32 46.7 32 31 47.7 31 67s15.7 35 35 35c11.4 0 23.5-5.7 30.2-16.8l-10.8-5.8z"/>
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 128 128">
        <path fill="#5382A1" d="M43.7 94.8c12.7 1.6 30.6 1.4 41.6-4.6 0 0-4.1 4-16.7 5.7-14 1.9-29.2.9-24.9-1.1zM40.2 82.3c14 1.2 36.3 1.9 49.3-5.2 0 0-5.3 3.8-20.6 5.4-17.2 1.8-35.4 1.1-28.7-.2zM59.4 67.8s-13.8 3.5-5.3 4.9c10.3 1.7 26.6 1.5 36.9-.6 0 0-7.7 3.1-22.1 3.5-13.7.4-28-1.7-9.5-7.8z"/>
        <path fill="#E76F00" d="M72.2 45.3s8.4 9.6-7.8 20.3c-13 8.6-3 13.5 0 19-7.5-6.8-13.1-12.9-9.3-18.4 5.7-8.3 20.3-11.2 17.1-20.9z"/>
        <path fill="#5382A1" d="M81.5 59.5c4.7 5.2 1.5 10.3.3 11.2 0 0 1.9-1.3 2.5-4 .9-3.9-1.3-6.1-2.8-7.2zm-28.7 41.7c17.6 1.1 35.8-.3 46.1-5.7 0 0-5 3.3-19 4.8-16.7 1.8-34 .9-27.1-.9z"/>
        <path fill="#E76F00" d="M78.6 31.8c4.2 4.9.4 14.1-3.6 19-3.9 4.7-6.2 8.7-2.9 14.8-6.1-6.1-3.9-12.4 0-16.5 4.3-4.5 9-11 6.5-17.3z"/>
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 128 128">
        <path fill="#E44D26" d="M18.8 114.7L9.4 9H118.6l-9.4 105.7L63.9 119"/>
        <path fill="#F16529" d="M64 111.9l36.9-10.2 8.3-93.5H64"/>
        <path fill="#EBEBEB" d="M64 53.6H46l-1.2-14.1H64V26.2H30.5l.4 4.7 3.2 36.8H64v-14.1zM64 85.3l-.1.1-15.5-4.2-1-11.2H34.1l1.9 21.6 27.9 7.7.1.1V85.3z"/>
        <path fill="#FFFFFF" d="M63.9 53.6v14.1h16.7l-1.6 17.6-15.1 4.1v14.1l27.9-7.7 3.6-42.2H63.9zM63.9 26.2v13.3h32.2l.4-4.7.7-8.6H63.9z"/>
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 128 128">
        <path fill="#1572B6" d="M18.8 114.7L9.4 9H118.6l-9.4 105.7L63.9 119"/>
        <path fill="#33A9DC" d="M64 111.9l36.9-10.2 8.3-93.5H64"/>
        <path fill="#EBEBEB" d="M64 53.6H46.4l-1.2-14.1H64V26.2H30.5l.4 4.7 3.2 36.8H64v-14.1zM64 85.3l-.1.1-15.5-4.2-1-11.2H34.1l1.9 21.6 27.9 7.7.1.1V85.3z"/>
        <path fill="#FFFFFF" d="M63.9 67.7H80.6l-1.6 17.6-15.1 4.1v14.1l27.9-7.7 3.6-42.2H63.9v14.1zM63.9 26.2v13.3h32.2l.4-4.7.7-8.6H63.9z"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg" viewBox="0 0 128 128">
        <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
        <path fill="#000000" d="M67.3 103.2c3.3 5.4 7.8 9.3 16 9.3 6.7 0 11.2-3.3 11.2-8 0-5.6-4.4-7.6-11.8-10.8l-4.1-1.8c-11.9-5.1-19.8-11.5-19.8-24.9 0-12.4 9.6-21.7 24.6-21.7 10.7 0 18.2 3.8 23.3 12.7l-9.7 6.2c-2.9-5-6.1-7.2-13.6-7.2-5.3 0-8.9 2.4-8.9 6.2 0 4.3 3.4 6.1 9.8 8.8l4.1 1.8c14.7 6.3 22.3 12.3 22.3 25.8 0 14.7-11.6 23.2-27.7 23.2-15.3 0-24.7-7.4-29.4-17.7l9.7-5.9zM24.7 102.3c2.4 4.2 5.3 7.6 11.4 7.6 5.8 0 9.5-2.3 9.5-11.5V46h15.2v53.1c0 17-9.8 24.1-24.3 24.1-12.8 0-20.7-6.5-24.5-15.7l12.7-5.2z"/>
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 animate-[spin_20s_linear_infinite]" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="4.5">
          <ellipse cx="64" cy="64" rx="48" ry="18.5"/>
          <ellipse cx="64" cy="64" rx="48" ry="18.5" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="48" ry="18.5" transform="rotate(120 64 64)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 128 128">
        <path fill="#00758F" d="M96.7 44.2c-1.3-.8-3-.5-4.1.6L80.8 57.3c-.9.9-2.2 1.3-3.4.9l-13.4-4.5c-1.8-.6-3.7.3-4.4 2.1l-6.4 16c-.6 1.5.1 3.2 1.5 3.9l12 5.8c.8.4 1.7.4 2.5 0l25.8-14.7c1.3-.7 1.9-2.3 1.3-3.7l-4.1-12.9c-.3-.9-1-1.6-1.9-2z"/>
        <path fill="#F29111" d="M47.7 85.1l-10-4.8c-1.4-.7-2.1-2.4-1.5-3.9l6.4-16c.7-1.8 2.6-2.7 4.4-2.1l13.4 4.5c1.2.4 2.5 0 3.4-.9l11.8-12.5c1.1-1.1 2.8-1.4 4.1-.6l4.1 2 1.9-6c.6-1.8.2-3.8-1.1-5.1L70.9 26.2c-1.3-1.3-3.3-1.7-5-1L32 39.8c-2.1.9-3.4 3-3.3 5.3l.9 29.8c.1 2.3 1.5 4.3 3.6 5.1l14.5 5.1z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 128 128">
        <path fill="#F05032" d="M123.6 57.4L70.6 4.4c-4.6-4.6-12-4.6-16.6 0L42.5 15.9l18.3 18.3c4 1.4 6.9 5.2 6.9 9.7 0 2.2-.7 4.3-1.9 6l16.2 16.2c1.7-1.2 3.8-1.9 6-1.9 5.7 0 10.3 4.6 10.3 10.3S93.7 84.8 88 84.8s-10.3-4.6-10.3-10.3c0-2.2.7-4.3 1.9-6L63.5 52.3v34.9c1.4.9 2.3 2.5 2.3 4.3 0 2.8-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2c0-1.8.9-3.4 2.3-4.3V48.1c-1.4-.9-2.3-2.5-2.3-4.3 0-2.3 1.5-4.2 3.6-4.9L40.9 20.6 4.4 57.1c-4.6 4.6-4.6 12 0 16.6l53 53c4.6 4.6 12 4.6 16.6 0l49.6-49.6c4.6-4.6 4.6-12 0-16.7z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-[#181717]" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20"
    >
      {/* Section Header */}
      <div className="mb-6 sm:mb-10">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6D381E]">
          SKILLS
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1F1713] tracking-tight mt-1">
          Technologies I work with
        </h2>
      </div>

      {/* Grid of 9 Skills: Clean 3x3 on mobile, 1x9 on desktop */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/50 border border-[#6D381E]/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#6D381E]/30 group cursor-default"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="font-semibold text-[11px] sm:text-sm text-[#1F1713] text-center tracking-tight leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}