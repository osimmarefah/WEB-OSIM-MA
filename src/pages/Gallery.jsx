import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';

const galleryItems = [
  {
    src: './fotoLDKS.JPG',
    alt: 'OSIM Group Photo',
    category: 'Annual Events',
    title: 'Pelantikan OSIM MA Refah Islami 2026-2027',
  },
  {
    src: '/__generating__/img_890b9eff5722.png',
    alt: 'Classroom Activity',
    category: 'Events',
    title: 'Latihan Dasar Kepemimpinan Santri (LDKS) 2026',
  },
  {
    src: '/__generating__/img_d569027d4973.png',
    alt: 'Community Service',
    category: 'Community',
    title: 'Community Service Day',
  },
  {
    src: '/__generating__/img_6253fab9d5a4.png',
    alt: 'Cultural Performance',
    category: 'Events',
    title: 'Annual Cultural Festival',
  },
  {
    src: '/__generating__/img_f444a72d05c2.png',
    alt: 'Competition Winners',
    category: 'Achievement',
    title: 'Science Competition Winners',
  },
  {
    src: '/__generating__/img_03d6c189c3fd.png',
    alt: 'Islamic Calligraphy',
    category: 'Academic',
    title: 'Islamic Calligraphy Workshop',
  },
];

const categories = ['All', 'Events', 'Academic', 'Community', 'Achievement'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="Capturing moments of growth, achievement, and togetherness"
        backgroundImage="/__generating__/img_6253fab9d5a4.png"
      />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Documentation"
            title="Our Moments"
            description="A visual journey through the events, activities, and achievements of OSIM MA Refah Islami."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/2] bg-muted"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-heading text-lg font-bold text-white mt-1">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="text-center mt-6">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{selectedImage.category}</span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
