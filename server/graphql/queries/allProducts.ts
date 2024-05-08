import Product from '@server/models/productModel';
import cursorPaginate, {
  OrderDirection,
  createCursor,
} from '@server/utils/pagination/cursorPaginate';
import { GraphQLError } from 'graphql';

const typeDefs = `
  enum AllProductsOrderBy {
    createdAt
    averageRatings
  }

  extend type Query {
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
  first: number;
  after?: string;
  orderDirection?: OrderDirection;
  orderBy?: string;
  searchKeyword?: string;
}

// TODO:averageRatings field, enum AllProductsOrderBy not applied
const resolver = async (_root: string, args: IProductsArgs) => {
  const { first, after, orderDirection, orderBy, searchKeyword } = args;

  if (first < 0) throw new Error('first must be positive');

  let response;
  let sort = {};
  let query = {};
  const directionValue = orderDirection === 'asc' ? 'asc' : 'desc';

  if (searchKeyword) {
    query = {
      $or: [
        { name: { $regex: searchKeyword } },
        { slogan: { $regex: searchKeyword } },
      ],
    };
  }

  if (orderBy !== 'createdAt') {
    sort = { averageRatings: directionValue };
  } else {
    sort = { createdAt: directionValue };
  }

  const options = {
    limit: first || 10,
    sort,
  };

  try {
    const result = await Product.paginate(query, options);

    const docArray = result.docs.map((node) => ({
      node,
      cursor: createCursor(node.createdAt, [
        {
          orderDirection:
            directionValue === 'desc'
              ? OrderDirection.DESC
              : OrderDirection.ASC,
        },
      ]),
    }));

    const orderOptions = {
      after: after || '',
    };

    response = cursorPaginate(result, docArray, orderOptions);
  } catch (error) {
    if (error instanceof Error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'GRAPHQL_VALIDATION_FAILED',
        },
      });
    }
    throw new Error('Unexpected Error occured when query all products');
  }

  return response;
};

export default {
  typeDefs,
  resolver,
};
