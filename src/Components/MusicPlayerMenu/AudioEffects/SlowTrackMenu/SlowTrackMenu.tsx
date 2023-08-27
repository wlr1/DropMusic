import React, { useState } from 'react';
import { MdOutlineRestore } from 'react-icons/md';

interface SlowTrackProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const SlowTrackMenu: React.FC<SlowTrackProps> = ({ audioRef }) => {
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(50);

  const handlePlaybackSpeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSpeed = parseInt(event.target.value);
    setPlaybackSpeed(newSpeed);

    if (audioRef.current) {
      const validSpeed = (newSpeed / 100) * 2 + 0.5;
      audioRef.current.playbackRate = validSpeed;
    }
  };

  //restore native playback speed
  const handleRestoreTrackSpeed = () => {
    const nativePlaybackRate = 1;

    setPlaybackSpeed(nativePlaybackRate * 100);

    if (audioRef.current) {
      audioRef.current.playbackRate = nativePlaybackRate;
    }
  };

  return (
    <div className="flex mt-6">
      <h2 className="text-white text-sm mr-6 ml-3 mt-[2px]">Track speed: </h2>

      <div className="space-x-2 text-white flex mt-[3px] ">
        <span className="text-sm">0.5x</span>
        <input
          type="range"
          className="w-52 h-2 mt-[5px] appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          min="0"
          max="100"
          value={playbackSpeed.toString()}
          onChange={handlePlaybackSpeedChange}
        />
        <span className="text-sm">2.5x </span>
        <MdOutlineRestore
          size={17}
          className=" cursor-pointer transition-all duration-500  hover:text-gray-400 "
          onClick={handleRestoreTrackSpeed}
        />
      </div>
    </div>
  );
};

export default SlowTrackMenu;
