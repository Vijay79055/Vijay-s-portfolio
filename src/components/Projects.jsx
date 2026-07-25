import React from 'react';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => (
  <div
    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
    data-aos-delay={index * 100}
    className="glass-card rounded-3xl p-7 md:p-9 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.2)] transition-all duration-500"
  >
    <div className="flex items-start justify-between mb-4">
      <span className="text-blue-400 font-serif italic text-lg">{String(index + 1).padStart(2, '0')}</span>
    </div>

    <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight">{project.title}</h3>
    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">{project.description}</p>

    <div className="mb-5">
      <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">Key Features</p>
      <ul className="space-y-1.5">
        {project.features.map((f) => (
          <li key={f} className="text-white/70 text-sm flex items-start gap-2">
            <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
            {f}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
      {project.tech.map((t) => (
        <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs font-medium">
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center px-4 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Code
      </a>
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2.5 rounded-full gradient-btn text-white text-sm font-semibold flex items-center justify-center gap-2"
        >
          Live Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : null}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#05070f] to-[#0a1128] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block px-5 py-1.5 rounded-full glass-card text-blue-300 text-xs md:text-sm font-bold mb-6 tracking-widest uppercase">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl">
            A selection of academic and self-driven projects spanning software development and embedded systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
