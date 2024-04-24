import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MobileCollapsedSideBar from '../collapsed/MobileCollapsedSideBar';

const MobileTopNaviBar = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen flex flex-col bg-white text-center dark:bg-black dark:text-white">
      <div className="flex gap-1 justify-center items-center text-sm font-medium text-white dark:text-white">
        <Link className="w-16 block bg-black" to="/">
          <img src="https://static.wikia.nocookie.net/residentevil/images/7/72/Umbrella-logo-bd.jpg" />
        </Link>
        <Link to="/signin">{t('SignIn')}</Link>
        <Link to="/signup">{t('SignUp')}</Link>
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
