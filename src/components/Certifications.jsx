import React from 'react';
import { certifications, achievements, internship } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-gradient-to-b from-[#0a1128] to-[#05070f] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block px-5 py-1.5 rounded-full glass-card text-blue-300 text-xs md:text-sm font-bold mb-6 tracking-widest uppercase">
            Beyond The Classroom
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Certifications & Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Internship */}
          <div data-aos="fade-right" className="glass-card rounded-3xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Internship</h3>
            <p className="text-blue-300 font-semibold text-sm mb-1">{internship.role}</p>
            <p className="text-white/70 text-sm mb-1">{internship.company} · {internship.location}</p>
            <p className="text-white/40 text-xs mb-5">{internship.duration}</p>
            <ul className="space-y-2">
              {internship.points.map((p) => (
                <li key={p} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div data-aos="fade-left" className="glass-card rounded-3xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-5">
              {certifications.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">{c.title}</p>
                    <p className="text-white/50 text-xs md:text-sm">{c.org}{c.duration ? ` · ${c.duration}` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div data-aos="fade-up" className="mt-8 glass-card rounded-3xl p-8 md:p-10">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Achievements</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.39 5.44 5.92.51-4.5 3.9 1.37 5.8L12 15.9l-5.18 2.75 1.37-5.8-4.5-3.9 5.92-.51z" />
                </svg>
                <p className="text-white/75 text-sm md:text-base">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
