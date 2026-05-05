import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Users, ChevronDown, Activity } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

function getAvatarSrc(name) {
  const isCoordinator = name.includes('(Koordinator)');
  let baseName = name;
  if (isCoordinator) {
    baseName = name.replace(' (Koordinator)', '').trim();
  } else {
    baseName = name.replace(/ \([^)]+\)$/, '').trim(); // Remove other parenthetical roles
  }
  const slug = baseName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '_') // Spaces to _
    .replace(/\s+/g, '_') // Spaces to _ first
    .replace(/[^a-z0-9_-]/g, '') // Keep a-z 0-9 _ -
    .replace(/[_-]{2,}/g, '_') // Collapse multiple _ -
    .replace(/^[_-]+|[_ -]+$/, ''); // Trim
  return `/member-photos/${slug}.jpg`;
}

const allMembersByDivision = [
  {
    name: 'Olahraga',
    members: [
      'Muhammad Bintang Zakirin (Koordinator)',
      'Muhammad Ibrahim Azis',
      'Bagus Akmal Nugroho',
      'Muhammad Hanif Ar-Rabbani',
    ]
  },
  {
    name: 'Bahasa Arab',
    members: [
      'Anshor Dwi Darmawan (Koordinator)',
      'Ghitrif Syauqi Al-Afghany',
      'Fatan Najah Abdillah',
      'Imtiyaz Athif Fawwaz Ash-shobir',
    ]
  },
  {
    name: 'Multimedia',
    members: [
      'Achmad Fauzan Muttaqien (Koordinator)',
      'Muhammad Nidzam Al-Mahmudi',
      'Faza Adila Arham',
    ]
  },
  {
    name: 'Ubudiyah',
    members: [
      'Muhammad Jawwami Alkalim (Koordinator)',
      'Maulana Taka Ishaqi',
      'Farras Muhammad',
      'Ahmad Fauzan Aryansyah',
    ]
  },
  {
    name: 'Kebersihan',
    members: [
      'Salman Fauzan Akbar (Koordinator)',
      'Altras Maulana Kahfi',
      'Abdurofiq Attarul Haq',
      'Muhammad Althaf Danish',
      'Ahmad Ikmal Adzka'
    ]
  },
  {
    name: 'Wirausaha',
    members: [
      'Farhat Al-Firdausy (Koordinator)',
      'Ahmad Fahmi Saifuddin',
      'Muhammad Nizar Haqiqi',
      'Ahmad Hafiyyan Firdausi',
    ]
  }
];

const structureLevels = [
  {
    level: 'Leadership',
    icon: Crown,
    color: 'from-accent to-secondary',
    borderColor: 'border-accent/30',
    members: [
      { title: 'Miqdad Haqqoni (Ketua OSIM)', description: 'Memimpin seluruh organisasi OSIM dan mewakilinya dalam segala hal.' },
    ],
  },
  {
    level: 'Administrative Core',
    icon: Shield,
    color: 'from-primary to-primary/70',
    borderColor: 'border-primary/30',
    members: [
      { title: 'Ahmad Nayif (Sekretaris)', description: 'Mengelola surat menyurat, dokumentasi, dan catatan organisasi.' },
      { title: 'Ihfadz Qolby (Bendahara)', description: 'Menangani perencanaan keuangan, anggaran, dan akuntansi.' },
    ],
  },
  {
    level: 'Division Heads (Koordinator)',
    icon: Users,
    color: 'from-secondary to-accent',
    borderColor: 'border-secondary/30',
    members: [
      { title: 'Muhammad Bintang Zakirin (Koordinator Olahraga)', description: 'Koordinasi program olahraga dan kebugaran siswa.' },
      { title: 'Anshor Dwi Darmawan (Koordinator Bahasa Arab)', description: 'Pengembangan kemampuan berbahasa Arab.' },
      { title: 'Achmad Fauzan Muttaqien (Koordinator Multimedia)', description: 'Produksi dan pengelolaan konten multimedia.' },
      { title: 'Muhammad Jawwami Alkalim (Koordinator Ubudiyah)', description: 'Kegiatan ibadah dan kedisiplinan.' },
      { title: 'Salman Fauzan Akbar (Koordinator Kebersihan)', description: 'Menjaga kebersihan lingkungan sekolah.' },
      { title: 'Farhat Al-Firdausy (Koordinator Wirausaha)', description: 'Pelatihan kewirausahaan dan manajemen usaha.' },
    ],
  },
];

export default function Structure() {
  return (
    <div>
      <PageHero
        title="Organization Structure"
        subtitle="A well-organized framework designed for effective student governance"
        backgroundImage="structurebg.JPG"
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
              <h3 className="font-heading text-xl font-bold mb-2">Athif S.E.</h3>
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
                        <div key={j} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-all group">
                          <Avatar className="w-10 h-10 flex-shrink-0">
                            <AvatarImage 
                              src={getAvatarSrc(member.title)}
                              alt={member.title}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary/80 font-semibold text-xs">
                              {member.title.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-sm mb-1 truncate group-hover:text-primary transition-colors">{member.title}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">{member.description}</p>
                          </div>
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

          {/* All OSIM Members by Division - Table/Grid Layout Option B */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">All OSIM Members</h3>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {allMembersByDivision.map((division, i) => (
                  <div key={i} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                    <h4 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      {division.name}
                    </h4>
                    <div className="space-y-2">
                      {division.members.map((member, j) => (
                        <div key={j} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-all group">
                          <Avatar className="w-10 h-10 flex-shrink-0">
                            <AvatarImage 
                              src={getAvatarSrc(member)}
                              alt={member}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary/80 font-semibold text-xs">
                              {member.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="font-medium text-sm block group-hover:text-primary transition-colors">{member}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}