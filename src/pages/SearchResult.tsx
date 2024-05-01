import { TProduct } from '@/@types/types';
import { SendNotify } from '@/components/NotifyHandler';
import ProductCard from '@/components/ProductCard';
import { GET_PRODUCTS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';

const SearchResultPage = () => {
  const { data, loading } = useQuery(GET_PRODUCTS, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800">
        <p className="text-red-600 font-bold text-center">Loading</p>
      </div>
    );
  }

  if (!data.allProducts) {
    return (
      <div className="bg-white dark:bg-gray-800 h-48">
        <p className="text-red-600 font-bold text-center">No data</p>
      </div>
    );
  }

  const allProducts: Array<TProduct> = data.allProducts;

  return (
    <div className="w-screen bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-red-600 font-bold text-center">
          All Popular Products
        </h1>
        <div className="bg-gray-400 dark:bg-gray-600 pt-1 pb-1 flex flex-col gap-1">
          {allProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
