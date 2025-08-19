'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    id: 1,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: ["Up to 5 project members", "Unlimited tasks and projects", "2GB storage", "Integrations", "Basic support"],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: ["Up to 50 project members", "Unlimited tasks and projects", "50GB storage", "Integrations", "Priority support", "Advanced support", "Export support"],
  },
  {
    id: 3,
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    subtitle: "Best for growing teams",
    features: ["Up to 5 project members", "Unlimited tasks and projects", "200GB storage", "Integrations", "Dedicated account manager", "Custom fields", "Advanced analytics", "Export capabilities", "API access", "Advanced security features"],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <header className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Pricing
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-10 items-center lg:flex-row lg:justify-center lg:gap-8">
          {pricingTiers.map(({ id, title, monthlyPrice, buttonText, popular, inverse, subtitle, features }) => {
            const isPro = inverse === true;
            const isFree = title === "Free";
            const isBusiness = title === "Business";

            // Card styling
            const cardClasses = twMerge(
              "relative max-w-xs w-full rounded-3xl p-10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg",
              isFree
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                : isPro
                ? "bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-700"
                : "bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 text-white shadow-lg border border-gray-600"
            );

            // Button styling
            const buttonClasses = twMerge(
              "mt-8 block w-full rounded-full py-3 font-semibold text-center text-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 shadow-md",
              isPro
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:brightness-110 focus:ring-purple-400 focus:ring-offset-gray-900"
                : isBusiness
                ? "bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white hover:brightness-110 focus:ring-indigo-500 focus:ring-offset-gray-900"
                : "bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800"
            );

            return (
              <article key={id} className={cardClasses}>
                {isPro && (
                  <div
                    className="absolute top-0 left-6 right-6 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #f43f5e 100%)",
                      boxShadow: "0 3px 6px rgba(236, 72, 153, 0.7), 0 0 10px rgba(244, 63, 94, 0.5)",
                    }}
                  />
                )}

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{title}</h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text font-medium"
                        style={{ backgroundSize: "200% 100%", backgroundPosition: "0% 100%" }}
                        animate={{ backgroundPosition: ["0% -50%", "-100% -20%"] }}
                        transition={{ repeat: Infinity, repeatType: "loop", duration: 3, ease: "linear" }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                {subtitle && (
                  <p className={twMerge(
                    "mt-2 text-sm italic",
                    isFree ? "text-gray-700 dark:text-gray-300" : "text-gray-200 dark:text-gray-300"
                  )}>
                    {subtitle}
                  </p>
                )}

                <div className="flex items-baseline gap-1 mt-8">
                  <span className={twMerge(
                    "text-4xl font-extrabold tracking-tight leading-none",
                    isFree ? "text-gray-900 dark:text-white" : "text-white"
                  )}>
                    ${monthlyPrice}
                  </span>
                  <span className={twMerge(
                    "tracking-tight font-semibold",
                    isFree ? "text-gray-600 dark:text-gray-400" : "text-white/70"
                  )}>
                    /month
                  </span>
                </div>

                <Link href="/contact" className={buttonClasses}>
                  {buttonText}
                </Link>

                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li key={feature} className={twMerge(
                      "text-sm flex items-center gap-4",
                      isFree ? "text-gray-900 dark:text-white" : "text-white"
                    )}>
                      <FaCheck className="flex-shrink-0 text-green-500 dark:text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Pricing