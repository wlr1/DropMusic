import React, { useState } from 'react';

const MusicPlayerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-0 inline-block text-left">
      <button
        className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none"
        onClick={toggleDropMenu}
      >
        Open Dropdown
      </button>
      <div
        className={`absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg ${
          isOpen ? '' : 'hidden'
        } `}
      >
        <ul className="py-2">
          <li className="hover:bg-gray-100 px-4 py-2">Option 1</li>
          <li className="hover:bg-gray-100 px-4 py-2">Option 2</li>
          <li className="hover:bg-gray-100 px-4 py-2">Option 3</li>
        </ul>
      </div>
    </div>
  );
};

export default MusicPlayerMenu;
