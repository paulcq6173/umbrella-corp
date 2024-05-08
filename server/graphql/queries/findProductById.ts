import Product from '@server/models/productModel';
import { GraphQLError } from 'graphql';

export const typeDefs = `
  extend type Query {
    """
    Returns product by an id.
    """
    findProductById(id: ID!): Product
  }
`;

export const resolver = async (_root: string, args: { id: string }) => {
  let response;

  const options = { pagination: false };

  try {
    response = await Product.paginate({ gtin: args.id }, options);
  } catch (error) {
    if (error instanceof Error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'GRAPHQL_VALIDATION_FAILED',
        },
      });
    }
    throw new Error('Unexpected Error occured when query the product');
  }

  return response.docs[0];
};

export default {
  typeDefs,
  resolver,
};
