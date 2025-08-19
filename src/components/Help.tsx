'use client';

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";

// Lazy load icons for better performance
const FaQuestionCircle = dynamic(() => import("react-icons/fa").then(mod => mod.FaQuestionCircle), { ssr: false });
const FaChevronDown = dynamic(() => import("react-icons/fa").then(mod => mod.FaChevronDown), { ssr: false });

export const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const faqs = [
    { question: "How do I create an account?", answer: "Click the 'Get for Free' button on the top-right, fill in your details, and start using our SaaS platform instantly." },
    { question: "Can I change my subscription plan?", answer: "Yes! You can upgrade or downgrade your subscription anytime from your account settings." },
    { question: "Is there a free trial?", answer: "Absolutely! You can explore all features free for 14 days with no credit card required." },
    { question: "How do I contact support?", answer: "Use the form below, or reach out via email or phone. We respond within 24 hours." },
  ];

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="section-title text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Help & Support
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Find answers to your questions or reach out to our support team. We’re here to help you succeed.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              layout
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-900 dark:text-white font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-indigo-500 text-xl" />
                  {faq.question}
                </div>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3 }}
                    className="px-6 pb-4 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};
