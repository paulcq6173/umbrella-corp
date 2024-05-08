const Materials = () => {
  return (
    <div className="w-screen h-1/2 italic bg-slate-200 text-black dark:text-white dark:bg-black text-sm sm:text-base">
      <div className="w-11/12 m-auto no-underline">
        <h2 className="text-red-600">Source Materials:</h2>
        <ul className="list-inside">
          <li>https://residentevil.fandom.com</li>
          <li>https://www.deviantart.com</li>
          <li>https://www.amazon.com/</li>
          <li>https://wallpapercave.com</li>
        </ul>
        <label>Illustrators</label>
        <ul className="list-inside">
          <li>https://www.deviantart.com/lenstu82</li>
          <li>https://www.deviantart.com/mantisverde</li>
          <li>https://www.deviantart.com/deadward0</li>
        </ul>
      </div>
    </div>
  );
};

export default Materials;
