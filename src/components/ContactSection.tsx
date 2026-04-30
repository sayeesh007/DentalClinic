"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Contact Info */}
            <div className="lg:w-1/2 space-y-12">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4"
                >
                  Get in Touch
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-black text-white leading-tight italic"
                >
                  Let's discuss your <span className="text-accent">dream smile</span>.
                </motion.h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactInfoItem
                  icon={Phone}
                  title="Phone"
                  content="+91 999 888 8888"
                  delay={0.2}
                />
                <ContactInfoItem
                  icon={Mail}
                  title="Email"
                  content="hello@paramclinic.com"
                  delay={0.3}
                />
                <ContactInfoItem
                  icon={MapPin}
                  title="Location"
                  content="123 Innovation St, Bengaluru, KA"
                  delay={0.4}
                />
                <ContactInfoItem
                  icon={Clock}
                  title="Hours"
                  content="Mon - Sat: 9AM - 8PM"
                  delay={0.5}
                />
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="w-full h-64 rounded-3xl overflow-hidden glass border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700"
              >
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-white/20 font-bold tracking-widest text-xl italic uppercase">
                  Interactive Map
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput label="Full Name" placeholder="Your Name" />
                  <FormInput label="Email Address" placeholder="yourname@example.com" type="email" />
                </div>
                <FormInput label="Phone Number" placeholder="+91 000 000 0000" />
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your dental goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium outline-none focus:border-accent transition-all resize-none"
                  />
                </div>
                <button className="w-full py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-tighter hover:bg-primary/80 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon: Icon, title, content, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-start gap-4"
  >
    <div className="p-3 rounded-xl bg-white/5 text-accent border border-white/10">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">{title}</h4>
      <p className="text-white font-semibold">{content}</p>
    </div>
  </motion.div>
);

const FormInput = ({ label, placeholder, type = "text" }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium outline-none focus:border-accent transition-all"
    />
  </div>
);

export default ContactSection;
