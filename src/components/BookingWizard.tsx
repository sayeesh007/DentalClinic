"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2,
  Briefcase,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { submitBooking } from "@/app/actions/booking";

const services = [
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "General Checkup",
  "Emergency Care"
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", 
  "02:00 PM", "03:00 PM", "04:00 PM"
];

const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: ""
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    nextStep();
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitBooking(formData);
      if (result.success) {
        nextStep();
      } else {
        alert(result.error);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border-white/20 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12 px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500",
              step >= i ? "bg-accent text-white shadow-lg shadow-accent/40" : "bg-white/10 text-white/30"
            )}>
              {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
            </div>
            {i < 4 && (
              <div className={cn(
                "h-1 flex-1 mx-4 rounded-full transition-all duration-500",
                step > i ? "bg-accent" : "bg-white/10"
              )} />
            )}
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...variants} className="space-y-8">
              <div className="text-left">
                <h3 className="text-3xl font-black text-white mb-2 italic">Choose Your Service</h3>
                <p className="text-white/50">Select the treatment you are interested in.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                    className={cn(
                      "group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left",
                      formData.service === service 
                        ? "bg-accent border-accent text-white shadow-xl shadow-accent/20" 
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="font-bold">{service}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" {...variants} className="space-y-8">
              <div className="text-left">
                <h3 className="text-3xl font-black text-white mb-2 italic">Select Date & Time</h3>
                <p className="text-white/50">When would you like to visit Param Clinic?</p>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Pickup Date</label>
                    <input 
                      type="date" 
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-accent transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Available Slots</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map(t => (
                        <button
                          key={t}
                          onClick={() => setFormData({...formData, time: t})}
                          className={cn(
                            "py-3 rounded-xl border text-sm font-bold transition-all",
                            formData.time === t ? "bg-accent border-accent text-white" : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button 
                    disabled={!formData.date || !formData.time}
                    onClick={nextStep} 
                    className="px-8 py-4 rounded-2xl bg-accent text-white font-bold flex items-center gap-2 hover:bg-accent/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" {...variants} className="space-y-8">
              <div className="text-left">
                <h3 className="text-3xl font-black text-white mb-2 italic">Your Details</h3>
                <p className="text-white/50">Personalize your high-end dental experience.</p>
              </div>
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-accent transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-accent transition-all"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <input 
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-accent transition-all"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-2xl bg-accent text-white font-bold flex items-center gap-2 hover:bg-accent/80 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Confirm Booking <ChevronRight className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" {...variants} className="flex flex-col items-center justify-center text-center space-y-6 flex-1">
              <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center text-green-500 mb-4 scale-animation pointer-events-none">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-black text-white italic">Booking Complete!</h3>
              <div className="bg-white/5 rounded-3xl p-6 w-full max-w-md border border-white/10 space-y-3">
                <div className="flex justify-between text-white/50"><span>Service:</span> <span className="text-white font-bold">{formData.service}</span></div>
                <div className="flex justify-between text-white/50"><span>Date:</span> <span className="text-white font-bold">{formData.date}</span></div>
                <div className="flex justify-between text-white/50"><span>Time:</span> <span className="text-white font-bold">{formData.time}</span></div>
                <div className="pt-4 border-t border-white/10 text-accent font-bold">
                  Confirmation sent to {formData.email}
                </div>
              </div>
              <p className="text-white/40 max-w-sm">
                Our team will reach out to you via WhatsApp shortly to finalize your &quot;Antigravity&quot; session.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="mt-8 px-10 py-4 rounded-2xl bg-primary text-white font-black uppercase tracking-tighter hover:bg-primary/80 transition-all"
              >
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingWizard;
