import React, { useEffect, useState } from 'react';
import { PiRepeatLight, PiRepeatOnceLight } from 'react-icons/pi';

interface RepeatButtonProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerRepeatButton: React.FC<RepeatButtonProps> = ({ audioRef }) => {
  //repeat button
  const [repeatMode, setRepeatMode] = useState('no-repeat');

  //toggle repeat mode
  const handleRepeat = () => {
    if (audioRef.current) {
      switch (repeatMode) {
        case 'no-repeat':
          audioRef.current.loop = false;
          break;
        case 'repeat-one':
          audioRef.current.loop = true;
          break;
        case 'repeat-all':
          audioRef.current.loop = false;
          break;
        default:
          audioRef.current.loop = false;
          break;
      }
    }
  };

  //Update the repeat behavior when repeatMode changes
  useEffect(() => {
    handleRepeat();
  }, [repeatMode]);

  return (
    <button
      className="p-4 bg-opacity-80 bg-white rounded-full shadow-md button-scale"
      onClick={() =>
        setRepeatMode((prevMode) =>
          prevMode === 'repeat-all'
            ? 'no-repeat'
            : prevMode === 'no-repeat'
            ? 'repeat-one'
            : 'repeat-all'
        )
      }
    >
      {repeatMode === 'no-repeat' && (
        <PiRepeatLight size={23} className="text-white  " />
      )}
      {repeatMode === 'repeat-one' && (
        <PiRepeatOnceLight size={23} className="text-neutral-600 " />
      )}
      {repeatMode === 'repeat-all' && (
        <PiRepeatLight size={23} className="text-neutral-900 " />
      )}
    </button>
  );
};

export default PlayerRepeatButton;
