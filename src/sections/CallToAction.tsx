"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] dark:from-gray-900 dark:to-gray-950 py-24 overflow-x-clip transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="section-heading relative text-center">
          <h2 className="section-title text-gray-900 dark:text-white">
            Sign up for free today
          </h2>
          <p className="section-description mt-5 text-gray-600 dark:text-gray-300">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>

        <div className="flex gap-4 mt-10 justify-center">
          <button className="btn bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white hover:brightness-110 dark:from-purple-500 dark:via-pink-500 dark:to-red-500 dark:text-white shadow-lg transition-all duration-300">
            Get for free
          </button>
          <button className="btn-text gap-1 text-gray-900 dark:text-white border border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300 flex items-center justify-center px-6 py-3 rounded-lg">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
