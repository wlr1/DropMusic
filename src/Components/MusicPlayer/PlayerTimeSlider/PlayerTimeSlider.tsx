import React, { useState, useEffect } from 'react';

interface TimeSliderProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerTimeSlider: React.FC<TimeSliderProps> = ({ audioRef }) => {
  //time slider
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Update current time and duration on audio load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', () => {
        setDuration(audioRef.current?.duration || 0);
      });

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      });
    }
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center space-x-2 text-white mb-2">
      <span>{formatTime(currentTime)}</span>
      <input
        type="range"
        className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => {
          if (audioRef.current) {
            audioRef.current.currentTime = parseInt(e.target.value, 10);
          }
        }}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default PlayerTimeSlider;
