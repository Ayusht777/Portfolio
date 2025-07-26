"use client";

import * as React from "react";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Logo } from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <div className="flex justify-center w-full py-6 px-4">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl shadow-lg dark:shadow-gray-800/20 w-full max-w-lg relative z-50 border border-gray-200 dark:border-gray-700">
          {/* Logo (left) */}
          <div className="flex items-center">
            <div className="w-8 h-8 mr-6">
              <Logo />
            </div>
          </div>

          {/* Desktop Navigation (center) */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Pricing", "Docs", "Projects"].map((item) => (
              <div key={item}>
                <Link
                  href="#"
                  className="text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium"
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side: Desktop actions & Mobile hamburger */}
          <div className="flex items-center space-x-3">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                ) : (
                  <Moon className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                )}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center relative z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40  pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {["Home", "Pricing", "Docs", "Projects"].map((item) => (
              <div key={item}>
                <Link
                  href="#"
                  className="text-base text-gray-900 dark:text-gray-100 font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </div>
            ))}
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between py-3 border-t border-gray-200 dark:border-gray-700">
              <span className="text-base text-gray-900 dark:text-gray-100 font-medium">
                Theme
              </span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };