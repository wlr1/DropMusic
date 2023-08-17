import { useState } from 'react';
import InvalidFileFormatBG from '../../InvalidFileFormatBG';
import ChooseTrackMenu from '../ChooseTrackMenu/ChooseTrackMenu';

interface ButtonsMenuProps {
  setBgImage: (image: string) => void; //musicplayermenu repeated props #needfix
}

const ButtonsMenu: React.FC<ButtonsMenuProps> = ({ setBgImage }) => {
  const [isInvalidFileFormat, setInvalidFileFormat] = useState<boolean>(false);

  const handleCloseInvalidFileFormat = () => {
    setInvalidFileFormat(false);
  };

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

  return (
    <div className="flex items-center justify-center space-x-6  mt-auto mb-5 ">
      {isInvalidFileFormat && (
        <InvalidFileFormatBG onClose={handleCloseInvalidFileFormat} />
      )}
      <ChooseTrackMenu />
      <label className="cursor-pointer text-white text-sm relative transition-all duration-500 hover:text-gray-400">
        Change Background Image
        <input
          type="file"
          id="fileInput"
          onChange={handleImageChange}
          accept="image/"
          className="hidden"
        />
      </label>
      <label className="cursor-pointer text-white text-sm relative transition-all duration-500 hover:text-gray-400">
        Change Player BG
        <input type="file" id="fileInput" accept="image/" className="hidden" />
      </label>
    </div>
  );
};

export default ButtonsMenu;
