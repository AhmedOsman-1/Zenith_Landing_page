'use client'

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from '@/assets/tube.png';
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'], 
    });
    
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section 
            ref={sectionRef} 
            className="py-24 overflow-x-clip 
                bg-gradient-to-b from-white/70 via-gray-100 to-gray-200 
                dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="section-heading text-center">
                    <div className="flex justify-center">
                        <div className="tag text-gray-700 dark:text-gray-300">Boost your productivity</div>
                    </div>
                    <h2 className="section-title mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                        A more effective way to track progress
                    </h2>
                    <p className="section-description mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        Effortlessly turn your ideas into a fully functional, responsive SaaS website in just minutes with this template.
                    </p>
                </div>

                <div className="relative mt-10">
                    <Image
                        src={productImage}
                        alt="product image"
                        width={1000}
                        height={500}
                        className="mx-auto rounded-2xl shadow-xl"
                    />
                    
                    <motion.img
                        src={pyramidImage.src}
                        alt="pyramid image"
                        width={262}
                        height={262}
                        className="hidden md:block absolute -top-32 -right-36"
                        style={{ translateY }}
                    />
                    
                    <motion.img
                        src={tubeImage.src}
                        alt="tube image"
                        width={248}
                        height={248}
                        className="hidden md:block absolute bottom-24 -left-36"
                        style={{ translateY }}
                    />
                </div>
            </div>
        </section>
    );
};
export default ProductShowcase