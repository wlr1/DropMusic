import React, { useState, useEffect } from 'react';

interface VolumeSliderProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerVolumeSlider: React.FC<VolumeSliderProps> = ({ audioRef }) => {
  //sound slider
  const [volume, setVolume] = useState(50);

  // Update the volume of the audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className="flex items-center justify-center space-x-2 text-white">
      <span>0% </span>
      <input
        type="range"
        className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
      <span>100%</span>
    </div>
  );
};

export default PlayerVolumeSlider;
