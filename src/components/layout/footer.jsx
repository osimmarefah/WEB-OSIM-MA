import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="./logoosim.png" 
                alt="OSIM Logo" 
                className="h-12 w-12 rounded-full object-cover bg-white/10"
              />
              <div>
                <h3 className="font-heading text-lg font-bold">OSIM</h3>
                <p className="text-sm text-primary-foreground/70">MA Refah Islami</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Organisasi Siswa Intra Madrasah — building future leaders with Islamic values and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Divisions', path: '/divisions' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>MA Refah Islami, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>osim@marefahislami.sch.id</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+62 XXX-XXXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Motto */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold">Our Motto</h4>
            <p className="text-sm text-primary-foreground/70 leading-relaxed italic">
              "Berilmu, Berakhlak, Berprestasi" — Knowledgeable, Virtuous, Accomplished.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2026 OSIM MA Refah Islami. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary" /> by OSIM
          </p>
        </div>
      </div>
    </footer>
  );
}

