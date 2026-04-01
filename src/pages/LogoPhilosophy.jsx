import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Moon, Award, Palette, CircleDot, Leaf } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const logoElements = [
  {
    icon: Leaf,
    title: 'Warna Hijau',
    description: 'Mewakili kesucian, kedamaian, dan identitas islami, serta kesuburan dan harapan.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: BookOpen,
    title: 'Visi dan Misi',
    description: "Organisasi ini memiliki visi untuk mencetak ulama; hafidh alim da'i, serta menyelenggarakan pendidikan Islam yang mengutamakan tahfidh Al-Qur'an.",
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: CircleDot,
    title: 'Bentuk Lingkaran',
    description: 'Melambangkan tekad, persatuan, keutuhan, dan ketidakterbatasan dari organisasi serta komunitas santri.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Moon,
    title: 'Tulisan Arab',
    description: "Tulisan Arab menunjukkan identitas organisasi sebagai lembaga pendidikan Islam yang berfokus pada pengajaran Al-Qur'an dan ulum syar'i.",
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Award,
    title: 'Refah Islami',
    description: 'Refah adalah nama pondok pesantren (Pondok Pesantren Refah Islami) yang menjadi konteks organisasi ini, menunjukkan afiliasi dan lingkungan pendidikan tempat para santri belajar dan berorganisasi.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export default function LogoPhilosophy() {
  return (
    <div>
      <PageHero
        title="Logo Philosophy"
        subtitle="Understanding the meaning and symbolism behind our identity"
        backgroundImage="./pict"
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
                  src="./logoosim.png"
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
<span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">Filosofi Logo</span>
<h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
                Lambang <span className="text-primary">Identitas Mulia</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                 OSIM MA Refah Islami – Simbol Persatuan Santri, Warisan Keilmuan Islam, dan Visi Cemerlang Menuju Generasi Qur'ani yang Berjasa bagi Umat.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Elements */}
      <section className="py-24 bg-muted px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Filosofi"
            title="Elemen & Makna"
            description="Setiap elemen dalam logo kami membawa makna mendalam yang terhubung dengan nilai-nilai inti kami."
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
            label="Identitas Visual"
            title="Warna Hijau"
            description="Warna yang dipilih untuk OSIM mewakili nilai-nilai dan aspirasi kami."
          />

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Hijau', hex: '#008000', meaning: 'Kesucian, Kedamaian, Identitas Islami' },
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