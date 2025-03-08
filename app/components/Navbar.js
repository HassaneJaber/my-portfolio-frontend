"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Hassane Jaber
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link href="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute w-full z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="block py-2 px-4 text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/about" className="block py-2 px-4 text-gray-800 hover:text-blue-600">About</Link>
          <Link href="/projects" className="block py-2 px-4 text-gray-800 hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="block py-2 px-4 text-gray-800 hover:text-blue-600">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
}
