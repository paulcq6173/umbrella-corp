import { Dispatch, SetStateAction, useRef } from 'react';

const SearchInterface = ({
  sortOption,
  setSortOption,
}: {
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
}) => {
  const useSearch = useRef<string>('');

  return (
    <div className="w-full pl-2">
      <h3 className="text-sm sm:text-base font-medium">Sort Option</h3>
      <div className="flex space-x-2 text-red-600">
        <div>
          <input
            id="oldest"
            className="peer/oldest"
            type="radio"
            value="DATE_ASC"
            checked={sortOption === 'DATE_ASC'}
            onChange={() => setSortOption('DATE_ASC')}
          />
          <label
            htmlFor="oldest"
            className="peer-checked/oldest:text-green-600"
          >
            Oldest
          </label>
        </div>
        <div>
          <input
            id="latest"
            className="peer/latest"
            type="radio"
            value="DATE_DESC"
            checked={sortOption === 'DATE_DESC'}
            onChange={() => setSortOption('DATE_DESC')}
          />
          <label
            htmlFor="latest"
            className="peer-checked/latest:text-green-600"
          >
            Latest
          </label>
        </div>
      </div>
      <div>
        <input
          className="peer w-5/6 border-2 rounded-sm border-red-800 focus:border-red-600 outline-none"
          placeholder="type name / title"
          type="search"
          defaultValue={useSearch.current}
          onChange={({ target }) => (useSearch.current = target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInterface;
