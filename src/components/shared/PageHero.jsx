import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-primary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/80 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}