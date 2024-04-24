import MobileTopNaviBar from '@/mobile/components/MobileTopNaviBar';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import UmbrellaLabel from './UmbrellaLabel';

const TopNaviBar = () => {
  const { t } = useTranslation();
  const isMobile: boolean = window.screen.width < 811;

  if (isMobile) {
    return <MobileTopNaviBar />;
  }

  return (
    <div className="w-screen flex flex-col bg-stone-200 text-center dark:bg-black dark:text-white">
      <div className="flex gap-1.5 justify-center items-center italic text-sm font-medium text-white dark:text-white">
        <Link className="w-24 block bg-black italic" to="/">
          <UmbrellaLabel title="Umbrella" />
        </Link>
        <Link
          className="p-0.5 border-2 border-slate-800 rounded bg-slate-400 dark:bg-red-800 hover:bg-red-600"
          to="/signin"
        >
          {t('SignIn')}
        </Link>
        <Link
          className="p-0.5 border-2 border-slate-800 rounded bg-slate-400 dark:bg-red-800 hover:bg-red-600"
          to="/signup"
        >
          {t('SignUp')}
        </Link>
        <Link
          className="p-0.5 border-2 border-slate-800 rounded bg-slate-400 dark:bg-red-800 hover:bg-red-600"
          to="recruitment"
        >
          {t('Recruitment')}
        </Link>
      </div>
      <div className="w-full h-8 bg-amber-400 flex justify-center items-center">
        <span className="flex w-40 sm:w-60 border-2 border-transparent rounded-sm hover:border-orange-400">
          <input
            className="w-32 h-6 sm:w-48 outline-none border-2 border-transparent rounded-l-sm text-black"
            placeholder="type keyword"
          />
          <Link
            className="w-10 h-6 sm:w-14 border-1 border-transparent rounded-r-sm bg-amber-500 hover:bg-amber-400"
            to="/products/search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TopNaviBar;
