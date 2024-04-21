import ProductCard from '@/components/ProductCard';
import { Products } from '@/dummyData';

const SearchResultPage = () => {
  return (
    <div className="w-screen bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-red-600 font-bold text-center">
          All Popular Products
        </h1>
        <div className="w-full flex flex-col gap-1.5 dark:gray-400 p-1">
          {Products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
