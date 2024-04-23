const Footer = () => {
  return (
    <div className="w-screen bg-gray-600 dark:bg-black">
      <div className="bg-slate-600">
        <h3 className="text-center font-medium text-green-600 bg-white dark:text-lime-200 dark:bg-black">
          Our Missions
        </h3>
        <ul className="list-disc list-inside text-sm sm:text-base dark:text-stone-200">
          <li>Protecting the Health of the People</li>
          <li>Our Business is Life Itself</li>
          <li>
            Obedience Breeds Discipline, Discipline Breeds Unity, Unity Breeds
            Power, Power is Life
          </li>
          <li>Science for a comfortable life</li>
        </ul>
      </div>
      <div className="text-sm text-black dark:text-white">
        <p className="text-center">
          © 1980-2024 <strong>Umbrella Corp & Capcom</strong>. All Rights
          Reserved
        </p>
        <h3 className="font-medium">Collaboration Partnership</h3>
        <ul>
          <li className="text-zinc-300">WP Corporation</li>
          <li className="text-green-300">TRICELL Inc.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
