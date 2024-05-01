import { IServerContext } from '@/@types/types';
import createBOW from '@server/graphql/mutations/createBOW';
import BOW from '@server/models/bowModel';
import Organization from '@server/models/organizationModel';
import Project from '@server/models/projectModel';
import User from '@server/models/userModel';
import { GraphQLError } from 'graphql';
import createProduct from './mutations/createProduct';
import createProject from './mutations/createProject';
import createUser from './mutations/createUser';
import employeeMutation from './mutations/employeeMutation';
import login from './mutations/login';
import updateUser from './mutations/updateUser';
import allProducts from './queries/allProducts';
import allProjects from './queries/allProjects';
import findProductById from './queries/findProductById';
import findProductsByName from './queries/findProductsByName';
import findProjectById from './queries/findProjectById';

const resolvers = {
  Query: {
    projectCount: () => Project.collection.countDocuments(),
    bowCount: () => BOW.collection.countDocuments(),
    userCount: () => User.collection.countDocuments(),
    allProducts: allProducts.resolver,
    findProductById: findProductById.resolver,
    findProductsByName: findProductsByName.resolver,
    allProjects: allProjects.resolver,
    findProjectById: findProjectById.resolver,
    allUsers: async () => {
      try {
        const users = await User.find({});

        return users;
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
    },
    findUser: async (_root: unknown, args: { id: string }) =>
      User.findOne({ _id: args.id }),
    findEmployee: async (_root: unknown, args: { employeeName: string }) => {
      const foundEmployee = await Organization.findOne({
        employeeName: args.employeeName,
      });

      return foundEmployee;
    },
    me: async (
      _root: string,
      _args: unknown,
      { currentUser }: IServerContext
    ) => currentUser,
  },
  Mutation: {
    createProduct: createProduct.resolver,
    createProject: createProject.resolver,
    createBOW: createBOW.resolver,
    createUser: createUser.resolver,
    updateUser: updateUser.resolver,
    updateOrCreateEmployee: employeeMutation.resolver,
    login: login.resolver,
  },
};

export default resolvers;
