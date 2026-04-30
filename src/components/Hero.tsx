"use client"

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-20 overflow-hidden py-20 lg:py-0" style={{ perspective: "1000px" }}>
      <WebGLShader />

      {/* 3D Tooth Image Background - Positioned to the Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -20, 0]
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 1.5 },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute z-[5] lg:relative lg:order-2 w-full max-w-[400px] md:max-w-[550px] aspect-square pointer-events-none mix-blend-screen"
      >
        <Image
          src="/images/tooth-v2.png"
          alt="3D Tooth"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Glassmorphic Card - Positioned to the Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 border border-[#27272a] p-2 w-full max-w-2xl backdrop-blur-sm bg-black/10 rounded-xl lg:order-1"
      >
        <main className="relative border border-[#27272a] py-12 md:py-16 overflow-hidden rounded-lg bg-black/40">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-3 text-white text-center text-5xl md:text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)] px-4"
          >
            Param Dental Care
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/60 px-6 text-center text-sm md:text-lg max-w-2xl mx-auto"
          >
            Achieve a healthier, brighter smile at Param Dental Clinic. Trusted family dentistry in Bangaluru offering flexible hours and comprehensive care. Call us!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="my-8 flex items-center justify-center gap-2"
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500 font-medium tracking-wide uppercase">Available for New Patients</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center"
          >
            <LiquidButton
              className="text-white border rounded-full hover:scale-105 transition-transform"
              size={'xl'}
              onClick={() => {
                document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Session
            </LiquidButton>
          </motion.div>
        </main>
      </motion.div>
    </div>
  )
}
