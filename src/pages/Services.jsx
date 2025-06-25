// File: src/pages/Services.jsx (Framer-style redesign)

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Revenue Architecture Design',
    description: 'Design your full-funnel revenue engine: messaging, motion, metrics, and more.',
    link: '/services/revenue-architecture',
  },
  {
    title: 'GTM Strategy & Execution',
    description: 'Nail your ICP, GTM motion, and sales plays to drive growth at every stage.',
    link: '/services/gtm-strategy',
  },
  {
    title: 'Sales Process Optimization',
    description: 'Refine discovery, qualification, forecasting, and closing processes.',
    link: '/services/sales-optimization',
  },
  {
    title: 'Customer Journey & Expansion',
    description: 'Drive adoption, retention, and expansion with a structured post-sale engine.',
    link: '/services/customer-expansion',
  },
  {
    title: 'RevOps & Tool Stack Setup',
    description: 'Set up CRM, dashboards, and automation for intelligent revenue operations.',
    link: '/services/revops-tools',
  },
  {
    title: 'Revenue Audit & Leakage Prevention',
    description: 'Spot revenue leaks and plug them with a forensic audit of your GTM and ops stack.',
    link: '/services/revenue-audit',
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Services
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We design and operationalize your revenue engine — from first touch to expansion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to={service.link}
              className="block p-6 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-purple-500 transition shadow-xl h-full"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}