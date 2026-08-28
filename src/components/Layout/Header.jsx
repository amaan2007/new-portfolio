'use client';

import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 w-full bg-[#FAF6F0]/90 backdrop-blur-md z-50 border-b border-[#6D381E]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]"
        >
          Amaan Husain<span className="text-[#6D381E]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`transition-colors ${
                link.name === "Home"
                  ? "relative text-[#6D381E] font-semibold py-1"
                  : "text-stone-700 hover:text-[#6D381E]"
              }`}
            >
              {link.name}
              {link.name === "Home" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6D381E] rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Download Resume Button */}
          <a
            href="/AMAAN_HUSAIN_RESUME.pdf"
            download="Amaan_Husain_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6D381E] hover:bg-[#542B16] text-white px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
            
            {/* Clean Download Icon */}
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-stone-700 hover:text-[#6D381E] focus:outline-none rounded-lg"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#6D381E]/10 px-6 py-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-700 hover:text-[#6D381E] py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}