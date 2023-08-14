import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface InvalidFileFormatProps {
  onClose: () => void;
}

const InvalidFileFormat: React.FC<InvalidFileFormatProps> = ({ onClose }) => {
  return (
    <div className="absolute -top-28 right-16  w-[333px] animate-slide-up ">
      <div className="text-center p-8 rounded-lg shadow-lg bg-gray-700 bg-opacity-90 backdrop-blur-md border-2 border-red-500  ">
        <div className="absolute right-1 top-1">
          <IoCloseOutline
            size={20}
            className="text-white cursor-pointer hover:text-gray-300 "
            onClick={onClose}
          />
        </div>

        <span className="text-white text-xl">
          Invalid file format. Only
          <a
            href="https://en.wikipedia.org/wiki/PNG"
            target="_blank"
            className="text-blue-400 underline"
          >
            {' '}
            PNG{' '}
          </a>{' '}
          or
          <a
            href="https://en.wikipedia.org/wiki/JPEG"
            target="_blank"
            className="text-blue-400 underline"
          >
            {' '}
            JPG/JPEG{' '}
          </a>
          files are allowed.
        </span>
      </div>
    </div>
  );
};

export default InvalidFileFormat;
