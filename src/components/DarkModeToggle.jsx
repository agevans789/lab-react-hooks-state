import React from 'react';
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </div>
  )
};

export default DarkModeToggle
