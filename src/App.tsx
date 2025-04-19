import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { smoothScroll } from './utils/smoothScroll';

const App: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;