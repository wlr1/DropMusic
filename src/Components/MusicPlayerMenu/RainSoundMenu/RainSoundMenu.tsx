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
        <label className=" cursor-pointer">
          <input
            type="checkbox"
            className="hidden "
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="relative inline-block w-4 h-4 border border-gray-300 rounded-md bg-white">
            {isChecked && (
              <span className="absolute inset-0 flex items-center justify-center ">
                <BsCheck size={23} />
              </span>
            )}
          </span>
        </label>
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
