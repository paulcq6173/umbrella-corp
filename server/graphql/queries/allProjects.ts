import Project from '@server/models/projectModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  extend type Query {
    """
    Returns paginated projects.
    """
    allProjects(first: Int): [BOWProject!]!
  }
`;

interface IProjectArgs {
  first?: number;
}

const resolver = async (_root: string, args: IProjectArgs) => {
  const first = args.first || 10;
  let response;

  if (first < 0) throw new Error('first must be positive');

  const options = {
    limit: first,
    populate: 'models',
  };

  try {
    const result = await Project.paginate({}, options);

    response = result.docs;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'GRAPHQL_VALIDATION_FAILED',
        },
      });
    }
    throw new Error('Unexpected Error occured when query all projects');
  }

  return response;
};

export default { typeDef, resolver };
