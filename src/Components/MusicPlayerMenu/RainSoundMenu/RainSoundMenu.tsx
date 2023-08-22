import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

const RainSoundMenu = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <>
      <div className="inline-flex border-t-2 border-neutral-500 mt-6 ">
        <h2 className=" m-auto text-white py-2 ">Rain</h2>
      </div>

      <div>
        <span className="ml-3 text-sm text-white mr-11">Rain Sound</span>
        <label className=" cursor-pointer">
          <input
            type="checkbox"
            className="hidden "
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
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
            value={50}
            readOnly
          />
          <span className="text-sm">100%</span>
        </div>
      </div>
    </>
  );
};

export default RainSoundMenu;
