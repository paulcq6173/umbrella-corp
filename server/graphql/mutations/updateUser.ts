import { IServerContext, IUpdateUserInfo } from '@/@types/types';
import User from '@server/models/userModel';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

const typeDef = `
updateUser(
    id: ID!
    password: String
    email: String
    phone: String
    fullName: String
  ): User
`;

const resolver = async (
  _root: string,
  args: IUpdateUserInfo,
  { currentUser }: IServerContext
) => {
  // Validated user allowed only
  if (!currentUser) {
    throw new GraphQLError('not authenticated', {
      extensions: {
        code: 'GRAPHQL_VALIDATION_FAILED',
      },
    });
  }

  const { id, email, phone, password, fullName } = args;
  let updatedUser: IUpdateUserInfo;

  try {
    // full-fledged validation is necessary
    const foundUser = await User.findById({ _id: id });

    if (!foundUser) {
      throw new GraphQLError('Invalid id, user data may has been deleted', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }

    if (password) {
      /*if (!passwordValidator(password)) {
          throw new GraphQLError('Password must atleast be 4 characters', {
            extensions: {
              code: 'BAD_USER_INPUT',
            },
          });
        }*/

      foundUser.passwordHash = await bcrypt.hash(password, 10);
    }

    foundUser.email = email ? email : foundUser.email;
    foundUser.phone = phone ? phone : foundUser.phone;
    foundUser.fullName = fullName ? fullName : foundUser.fullName;

    await foundUser.save();

    updatedUser = await foundUser.populate('Organization');
  } catch (error) {
    throw new GraphQLError('Invalid argument value', {
      extensions: {
        code: 'BAD_USER_INPUT',
      },
    });
  }

  return updatedUser;
};

export default {
  typeDef,
  resolver,
};
