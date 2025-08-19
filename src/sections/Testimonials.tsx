"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

const testimonials: Testimonial[] = [
  { text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.", imageSrc: avatar1.src, name: "Jamie Rivera", username: "@jamietechguru00" },
  { text: "Our team's productivity has skyrocketed since we started using this tool.", imageSrc: avatar2.src, name: "Josh Smith", username: "@jjsmith" },
  { text: "This app has completely transformed how I manage my projects and deadlines.", imageSrc: avatar3.src, name: "Morgan Lee", username: "@morganleewhiz" },
  { text: "I was amazed at how quickly we were able to integrate this app into our workflow.", imageSrc: avatar4.src, name: "Casey Jordan", username: "@caseyj" },
  { text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.", imageSrc: avatar5.src, name: "Taylor Kim", username: "@taylorkimm" },
  { text: "The customizability and integration capabilities of this app are top-notch.", imageSrc: avatar6.src, name: "Riley Smith", username: "@rileysmith1" },
  { text: "Adopting this app for our team has streamlined our project management and improved communication across the board.", imageSrc: avatar7.src, name: "Jordan Patels", username: "@jpatelsdesign" },
  { text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.", imageSrc: avatar8.src, name: "Sam Dawson", username: "@dawsontechtips" },
  { text: "Its user-friendly interface and robust features support our diverse needs.", imageSrc: avatar9.src, name: "Casey Harper", username: "@casey09" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({ className, testimonials, duration = 10 }) => (
  <div className={className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...testimonials, ...testimonials].map(({ text, imageSrc, name, username }, index) => (
        <div
          key={`${username}-${index}`}
          className="card p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors"
        >
          <p className="text-gray-800 dark:text-gray-200">{text}</p>
          <div className="flex items-center gap-2 mt-5">
            <Image src={imageSrc} alt={name} width={40} height={40} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-medium tracking-tight leading-5 text-gray-900 dark:text-white">{name}</span>
              <span className="leading-5 tracking-tight text-gray-600 dark:text-gray-300">{username}</span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export const Testimonials: React.FC = () => (
  <section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-24">
    <div className="container mx-auto px-6">
      <div className="flex justify-center">
        <div className="tag mt-5 text-gray-700 dark:text-gray-300">Testimonials</div>
      </div>
      <h2 className="section-title mt-5 text-gray-900 dark:text-white">What Our Users Say</h2>
      <p className="section-description mt-5 text-gray-600 dark:text-gray-300">
        From intuitive design to powerful features, our app has become an essential tool for users around the world.
      </p>

      <div className="flex justify-center gap-6 mt-10 max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        <TestimonialsColumn testimonials={firstColumn} duration={25} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex" duration={17} />
      </div>
    </div>
  </section>
);
