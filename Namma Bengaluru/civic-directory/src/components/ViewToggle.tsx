import React from 'react';

interface ViewToggleProps {
  viewMode: string;
  toggleViewMode: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, toggleViewMode }) => {
  return (
    <button onClick={toggleViewMode}>
      {viewMode === 'hierarchy' ? 'Switch to List View' : 'Switch to Hierarchy View'}
    </button>
  );
};

export default ViewToggle;
