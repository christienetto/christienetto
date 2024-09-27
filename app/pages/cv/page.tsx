"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  Sun,
  Moon,
  Home,
} from "lucide-react";

export default function CVPage() {
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
      className={`min-h-screen flex flex-col items-center justify-start p-4 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-gray-900"
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

      <motion.button
        className={`fixed top-4 right-4 p-2 rounded-full z-20 ${
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

      <Link href="./">
        <motion.button
          className={`fixed top-4 left-4 p-2 rounded-full z-20 ${
            darkMode ? "bg-gray-700" : "bg-white bg-opacity-20"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Home className={darkMode ? "text-white" : "text-gray-800"} />
        </motion.button>
      </Link>

      <div className="container mx-auto px-4 py-16 z-10">
        <motion.header
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-4xl font-bold mb-4">Christie Netto</h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-100"
            }`}
          >
            Computer and Data Science Student | Aspiring Leader
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <div
              className={`rounded-lg shadow-lg p-6 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-800"
                } mb-4`}
              >
                I'm a passionate Computer and Data Science student at the
                University of Helsinki, eagerly seeking new opportunities. I
                thrive in leadership roles, taking on responsibilities and
                delivering excellent results as part of a team.
              </p>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-800"
                } mb-4`}
              >
                Beyond academics, I'm an avid bouldering enthusiast and swimmer.
                I've played the piano and guitar for 5 years and occasionally
                create YouTube music videos. I hold a driver's license and a
                hygienepass.
              </p>
              <button
                className={`px-4 py-2 rounded ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-pink-500 hover:bg-pink-600"
                } text-white transition-colors duration-300`}
              >
                Learn More About Me
                <ChevronRight className="inline-block ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <div
              className={`rounded-lg shadow-lg p-6 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">Skills Highlight</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "Data Analysis",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Data Science",
                  "Leadership",
                  "Event Organization",
                  "Public Speaking",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-2 py-1 rounded ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-pink-200 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                className={`px-4 py-2 rounded ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-pink-500 hover:bg-pink-600"
                } text-white transition-colors duration-300`}
              >
                View All Skills
                <ChevronRight className="inline-block ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <div
            className={`rounded-lg shadow-lg p-6 mb-16 ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">Featured Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-semibold">
                  Tenant Committee Chair
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  HOAS | Helsinki, Finland
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Senior Producer</h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  Kumpulan Speksi | Helsinki, Finland
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">
                  F2F Fundraising as a Travelling Salesman
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  Pelastakaa Lapset | Helsinki, Finland
                </p>
              </li>
            </ul>
            <button
              className={`px-4 py-2 rounded mt-4 ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-pink-500 hover:bg-pink-600"
              } text-white transition-colors duration-300`}
            >
              View Full Experience
              <ChevronRight className="inline-block ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.footer
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex justify-center space-x-4">
            {[
              {
                href: "mailto:christienetto@gmail.com",
                icon: Mail,
                label: "Email",
              },
              { href: "tel:+358442363773", icon: Phone, label: "Phone" },
              {
                href: "https://github.com/christienetto",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/christie-netto-a50765318",
                icon: Linkedin,
                label: "LinkedIn",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-pink-200 hover:bg-pink-300"
                } transition-colors duration-300`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                />
              </a>
            ))}
          </div>
        </motion.footer>
      </div>

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
