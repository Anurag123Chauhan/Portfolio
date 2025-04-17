import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import resumePdf from "../assets/resume.pdf"; 

export default function Header() {
  const [theme, setTheme] = useState("system");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 flex items-center backdrop-blur-md bg-white/10 dark:bg-black/10">
      {/* <div className="flex items-center flex-shrink-0">
        <span className="text-lg font-bold text-gray-800 dark:text-white">
          Anurag Chauhan
        </span>
      </div> */}

      <nav className="flex-grow flex justify-center items-center space-x-6">
        <Link
          to="/#home"
          className="text-m font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          to="/#about"
          className="text-m font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          to="/#Skills"
          className="text-m font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Skills
        </Link>
        <Link
          to="/#Projects"
          className="text-m font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/#Achievements"
          className="text-m font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Achievements
        </Link>
        <Link
          to="/#Contact"
          className="text-m font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800 relative">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-gray-600 dark:text-gray-300"
        >
          {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🌓"}
        </button>
        {dropdownOpen && (
          <div className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-2">
            <div
              className="py-1 px-2 flex items-center cursor-pointer"
              onClick={() => handleThemeChange("light")}
            >
              ☀️ Light
            </div>
            <div
              className="py-1 px-2 flex items-center cursor-pointer"
              onClick={() => handleThemeChange("dark")}
            >
              🌙 Dark
            </div>
            <div
              className="py-1 px-2 flex items-center cursor-pointer"
              onClick={() => handleThemeChange("system")}
            >
              🌓 System
            </div>
          </div>
        )}
      </div>
      {/* <div className="flex items-center ml-4">
        <a
          href={resumePdf}
          className="px-4 py-2 font-medium rounded-lg shadow-md transition-colors bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-700 dark:hover:bg-teal-600"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Resume PDF"
        >
          Resume
        </a>
      </div> */}
    </header>
  );
}