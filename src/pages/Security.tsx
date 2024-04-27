import UmbrellaLabel from '@/components/UmbrellaLabel';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen bg-black flex flex-col gap-1">
      <div className="mt-2 sm:w-4/5 m-auto border-2 border-transparent rounded-sm bg-yellow-200 text-black">
        <h3 className="font-bold text-red-800 text-center">Warning</h3>
        <p className="text-red-600">
          Those files contains images of explicit violence and gore.
        </p>
        <p className="text-red-600">
          If you are under the legal age, please leave.
        </p>
      </div>
      <div className="w-11/12 h-fit sm:w-4/5 md:w-6/7 lg:w-[800px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
        <div className="md:w-6/7 m-2 lg:w-[700px] border-2 border-transparent rounded-sm border-slate-400 bg-gray-200 opacity-90">
          <h2 className="italic text-sm sm:text-base text-red-800 text-center bg-black">
            {t('System.CTRL', { ns: 'umbrellaSecurity' })}
          </h2>
          <UmbrellaLabel title="File List" />
          <h2 className="italic text-center text-red-800 hover:text-red-600">
            Research Teams
          </h2>
          <ul className="list-none text-red-800">
            <li className="hover:text-red-600 hover:bg-orange-200">
              <label>Arklay Laboratory</label>
              <img
                className="object-fit w-24 sm:w-32"
                src="https://static.wikia.nocookie.net/residentevil/images/2/2c/Arklay_Staff.PNG"
                alt="Arklay lab"
              />
            </li>
            <li className="hover:text-red-600 hover:bg-orange-200">
              <label>NEST</label>
              <img
                className="object-fit w-24 sm:w-32"
                src="https://static.wikia.nocookie.net/residentevil/images/b/b3/Re2_cap11_lg.jpg"
                alt="underground lab"
              />
            </li>
            <li className="hover:text-red-600 hover:bg-orange-200">
              <label>Umbrella Europe</label>
              <img
                className="object-fit w-24 sm:w-32"
                src="/images/tumblr_30d83eee01c45ec47ad13373d385eb74_e8d81697_1280.jpg"
                alt="Europe lab"
              />
            </li>
          </ul>

          <ul className="style-inside italic text-sm sm:text-base text-red-800">
            <li className="hover:text-red-400 text-center">Cerberus</li>
            <Link
              className="hover:text-red-400"
              to="/security/project/7f1a21c6c8d5065f"
            >
              file:UM-001
            </Link>
            <li className="hover:text-red-400 text-center">Queen Leech</li>
            <Link
              className="hover:text-red-400"
              to="/security/project/8c3b48b6ac57289f"
            >
              file:UM-002
            </Link>
            <li className="hover:text-red-400 text-center">Tyrant</li>
            <Link
              className="hover:text-red-400"
              to="/security/project/596b9a3ab583856e"
            >
              file:UM-003
            </Link>
            <li className="hover:text-red-400 text-center">Hunters</li>
            <Link
              className="hover:text-red-400"
              to="/security/project/860404716c9df7a4"
            >
              file:UM-004
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
