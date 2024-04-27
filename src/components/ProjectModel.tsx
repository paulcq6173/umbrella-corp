import { IEModel } from '@/@types/types';

const ProjectModel = ({ model }: { model: IEModel }) => {
  const {
    codeName,
    version,
    characteristics,
    experimentalType,
    production,
    imgUrl,
  } = model;

  return (
    <div className="w-screen md:w-[800px] bg-slate-400 text-sm sm:text-base dark:bg-black dark:text-white">
      <div className="w-11/12 sm:6/7 m-auto border-2 rounded-sm bg-stone-400 dark:bg-slate-400">
        <div className="grid grid-cols-1 sm:grid-cols-2 p-1">
          <div className="col-span-1">
            <h1 className="text-red-800">Project / Experimental Code:</h1>
            <h2 className="dark:text-white">{codeName}</h2>
            <img src={imgUrl} alt="model photo" />
          </div>
          <div>
            <p>Model Version: {version}</p>
            <p>ExperimentalType: {experimentalType ? 'true' : 'false'}</p>
            <p>Mass-produced: {production ? 'true' : 'false'}</p>
          </div>
        </div>
        <div className="p-1">
          <h3 className="text-sm sm:text-base font-medium">characteristics</h3>
          <p>{characteristics}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;
