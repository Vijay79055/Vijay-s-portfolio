import React from 'react';
import { skills } from '../data/portfolioData';

const PillCard = ({ items, delay = 0 }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item, idx) => (
      <span
        key={item}
        data-aos="zoom-in"
        data-aos-delay={delay + idx * 60}
        className="px-4 py-2 rounded-full glass-card text-white/90 text-xs md:text-sm font-semibold hover:scale-105 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-default"
      >
        {item}
      </span>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#05070f] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block px-5 py-1.5 rounded-full glass-card text-blue-300 text-xs md:text-sm font-bold mb-6 tracking-widest uppercase">
            What I Work With
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Skills & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Programming Languages */}
          <div data-aos="fade-up" className="glass-card rounded-3xl p-8 md:p-10 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Programming Languages</h3>
            <PillCard items={skills.programming.map((s) => s.name)} />
          </div>

          {/* Tools & Technologies */}
          <div data-aos="fade-up" data-aos-delay="100" className="glass-card rounded-3xl p-8 md:p-10 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Tools & Technologies</h3>
            <PillCard items={skills.tools.map((t) => t.name)} />
          </div>

          {/* Areas of Interest */}
          <div data-aos="fade-up" data-aos-delay="150" className="glass-card rounded-3xl p-8 md:p-10 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Areas of Interest</h3>
            <PillCard items={skills.interests} />
          </div>

          {/* Soft Skills */}
          <div data-aos="fade-up" data-aos-delay="200" className="glass-card rounded-3xl p-8 md:p-10 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Soft Skills</h3>
            <PillCard items={skills.soft} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
