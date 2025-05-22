import React from 'react';

interface ToggleModeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ToggleMode: React.FC<ToggleModeProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ToggleMode;
