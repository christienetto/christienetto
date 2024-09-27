"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Sun, Moon } from "lucide-react";

export default function HomePage() {
  const [isHoveringCV, setIsHoveringCV] = useState(false);
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", darkMode.toString());
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
      }`}
    >
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: darkMode
            ? [
                "linear-gradient(to right, #2d3748, #1a202c)",
                "linear-gradient(to right, #4a5568, #2d3748)",
                "linear-gradient(to right, #1a202c, #2d3748)",
              ]
            : [
                "linear-gradient(to right, #ff9a9e, #fad0c4)",
                "linear-gradient(to right, #a18cd1, #fbc2eb)",
                "linear-gradient(to right, #ffecd2, #fcb69f)",
              ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.header
        className={`text-4xl font-bold mb-8 z-10 ${
          darkMode ? "text-white" : "text-white"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Welcome to My Hub!
      </motion.header>

      <div className="flex flex-wrap justify-center gap-8 z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHoveringCV(true)}
          onHoverEnd={() => setIsHoveringCV(false)}
        >
          <Link href="/pages/cv">
            <div
              className={`backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg cursor-pointer ${
                darkMode
                  ? "bg-gray-800 bg-opacity-50"
                  : "bg-white bg-opacity-20"
              }`}
            >
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-white"
                }`}
              >
                CV
              </h2>
              <p className={darkMode ? "text-gray-300" : "text-white"}>
                Check out my experience and skills
              </p>
              {isHoveringCV && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4"
                >
                  <Sparkles className="text-yellow-300 w-6 h-6" />
                </motion.div>
              )}
            </div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHoveringProjects(true)}
          onHoverEnd={() => setIsHoveringProjects(false)}
        >
          <Link href="./projects">
            <div
              className={`backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg cursor-pointer ${
                darkMode
                  ? "bg-gray-800 bg-opacity-50"
                  : "bg-white bg-opacity-20"
              }`}
            >
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-white"
                }`}
              >
                Projects
              </h2>
              <p className={darkMode ? "text-gray-300" : "text-white"}>
                Explore my latest work
              </p>
              {isHoveringProjects && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-4"
                >
                  <Sparkles className="text-yellow-300 w-6 h-6" />
                </motion.div>
              )}
            </div>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 right-10 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className={`text-opacity-80 text-sm ${
            darkMode ? "text-gray-400" : "text-white"
          }`}
        >
          Hover over the cards for a surprise!
        </div>
      </motion.div>

      <motion.button
        className={`absolute top-4 right-4 p-2 rounded-full z-20 ${
          darkMode ? "bg-gray-700" : "bg-white bg-opacity-20"
        }`}
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? (
          <Sun className="text-yellow-300" />
        ) : (
          <Moon className="text-gray-800" />
        )}
      </motion.button>

      {mounted &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 rounded-full z-0 ${
              darkMode ? "bg-gray-600" : "bg-white"
            }`}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}
    </div>
  );
}
