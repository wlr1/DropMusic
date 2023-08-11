import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
    <div className="flex items-center justify-center ">
      <div className="w-full">
        <Slider
          min={0}
          max={100}
          value={volume}
          trackStyle={{ backgroundColor: '#fffeff', height: 7 }}
          handleStyle={{
            borderColor: 'white',
            height: 15,
            width: 15,
            opacity: 10,
            lightingColor: 'red',
          }}
          railStyle={{ backgroundColor: '#202124', height: 7, opacity: 5 }}
          onChange={(value) => setVolume(Number(value))}
          className=""
        />

        <div className="flex justify-between mt-1 text-gray-500">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerVolumeSlider;
