import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ToggleMode from './components/ToggleMode';
import NavigationMenu from './components/NavigationMenu';
import HierarchyTree from './components/HierarchyTree';
import EntityDetails from './components/EntityDetails';
import ViewToggle from './components/ViewToggle';
import './styles/main.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState('hierarchy');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'hierarchy' ? 'list' : 'hierarchy');
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <SearchBar />
      <ToggleMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ViewToggle viewMode={viewMode} toggleViewMode={toggleViewMode} />
      <NavigationMenu />
      {viewMode === 'hierarchy' ? <HierarchyTree /> : <EntityDetails />}
    </div>
  );
};

export default App;
