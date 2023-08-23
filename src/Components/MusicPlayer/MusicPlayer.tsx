import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PlayerImage from './PlayerImage/PlayerImage';
import PlayerRepeatButton from './PlayerRepeatButton/PlayerRepeatButton';
import PlayerTrackTitle from './PlayerTrackTitle/PlayerTrackTitle';
import PlayerPlayPauseButtons from './PlayerPlayPauseButtons/PlayerPlayPauseButtons';
import PlayerTimeSlider from './PlayerTimeSlider/PlayerTimeSlider';
import PlayerVolumeSlider from './PlayerVolumeSlider/PlayerVolumeSlider';
import MusicPlayerMenu from '../MusicPlayerMenu/MusicPlayerMenu';
import NoAudioFile from '../NoAudioFile';

const MusicPlayer = () => {
  const location = useLocation();
  const selectedFile = location.state?.selectedFile || null;

  //app bg
  const [bgImage, setBgImage] = useState<string>(
    `url(https://www.pixelstalk.net/wp-content/uploads/images6/Dark-Aesthetic-Wallpaper-HD-City-Night.jpg)`
  );

  //player bg
  const [playerBgImage, setPlayerBgImage] = useState<string>(
    `https://i.pinimg.com/564x/e6/0a/d1/e60ad18063b91edc1a780a3f6e66b6e8.jpg`
  );

  //track title speed func for musicplayermenu
  const [titleSpeed, setTitleSpeed] = useState<number>(15);

  //blur opacity func for musicplayermenu
  const [blurOpacity, setBlurOpacity] = useState<number>(19);

  // Set up state for audio playback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!selectedFile) {
    return <NoAudioFile bgImage={bgImage} />;
  }

  return (
    <div
      className="flex justify-center items-center h-screen "
      style={{
        backgroundImage: bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 bg-opacity-60 "
        style={{ backdropFilter: `blur(${blurOpacity}px)` }}
      >
        <MusicPlayerMenu
          setBgImage={setBgImage}
          setPlayerBgImage={setPlayerBgImage}
          blurOpacity={blurOpacity}
          setBlurOpacity={setBlurOpacity}
          titleSpeed={titleSpeed}
          setTitleSpeed={setTitleSpeed}
          audioRef={audioRef}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30  backdrop-blur-lg p-8 rounded-lg shadow-lg">
        {/*Music Player Image*/}

        <PlayerImage playerBgImage={playerBgImage} />
        {/* Track Title */}

        <PlayerTrackTitle selectedFile={selectedFile} titleSpeed={titleSpeed} />

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
