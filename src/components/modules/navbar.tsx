"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ModeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Dashboard", href: "/dashboard/add-product" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-white/70 transition-colors duration-300">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={180} height={60} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium text-gray-800 dark:text-gray-200">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-[#633daf] font-bold"
                      : "hover:text-[#633daf] dark:hover:text-[#633daf]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <ModeToggle />
          <Link
            href="/api/auth/login"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-[#633daf] focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          <ul className="space-y-4 font-medium text-gray-800 dark:text-gray-200">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // close on click
                    className={`block transition-colors duration-300 ${
                      isActive
                        ? "text-[#633daf] font-bold"
                        : "hover:text-[#633daf] dark:hover:text-[#633daf]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col space-y-3">
            <Link
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[#633daf] hover:bg-[#bc66ec] text-white rounded-3xl font-semibold transition text-center"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[#633daf] hover:bg-[#bc66ec] text-white rounded-3xl font-semibold transition text-center"
            >
              Register
            </Link>
            <div className="flex justify-center">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
