import { ISortProps } from '@/@types/types';
import { AllProjectsOrderBy, OrderDirection } from '@/gql/graphql';
import { debounce } from 'lodash';
import { Dispatch, SetStateAction, useRef } from 'react';

const SearchInterface = ({
  keyword,
  setKeyword,
  sortOption,
  setSortOption,
}: {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  sortOption: ISortProps;
  setSortOption: Dispatch<SetStateAction<ISortProps>>;
}) => {
  const orderByDefault = {
    column: AllProjectsOrderBy.CreatedAt,
    direction: OrderDirection.Desc,
  };
  const tempRef = useRef<string>('');
  const debouncedSave = useRef(
    debounce((value: string) => setKeyword(value), 2000)
  ).current;
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { value } = target;
    tempRef.current = value;
    // Even though handleChange is created on each render and executed,
    // it references the same debouncedSave that was created initially.
    debouncedSave(tempRef.current);
  };

  return (
    <div className="w-full pl-2">
      <h3 className="text-sm sm:text-base font-medium">Sort Option</h3>
      <div className="flex space-x-2 text-red-600">
        <div>
          <input
            id="oldest"
            className="peer/oldest"
            type="radio"
            checked={sortOption.direction === OrderDirection.Asc}
            onChange={() =>
              setSortOption({
                ...orderByDefault,
                direction: OrderDirection.Asc,
              })
            }
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
            checked={sortOption.direction === OrderDirection.Desc}
            onChange={() => setSortOption(orderByDefault)}
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
          defaultValue={keyword}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchInterface;
