import { IProduct } from '@/@types/types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }: { item: IProduct }) => {
  const { t } = useTranslation();

  return (
    <div className="w-11/12 m-auto bg-gray-200 dark:bg-gray-600 text-white dark:text-white border-2 border-transparent rounded-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <div className="col-span-1 object-cover bg-slate-200">
          <img className="p-1" src={item.imgUrl} />
        </div>
        <div>
          <h3 className="text-base sm:text-md font-medium">{item.name}</h3>
        </div>
      </div>
      <div className="text-sm sm:text-base">
        {item.slogan && <p className="text-sm sm:text-base">{item.slogan}</p>}
        <p className="text-black dark:text-green-400">
          list price: ${item.listPrice} USD
        </p>
      </div>
      <div className="mb-1">
        <Link
          className="border-2 border-transparent rounded-sm bg-amber-500 hover:bg-yellow-400"
          to={`/products/${item.gtin}`}
        >
          {t('ProductDetails')}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;