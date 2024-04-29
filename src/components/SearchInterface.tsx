import useField from '@/hooks/useField';
import { useState } from 'react';

const SearchInterface = () => {
  const [sortOption, setSortOption] = useState<string>('latest');
  const useSearch = useField('search');

  return (
    <div className="w-full pl-2">
      <h3 className="text-sm sm:text-base font-medium">Sort Option</h3>
      <div className="flex space-x-2 text-red-600">
        <div>
          <input
            id="oldest"
            className="peer/oldest"
            type="radio"
            value="oldest"
            checked={sortOption === 'oldest'}
            onChange={() => setSortOption('oldest')}
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
            value="latest"
            checked={sortOption === 'latest'}
            onChange={() => setSortOption('latest')}
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
          {...useSearch}
        />
      </div>
    </div>
  );
};

export default SearchInterface;
