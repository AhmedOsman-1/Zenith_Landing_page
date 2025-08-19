import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        {/* Logo */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/customers">Customers</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/help">Help</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <SocialX />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <SocialInsta />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <SocialLinkedIn />
          </Link>
          <Link href="https://pinterest.com" target="_blank" aria-label="Pinterest">
            <SocialPin />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <SocialYoutube />
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
