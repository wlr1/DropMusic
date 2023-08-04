import React, { useState, useEffect } from 'react';
import { TiMediaPause } from 'react-icons/ti';
import { IoPlay } from 'react-icons/io5';

interface PlayPauseButtonProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  selectedFile: File | null;
}

const PlayerPlayPauseButtons: React.FC<PlayPauseButtonProps> = ({
  audioRef,
  selectedFile,
}) => {
  // Set up state for audio playback
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
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
