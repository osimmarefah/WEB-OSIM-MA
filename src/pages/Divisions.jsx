import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Megaphone, Heart, Shield, Laptop, Globe, Users, Mic2, Camera, Activity, Leaf } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const divisions = [
  { icon: BookOpen, name: 'Academic Division', description: 'Organizes study groups, tutoring programs, and academic competitions to excel in knowledge.', color: 'bg-primary/10 text-primary' },
  { icon: Heart, name: 'Islamic Studies (Rohis)', description: 'Strengthens spiritual life through Islamic circles, religious events, and Quran programs.', color: 'bg-accent/10 text-accent' },
  { icon: Megaphone, name: 'Public Relations', description: 'Manages communication, social media, and the public image of OSIM.', color: 'bg-secondary/10 text-secondary' },
  { icon: Palette, name: 'Arts & Culture', description: 'Promotes creativity through art, music, drama, and cultural performances.', color: 'bg-primary/10 text-primary' },
  { icon: Activity, name: 'Sports & Health', description: 'Coordinates sports events, fitness activities, and promotes healthy student lifestyles.', color: 'bg-accent/10 text-accent' },
  { icon: Shield, name: 'Discipline & Security', description: 'Maintains order, enforces school rules, and ensures a safe environment.', color: 'bg-secondary/10 text-secondary' },
  { icon: Laptop, name: 'Technology & Innovation', description: 'Explores digital literacy, coding workshops, and tech-based solutions.', color: 'bg-primary/10 text-primary' },
  { icon: Globe, name: 'Social & Community', description: 'Leads community service projects, charity drives, and environmental initiatives.', color: 'bg-accent/10 text-accent' },
  { icon: Mic2, name: 'Journalism & Broadcasting', description: 'Produces school news, magazines, podcasts, and creative content.', color: 'bg-secondary/10 text-secondary' },
  { icon: Camera, name: 'Documentation', description: 'Captures and archives all OSIM events through photography and videography.', color: 'bg-primary/10 text-primary' },
  { icon: Users, name: 'Student Welfare', description: 'Advocates for student rights, wellbeing, and provides peer support programs.', color: 'bg-accent/10 text-accent' },
  { icon: Leaf, name: 'Environment & Cleanliness', description: 'Champions environmental awareness, green initiatives, and campus cleanliness.', color: 'bg-secondary/10 text-secondary' },
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
            title="12 Pillars of Excellence"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Ketua Umum', role: 'Chairperson', desc: 'Leads the entire organization' },
              { name: 'Wakil Ketua', role: 'Vice Chairperson', desc: 'Supports and assists leadership' },
              { name: 'Sekretaris', role: 'Secretary', desc: 'Manages administration & records' },
              { name: 'Bendahara', role: 'Treasurer', desc: 'Oversees financial management' },
            ].map((member, i) => (
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