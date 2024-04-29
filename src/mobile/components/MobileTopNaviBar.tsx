import Flexible from '@/components/TopNaviBar/Flexible';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import MobileCollapsedSideBar from '../collapsed/MobileCollapsedSideBar';

const MobileTopNaviBar = () => {
  return (
    <div className="w-screen flex flex-col bg-gray-200 text-center dark:bg-black dark:text-white">
      <div className="h-10 sm:h-12 flex gap-1 sm:w-1/2 sm:m-auto items-center text-sm font-medium text-white dark:text-white">
        <Link className="w-16 sm:w-24 block bg-black" to="/">
          <img src="https://static.wikia.nocookie.net/residentevil/images/7/72/Umbrella-logo-bd.jpg" />
        </Link>
        <Flexible />
        <MobileCollapsedSideBar />
      </div>
      <div className="w-full h-8 bg-amber-400 flex justify-center items-center">
        <span className="flex w-40 sm:60 border-2 border-transparent rounded-sm hover:border-orange-400">
          <input
            className="w-32 h-6 sm:w-40 outline-none border-2 border-transparent rounded-l-sm text-black"
            placeholder="type keyword"
          />
          <Link
            className="w-10 h-6 sm:w-12 border-1 border-transparent rounded-r-sm bg-amber-500 hover:bg-amber-400"
            to="/products/search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default MobileTopNaviBar;
