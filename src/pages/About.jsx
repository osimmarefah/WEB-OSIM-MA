import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Sparkles } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const values = [
  { icon: Heart, title: 'Akhlaqul Karimah', description: 'We uphold noble character and moral excellence as the foundation of every action.' },
  { icon: Target, title: 'Discipline & Integrity', description: 'Commitment to order, responsibility, and honesty in all our endeavors.' },
  { icon: Eye, title: 'Visionary Leadership', description: 'Developing forward-thinking leaders who serve their communities with wisdom.' },
  { icon: Sparkles, title: 'Innovation & Creativity', description: 'Encouraging creative thinking and innovative approaches to problem-solving.' },
];

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Discover the heart and soul of OSIM MA Refah Islami"
        backgroundImage="/__generating__/img_890b9eff5722.png"
      />

      {/* About Content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">Who We Are</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
                The Voice of <span className="text-primary">Student Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  OSIM (Organisasi Siswa Intra Madrasah) MA Refah Islami is the official student organization 
                  that serves as the primary vehicle for student governance, development, and engagement within 
                  our beloved madrasah.
                </p>
                <p>
                  Established with the mission to nurture responsible, knowledgeable, and virtuous individuals, 
                  OSIM bridges the gap between students and the school administration, ensuring every student's 
                  voice is heard and every potential is realized.
                </p>
                <p>
                  Through a diverse range of programs — from academic competitions and Islamic studies circles 
                  to community outreach and cultural celebrations — we create an environment where students can 
                  flourish both spiritually and intellectually.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/30 rounded-2xl" />
              <img
src="image/fotobersama.JPG"
                alt="OSIM members"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary text-primary-foreground px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Purpose"
            title="Vision & Mission"
            light
          />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                To become a leading student organization that produces generations of Muslims who are 
                knowledgeable, virtuous, and globally competitive — rooted in Islamic values and 
                committed to building a better world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  Foster academic excellence through enrichment programs
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  Strengthen Islamic values and spiritual development
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  Cultivate leadership, teamwork, and social responsibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  Create meaningful community impact through service
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Guiding Principles"
            title="Our Core Values"
            description="The pillars that define who we are and guide everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}