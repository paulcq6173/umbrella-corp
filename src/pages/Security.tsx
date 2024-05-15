import SecureDataUI from '@/components/SecureDataCenter';
import TopMessageBoard from '@/components/UmSysCtrl/TopMessageBoard';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen p-1 bg-black flex flex-col gap-1.5 sm:gap-2">
      <TopMessageBoard />
      <div className="w-11/12 h-fit gap-1 sm:w-4/5 md:w-6/7 lg:w-[800px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
        <div className="flex flex-col justify-center md:w-6/7 m-2 lg:w-[700px] border-2 border-transparent rounded-sm border-slate-400 bg-gray-200 opacity-90">
          <h2 className="italic text-sm sm:text-base text-red-600 text-center bg-black">
            {t('System.CTRL', { ns: 'umbrellaSecurity' })}
          </h2>
          <span className="text-black italic">
            {`For other documents, visit `}
            <Link className="text-orange-600" to="/security/archives">
              archives
            </Link>
            .
          </span>
          <SecureDataUI />
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
