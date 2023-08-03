import { useEffect, useRef, useState } from 'react';
import { TiMediaPause } from 'react-icons/ti';
import { IoPlay } from 'react-icons/io5';

import { useLocation } from 'react-router-dom';

import PlayerImage from './PlayerImage/PlayerImage';
import BackButton from './BackButton';
import PlayerRepeatButton from './PlayerRepeatButton/PlayerRepeatButton';
import PlayerTrackTitle from './PlayerTrackTitle/PlayerTrackTitle';

const MusicPlayer = () => {
  const location = useLocation();
  const selectedFile = location.state?.selectedFile || null;

  // Set up state for audio playback
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  //time slider
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //sound slider
  const [volume, setVolume] = useState(50);

  // Update the volume of the audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Update current time and duration on audio load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', () => {
        setDuration(audioRef.current?.duration || 0);
      });

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      });
    }
  }, []);

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

  if (!selectedFile) {
    return <div>No audio file selected.</div>;
  }

  //Track title
  const trackTitle = selectedFile ? selectedFile.name : 'No track selected';

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div
      className="flex justify-center items-center h-screen "
      style={{
        backgroundImage:
          "url('https://www.pixelstalk.net/wp-content/uploads/images6/Dark-Aesthetic-Wallpaper-HD-City-Night.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-opacity-60 backdrop-filter backdrop-blur-xl">
        <BackButton />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg">
        {/*Music Player Image*/}
        <PlayerImage />
        {/* Track Title */}
        <PlayerTrackTitle trackTitle={trackTitle} />
        {/* Music Player Controls */}
        <div className="flex items-center justify-center space-x-6 mb-6">
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
          <PlayerRepeatButton audioRef={audioRef} />
        </div>
        {/* Time Slider */}
        <div className="flex items-center justify-center space-x-2 text-white mb-2">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = parseInt(e.target.value, 10);
              }
            }}
          />
          <span>{formatTime(duration)}</span>
        </div>
        {/* Sound Slider */}
        <div className="flex items-center justify-center space-x-2 text-white">
          <span>0% </span>
          <input
            type="range"
            className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
          <span>100%</span>
        </div>
        {/* Audio Element */}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default MusicPlayer;
