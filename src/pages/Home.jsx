// File: src/pages/Home.jsx (Framer-style redesign)

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32 flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
      >
        Revenue. Engineered.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
      >
        We design, operationalize, and accelerate revenue engines for SaaS teams. Smart systems. Precision growth. Full-funnel impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="/services"
          className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg hover:scale-105 transition"
        >
          Explore Services
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full font-medium border border-gray-500 text-gray-300 hover:bg-gray-900 transition"
        >
          Book a Call
        </a>
      </motion.div>

      {/* Section 2: Coming soon */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Trusted by Top SaaS Teams</h2>
        <p className="text-gray-400 mt-2">Logos and testimonials coming soon</p>
      </div>
    </section>
  );
}
