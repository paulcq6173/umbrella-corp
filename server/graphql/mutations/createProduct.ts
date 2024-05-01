import { IMedicineSchema } from '@/@types/types';
import Medicine from '@server/models/medicineModel';
import { GraphQLError } from 'graphql';

const typeDef = `
  createProduct(
    gtin: String!
    name: String!
    slogan: String
    imgUrl: String!
    description: String!
    info: medicineInfoInput!
    genre: String!
    listPrice: Int!
    ratings: Int
  ):Medicine
`;

const resolver = async (_root: string, args: IMedicineSchema) => {
  let newProduct;

  try {
    newProduct = new Medicine({
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
