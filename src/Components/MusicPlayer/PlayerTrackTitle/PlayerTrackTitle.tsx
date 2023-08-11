import React from 'react';

interface TitleProps {
  selectedFile: File | null;
  titleSpeed: number;
}

const PlayerTrackTitle: React.FC<TitleProps> = ({
  selectedFile,
  titleSpeed,
}) => {
  //Track title
  const trackTitle = selectedFile ? selectedFile.name : 'No track selected';

  return (
    <div className="flex items-center justify-start mb-6 overflow-hidden w-[333px]">
      <span
        className="text-white font-semibold text-2xl animate-marquee min-w-[700px]"
        style={{
          animation: `marquee ${titleSpeed}s  linear infinite`, // Apply the animation
        }}
      >
        {trackTitle}
      </span>
    </div>
  );
};

export default PlayerTrackTitle;
