import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-gradient-to-br from-[#0a1128] via-[#0f1c3f] to-[#2563eb] z-[100000] flex items-center justify-center"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-4xl md:text-6xl font-black tracking-tighter"
          >
            <div className="text-white/10">
              {personal.firstName}<span className="text-white/10">.</span>
            </div>

            <motion.div
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            >
              {personal.firstName}<span className="text-blue-400">.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
