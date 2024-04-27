const HomePage = () => {
  return (
    <div className="w-screen flex flex-col justify-center bg-gray-200 dark:text-white dark:bg-gray-800">
      <h2 className="italic text-red-600 text-center">Welcome to Umbrella</h2>
      <div className="md:grid md:grid-cols-3">
        <div className="md:col-span-1 md:p-1">
          <img
            className="border-2 border-transparent rounded-sm md:block"
            src="/images/umb_lobby.jpg"
          />
        </div>
        <div className="md:col-span-1 md:p-1">
          <img
            className="border-2 border-transparent rounded-sm hidden md:block"
            src="/images/umb_intro_larger.jpg"
          />
        </div>
        <div className="text-sm sm:text-base italic text-yellow-600">
          <ul className="style-inside">
            <li>Research is life itself</li>
            <li>Biotech and AI lead to new world of humankind</li>
            <li>scientia potentia est</li>
          </ul>
        </div>
      </div>
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
      <div className="text-sm sm:text-base">
        <h3 className="font-medium text-red-800 sm:text-md text-center">
          History of Umbrella
        </h3>
        <p>
          The origins of the Umbrella Corporation lie with the eugenics
          movements that dominated Europe and North American debate in the early
          20th century. Its three most prominent founding members were Dr.
          Oswell E. Spencer, The Earl Spencer; Dr. Edward Ashford, 5th Earl
          Ashford, and Dr. James Marcus, who were university classmates, with
          further early work from Marcus' protégé, Brandon Bailey; the 16th Earl
          Beardsley and his daughter, Mylène; and France's House of Henry, of
          which Christine and her father belonged. All were virologists with
          some associations with the eugenics movement either themselves or by
          association to another prominent figure.
        </p>
        <p>
          Umbrella's immediate pre-history truly begins in 1966, when Dr. Marcus
          developed a hypothesis that a mythical West African flower known as
          Stairway of the Sun bestowed powers to its consumers by a mutagenic
          viral infection. In a trip to the Ndipaya tribal lands, the fabled
          flower was discovered in an underground garden and a virus discovered
          within it.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
