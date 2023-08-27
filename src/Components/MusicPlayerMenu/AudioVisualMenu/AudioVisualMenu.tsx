import { useState } from 'react';

const AudioVisualMenu = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onHandleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="inline-flex border-t-2 border-neutral-500 mt-6 ">
        <h2 className=" m-auto text-white py-2 ">Audio Visualization</h2>
      </div>

      <div className="mt-5">
        <span className="ml-3 text-sm text-white mr-8">Audio Waveform</span>
        <label className="  inline-block cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={onHandleCheckBox}
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
    </>
  );
};

export default AudioVisualMenu;
