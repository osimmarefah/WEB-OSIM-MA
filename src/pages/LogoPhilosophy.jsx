import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Moon, Award, Palette, CircleDot, Leaf } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const logoElements = [
  {
    icon: CircleDot,
    title: 'Circular Shape',
    description: 'Represents unity, wholeness, and the continuous cycle of learning. It symbolizes the unbreakable bond among all OSIM members.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: BookOpen,
    title: 'Open Book',
    description: 'Symbolizes knowledge, education, and the pursuit of wisdom — the foundation of our madrasah and our faith.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Moon,
    title: 'Crescent & Star',
    description: 'Represents Islamic identity, spiritual guidance, and our commitment to upholding the values of Islam.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Award,
    title: 'Laurel Wreath',
    description: 'Signifies achievement, honor, and the pursuit of excellence in all aspects of student life.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Leaf,
    title: 'Green Color',
    description: 'The dominant green represents Islam, growth, renewal, and our deep connection to nature and the environment.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Palette,
    title: 'Gold & Orange',
    description: 'Gold symbolizes wisdom, prestige, and divine light. Orange represents enthusiasm, energy, and youthful spirit.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
];

export default function LogoPhilosophy() {
  return (
    <div>
      <PageHero
        title="Logo Philosophy"
        subtitle="Understanding the meaning and symbolism behind our identity"
        backgroundImage="/__generating__/img_03d6c189c3fd.png"
      />

      {/* Logo Display */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 -m-8 border-2 border-dashed border-accent/20 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-0 -m-16 border border-primary/10 rounded-full" />
                <img
                  src="/__generating__/img_dc44aa804124.png"
                  alt="OSIM MA Refah Islami Logo"
                  className="w-72 h-72 md:w-80 md:h-80 object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">Our Identity</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
                More Than a <span className="text-primary">Logo</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The OSIM MA Refah Islami logo is a carefully crafted symbol that encapsulates our values, 
                aspirations, and identity. Every element has been thoughtfully designed to reflect who we are 
                and what we stand for as a student organization rooted in Islamic tradition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the choice of colors to the arrangement of symbols, our logo tells the story of a 
                community united by faith, knowledge, and the pursuit of excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Elements */}
      <section className="py-24 bg-muted px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Symbolism"
            title="Elements & Meaning"
            description="Each element in our logo carries a profound meaning that connects to our core values."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoElements.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${el.bg} flex items-center justify-center mb-5`}>
                  <el.icon className={`w-6 h-6 ${el.color}`} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">{el.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{el.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            label="Visual Identity"
            title="Our Color Palette"
            description="The colors chosen for OSIM represent our values and aspirations."
          />

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Green', hex: '#008000', meaning: 'Islam & Growth' },
              { name: 'Orange', hex: '#E07020', meaning: 'Energy & Youth' },
              { name: 'Gold', hex: '#D4A843', meaning: 'Wisdom & Prestige' },
              { name: 'Black', hex: '#1A1A1A', meaning: 'Strength & Authority' },
              { name: 'Brown', hex: '#7B5A3A', meaning: 'Stability & Warmth' },
            ].map((color, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-36"
              >
                <div
                  className="w-full h-28 rounded-2xl mb-3 shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="font-semibold text-sm">{color.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{color.hex}</p>
                <p className="text-xs text-muted-foreground">{color.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}