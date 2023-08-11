import React from 'react';

interface TitleSpeedMenuProps {
  titleSpeed: number;
  setTitleSpeed: (speed: number) => void;
}

const TitleSpeedMenu: React.FC<TitleSpeedMenuProps> = ({
  titleSpeed,
  setTitleSpeed,
}) => {
  return (
    <div className="flex mt-6">
      <h2 className="text-white text-[22px] mr-6 ml-3">Title speed: </h2>
      <div className="space-x-2 text-white  mt-[6px]">
        <span>0s</span>
        <input
          type="range"
          className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          min="0"
          max="50"
          value={titleSpeed}
          onChange={(e) => setTitleSpeed(Number(e.target.value))}
        />
        <span>50s</span>
      </div>
    </div>
  );
};

export default TitleSpeedMenu;
