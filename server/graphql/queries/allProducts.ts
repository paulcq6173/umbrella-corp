import Product from '@server/models/medicineModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  allProducts: [Medicine]
`;

const resolver = async () => {
  let allProducts;

  try {
    allProducts = await Product.find();
  } catch (error) {
    if (error instanceof Error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'GRAPHQL_VALIDATION_FAILED',
        },
      });
    }
    throw new Error('Unexpected Error occured when query all products');
  }

  return allProducts;
};

export default {
  typeDef,
  resolver,
};
