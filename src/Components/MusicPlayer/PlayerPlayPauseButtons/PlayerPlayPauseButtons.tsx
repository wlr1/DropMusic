import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiMediaPause } from 'react-icons/ti';
import { IoPlay } from 'react-icons/io5';
import { RootState } from '../../../redux/store';
import { togglePlayPause } from '../../../redux/Slices/PlayerSlice';

interface PlayPauseButtonProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  selectedFile: File | null;
}

const PlayerPlayPauseButtons: React.FC<PlayPauseButtonProps> = ({
  audioRef,
  selectedFile,
}) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  //play audio
  useEffect(() => {
    if (selectedFile && audioRef.current) {
      const fileURL = URL.createObjectURL(selectedFile);
      audioRef.current.src = fileURL;
      audioRef.current.load();
    }
  }, [selectedFile]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Error while playing music:', error);
        dispatch(togglePlayPause());
      });
    }
    dispatch(togglePlayPause());
  };

  return (
    <button
      className="p-2 bg-opacity-80 bg-white rounded-lg shadow-md button-scale"
      onClick={handlePlayPause}
    >
      {isPlaying ? (
        <TiMediaPause size={33} className="text-neutral-600 " />
      ) : (
        <IoPlay size={33} className="text-white" />
      )}
    </button>
  );
};

export default PlayerPlayPauseButtons;
