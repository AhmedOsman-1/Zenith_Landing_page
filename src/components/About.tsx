'use client';
import { Metadata } from 'next';
import { FaLightbulb, FaRocket, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About Us - Modern SaaS',
  description: 'Learn more about our SaaS platform and team.',
};

export default function About() {
  const reduceMotion = useReducedMotion();

  const cards = [
    { icon: FaLightbulb, title: 'Our Vision', description: 'To build SaaS products that simplify complex tasks, improve collaboration, and enhance productivity.', color: 'text-indigo-500' },
    { icon: FaRocket, title: 'Our Mission', description: 'Deliver intuitive, reliable, and scalable solutions that help teams achieve their goals efficiently.', color: 'text-green-500' },
    { icon: FaUsers, title: 'Our Team', description: 'A group of talented engineers, designers, and marketers dedicated to creating amazing software.', color: 'text-yellow-500' },
    { icon: FaHandsHelping, title: 'Our Values', description: 'Innovation, transparency, collaboration, and customer success are at the core of everything we do.', color: 'text-pink-500' },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        {/* Section Heading */}
        <motion.h1
          initial={reduceMotion ? {} : { opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto"
        >
          We are a team of passionate developers and designers creating cutting-edge SaaS solutions to help businesses streamline workflow and maximize productivity. Our mission is to provide intuitive tools that empower teams to achieve more.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={reduceMotion ? {} : { scale: 1.03, y: -3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 cursor-pointer transform-gpu transition-all duration-300"
              >
                <div className={`text-6xl md:text-7xl ${card.color} flex-shrink-0`}>
                  <Icon />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{card.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call-to-action */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20"
        >
          <a href="/pricing" className="btn-primary text-lg px-8 py-4 inline-block">
            Explore Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
