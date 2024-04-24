import TopMessageBoard from '@/components/TopMessageBoard';
import UmbrellaLabel from '@/components/UmbrellaLabel';
import useField from '@/hooks/useField';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const useUsername = useField('username');
  const usePassword = useField('password');

  const submitLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-1 flex flex-col gap-1.5 sm:gap-2 z-0">
      <TopMessageBoard />

      <div className="w-11/12 sm:w-4/5 md:w-6/7 lg:w-[800px] h-48 m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
        <h2 className="italic text-sm sm:text-base text-red-800 text-center bg-black">
          Umbrella System Control
        </h2>
        <UmbrellaLabel title="SignIn" />
        <form className="md:flex md:flex-col md:gap-1.5" onSubmit={submitLogin}>
          <div className="ml-1 grid-cols-1 sm:grid sm:grid-cols-3">
            <div className="italic sm:col-span-1 md:text-right">
              <label>User</label>
            </div>
            <div className="md:pl-2">
              <input
                className="w-40 sm:w-48 border-2 border-red-600 rounded-sm outline-none drop-shadow-sm"
                {...useUsername}
              />
            </div>
          </div>
          <div className="ml-1 grid-cols-1 sm:grid sm:grid-cols-3">
            <div className="italic sm:col-span-1 md:text-right">
              <label>Password</label>
            </div>
            <div className="md:pl-2">
              <input
                className="w-40 sm:w-48 border-2 border-red-600 rounded-sm outline-none w-11/12 drop-shadow-sm"
                {...usePassword}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="w-20 mt-2 p-0.5 border-2 rounded-sm border-black bg-red-800 text-white hover:bg-red-600">
              {t('SignIn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
