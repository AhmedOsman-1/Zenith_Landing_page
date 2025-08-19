import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <form className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg flex flex-col gap-6 opacity-0 animate-fadeIn">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          rows={6}
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button className="btn mt-2">Send Message</button>
      </form>

      {/* Contact Info */}
      <div className="flex flex-col gap-8 justify-center opacity-0 animate-fadeIn delay-200">
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-3xl text-indigo-500" />
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Chittagong, Mirsarai, Bangladesh
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FaPhone className="text-3xl text-green-500" />
          <p className="text-gray-700 dark:text-gray-300 text-lg">+123 456 7890</p>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-3xl text-pink-500" />
          <p className="text-gray-700 dark:text-gray-300 text-lg">osmangonidevx@gmail.com</p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          We’re here to help you 24/7. Fill out the form, and our team will get back to you quickly.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
