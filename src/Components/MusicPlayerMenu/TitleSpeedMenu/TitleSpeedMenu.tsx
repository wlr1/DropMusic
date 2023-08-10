import React from 'react';

const TitleSpeedMenu = () => {
  return (
    <div className="flex mt-6">
      <h2 className="text-white text-[22px] mr-6 ml-3">Title speed: </h2>
      <div className="space-x-2 text-white  mt-[6px]">
        <span>0%</span>
        <input
          type="range"
          className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          min="0"
          max="100"
          value="50"
          readOnly
        />
        <span>100%</span>
      </div>
    </div>
  );
};

export default TitleSpeedMenu;
