import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaRedoAlt, FaRedo } from 'react-icons/fa';
import { BiChevronLeft } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div className=" w-[250px] h-screen bg-black bg-opacity-0 hover:bg-opacity-30 ">
          <div className="flex justify-center items-center h-full">
            <Link to="/">
              <button className="py-[444px] px-[95px] relative hover:animate-moveLeft">
                <BiChevronLeft className="text-white " size={66} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg">
        {/*Music Player Image*/}
        <div className="flex items-center  w-[344px] h-[386] justify-center mb-6">
          <img
            className="h-[386] w-[333px]"
            src="https://i.pinimg.com/564x/dc/15/c3/dc15c388c26650520fb3fac014a4eb63.jpg"
            alt="Track Image"
          />
        </div>
        {/* Track Title */}
        <div className="flex items-center justify-start mb-6 overflow-hidden w-[333px]">
          <span
            className="text-white font-semibold text-2xl animate-marquee min-w-[700px]"
            style={{
              animation: 'marquee 15s linear infinite', // Apply the animation
            }}
          >
            {trackTitle}
          </span>
        </div>
        {/* Music Player Controls */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button
            className="p-2 bg-opacity-80 bg-white rounded-lg shadow-md hover:scale-110 transition-transform"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <FaPause className="text-neutral-600 text-xl" />
            ) : (
              <FaPlay className="text-white text-3xl" />
            )}
          </button>
          <button
            className="p-4 bg-opacity-80 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
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
              <FaRedoAlt className="text-white text-xl " />
            )}
            {repeatMode === 'repeat-one' && (
              <FaRedoAlt className="text-neutral-500 text-2xl" />
            )}
            {repeatMode === 'repeat-all' && (
              <FaRedo className="text-neutral-800 text-3xl" />
            )}
          </button>
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
          <span>0%</span>
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
