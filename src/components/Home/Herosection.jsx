import React from "react";
import Image from "next/image";

export default function Herosection() {
  return (
    <main
      id="home"
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-[#FAF6F0]"
    >
           {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <Image
          src="/mobile-hero.png"
          alt="Amaan Husain"
          fill
          priority
          className="object-cover object-[center_20%] md:hidden"
          sizes="(max-width: 767px) 100vw"
        />
        {/* Desktop Image */}
             <Image
          src="/Herosection.png"
          alt="Amaan Husain"
          fill
          priority
          className="object-cover object-[center_30%] md:object-right lg:object-center"
          sizes="100vw"
        />
        {/* Clean light overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/90 via-[#FAF6F0]/60 to-transparent md:from-[#FAF6F0]/70 md:via-[#FAF6F0]/30 md:to-transparent" />
      </div>

      {/* Clean Text Content on top */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        <div className="max-w-xl">
          <p className="text-[#6D381E] text-base sm:text-lg font-medium mb-1">
            Hi, I&apos;m
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F1713] tracking-tight mb-2 sm:mb-3">
            Amaan Husain
          </h1>

          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-semibold text-[#6D381E] mb-2 sm:mb-3">
              Computer Science Engineering Student
            </h2>
            <div className="w-12 h-[2px] bg-[#6D381E]"></div>
          </div>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
            I build things for the web and solve problems with code.
            <br className="hidden sm:inline" />
            {" "}I enjoy learning new technologies and turning ideas into real
            world applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="#projects"
              className="bg-[#6D381E] hover:bg-[#542B16] active:scale-[0.98] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              View My Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="border border-[#6D381E] text-[#6D381E] hover:bg-[#6D381E]/5 active:scale-[0.98] px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              Contact Me
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 text-[#1F1713]">
            {/* GitHub */}
            <a
              href="https://github.com/amaan2007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[#6D381E] p-1 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/amaan-husain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[#6D381E] p-1 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:amaan.husain2007@gmail.com"
              aria-label="Email Me"
              className="hover:text-[#6D381E] p-1 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}