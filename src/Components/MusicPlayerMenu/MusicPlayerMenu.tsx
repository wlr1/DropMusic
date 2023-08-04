import { useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import AnotherTrackMenu from './AnotherTrackMenu/AnotherTrackMenu';

const MusicPlayerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-0 ">
      <button
        className=" text-white font-semibold px-4 py-2 my-2 mx-2 rounded-lg button-scale"
        onClick={toggleDropMenu}
      >
        <VscSettings size={33} />
      </button>
      <div
        className={`absolute right-0 z-10 mt-2 w-[554px] h-[466px]  bg-opacity-60 backdrop-filter backdrop-blur-xl border border-neutral-700 rounded-lg shadow-2xl ${
          isOpen ? '' : 'hidden'
        } `}
      >
        <AnotherTrackMenu />
      </div>
    </div>
  );
};

export default MusicPlayerMenu;
