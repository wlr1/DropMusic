import React from 'react';
import { Link } from 'react-router-dom';

interface NoAudioFileProps {
  bgImage: string;
}

const NoAudioFile: React.FC<NoAudioFileProps> = ({ bgImage }) => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-opacity-60 backdrop-blur-lg">
        <div className="flex flex-col space-y-5 justify-center items-center h-screen ">
          <div className="p-8 rounded-lg shadow-lg bg-gray-700 bg-opacity-90 backdrop-blur-md border-2 border-red-500 hover:bg-opacity-80 hover:shadow-xl transform hover:scale-105 transition-all">
            <span className="text-white">No audio file selected.</span>
          </div>
          <div className="flex transform hover:scale-105 transition-all">
            <Link to="/DropMusic">
              <span className="underline ">Go to the main page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAudioFile;
