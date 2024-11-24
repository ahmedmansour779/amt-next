"use client";

import { useEffect, useState } from 'react';
import '../../styles/globals.css'; // Tailwind's styles

export default function ChangeTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference on initial load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
