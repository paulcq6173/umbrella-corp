import { AllProjectsOrderBy } from '@/gql/graphql';
import Project from '@server/models/projectModel';
import cursorPaginate, {
  createCursor,
} from '@server/utils/pagination/cursorPaginate';
import limitValidator from '@server/utils/pagination/limitValidator';
import normalizeOrderBy from '@server/utils/pagination/normalizeOrderBy';
import { GraphQLError } from 'graphql';

const typeDef = `
  enum AllProjectsOrderBy {
    createdAt
  }

  extend type Query {
    """
    Returns paginated projects.
    """
    allProjects(
      first: Int
      after: String
      orderDirection: OrderDirection
      orderBy: AllProjectsOrderBy
      searchKeyword: String
    ): ProjectConnection
  }
`;

interface IProjectArgs {
  first?: number;
  after?: string;
  orderDirection?: string;
  orderBy?: string;
  searchKeyword?: string;
}

const resolver = async (_root: string, args: IProjectArgs) => {
  const { first, after, orderDirection, searchKeyword } = args;
  const limit: number = limitValidator(first);
  const direction: string = normalizeOrderBy(orderDirection);
  let response;
  const sort = { column: AllProjectsOrderBy.CreatedAt, direction };
  let query = {};

  if (searchKeyword) {
    query = {
      $or: [
        { projectName: { $regex: searchKeyword } },
        { description: { $regex: searchKeyword } },
      ],
    };
  }

  // The sort method provided by mongoose plugin
  // didn't work as I expected, so just remove it.
  const options = {
    limit,
    populate: 'models',
  };

  // other options for cursorPaginate handling.
  const orderOptions = {
    after: after || '',
  };

  try {
    const result = await Project.paginate(query, options);
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
    }

    const docsWithCursor = rawDocs.map((node) => ({
      node,
      cursor: createCursor(node.createdAt),
    }));

    response = cursorPaginate(result, docsWithCursor, orderOptions);
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected Error occured when query all projects';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }

  return response;
};

export default { typeDef, resolver };
