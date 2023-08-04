import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import PlayerImage from './PlayerImage/PlayerImage';
import BackButton from '../BackButton';
import PlayerRepeatButton from './PlayerRepeatButton/PlayerRepeatButton';
import PlayerTrackTitle from './PlayerTrackTitle/PlayerTrackTitle';
import PlayerPlayPauseButtons from './PlayerPlayPauseButtons/PlayerPlayPauseButtons';
import PlayerTimeSlider from './PlayerTimeSlider/PlayerTimeSlider';
import PlayerVolumeSlider from './PlayerVolumeSlider/PlayerVolumeSlider';
import MusicPlayerMenu from '../MusicPlayerMenu/MusicPlayerMenu';

const MusicPlayer = () => {
  const location = useLocation();
  const selectedFile = location.state?.selectedFile || null;

  // Set up state for audio playback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!selectedFile) {
    return <div>No audio file selected.</div>;
  }

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
        <MusicPlayerMenu />
        <BackButton />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg">
        {/*Music Player Image*/}

        <PlayerImage />
        {/* Track Title */}

        <PlayerTrackTitle selectedFile={selectedFile} />

        {/* Music Player Controls */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <PlayerPlayPauseButtons
            audioRef={audioRef}
            selectedFile={selectedFile}
          />

          <PlayerRepeatButton audioRef={audioRef} />
        </div>
        {/* Time Slider */}

        <PlayerTimeSlider audioRef={audioRef} />

        {/* Sound Slider */}

        <PlayerVolumeSlider audioRef={audioRef} />

        {/* Audio Element */}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default MusicPlayer;