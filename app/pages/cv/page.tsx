"use client"; // This ensures that the page is only rendered on the client side.

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

export default function CVPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
            <Card
              className={
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
              }
            >
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Im a passionate Computer and Data Science student at the
                  University of Helsinki, eagerly seeking new opportunities. I
                  thrive in leadership roles, taking on responsibilities and
                  delivering excellent results as part of a team.
                </p>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  } mb-4`}
                >
                  Beyond academics, Im an avid bouldering enthusiast and
                  swimmer. Ive played the piano and guitar for 5 years and
                  occasionally create YouTube music videos. I hold a drivers
                  license and a hygienepass.
                </p>
                <Link href="/about" passHref>
                  <Button variant={darkMode ? "outline" : "secondary"}>
                    Learn More About Me
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <Card
              className={
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
              }
            >
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Skills Highlight
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Python
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Data Analysis
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Machine Learning
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Artificial Intelligence
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Data Science
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Leadership
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Event Organization
                  </Badge>
                  <Badge variant={darkMode ? "outline" : "secondary"}>
                    Public Speaking
                  </Badge>
                </div>
                <Link href="/skills" passHref>
                  <Button variant={darkMode ? "outline" : "secondary"}>
                    View All Skills
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Card
            className={`mb-16 ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
            }`}
          >
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Featured Experience
              </h2>
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
              <Link href="/experience" passHref>
                <Button
                  variant={darkMode ? "outline" : "secondary"}
                  className="mt-4"
                >
                  View Full Experience
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.footer
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex justify-center space-x-4">
            <Button
              variant={darkMode ? "outline" : "secondary"}
              size="icon"
              asChild
            >
              <a href="mailto:christienetto@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant={darkMode ? "outline" : "secondary"}
              size="icon"
              asChild
            >
              <a href="tel:+358442363773" aria-label="Phone">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant={darkMode ? "outline" : "secondary"}
              size="icon"
              asChild
            >
              <a
                href="https://github.com/christienetto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant={darkMode ? "outline" : "secondary"}
              size="icon"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/christie-netto-a50765318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.footer>
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 rounded-full z-0 ${
            darkMode ? "bg-gray-600" : "bg-white"
          }`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
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
