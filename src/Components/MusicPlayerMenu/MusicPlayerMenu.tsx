import { useState, useRef, useEffect } from 'react';
import { VscSettings } from 'react-icons/vsc';
import ButtonsMenu from './ButtonsMenu/ButtonsMenu';
import BlurSliderMenu from './BlurSliderMenu/BlurSliderMenu';
import TitleSpeedMenu from './TitleSpeedMenu/TitleSpeedMenu';
import SlowTrackMenu from './SlowTrackMenu/SlowTrackMenu';

interface MusicPlayerMenuProps {
  setPlayerBgImage: (image: string) => void;
  setBgImage: (image: string) => void;
  blurOpacity: number;
  setBlurOpacity: (opacity: number) => void;
  titleSpeed: number;
  setTitleSpeed: (speed: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const MusicPlayerMenu: React.FC<MusicPlayerMenuProps> = ({
  setBgImage,
  setPlayerBgImage,
  blurOpacity,
  setBlurOpacity,
  titleSpeed,
  setTitleSpeed,
  audioRef,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  //click outside of menu closes menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

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
        ref={menuRef}
        className={` flex flex-col absolute bg-black bg-opacity-30  backdrop-filter backdrop-blur-xl  rounded-lg shadow-lg  w-[455px] h-[700px] right-44 mt-14 animate-slide-up-menu ${
          isOpen ? 'menu-open' : 'menu-closed'
        }`}
      >
        <BlurSliderMenu
          blurOpacity={blurOpacity}
          setBlurOpacity={setBlurOpacity}
        />
        <TitleSpeedMenu titleSpeed={titleSpeed} setTitleSpeed={setTitleSpeed} />
        <SlowTrackMenu audioRef={audioRef} />
        <ButtonsMenu
          setBgImage={setBgImage}
          setPlayerBgImage={setPlayerBgImage}
        />
      </div>
    </div>
  );
};

export default MusicPlayerMenu;
