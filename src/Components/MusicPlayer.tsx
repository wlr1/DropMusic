import React from 'react';

const MusicPlayer = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Simple Music Player</h1>

      <div className="w-64 rounded-lg shadow-md p-4">
        <div className="flex items-center justify-center mb-4">
          <img
            src="path/to/album-artwork.jpg"
            alt="Album Artwork"
            className="w-32 h-32 rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">Song Title</h2>
        <p className="text-gray-600">Artist Name</p>

        <audio controls className="w-full mt-4">
          <source src="path/to/audio-file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Play
          </button>
          <button className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
            Pause
          </button>
        </div>

        <div className="mt-4">
          <label htmlFor="volume" className="block">
            Volume
          </label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.01"
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="progress" className="block">
            Progress
          </label>
          <input
            type="range"
            id="progress"
            name="progress"
            min="0"
            max="100"
            step="1"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
