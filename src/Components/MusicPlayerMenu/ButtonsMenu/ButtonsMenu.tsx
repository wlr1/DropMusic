import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineUpload } from 'react-icons/md';
import InvalidFileFormatBG from '../../InvalidFileFormatBG';

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
        console.log('Invalid file format. Please select an image.');
        setInvalidFileFormat(true);
      }
    }
  };

  return (
    <div className="flex w-[111px] bottom-0  space-x-2 ml-6">
      {isInvalidFileFormat && (
        <InvalidFileFormatBG onClose={handleCloseInvalidFileFormat} />
      )}
      <Link to="/">
        <button className="absolute bottom-0 right-0 border flex flex-row-reverse h-[75px] border-neutral-600 px-14 py-4 mb-4 rounded-2xl   hover:bg-gray-700 ">
          <span className="text-white text-sm">Choose track</span>
          <MdOutlineUpload size={22} className="text-gray-400  mr-3 mt-auto" />
        </button>
      </Link>

      <div className=" absolute bottom-0 left-0">
        <label className="cursor-pointer border flex border-neutral-600 px-14 py-4 mb-4 w-[210px] rounded-2xl  hover:bg-gray-700 ">
          <span className="text-white text-sm ">
            Choose bg image
            <input
              type="file"
              id="fileInput"
              onChange={handleImageChange}
              accept="image/"
              className="hidden"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                zIndex: 1,
                cursor: 'pointer',
                borderRadius: '9999px',
              }}
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default ButtonsMenu;
