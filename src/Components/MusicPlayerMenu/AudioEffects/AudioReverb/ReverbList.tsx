import React, { useState } from 'react';

interface ReverbListProps {
  onSelectedImpulse: (selectedImpulse: string) => void;
  selectedImpulse: string | null;
  impulseFiles: string[];
}

const ReverbList: React.FC<ReverbListProps> = ({
  onSelectedImpulse,
  impulseFiles,
  selectedImpulse,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelectedImpulse(item);
    setIsOpen(false);
  };

  return (
    <div className="w-[220px] ml-24">
      <button
        onClick={toggleDropdown}
        className="w-full text-left bg-gray-400 px-4 py-[1px] rounded"
      >
        {selectedItem || 'Select an impulse file'}
        <svg
          className="w-5 h-5 inline ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 bg-white border rounded shadow-md absolute z-10">
          <ul>
            {impulseFiles.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className={` ${
                  item === selectedImpulse ? 'bg-blue-200' : ''
                } px-4 py-2 cursor-pointer hover:bg-gray-100`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReverbList;
