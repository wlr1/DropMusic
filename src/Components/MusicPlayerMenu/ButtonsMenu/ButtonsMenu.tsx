import { useState } from 'react';
import InvalidFileFormatBG from '../../InvalidFileFormatBG';
import { Link } from 'react-router-dom';

interface ButtonsMenuProps {
  setBgImage: (image: string) => void; //musicplayermenu repeated props #needfix
  setPlayerBgImage: (image: string) => void;
}

const ButtonsMenu: React.FC<ButtonsMenuProps> = ({
  setBgImage,
  setPlayerBgImage,
}) => {
  const [isInvalidFileFormat, setInvalidFileFormat] = useState<boolean>(false);

  const handleCloseInvalidFileFormat = () => {
    setInvalidFileFormat(false);
  };

  //Bg Image
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setBgImage(`url(${imageUrl})`);
      } else {
        setInvalidFileFormat(true);
      }
    }
  };

  //player Bg image
  const handlePlayerImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setPlayerBgImage(imageUrl);
      } else {
        setInvalidFileFormat(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center space-x-6  mt-auto mb-5 border-t-2 border-neutral-500">
      {isInvalidFileFormat && (
        <InvalidFileFormatBG onClose={handleCloseInvalidFileFormat} />
      )}
      <label className="mt-6 text-white text-sm transition-all duration-500 hover:text-gray-400">
        <Link to="/DropMusic">Choose Track</Link>
      </label>
      <label className="cursor-pointer text-white text-sm relative transition-all duration-500 hover:text-gray-400 mt-6">
        Change Background Image
        <input
          type="file"
          id="fileInput"
          onChange={handleImageChange}
          accept="image/"
          className="hidden"
        />
      </label>

      <label className="cursor-pointer text-white text-sm relative transition-all duration-500 hover:text-gray-400 mt-6">
        Change Player BG
        <input
          type="file"
          id="fileInput"
          accept="image/"
          className="hidden"
          onChange={handlePlayerImageChange}
        />
      </label>
    </div>
  );
};

export default ButtonsMenu;
