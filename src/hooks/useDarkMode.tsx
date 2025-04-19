import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if there's a theme preference stored in localStorage
    const savedTheme = window.localStorage.getItem('theme');
    
    // Check if the user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return true if the saved theme is 'dark' or if there's no saved theme but the user prefers dark
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    // Update the localStorage and document class when the theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
};