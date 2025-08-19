"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import UpperHead from "./UpperHead";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const navLinks = ["home", "about", "features", "pricing", "customers", "contact", "help"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const isActive = (link: string) => {
    if (link === "home" && pathname === "/") return true;
    return pathname.startsWith(`/${link}`) && link !== "home";
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {/* Top info bar */}
      { pathname === "/" && <UpperHead />}

      {/* Main Navbar */}
      <div className="py-5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center text-black/60 dark:text-white/90">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={link === "home" ? "/" : `/${link}`}
                className="relative group transition-colors duration-200 hover:text-black dark:hover:text-white"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full
                    ${isActive(link) ? "w-full" : ""}`}
                ></span>
              </Link>
            ))}

            {/* CTA Button */}
            <button className="btn px-6 py-2">
              Get for free
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <MenuIcon className="h-5 w-5 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md transition-all">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={link === "home" ? "/" : `/${link}`}
                className={`py-2 text-black dark:text-white hover:text-purple-500 ${
                  isActive(link) ? "font-semibold text-purple-600" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}

            <button className="btn w-full text-center mt-2" onClick={() => setMobileOpen(false)}>
              Get for free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
