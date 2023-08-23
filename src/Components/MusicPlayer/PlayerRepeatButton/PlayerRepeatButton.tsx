import React, { useEffect } from 'react';
import { PiRepeatLight, PiRepeatOnceLight } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setRepeatMode } from '../../../redux/Slices/playerSlice';

interface RepeatButtonProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerRepeatButton: React.FC<RepeatButtonProps> = ({ audioRef }) => {
  const dispatch = useDispatch();
  const repeatMode = useSelector((state: RootState) => state.player.repeatMode);

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
        dispatch(
          setRepeatMode(
            repeatMode === 'repeat-all'
              ? 'no-repeat'
              : repeatMode === 'no-repeat'
              ? 'repeat-one'
              : 'repeat-all'
          )
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
