import NotByAI from './NotByAI';

const Footer = () => {
  return (
    <div className="w-screen h-1/3 sm:h-4/6 bg-gray-600 dark:bg-slate-900">
      <label className="pt-4 flex justify-center">
        <NotByAI />
      </label>

      <div className="flex flex-col gap-4 text-sm text-black">
        <div className="text-center dark:text-white">
          © 1980-2024 <strong>Umbrella Corp & Capcom</strong>. All Rights
          Reserved
        </div>
        <div className="w-full flex justify-center gap-2 bg-slate-800">
          <div>
            <h3 className="italic font-medium text-red-600">Subsidiaries</h3>
            <ul className="style-inside">
              <li className="text-zinc-300">Umbrella U.S.A.</li>
              <li className="text-zinc-300">Umbrella Europe</li>
              <li className="text-zinc-300">Umbrella Japan</li>
            </ul>
          </div>
          <div>
            <h3 className="italic font-medium text-red-600">
              Collaboration Partnership
            </h3>
            <ul className="style-inside">
              <li className="text-zinc-300">WP Corporation</li>
              <li className="text-green-300">TRICELL Inc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
