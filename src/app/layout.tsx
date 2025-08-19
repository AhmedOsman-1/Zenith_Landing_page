import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenith – Modern SaaS Template",
  description: "A clean and professional SaaS landing page template.",
  authors: [{ name: "Osman", url: "https://osman.com" }],
  creator: "Osman",
  keywords: ["SaaS", "Landing Page", "Next.js", "Zenith", "Template"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={twMerge(
          dmSans.className,
          "antialiased bg-[#EAEEFE] dark:bg-gray-900 transition-colors duration-300"
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
