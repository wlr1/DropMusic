import React, { useState, useRef } from 'react';
import { BsCheck } from 'react-icons/bs';

const RainSoundMenu = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const rainSoundRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(50);

  //repeat sound
  const handleRepeatRain = () => {
    if (rainSoundRef.current) {
      rainSoundRef.current.loop = true;
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (rainSoundRef.current) {
      if (isChecked) {
        // If the checkbox was unchecked, pause and reset playback
        rainSoundRef.current.pause();
        rainSoundRef.current.currentTime = 0;
        rainSoundRef.current.loop = false;
      } else {
        // If the checkbox was checked, play the rain sound
        rainSoundRef.current.play().catch((error) => {
          console.error('Error playing rain sound:', error);
        });
        handleRepeatRain();
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (rainSoundRef.current) {
      rainSoundRef.current.volume = newVolume / 100;
    }
  };

  return (
    <>
      <div className="inline-flex border-t-2 border-neutral-500 mt-6 ">
        <h2 className=" m-auto text-white py-2 ">Rain</h2>
      </div>

      <div>
        <span className="ml-3 text-sm text-white mr-8">Rain Sound</span>
        <label className="  inline-block cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="block bg-gray-400 w-8 h-4 rounded-full"></div>
            <div
              className={`dot absolute top-[0.2px] ${
                isChecked ? 'right-0.5 bg-green-400' : 'left-0.5 bg-gray-500'
              } w-4 h-4 rounded-full transition-all duration-300 transform`}
            ></div>
          </div>
        </label>
        <span
          className={`ml-2 text-${isChecked ? 'green' : 'gray'}-400 text-xs`}
        >
          {isChecked ? 'On' : 'Off'}
        </span>
      </div>

      {/* volume slider */}
      <div className="flex mt-2">
        <h2 className="text-white text-sm mr-6 ml-3 mt-[2px]">Rain volume: </h2>

        <div className="space-x-2 text-white">
          <span className="text-sm">0%</span>
          <input
            type="range"
            className="w-52 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
            min="0"
            max="100"
            value={volume.toString()}
            onChange={handleVolumeChange}
          />
          <span className="text-sm">100%</span>
        </div>
      </div>
      {/* Rain sound */}
      <audio ref={rainSoundRef} hidden preload="auto">
        <source src="/rainSound.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default RainSoundMenu;
