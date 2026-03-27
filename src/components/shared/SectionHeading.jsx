import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      {label && (
        <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
          light ? 'text-secondary' : 'text-secondary'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${
          light ? 'text-white/70' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
      )}
      <div className={`mt-6 mx-auto w-20 h-1 rounded-full ${
        light ? 'bg-secondary' : 'bg-accent'
      }`} />
    </motion.div>
  );
}