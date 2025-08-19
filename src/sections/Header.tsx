"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import UpperHead from "./UpperHead";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const navLinks = ["home", "about", "features", "pricing", "customers", "contact", "help"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  const isActive = (link: string) => {
    if (link === "home" && pathname === "/") return true;
    return pathname.startsWith(`/${link}`) && link !== "home";
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {pathname === "/" && <UpperHead />}

      <div className="py-5">
        <div className="container mx-auto flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} alt="Zenith Logo" height={40} width={40} className="flex-shrink-0" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            <nav className="flex gap-6 items-center text-black/70 dark:text-white/90">
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
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/contact" className="btn min-w-[8rem] px-6 py-2 ml-6 text-sm">
                Get for free
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <MoonIcon className="h-5 w-5 text-gray-800" />
                ) : (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon + Theme */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <MenuIcon className="h-5 w-5 dark:text-white" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MoonIcon className="h-5 w-5 text-gray-800" />
              ) : (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              )}
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

            <Link
              href="/contact"
              className="btn w-full text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get for free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
