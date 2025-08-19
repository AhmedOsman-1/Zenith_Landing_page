'use client';
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center mb-6 opacity-0 animate-fadeIn">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto opacity-0 animate-fadeIn delay-200">
          Have questions? We&#39;d love to hear from you. Reach out to our team and we&#39;ll respond as soon as possible.
        </p>

        <ContactForm />
      </div>
    </section>
  );
};
