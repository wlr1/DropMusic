import React from 'react';

interface BlurSliderMenuProps {
  blurOpacity: number;
  setBlurOpacity: (opacity: number) => void;
}

const BlurSliderMenu: React.FC<BlurSliderMenuProps> = ({
  blurOpacity,
  setBlurOpacity,
}) => {
  return (
    <div className="flex mt-6">
      <h2 className="text-white text-[22px] mr-6 ml-3">Blur opacity: </h2>
      <div className="space-x-2 text-white  mt-[6px]">
        <span>0%</span>
        <input
          type="range"
          className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          min="0"
          max="100"
          value={blurOpacity}
          onChange={(e) => setBlurOpacity(Number(e.target.value))}
        />
        <span>100%</span>
      </div>
    </div>
  );
};

export default BlurSliderMenu;
