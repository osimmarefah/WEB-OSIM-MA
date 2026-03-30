import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Users, ChevronDown } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const structureLevels = [
  {
    level: 'Leadership',
    icon: Crown,
    color: 'from-accent to-secondary',
    borderColor: 'border-accent/30',
    members: [
      { title: 'Ketua Umum (Chairperson)', description: 'Leads the entire OSIM organization and represents it in all matters.' },
    ],
  },
  {
    level: 'Administrative Core',
    icon: Shield,
    color: 'from-primary to-primary/70',
    borderColor: 'border-primary/30',
    members: [
      { title: 'Sekretaris (Secretary)', description: 'Manages correspondence, documentation, and organizational records.' },
      { title: 'Bendahara (Treasurer)', description: 'Handles financial planning, budgeting, and accounting.' },
    ],
  },
  {
    level: 'Division Heads (Koordinator)',
    icon: Users,
    color: 'from-secondary to-accent',
    borderColor: 'border-secondary/30',
    members: [
      { title: 'Kepala Divisi Olahraga', description: 'Koordinasi program olahraga dan kebugaran siswa.' },
      { title: 'Kepala Divisi Bahasa Arab', description: 'Pengembangan kemampuan berbahasa Arab.' },
      { title: 'Kepala Divisi Multimedia', description: 'Produksi dan pengelolaan konten multimedia.' },
      { title: 'Kepala Divisi Ubudiyah', description: 'Kegiatan ibadah dan penguatan rohani.' },
      { title: 'Kepala Divisi Kesenian', description: 'Pengembangan seni dan pertunjukan budaya.' },
      { title: 'Kepala Divisi Wirausaha', description: 'Pelatihan kewirausahaan dan manajemen usaha.' },
    ],
  },
];

export default function Structure() {
  return (
    <div>
      <PageHero
        title="Organization Structure"
        subtitle="A well-organized framework designed for effective student governance"
        backgroundImage="/__generating__/img_890b9eff5722.png"
      />

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Hierarchy"
            title="Our Organizational Framework"
            description="OSIM MA Refah Islami operates with a clear hierarchy to ensure effective governance, accountability, and smooth coordination."
          />

          {/* Advisory */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Advisory Board</span>
              <h3 className="font-heading text-xl font-bold mb-2">Pembina OSIM</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                School administration and teacher advisors who provide guidance, mentorship, and oversight to ensure OSIM stays aligned with the school's vision.
              </p>
            </div>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-border relative">
              <ChevronDown className="w-5 h-5 text-muted-foreground absolute -bottom-2 left-1/2 -translate-x-1/2" />
            </div>
          </div>

          {/* Structure Levels */}
          <div className="space-y-8">
            {structureLevels.map((level, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`rounded-2xl border ${level.borderColor} overflow-hidden`}>
                    {/* Level Header */}
                    <div className={`bg-gradient-to-r ${level.color} px-8 py-5 flex items-center gap-4`}>
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <level.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">{level.level}</h3>
                    </div>

                    {/* Members */}
                    <div className="p-6 grid sm:grid-cols-2 gap-4">
                      {level.members.map((member, j) => (
                        <div key={j} className="bg-background rounded-xl p-5 border border-border">
                          <h4 className="font-semibold text-sm mb-1">{member.title}</h4>
                          <p className="text-xs text-muted-foreground">{member.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {i < structureLevels.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-border relative">
                      <ChevronDown className="w-4 h-4 text-muted-foreground absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Connector to Members */}
          <div className="flex justify-center my-8">
            <div className="w-px h-12 bg-border relative">
              <ChevronDown className="w-5 h-5 text-muted-foreground absolute -bottom-2 left-1/2 -translate-x-1/2" />
            </div>
          </div>

          {/* Members Base */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted rounded-2xl p-8 text-center border border-border">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">All OSIM Members</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Every student of MA Refah Islami is a member of OSIM, contributing to our collective mission through active participation in divisions and programs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}