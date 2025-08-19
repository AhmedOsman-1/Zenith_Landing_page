// 'use client';

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { twMerge } from "tailwind-merge";

// interface NavLinkProps {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }

// export const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       className={twMerge(
//         "px-4 py-2 rounded-md font-medium transition-colors duration-200",
//         isActive
//           ? "text-white bg-blue-600"
//           : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
//         className
//       )}
//     >
//       {children}
//     </Link>
//   );
// };
