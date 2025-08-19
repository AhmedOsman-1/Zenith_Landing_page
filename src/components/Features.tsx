'use client';

import { motion, useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy-load icons
const FaBolt = dynamic(() => import('react-icons/fa').then(mod => mod.FaBolt), { ssr: false });
const FaShieldAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaShieldAlt), { ssr: false });
const FaMobileAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMobileAlt), { ssr: false });
const FaSyncAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaSyncAlt), { ssr: false });

const features = [
  { icon: FaBolt, title: 'Fast Performance', description: 'Lightning-fast, smooth experience for high productivity.', color: 'text-yellow-400' },
  { icon: FaShieldAlt, title: 'Secure & Reliable', description: 'Security and reliability are top priorities.', color: 'text-blue-500' },
  { icon: FaMobileAlt, title: 'Mobile Friendly', description: 'Optimized for mobile devices, anytime, anywhere.', color: 'text-green-400' },
  { icon: FaSyncAlt, title: 'Seamless Sync', description: 'Keep your data synchronized across devices effortlessly.', color: 'text-pink-500' },
];

const Features = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        {/* Heading */}
        <motion.h2
          fetchpriority="high"
          initial={reduceMotion ? {} : { opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Features
        </motion.h2>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto"
        >
          Explore the powerful features that make our SaaS solution the perfect tool for productivity, collaboration, and efficiency.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:shadow-xl"
              >
                <div className={`text-6xl md:text-7xl ${feature.color} flex-shrink-0`}>
                  <Icon />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
