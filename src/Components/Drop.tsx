import { BsCloudUpload } from 'react-icons/bs';
import React, { useState } from 'react';

const Drop = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'audio/mpeg' || file.type === 'audio/mp3') {
        console.log('File:', file);
      } else {
        console.log('Invalid file format. Only MP3 files are allowed.');
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 to-purple-700 relative"
      style={{
        backgroundImage:
          "url('https://www.pixelstalk.net/wp-content/uploads/images6/Dark-Aesthetic-Wallpaper-HD-City-Night.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div
        className={`absolute inset-0 bg-opacity-50 backdrop-blur-md ${
          isDragging ? 'pointer-events-none' : ''
        }`}
        style={{ backdropFilter: 'blur(11px)' }}
      ></div>
      <div
        className={`p-8 rounded-lg shadow-lg bg-gray-700 bg-opacity-70 backdrop-blur-md hover:bg-opacity-80 hover:shadow-xl transform hover:scale-105 transition-all ${
          isDragging ? 'border-4 border-blue-400' : ''
        }`}
      >
        <label
          className="px-8 py-4 text-white bg-gray-900 bg-opacity-70 hover:bg-opacity-90 rounded-full cursor-pointer hover:shadow-xl transition-all flex items-center justify-center relative"
          htmlFor="fileInput"
        >
          <span className="relative">
            <BsCloudUpload size={24} className="m-auto mb-2" />
            Drag or Choose File
            <input
              type="file"
              id="fileInput"
              className="hidden"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                zIndex: 1,
                cursor: 'pointer',
                borderRadius: '9999px',
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const files = e.target?.files;

                if (files && files.length > 0) {
                  const file = files[0];
                  if (file.type === 'audio/mpeg' || file.type === 'audio/mp3') {
                    console.log('File:', file);
                  } else {
                    console.log(
                      'Invalid file format. Only MP3 files are allowed.'
                    );
                  }
                }
              }}
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default Drop;
