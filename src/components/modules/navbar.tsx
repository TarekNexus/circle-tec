"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ModeToggle } from "../ModeToggle";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname(); // get current route

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "dashboard", href: "/dashboard" },
   
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:backdrop-blur-sm dark:bg-black/70 border-b border-gray-200 dark:border-none transition-colors duration-300">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={160} height={40} />
        </Link>

        {/* Menu Links */}
        <ul className="hidden lg:flex space-x-8 font-medium text-gray-800 dark:text-gray-200">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#633daf]  font-bold" : "hover:text-[#633daf] dark:hover:text-[#633daf]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Buttons / Social Icons */}
        <div className="flex items-center space-x-4">
          <ModeToggle />

          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm sm:text-base bg-[#633daf] hover:bg-[#bc66ec]   text-white rounded-3xl font-semibold transition"
          > 
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-2 text-sm sm:text-base bg-[#633daf] hover:bg-[#bc66ec] text-white rounded-3xl font-semibold transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button className="text-gray-700 dark:text-gray-300 hover:text-[#113033] focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
