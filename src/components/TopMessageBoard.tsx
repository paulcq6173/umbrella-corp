import { useLocation } from 'react-router-dom';

const TopMessageBoard = () => {
  const { pathname } = useLocation();
  const label = 'Message Board';
  let mesTitle = 'For all new employees:';
  let description = 'Welcome on board!';

  if (pathname.includes('signup')) {
    mesTitle = 'Dear Customer:';
    description =
      'The sign up service currently disabled due to some problems.';
  } else if (pathname.includes('archives')) {
    mesTitle = 'All files are properties of umbrella corporation';
    description =
      'Requested file content as following, remember that you are not allowed to copy them:';
  }

  return (
    <div className="w-11/12 m-auto p-1 sm:w-4/5 flex flex-col border-2 rounded-sm bg-slate-200">
      <h3 className="text-amber-500 font-bold text-center">{label}</h3>
      <p className="text-sm sm:text-base font-medium">{mesTitle}</p>
      <p className="text-xs sm:text-sm text-red-600">{description}</p>
    </div>
  );
};

export default TopMessageBoard;
