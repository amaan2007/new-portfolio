import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "TriAxon Technology",
    description:
      "A full-stack task management app with user authentication, tasks, and dashboard.",
    tags: ["HTML", "Tailwindcss", "React.js"],
    image:
      "/Triaxon_tech.png", // Replace with your project preview image
    githubUrl: "https://github.com",
    liveUrl: "https://tri-axon.vercel.app",
  },
  {
    title: "Crochet Alif",
    description:
      "Responsive e-commerce website with product listing, cart and checkout functionality.",
    tags: ["HTML", "Tailwindcss", "React.js"],
    image:
      "/crocket_by_alif.png", // Replace with your project preview image
    githubUrl: "https://github.com",
    liveUrl: "https://crochet-alif.vercel.app",
  },
  {
    title: "Ultimate Gaming Zone",
    description:
      "A minimal blog website to share thoughts and articles. Built with React and Markdown.",
    tags: ["HTML", "Tailwindcss", "React.js"],
    image:
      "/Gaming_Zone.png", // Replace with your project preview image
    githubUrl: "https://github.com",
    liveUrl: "https://ultimate-gam-zone.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3 sm:gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6D381E]">
            PROJECTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1713] tracking-tight mt-1">
            Things I&apos;ve built
          </h2>
        </div>

        {/* View All Projects Link */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base text-[#6D381E] hover:text-[#542B16] transition-colors group self-start sm:self-auto"
        >
          View All Projects
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-[#6D381E]/10 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#6D381E]/25 group"
          >
            <div>
              {/* Image Preview Frame */}
              <div className="relative w-full h-44 sm:h-52 md:h-56 bg-stone-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-[#1F1713] text-lg sm:text-xl mb-1.5 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Card Footer: Tech Stack Tags & Action Links */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF5F0] text-stone-700 text-xs font-medium border border-[#6D381E]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* External Links */}
              <div className="flex items-center gap-3 text-[#1F1713] shrink-0 ml-auto sm:ml-0">
                {/* GitHub Icon */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="hover:text-[#6D381E] p-1 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                {/* Live Preview External Link Icon */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="hover:text-[#6D381E] p-1 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}