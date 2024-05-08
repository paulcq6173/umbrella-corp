import NotifyHandler from '@/components/NotifyHandler';
import TopMessageBoard from '@/components/UmSysCtrl/TopMessageBoard';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
  const { t } = useTranslation();
  const useUsername = useRef<string>('');
  const usePassword = useRef<string>('');

  const submitRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-1 flex flex-col gap-1.5 z-0">
      <TopMessageBoard />

      <div className="w-11/12 h-48 sm:w-4/5 md:w-6/7 lg:w-[800px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
        <h2 className="italic text-sm sm:text-base text-red-600 text-center bg-black">
          {t(`System.CTRL`, { ns: 'umbrellaSecurity' })}
        </h2>
        <UmbrellaLabel title="SignUp" />
        <form
          className="md:flex md:flex-col md:gap-1.5"
          onSubmit={submitRegister}
        >
          <div className="ml-1 grid-cols-1 sm:grid sm:grid-cols-3">
            <div className="italic sm:col-span-1 md:text-right">
              <label>{t('User', { ns: 'umbrellaSecurity' })}</label>
            </div>
            <div className="md:pl-2">
              <input
                className="w-40 sm:w-48 border-2 border-red-600 rounded-sm outline-none drop-shadow-sm"
                type="username"
                defaultValue={useUsername.current}
                onChange={({ target }) => (useUsername.current = target.value)}
              />
            </div>
          </div>
          <div className="ml-1 grid-cols-1 sm:grid sm:grid-cols-3">
            <div className="italic sm:col-span-1 md:text-right">
              <label>{t('Password', { ns: 'umbrellaSecurity' })}</label>
            </div>
            <div className="md:pl-2">
              <input
                className="w-40 sm:w-48 border-2 border-red-600 rounded-sm outline-none w-11/12 drop-shadow-sm"
                type="password"
                defaultValue={usePassword.current}
                onChange={({ target }) => (usePassword.current = target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="w-20 mt-2 p-0.5 border-2 rounded-sm border-black bg-red-800 text-white hover:bg-red-600">
              {t('SignUp')}
            </button>
          </div>
        </form>
        <NotifyHandler />
      </div>
    </div>
  );
};

export default RegisterForm;
