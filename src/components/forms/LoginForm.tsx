import useField from '@/hooks/useField';
import { useTranslation } from 'react-i18next';

const Notify = () => {
  return (
    <div className="w-11/12 m-auto p-1 sm:w-4/5 flex flex-col border-2 rounded-sm bg-slate-200">
      <h3 className="text-amber-500 font-bold text-center">Message Board</h3>
      <p className="text-xs sm:text-sm text-red-600">
        This feature is now closed.
        <br />
        <strong>
          For employees, take your ID card and go to your department quickly.
        </strong>
      </p>
      <p className="text-xs sm:text-sm">
        If you have any question, please contact department manager.
      </p>
    </div>
  );
};

const LoginForm = () => {
  const { t } = useTranslation();
  const useUsername = useField('username');
  const usePassword = useField('password');

  const submitLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-1 flex flex-col gap-1.5 sm:gap-2">
      <Notify />

      <div className="w-11/12 sm:w-4/5 md:w-6/7 lg:w-[800px] h-48 m-auto border-2 rounded-sm border-slate-800 bg-white dark:bg-slate-200">
        <h2 className="italic text-sm sm:text-base text-red-800 text-center bg-black">
          Umbrella System Control
        </h2>
        <h3 className="text-sm sm:text-base font-bold text-center">
          {t('SignIn')}
        </h3>
        <form onSubmit={submitLogin}>
          <div className="ml-1 grid-cols-1 sm:grid sm:grid-cols-3">
            <div className="italic sm:col-span-1 md:text-right">
              <label>User</label>
            </div>
            <div className="md:pl-2">
              <input
                className="w-40 sm:w-48 border-2 rounded-sm outline-none drop-shadow-sm"
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
                className="w-40 sm:w-48 border-2 rounded-sm outline-none w-11/12 drop-shadow-sm"
                {...usePassword}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="mt-2 border-2 border-black bg-green-600 text-white hover:bg-green-400">
              {t('SignIn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
