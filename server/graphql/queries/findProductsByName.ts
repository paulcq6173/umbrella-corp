import Product from '@server/models/medicineModel';
import { GraphQLError } from 'graphql';

const typeDef = `
findProductsByName(keyword: String):[Medicine]
`;

const resolver = async (_root: string, args: { keyword: string }) => {
  const { keyword } = args;
  let result;

  try {
    result = await Product.find({ name: { $regex: keyword } });
  } catch (error) {
    throw new GraphQLError('GRAPHQL_VALIDATION_FAILED', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return result;
};

export default {
  typeDef,
  resolver,
};
