import { ICreateProject, IProjectSchema } from '@/@types/types';
import Project from '@server/models/projectModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  createProject(
    projectName: String!
    description: String!
  ): BOWProject
`;

const resolver = async (_root: unknown, args: ICreateProject) => {
  const { projectName } = args;

  const foundProject: IProjectSchema | null = await Project.findOne({
    projectName,
  });

  // Duplicated project
  if (foundProject) {
    throw new GraphQLError('Project already exists, request rejected', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  let newProject;

  try {
    newProject = new Project({
      ...args,
      createdAt: new Date().toLocaleString(),
    });

    await newProject.save();
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return newProject;
};

export default { resolver, typeDef };
