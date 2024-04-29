import { ICreateBOW } from '@/@types/types';
import BOW from '@server/models/bowModel';
import Project from '@server/models/projectModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  createBOW(
    projectName: String!
    codeName: String!
    version: String!
    based: [String]
    height: String
    mass: String
    createdVia: [String]
    characteristics: String!
    experimentalType: Boolean!
    massProducted: Boolean!
    imgUrl: String!
  ): BOW
`;

const resolver = async (_root: unknown, args: ICreateBOW) => {
  const { characteristics, projectName } = args;

  const foundFile = await BOW.findOne({ characteristics });
  if (foundFile) {
    throw new GraphQLError('Duplicate file, create request rejected', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  const foundProject = await Project.findOne({
    projectName,
  });

  if (!foundProject) {
    throw new GraphQLError('Incorrect project name, please check again', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  let newBOW;

  try {
    newBOW = new BOW({ ...args, createdAt: new Date().toLocaleString() });

    await newBOW.save();

    foundProject.models = foundProject.models.concat(newBOW.id);
    await foundProject.save();
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return newBOW;
};

export default { resolver, typeDef };
