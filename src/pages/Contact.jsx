import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import { toast } from 'sonner';

const contactInfo = [
  { icon: MapPin, title: 'Address', detail: 'MA Refah Islami, Indonesia' },
  { icon: Mail, title: 'Email', detail: 'osim@marefahislami.sch.id' },
  { icon: Phone, title: 'Phone', detail: '+62 XXX-XXXX-XXXX' },
  { icon: Clock, title: 'Office Hours', detail: 'Mon - Fri: 07:00 - 15:00 WIB' },
  { icon: Globe, title: 'Social Media', detail: '@osim_refah_islami' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    toast.success('Message sent successfully! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out anytime!"
        backgroundImage="/__generating__/img_d569027d4973.png"
      />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Get in Touch"
            title="Let's Connect"
            description="Have questions, suggestions, or want to collaborate? Don't hesitate to reach out."
          />

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{info.title}</h4>
                    <p className="text-muted-foreground text-sm mt-0.5">{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5">
                <h3 className="font-heading text-xl font-semibold mb-2">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="min-h-[140px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-sm font-semibold"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}