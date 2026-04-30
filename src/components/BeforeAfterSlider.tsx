"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeImage = "/images/before.png",
  afterImage = "/images/after.png",
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCursorMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e 
      ? e.touches[0].clientX - rect.left 
      : (e as MouseEvent).clientX - rect.left;
    
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const onMouseDown = () => setIsResizing(true);
  const onMouseUp = () => setIsResizing(false);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleCursorMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", handleCursorMove);
      window.addEventListener("touchend", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", handleCursorMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isResizing]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl group border-4 border-white/10"
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl glass text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (ClipPath) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl glass text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line/Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-xl cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-white flex items-center justify-center shadow-2xl text-white">
          <MoveHorizontal className="w-6 h-6" />
        </div>
      </div>

      {/* Trust Badge overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 px-6 py-2 rounded-full glass border-white/20 text-white font-semibold text-sm pointer-events-none">
        DRAG TO SEE THE DIFFERENCE
      </div>
    </motion.div>
  );
};

export default BeforeAfterSlider;
