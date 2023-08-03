import React from 'react';

interface TitleProps {
  trackTitle: string;
}

const PlayerTrackTitle: React.FC<TitleProps> = ({ trackTitle }) => {
  return (
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
  );
};

export default PlayerTrackTitle;
