"use client";

import LogoTicker from "@/sections/LogoTicker";
import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton";

// Immediate render
const Hero = dynamic(() => import("@/sections/Hero"), { ssr: true });

const ProductShowcase = dynamic(() => import("@/sections/ProductShowcase"), {
  ssr: false,
  loading: () => <Skeleton className="h-64 py-10 container mx-auto" />,
});

const Pricing = dynamic(() => import("@/sections/Pricing"), {
  ssr: false,
  loading: () => <Skeleton className="h-96 py-10 container mx-auto" />,
});

const Testimonials = dynamic(() => import("@/sections/Testimonials"), {
  ssr: false,
  loading: () => <Skeleton className="h-80 py-10 container mx-auto" />,
});

const CallToAction = dynamic(() => import("@/sections/CallToAction"), {
  ssr: false,
  loading: () => <Skeleton className="h-48 py-10 container mx-auto" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
