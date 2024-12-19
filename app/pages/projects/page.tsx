"use client"; // Add this line at the top

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Sun, Moon, Home, Music, Ship, Terminal, Cpu } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <motion.div
      className={`backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg cursor-pointer ${color} text-white`}
      whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (title === "Music App") {
          window.location.href = "https://github.com/christienetto/MusicGo";
        } else if (title === "Suomenlinna Traffic Predictor") {
          window.location.href = "https://github.com/christienetto/HSL-Suomenlinna-Traffic-Predictor";
        } else if (title === "mpvssh") {
          window.location.href = "https://github.com/christienetto/mpvssh";
        } else if (title === "Machine Learning") {
          window.location.href = "https://github.com/christienetto/machine-learning";
        }
      }}
    >
      <motion.div animate={controls}>
        <Icon className="w-12 h-12 mb-4" />
      </motion.div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default function ProjectsPage() {
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
        className={`text-4xl font-bold mb-12 z-10 ${
          darkMode ? "text-white" : "text-white"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        My Awesome Projects
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 max-w-6xl">
        <ProjectCard
          title="Music App"
          description="Developed an IOS app which is an easily deployable self-hosted music player app on Linux using Expo Go, Ngrok, and Golang!"
          icon={Music}
          color="bg-blue-500"
        />
        <ProjectCard
          title="Suomenlinna Traffic Predictor"
          description="Machine Learning-powered app predicting ferry traffic based on weather and historical data. UI generated with Poetry and Tkinter"
          icon={Ship}
          color="bg-yellow-500"
        />
        <ProjectCard
          title="mpvssh"
          description="A secure, SSH-based media player for remote control of MPV media player instances"
          icon={Terminal}
          color="bg-indigo-500"
        />
        <ProjectCard
          title="Machine Learning"
          description="A collection of various machine learning projects, including deep learning models, data preprocessing, and training"
          icon={Cpu}
          color="bg-teal-500"
        />
      </div>
    </div>
  );
}
