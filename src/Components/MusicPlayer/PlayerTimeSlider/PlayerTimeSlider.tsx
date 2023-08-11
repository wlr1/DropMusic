import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface TimeSliderProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerTimeSlider: React.FC<TimeSliderProps> = ({ audioRef }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
    <div className="flex items-center justify-center  mb-2">
      <div className="w-full">
        <Slider
          min={0}
          max={duration}
          value={currentTime}
          onChange={(value: number | number[]) => {
            if (audioRef.current) {
              const currentTimeValue = Array.isArray(value) ? value[0] : value;
              audioRef.current.currentTime = currentTimeValue;
            }
          }}
          trackStyle={{ backgroundColor: '#fffeff', height: 7 }}
          handleStyle={{
            borderColor: 'white',
            height: 15,
            width: 15,
            opacity: 10,
            lightingColor: 'red',
          }}
          railStyle={{ backgroundColor: '#202124', height: 7, opacity: 5 }}
          className=" "
        />
        <div className="flex justify-between mt-1 text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerTimeSlider;
