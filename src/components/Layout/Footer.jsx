'use client';

import React, { useState } from "react";

export default function Footer() {
  // Your email where messages will be sent
  const YOUR_EMAIL = "amaan.husain2007@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'sending'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Build the email content
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Hi Amaan,\n\n${formData.message}\n\n—\nFrom: ${formData.name}\nEmail: ${formData.email}`;

const mailtoUrl = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.location.href = mailtoUrl;

    // Reset form + button state
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer id="contact" className="w-full bg-[#FAF6F0] pt-12 sm:pt-16 lg:pt-24 text-[#1F1713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 items-start">
          
          {/* Left Column: Heading, Bio & Socials */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1713] mb-3 sm:mb-4">
              Let&apos;s connect!
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-sm">
              I&apos;m always open to discussing new projects, collaborations or opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-5 text-[#1F1713]">
              {/* GitHub */}
              <a
                href="https://github.com/amaan2007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#6D381E] transition-colors p-1"
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
                aria-label="LinkedIn"
                className="hover:text-[#6D381E] transition-colors p-1"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Mail */}
              <a
                href={`mailto:${YOUR_EMAIL}`}
                aria-label="Email"
                className="hover:text-[#6D381E] transition-colors p-1"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Contact Info List */}
          <div className="lg:col-span-3 flex flex-col space-y-4 sm:space-y-5 lg:pt-2">
            {/* Email */}
            <div className="flex items-start sm:items-center gap-3">
              <div className="text-[#6D381E] shrink-0 mt-0.5 sm:mt-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a
                href={`mailto:${YOUR_EMAIL}`}
                className="text-sm font-medium text-stone-800 hover:text-[#6D381E] transition-colors break-all"
              >
                amaan.husain2007@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="text-[#6D381E] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a
                href="tel:+917974254176"
                className="text-sm font-medium text-stone-800 hover:text-[#6D381E] transition-colors"
              >
                +91 7974254176
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="text-[#6D381E] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-stone-800">
                India
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5 w-full bg-white/50 border border-[#6D381E]/10 rounded-2xl p-4 sm:p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Name + Email: stack on mobile, side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white border border-stone-200/80 rounded-lg px-4 py-3 sm:py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#6D381E] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white border border-stone-200/80 rounded-lg px-4 py-3 sm:py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#6D381E] transition-colors"
                />
              </div>

              {/* Message + Button */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full bg-white border border-stone-200/80 rounded-lg p-4 pb-16 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#6D381E] transition-colors resize-none"
                ></textarea>

                {/* Full-width button on mobile, absolute on larger screens */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full sm:w-auto text-white px-4 py-2.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] ${
                      status === "sending"
                        ? "bg-green-700 cursor-not-allowed"
                        : "bg-[#6D381E] hover:bg-[#542B16]"
                    }`}
                  >
                    {status === "sending" ? (
                      <>
                        Opening Gmail...
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#F3ECE3] border-t border-[#6D381E]/10 py-4 px-4 text-center">
        <p className="text-xs sm:text-sm text-stone-600 font-medium">
          © {new Date().getFullYear()} Amaan Husain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}