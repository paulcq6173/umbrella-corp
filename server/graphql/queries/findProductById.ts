import Product from '@server/models/medicineModel';
import { GraphQLError } from 'graphql';

const typeDef = `
findProductById(gtin: String):Medicine
`;

const resolver = async (_root: string, args: { gtin: string }) => {
  const { gtin } = args;
  let result;

  try {
    if (gtin) {
      result = await Product.findOne({ gtin });
    }
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
