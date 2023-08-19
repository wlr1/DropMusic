interface PlayerImageProps {
  playerBgImage: string;
}

const PlayerImage: React.FC<PlayerImageProps> = ({ playerBgImage }) => {
  return (
    <div className="flex items-center  w-[344px] h-[386] justify-center mb-6">
      <img
        className="h-[386] w-[333px]"
        src={playerBgImage}
        alt="Track Image"
      />
    </div>
  );
};

export default PlayerImage;
