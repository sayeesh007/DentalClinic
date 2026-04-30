"use client";

import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingWizard from "@/components/BookingWizard";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocalSEO from "@/components/LocalSEO";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <LocalSEO />
      <Navbar />
      <WhatsAppButton />
      <Hero />
      
      <motion.section 
        id="services" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 md:py-32 bg-slate-950 overflow-hidden relative"
      >
        {/* Background glow for services */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4"
            >
              Precision Treatments
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black text-white mb-6 italic"
            >
              Our Premium Services
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-base md:text-lg"
            >
              Combining clinical excellence with the &quot;Antigravity&quot; experience. 
              Each procedure is tailored to your unique anatomy.
            </motion.p>
          </div>
          <ServicesGrid />
        </div>
      </motion.section>
      
      <motion.section 
        id="results" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 md:py-32 bg-slate-900 overflow-hidden relative"
      >
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4"
              >
                Clinical Artistry
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight"
              >
                Witness the <span className="text-accent italic">Antigravity</span> Transformation.
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-base md:text-lg text-white/70 mb-10 max-w-xl"
              >
                <p>
                  Our advanced digital mapping and precision tools allow us to achieve 
                  results that were previously impossible. We use AI-driven smile analysis 
                  to predict and visualize your final result before we even begin.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl md:text-3xl font-black text-accent mb-1">98%</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/40 font-bold">Success Rate</div>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-black text-accent mb-1">15k+</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/40 font-bold">Happy Patients</div>
                </motion.div>
              </div>

              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10 text-white font-semibold"
              >
                {["Digital Smile Design (DSD)", "Minimal Invasive Micro-Prep", "Natural Aesthetic Bio-Finish"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modern Booking Wizard Section */}
      <motion.section 
        id="book" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-slate-950 group overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8">Ready to elevate your smile?</h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Book your consultation today and experience the future of dental care.
          </p>
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <BookingWizard />
          </div>
        </div>
      </motion.section>

      <ContactSection />

      {/* Modern Footer */}
      <footer className="py-20 bg-slate-950 text-white border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-black tracking-tighter mb-6 block">PARAM<span className="text-accent">CLINIC</span></span>
              <p className="text-white/40 max-w-sm text-base md:text-lg mb-8">
                Setting the standard for premium dental care through innovation and artistry. 
                Your journey to a perfect smile starts here.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs font-bold text-white/50">IN</div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs font-bold text-white/50">TW</div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs font-bold text-white/50">IG</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Quick Links</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li className="hover:text-white transition-colors cursor-pointer text-base">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer text-base">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer text-base">Patient Portal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Location</h4>
              <p className="text-white/60 mb-4 text-base leading-relaxed">
                123 Innovation St, Suite 456<br />
                Bengaluru, KA 560001
              </p>
              <p className="text-accent font-bold text-base">+91 999 888 8888</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-white/20 text-sm font-medium">
            © 2024 Param Clinic. All rights reserved. Created with Antigravity Precision.
          </div>
        </div>
      </footer>
    </main>
  );
}
