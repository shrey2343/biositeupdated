import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Star } from "lucide-react";
import { useFormModal } from "@/contexts/FormModalContext";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { openFormModal } = useFormModal();

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDownload = () => {
    setIsOpen(false);
    openFormModal(true); // true = trigger PDF download after form submission
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-cta"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Left Content */}
                <div className="p-8 md:p-10 text-white">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
                  >
                    Get Your Free Interview Bible
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg mb-2"
                  >
                    Download the <span className="text-cta font-bold">Bioinformatics Interview Bible</span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-white/80 mb-6"
                  >
                    Get 20 real interview questions with model answers — written in simple English every biology student can understand.
                  </motion.p>

                  <motion.ul
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 mb-6"
                  >
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-cta mt-0.5">✓</span>
                      <span>20 questions · 20 answers · zero blanks</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-cta mt-0.5">✓</span>
                      <span>Section A — NGS Basics (Items 1–5)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-cta mt-0.5">✓</span>
                      <span>Section B — Tools & Quality Control (Items 6–9)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-cta mt-0.5">✓</span>
                      <span>Section C — Alignment & Variants (Items 10–14)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-cta mt-0.5">✓</span>
                      <span>Section D — RNA-Seq, AI & Clinical (Items 15–20)</span>
                    </li>
                  </motion.ul>

                  <motion.button
                    onClick={handleDownload}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-base font-semibold text-cta-foreground shadow-lg hover:opacity-90 transition-opacity"
                  >
                    <Download className="h-5 w-5" />
                    Download Free Now
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 flex items-center gap-2"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                      ))}
                    </div>
                    <span className="text-sm text-white/80">
                      Trusted by 500+ biology students worldwide
                    </span>
                  </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative hidden md:block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-cyan/20" />
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=800&fit=crop"
                    alt="Bioinformatics Research"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 bg-cta/10 rounded-full p-3">
                        <Download className="h-6 w-6 text-cta" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">15 Pages · Print-Ready</p>
                        <p className="text-xs text-muted-foreground">Instant PDF Download</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
