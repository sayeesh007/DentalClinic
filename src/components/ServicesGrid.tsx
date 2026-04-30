"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Smile, 
  Sparkles, 
  ShieldCheck, 
  Microscope, 
  Zap, 
  Stethoscope 
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and premium aesthetics.",
    icon: Sparkles,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Teeth Whitening",
    description: "Professional laser whitening for a radiant, long-lasting glow.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    title: "Orthodontics",
    description: "Invisible aligners and precision bracing for perfect alignment.",
    icon: Smile,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Oral Surgery",
    description: "Painless extractions and advanced surgical procedures.",
    icon: Stethoscope,
    color: "bg-red-500/10 text-red-600",
  },
  {
    title: "Dental Implants",
    description: "High-precision implants that feel and look completely natural.",
    icon: ShieldCheck,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Digital Diagnostics",
    description: "AI-powered scanning and 3D imaging for perfect accuracy.",
    icon: Microscope,
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const TiltCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-full p-8 rounded-3xl glass-dark border-white/5 bg-slate-900/40 backdrop-blur-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/5 shadow-2xl"
      >
        <div className={cn("inline-flex p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-500", service.color)}>
          <service.icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-white/60 leading-relaxed text-lg">
          {service.description}
        </p>
        
        <div className="absolute top-4 right-4 text-white/10 group-hover:text-primary/20 transition-colors">
          <service.icon className="w-16 h-16" />
        </div>
      </div>
      
      {/* Glare effect */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <TiltCard key={index} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServicesGrid;
