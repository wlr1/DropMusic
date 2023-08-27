import { useState } from 'react';

interface AudioReverbProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioReverb: React.FC<AudioReverbProps> = ({ audioRef }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="mt-3">
        <span className="ml-3 text-sm text-white mr-8">Audio Reverb</span>
        <label className="  inline-block cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleToggle}
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

export default AudioReverb;
