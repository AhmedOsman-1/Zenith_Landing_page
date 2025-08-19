"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";


export const Contact = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center mb-6">
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-center text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
                    Have questions? We&#39;d love to hear from you. Reach out to
                    our team and we&#39;ll respond as soon as possible.
                </motion.p>
                    <ContactForm />
                
            </div>
        </section>
    );
};
