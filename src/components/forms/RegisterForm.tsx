import useField from '@/hooks/useField';
import { useTranslation } from 'react-i18next';

const Notify = () => {
  return (
    <div className="w-11/12 m-auto p-1 sm:w-4/5 flex flex-col border-2 rounded-sm bg-slate-200">
      <h3 className="text-amber-500 font-bold text-center">Message Board</h3>
      <p className="text-sm sm:text-base font-medium">Dear Customer:</p>
      <p className="text-xs sm:text-sm text-red-600">
        The sign up feature currently disabled due to some problems.
      </p>
    </div>
  );
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const useUsername = useField('username');
  const usePassword = useField('password');

  const submitRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-1 flex flex-col gap-1.5">
      <Notify />

      <div className="w-11/12 sm:w-4/5 md:w-6/7 lg:w-[800px] h-48 m-auto border-2 rounded-sm border-slate-800 bg-white dark:bg-slate-200">
        <h2 className="italic text-sm sm:text-base text-red-800 text-center bg-black">
          Umbrella System Control
        </h2>
        <h3 className="text-sm sm:text-base font-bold text-center">
          {t('SignUp')}
        </h3>
        <form onSubmit={submitRegister}>
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
              {t('SignUp')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
