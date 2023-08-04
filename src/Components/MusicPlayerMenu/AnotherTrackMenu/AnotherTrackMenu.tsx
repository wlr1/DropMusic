import { Link } from 'react-router-dom';
import { MdOutlineUpload } from 'react-icons/md';

const AnotherTrackMenu = () => {
  return (
    <div className="flex justify-center items-end w-full h-full ">
      <Link to="/">
        <button className="border flex flex-row-reverse border-neutral-600 px-14 py-4 mb-4 rounded-lg  hover:bg-gray-700 ">
          <span className="text-white">Choose another track</span>
          <MdOutlineUpload size={22} className="text-gray-400  mr-3 mt-auto" />
        </button>
      </Link>
    </div>
  );
};

export default AnotherTrackMenu;
