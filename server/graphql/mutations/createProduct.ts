import { IMedicineSchema } from '@/@types/types';
import Product from '@server/models/productModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  createProduct(
    gtin: String!
    name: String!
    slogan: String
    imgUrl: String!
    description: String!
    info: productInfoInput!
    genre: String!
    listPrice: Int!
    ratings: Int
  ):Product
`;

const resolver = async (_root: string, args: IMedicineSchema) => {
  let newProduct;

  try {
    newProduct = new Product({
      ...args,
      createdAt: new Date().toLocaleString(),
    });

    await newProduct.save();
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return newProduct;
};

export default {
  typeDef,
  resolver,
};
