const HomePage = () => {
  return (
    <div className="w-screen flex flex-col justify-center bg-gray-200 dark:text-white dark:bg-gray-800">
      <h2>Welcome to Umbrella</h2>
      <p className="text-sm font-medium sm:text-base">
        Research is life itself
      </p>
      <hr className="w-4/5 m-auto" />
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
