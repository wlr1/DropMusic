import { Link } from 'react-router-dom';
import { MdOutlineUpload } from 'react-icons/md';

const AnotherTrackMenu = () => {
  return (
    <div className="flex justify-between absolute bottom-0  space-x-2 ml-6">
      <Link to="/">
        <button className="border flex flex-row-reverse w-[240px] border-neutral-600 px-14 py-4 mb-4 rounded-2xl   hover:bg-gray-700 ">
          <span className="text-white">Choose track</span>
          <MdOutlineUpload size={22} className="text-gray-400  mr-3 mt-auto" />
        </button>
      </Link>

      <div className="  ">
        <button className="border flex border-neutral-600 px-14 py-4 mb-4 w-[240px] rounded-2xl  hover:bg-gray-700 ">
          <span className="text-white">Choose bg image</span>
        </button>
      </div>
    </div>
  );
};

export default AnotherTrackMenu;
