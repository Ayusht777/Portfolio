"use client";

import * as React from "react";
import { useState } from "react";
import { PiList, PiX } from "react-icons/pi";
import Link from "next/link";
import { Logo } from "./Logo";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex justify-center  py-6 px-4">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl shadow-lg dark:shadow-gray-800/20  w-full max-w-lg relative z-50 border border-gray-200 dark:border-gray-700">
          {/* Logo (left) */}
          <div className="flex items-center">
            <div className=" mr-6">
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
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center relative z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <PiX className="h-6 w-6 text-gray-900 dark:text-gray-100" />
              ) : (
                <PiList className="h-6 w-6 text-gray-900 dark:text-gray-100" />
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
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };
