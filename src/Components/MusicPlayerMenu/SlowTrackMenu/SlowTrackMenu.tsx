import React, { useState } from 'react';

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

  return (
    <div className="flex mt-6">
      <h2 className="text-white text-sm mr-6 ml-3 mt-[2px]">Track speed: </h2>
      <div className="space-x-2 text-white  ">
        <span className="text-sm">0%</span>
        <input
          type="range"
          className="w-52 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          min="0"
          max="100"
          value={playbackSpeed.toString()}
          onChange={handlePlaybackSpeedChange}
        />
        <span className="text-sm">100%</span>
      </div>
    </div>
  );
};

export default SlowTrackMenu;
