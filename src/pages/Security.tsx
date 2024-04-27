import UmbrellaLabel from '@/components/UmbrellaLabel';
import { useTranslation } from 'react-i18next';

const SecurityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen">
      <img
        className="absolute z-0 block"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ec059d-1ba1-4412-8e28-3bdbe6905a84/ddszrht-92c642d1-c091-4bc1-8263-05eaf6881cc5.png/v1/fit/w_560,h_567,q_70,strp/outside_by_mantisverde_ddszrht-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY3IiwicGF0aCI6IlwvZlwvZDhlYzA1OWQtMWJhMS00NDEyLThlMjgtM2JkYmU2OTA1YTg0XC9kZHN6cmh0LTkyYzY0MmQxLWMwOTEtNGJjMS04MjYzLTA1ZWFmNjg4MWNjNS5wbmciLCJ3aWR0aCI6Ijw9NTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LUwjY-aVsp2cFEPHTtPXGNHIEhDpug6YkRppN-5ILTc"
      />
      <div className="z-1 w-11/12 sm:w-4/5 md:w-6/7 lg:w-[800px] h-48 m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
        <h2 className="italic text-sm sm:text-base text-red-800 text-center bg-black">
          {t('System.CTRL', { ns: 'umbrellaSecurity' })}
        </h2>
        <UmbrellaLabel title="File List" />
        <ul className="style-inside text-sm sm:text-base text-red-800">
          <li className="hover:text-red-400">Arklay Laboratory</li>
          <li className="hover:text-red-400">
            Raccoon City Underground Laboratory
          </li>
          <li className="hover:text-red-400">Antarctic Base</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityPage;
