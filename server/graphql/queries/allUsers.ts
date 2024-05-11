import User from '@server/models/userModel';
import cursorPaginate, {
  createCursor,
} from '@server/utils/pagination/cursorPaginate';
import limitValidator from '@server/utils/pagination/limitValidator';
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
  const limit: number = limitValidator(first);
  let response;

  const options = {
    limit,
  };

  const orderOptions = {
    after,
  };

  try {
    const result = await User.paginate({}, options);
    const rawDocs = [...result.docs].sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );

    const docArray = rawDocs.map((node) => ({
      node,
      cursor: createCursor(node.createdAt),
    }));

    response = cursorPaginate(result, docArray, orderOptions);
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query all users';
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
