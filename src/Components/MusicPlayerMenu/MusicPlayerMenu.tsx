import { useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import ButtonsMenu from './ButtonsMenu/ButtonsMenu';
import BlurSliderMenu from './BlurSliderMenu/BlurSliderMenu';
import TitleSpeedMenu from './TitleSpeedMenu/TitleSpeedMenu';

interface MusicPlayerMenuProps {
  setBgImage: (image: string) => void;
  blurOpacity: number;
  setBlurOpacity: (opacity: number) => void;
  titleSpeed: number;
  setTitleSpeed: (speed: number) => void;
}

const MusicPlayerMenu: React.FC<MusicPlayerMenuProps> = ({
  setBgImage,
  blurOpacity,
  setBlurOpacity,
  titleSpeed,
  setTitleSpeed,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-0  ">
      <button
        className="text-white p-4 m-2 button-scale"
        onClick={toggleDropMenu}
      >
        <VscSettings size={33} />
      </button>
      <div
        className={`absolute bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-neutral-700 rounded-lg shadow-2xl  w-[455px] h-[711px] right-44 mt-12 animate-slide-up-menu ${
          isOpen ? 'menu-open' : 'menu-closed'
        }`}
      >
        <BlurSliderMenu
          blurOpacity={blurOpacity}
          setBlurOpacity={setBlurOpacity}
        />
        <TitleSpeedMenu titleSpeed={titleSpeed} setTitleSpeed={setTitleSpeed} />
        <ButtonsMenu setBgImage={setBgImage} />
      </div>
    </div>
  );
};

export default MusicPlayerMenu;
