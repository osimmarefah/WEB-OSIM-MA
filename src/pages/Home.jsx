import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Star, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

const stats = [
  { number: '28', label: 'Active Members' },
  { number: '6', label: 'Divisions' },
  { number: '100+', label: 'Hafidh Quran' },
  { number: '8', label: 'Years of Excellence' },
];

const highlights = [
  {
    icon: BookOpen,
    title: 'Keunggulan Akademik',
    description: 'Mendorong pertumbuhan intelektual melalui program dan kompetisi berbasis pengetahuan.',
  },
  {
    icon: Users,
    title: 'Pengembangan Kepemimpinan',
    description: 'Membangun pemimpin masa depan dengan karakter yang kuat, integritas, dan nilai-nilai Islam.',
  },
  {
    icon: Award,
    title: 'Prestasi & Inovasi',
    description: "Mengapresiasi prestasi santri di bidang syar'i, akademi, olahraga, seni, dan pengabdian masyarakat.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./gedungma.JPG"
            alt="Gedung OSIM MA Refah Islami"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-semibold tracking-widest uppercase mb-6">
                Organisasi Santri Intra Madrasah
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              OSIM <br />
              <span className="text-accent">MA Refah Islami</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg"
            >
              Membina pemimpin masa depan melalui nilai-nilai Islam, keunggulan akademis, dan pengabdian masyarakat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/25"
              >
                Discover More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      {/* Stats Band */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-white rounded-2xl shadow-xl shadow-black/10 overflow-hidden"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center py-8 px-4">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Do"
            title="Empowering Students"
            description="OSIM MA Refah Islami berdedikasi untuk mengembangkan siswa yang berwawasan luas melalui program-program komprehensif."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">Our Family</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
                Together We <span className="text-accent">Grow</span>
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Di OSIM MA Refah Islami, kami percaya pada kekuatan kebersamaan. Organisasi kami adalah sebuah keluarga di mana setiap santri dihargai, didukung, dan diberdayakan untuk mencapai potensi maksimal mereka dalam pertumbuhan akademis dan spiritual.
              </p>
              <Link
                to="/divisions"
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                Meet Our Divisions <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary/20 rounded-2xl" />
              <img
                src="./fotobersama.JPG"
                alt="Foto Bersama OSIM MA Refah Islami"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star className="w-8 h-8 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Be Part of Something <span className="text-primary">Greater</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Join OSIM MA Refah Islami and make a difference in your school community, your future, and the world around you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
