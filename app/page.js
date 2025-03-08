"use client";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen bg-gray-100 text-gray-900 flex flex-col justify-center items-center text-center">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I am Hassane Jaber, a passionate developer.
        </motion.p>
        <motion.a 
          href="/projects"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
        >
          View My Projects
        </motion.a>
      </main>
    </>
  );
}


