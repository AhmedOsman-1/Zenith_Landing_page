"use client";

import { FaBolt, FaShieldAlt, FaMobileAlt, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    description: "Our app is lightning-fast, ensuring smooth experience and high productivity.",
    color: "text-yellow-400",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    description: "We prioritize security and reliability to protect your data at all times.",
    color: "text-blue-500",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    description: "Fully responsive and optimized for mobile devices, anytime, anywhere.",
    color: "text-green-400",
  },
  {
    icon: <FaSyncAlt />,
    title: "Seamless Sync",
    description: "Keep all your data synchronized across devices without any hassle.",
    color: "text-pink-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto"
        >
          Explore the powerful features that make our SaaS solution the perfect tool for productivity, collaboration, and efficiency.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-6 cursor-pointer"
            >
              <div className={`text-6xl md:text-7xl ${feature.color} flex-shrink-0`}>
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
