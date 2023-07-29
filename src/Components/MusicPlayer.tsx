import { FaPlay, FaPause, FaRedoAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const MusicPlayer = () => {
  const location = useLocation();
  const selectedFile = location.state?.selectedFile || null;

  //Track title
  const trackTitle = selectedFile ? selectedFile.name : 'No track selected';

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
      <div className="absolute inset-0 bg-opacity-60 backdrop-filter backdrop-blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg">
        {/*Music Player Image*/}
        <div className="flex items-center  w-[333px] h-[386] justify-center mb-6">
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
              animation: 'marquee 10s linear infinite', // Apply the animation
            }}
          >
            {trackTitle}
          </span>
        </div>
        {/* Music Player Controls */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button className="p-2 bg-opacity-80 bg-white rounded-lg shadow-md hover:scale-110 transition-transform">
            <FaRedoAlt className="text-white" />
          </button>
          <button className="p-4 bg-opacity-80 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
            <FaPlay className="text-white text-3xl" />
          </button>
          <button className="p-2 bg-opacity-80 bg-white rounded-lg shadow-md hover:scale-110 transition-transform">
            <FaPause className="text-white" />
          </button>
        </div>
        {/* Time Slider */}
        <div className="flex items-center justify-center space-x-2 text-white mb-2">
          <span>0:00</span>
          <input
            type="range"
            className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          />
          <span>3:45</span>
        </div>
        {/* Sound Slider */}
        <div className="flex items-center justify-center space-x-2 text-white">
          <span>0%</span>
          <input
            type="range"
            className="w-64 h-2 appearance-none bg-white bg-opacity-50 rounded-lg outline-none cursor-pointer hover:bg-opacity-70 active:bg-opacity-80 transition-opacity"
          />
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
