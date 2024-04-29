import Project from '@server/models/projectModel';
import { GraphQLError } from 'graphql';

const resolver = async () => {
  let allProjects;

  try {
    allProjects = await Project.find().populate('models');
  } catch (error) {
    if (error instanceof Error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'GRAPHQL_VALIDATION_FAILED',
        },
      });
    }
    throw new Error('Unexpected Error occured when query all projects');
  }

  return allProjects;
};

export default { resolver };
