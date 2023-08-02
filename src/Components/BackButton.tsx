import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className=" w-[250px] h-screen bg-black bg-opacity-0 hover:bg-opacity-30 ">
      <div className="flex justify-center items-center h-full">
        <Link to="/">
          <button className="py-[444px] px-[95px] relative hover:animate-moveLeft">
            <BiChevronLeft className="text-white " size={66} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BackButton;
