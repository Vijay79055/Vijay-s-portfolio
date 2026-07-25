import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0a1128] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block px-5 py-1.5 rounded-full glass-card text-blue-300 text-xs md:text-sm font-bold mb-6 tracking-widest uppercase">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2.5 md:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-400 via-blue-600 to-transparent"></div>

          {education.map((item, idx) => (
            <div
              key={item.degree}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[27px] md:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a1128] shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>

              <div className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-white text-lg md:text-xl font-bold">{item.degree}</h3>
                  <span className="text-blue-300 text-xs md:text-sm font-semibold shrink-0">{item.duration}</span>
                </div>
                <p className="text-white/70 text-sm md:text-base mb-1">{item.school}</p>
                {item.detail ? (
                  <p className="text-blue-200/80 text-xs md:text-sm font-medium">{item.detail}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
