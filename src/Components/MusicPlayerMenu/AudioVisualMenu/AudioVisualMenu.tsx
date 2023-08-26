import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

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
        <label className=" cursor-pointer">
          <input
            type="checkbox"
            className="hidden "
            checked={isChecked}
            onChange={onHandleCheckBox}
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
    </>
  );
};

export default AudioVisualMenu;
