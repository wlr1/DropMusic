import React from 'react';
import { Link } from 'react-router-dom';

const ChooseTrackMenu = () => {
  return (
    <div>
      <Link
        to="/"
        className="text-white text-sm transition-all duration-500 hover:text-gray-400"
      >
        Choose Track
      </Link>
    </div>
  );
};

export default ChooseTrackMenu;
