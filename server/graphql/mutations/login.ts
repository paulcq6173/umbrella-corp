import { TLoginInfo } from '@/@types/types';
import User from '@server/models/userModel';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

const typeDef = `
login(
    username: String!
    password: String!
  ): Token
`;

const resolver = async (_root: string, args: TLoginInfo) => {
  try {
    const foundUser = await User.findOne({ username: args.username });

    if (!foundUser) {
      throw new GraphQLError('User not found');
    }
    const validated = bcrypt.compareSync(args.password, foundUser.passwordHash);

    if (!validated) {
      throw new GraphQLError('validatation failed', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }

    const payload = {
      username: foundUser.username,
      id: foundUser._id,
    };

    const secret = import.meta.env.VITE_JWT_SEC;

    const token = jwt.sign(payload, secret, { expiresIn: '1d' });
    return { value: token };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to validate';
    throw new GraphQLError(message, {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }
};

export default {
  typeDef,
  resolver,
};
