import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePhoto from '../assets/profile.png';
import { personal } from '../data/portfolioData';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#05070f] flex items-center pt-28 pb-16 md:pt-0 md:pb-0">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070f] via-[#0a1128] to-[#0a1a3d]"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <span
            data-aos="fade-up"
            className="inline-block px-4 py-1.5 rounded-full glass-card text-blue-300 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6"
          >
            {personal.tagline}
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/70 text-sm md:text-lg font-medium mb-8 max-w-lg leading-relaxed"
          >
            {personal.role} Building practical software solutions with Java, Python, Machine Learning, and data analytics.</p>

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full gradient-btn text-white font-semibold shadow-md"
            >
              View My Work
            </a>

            <a
              href={personal.resumeUrl}
              download
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="relative flex justify-center items-center shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 blur-2xl opacity-40 scale-105"></div>
          <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-br from-blue-400 via-blue-600 to-[#0a1128] shadow-[0_0_60px_rgba(37,99,235,0.35)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#05070f]">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
