//import Locales from '@/components/sub-components/dropdown/Locales';
import Collapsible from '@/mobile/collapsed/Collapsible';
//import { setOption } from '@/reducers/filterSlice';
//import { useAppDispatch } from '@/reducers/reduxHooks';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MobileCollapsedSideBar = () => {
  const { t } = useTranslation();
  //const dispatch = useAppDispatch();
  /*const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(setOption({ options: { category: e.currentTarget.value } }));
  };*/

  return (
    <Collapsible>
      <div className="w-screen flex flex-col bg-white text-center dark:bg-gray-800 dark:text-white">
        <Link className="w-12 h-auto block" to="/">
          <img
            className="object-cover"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ef2de4b-0e30-4c7b-b332-7cb148208bba/d6a05is-e5579d37-35ce-499c-8f47-740006b50b66.png/v1/fill/w_300,h_250/umbrella_logo___stock_by_mughalrox_d6a05is-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvNmVmMmRlNGItMGUzMC00YzdiLWIzMzItN2NiMTQ4MjA4YmJhXC9kNmEwNWlzLWU1NTc5ZDM3LTM1Y2UtNDk5Yy04ZjQ3LTc0MDAwNmI1MGI2Ni5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4xfcCREuQ5NB2J4GyL-TYha47oCO-KOVn-xG4t5lBzE"
          />
        </Link>
      </div>
      <p className="w-full bg-red-700 text-white text-center">Setting</p>
      <Link
        className="block text-center text-black text-sm bg-red-600 no-underline text-base hover:bg-red-400"
        to="/products/search"
      >
        {t('PopularItem')}
      </Link>
      <button className="w-full bg-red-600 hover:bg-red-400" value="Books">
        <Link
          className="text-black text-sm no-underline text-base"
          to="/products/search"
        >
          {t('PersonalCare')}
        </Link>
      </button>
      <button className="w-full bg-red-600 hover:bg-red-400" value="Videos">
        <Link
          className="text-black text-sm no-underline text-base"
          to="/products/search"
        >
          {t('HealthCare')}
        </Link>
      </button>
      <button className="w-full bg-red-600 hover:bg-red-400" value="Games">
        <Link
          className="text-black text-sm no-underline text-base"
          to="/products/search"
        >
          {t('Medical')}
        </Link>
      </button>
      <button className="w-full bg-red-600 hover:bg-red-400" value="Games">
        <Link className="text-black text-sm no-underline text-base" to="/about">
          {t('About')}
        </Link>
      </button>
    </Collapsible>
  );
};

export default MobileCollapsedSideBar;
