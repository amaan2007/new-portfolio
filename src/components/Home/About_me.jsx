import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6D381E] mb-1.5 sm:mb-2">
            ABOUT ME
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1713] tracking-tight mb-3 sm:mb-4">
            Get to know me!
          </h2>

          <div className="w-12 h-[3px] bg-[#6D381E] mb-4 sm:mb-6"></div>

          <div className="space-y-4 sm:space-y-5 text-stone-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            <p>
              I&apos;m a 2nd year Computer Science Engineering student who loves
              building real-world applications and solving problems through
              code.
            </p>
            <p>
              I enjoy working with web technologies and exploring new tools to
              improve my skills every day.
            </p>
          </div>

          {/* Highlight Callout */}
          <div className="flex items-center gap-3 border-l-2 border-[#6D381E] pl-3.5 sm:pl-4 py-1">
            <p className="text-[#6D381E] font-semibold text-sm sm:text-base lg:text-lg">
              Let&apos;s connect and build something amazing.
            </p>
          </div>
        </div>

        {/* Right Column: 2x2 Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
          {/* Card 1: Education */}
          <div className="bg-white/40 border border-[#6D381E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-[#6D381E]/20 flex items-start gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#6D381E]">
              {/* Graduation Cap Icon */}
              <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1F1713] text-base sm:text-lg mb-1 sm:mb-2">
                Education
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm font-medium">
                B.Tech CSE
              </p>
              <p className="text-stone-600 text-xs sm:text-sm">2nd Year</p>
              
            </div>
          </div>

          {/* Card 2: Currently Learning */}
          <div className="bg-white/40 border border-[#6D381E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-[#6D381E]/20 flex items-start gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#6D381E]">
              {/* Code Icon */}
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1F1713] text-base sm:text-lg mb-1 sm:mb-2">
                Currently Learning
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm font-medium">
                SpringBoot
              </p>
              <p className="text-stone-600 text-xs sm:text-sm">Advanced SQL</p>
            </div>
          </div>

          {/* Card 3: Focus */}
          <div className="bg-white/40 border border-[#6D381E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-[#6D381E]/20 flex items-start gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#6D381E]">
              {/* Open Book Icon */}
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1F1713] text-base sm:text-lg mb-1 sm:mb-2">
                Focus
              </h3>
              <p className="text-stone-700 text-xs sm:text-sm font-medium">
                Web Development
              </p>
              <p className="text-stone-600 text-xs sm:text-sm">
                Data Structures & Algorithms
              </p>
              <p className="text-stone-600 text-xs sm:text-sm">
                Problem Solving
              </p>
            </div>
          </div>

          {/* Card 4: Goal */}
          <div className="bg-white/40 border border-[#6D381E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-[#6D381E]/20 flex items-start gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#6D381E]">
              {/* Target/Bullseye Icon */}
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#1F1713] text-base sm:text-lg mb-1 sm:mb-2">
                Goal
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                To become a better developer and build impactful products that
                help people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}