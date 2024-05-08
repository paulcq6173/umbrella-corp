import User from '@server/models/userModel';
import cursorPaginate, {
  OrderDirection,
  createCursor,
} from '@server/utils/pagination/cursorPaginate';
import { GraphQLError } from 'graphql';

const typeDefs = `
  extend type Query {
    """
    Returns paginated users.
    """
    allUsers(first: Int after: String): UserConnection!
  }
`;

const resolver = async (
  _root: string,
  args: { first: number; after: string }
) => {
  const { first, after } = args;

  if (first < 0) throw new Error('first must be positive');

  let response;

  const options = {
    limit: first || 10,
    sort: { createdAt: 'desc' },
  };

  try {
    const result = await User.paginate({}, options);

    const docArray = result.docs.map((node) => ({
      node,
      cursor: createCursor(node.createdAt, [
        { orderDirection: OrderDirection.DESC },
      ]),
    }));

    const orderOptions = {
      after,
    };

    response = cursorPaginate(result, docArray, orderOptions);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'GRAPHQL_VALIDATION_FAILED',
        },
      });
    }
    throw new Error('Unexpected Error occured when query all users');
  }

  return response;
};

export default {
  typeDefs,
  resolver,
};
