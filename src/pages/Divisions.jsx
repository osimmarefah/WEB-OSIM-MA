import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BookOpen, Camera, DollarSign, Home, Leaf, Users } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const divisions = [
  { icon: Activity, name: 'Olahraga', description: 'Mengkoordinasikan kegiatan olahraga, kebugaran, dan kompetisi atletik siswa.', color: 'bg-accent/10 text-accent' },
  { icon: BookOpen, name: 'Bahasa Arab', description: 'Meningkatkan kemampuan bahasa Arab melalui kelas, diskusi, dan kontes.', color: 'bg-primary/10 text-primary' },
{ icon: Camera, name: 'Multimedia', description: 'Mengelola produksi video, foto, desain grafis, dan konten digital OSIM.', color: 'bg-secondary/10 text-secondary' },
{ icon: Home, name: 'Ubudiyah', description: 'Memperkuat ibadah, tahfidz Quran, dan kegiatan keagamaan santri.', color: 'bg-accent/10 text-accent' },
{ icon: Leaf, name: 'Kebersihan', description: 'Menjaga kebersihan lingkungan sekolah dan kampanye hygiene.', color: 'bg-primary/10 text-primary' },
{ icon: DollarSign, name: 'Wirausaha', description: 'Melatih kewirausahaan, manajemen usaha, dan kemandirian ekonomi siswa.', color: 'bg-secondary/10 text-secondary' },
];

const members = [
  { name: 'Miqdad Haqqoni', role: 'Ketua', desc: 'Leads the entire organization' },
  { name: 'Ahmad Nayif', role: 'Sekretaris', desc: 'Manages administration & records' },
  { name: 'Ihfadz Qolby', role: 'Bendahara', desc: 'Oversees financial management' },
];

export default function Divisions() {
  return (
    <div>
      <PageHero
        title="Divisions & Members"
        subtitle="Each division plays a vital role in our mission to empower students"
        backgroundImage="/__generating__/img_d569027d4973.png"
      />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Divisions"
            title="6 Pilar Keunggulan"
            description="Our organization is structured into specialized divisions, each dedicated to a unique aspect of student development."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl ${div.color} flex items-center justify-center mb-5`}>
                  <div.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{div.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{div.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-24 bg-muted px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our People"
            title="Meet the Team"
            description="Dedicated individuals who lead and serve our organization with passion."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-5 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mt-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
