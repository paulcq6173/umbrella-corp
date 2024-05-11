import Product from '@server/models/productModel';
import cursorPaginate, {
  createCursor,
} from '@server/utils/pagination/cursorPaginate';
import limitValidator from '@server/utils/pagination/limitValidator';
import normalizeOrderBy from '@server/utils/pagination/normalizeOrderBy';
import { GraphQLError } from 'graphql';

const typeDefs = `
  enum AllProductsOrderBy {
    createdAt
    averageRatings
  }

  extend type Query {
    """
    Returns paginated products.
    """
    allProducts(
      first: Int
      after: String
      orderDirection: OrderDirection
      orderBy: AllProductsOrderBy
      searchKeyword: String
    ): ProductConnection!
  }
`;

interface IProductsArgs {
  first?: number;
  after?: string;
  orderDirection?: string;
  orderBy?: string;
  searchKeyword?: string;
}

// TODO:averageRatings field, enum AllProductsOrderBy not applied
const resolver = async (_root: string, args: IProductsArgs) => {
  const { first, after, orderDirection, orderBy, searchKeyword } = args;
  const limit: number = limitValidator(first);
  const direction: string = normalizeOrderBy(orderDirection);

  let response;
  let sort;
  let query = {};

  if (searchKeyword) {
    query = {
      $or: [
        { name: { $regex: searchKeyword } },
        { slogan: { $regex: searchKeyword } },
      ],
    };
  }

  if (orderBy === 'createdAt') {
    sort = { column: 'createdAt', direction };
  } else {
    sort = { column: 'ratings', direction };
  }

  const options = { limit };
  const orderOptions = {
    after: after || '',
  };

  try {
    const result = await Product.paginate(query, options);
    const rawDocs = [...result.docs];

    switch (sort.column) {
      case 'createdAt':
        if (direction === 'desc') {
          rawDocs.sort(
            (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
          );
        } else {
          rawDocs.sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          );
        }
        break;
      case 'averageRatings':
        if (direction === 'desc') {
          rawDocs.sort((a, b) => b.ratings - a.ratings);
        } else {
          rawDocs.sort((a, b) => a.ratings - b.ratings);
        }
        break;
    }

    const docArray = rawDocs.map((node) => ({
      node,
      cursor: createCursor(node.createdAt),
    }));

    response = cursorPaginate(result, docArray, orderOptions);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query all products';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }

  return response;
};

export default {
  typeDefs,
  resolver,
};
