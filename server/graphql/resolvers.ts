import {
  IEmployeeSchema,
  IRegUser,
  IServerContext,
  IUpdateUserInfo,
  TLoginInfo,
} from '@/@types/types';
import Organization from '@server/models/organizationModel';
import User from '@server/models/userModel';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

const passwordValidator = (password: string) => {
  return /\d{4}/.test(password);
};

const resolvers = {
  Query: {
    userCount: () => User.collection.countDocuments(),
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
      _root: unknown,
      _args: unknown,
      { currentUser }: IServerContext
    ) => currentUser,
  },
  Mutation: {
    createUser: async (_root: unknown, args: IRegUser) => {
      const { username, password } = args;

      if (!passwordValidator(password)) {
        throw new GraphQLError('Password must atleast be 4 characters', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }

      try {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({
          username,
          passwordHash,
          email: args.email || '',
          phone: args.phone || '',
          fullName: args.fullName || '',
          createdAt: new Date(),
        });
        await user.save();
        return user;
      } catch (error) {
        throw new GraphQLError('Invalid argument value', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }
    },
    updateUser: async (
      _root: unknown,
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
          if (!passwordValidator(password)) {
            throw new GraphQLError('Password must atleast be 4 characters', {
              extensions: {
                code: 'BAD_USER_INPUT',
              },
            });
          }

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
    },
    updateEmployee: async (
      _root: unknown,
      args: { content: IEmployeeSchema },
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

      const {
        organizationName,
        employeeName,
        employeeNumber,
        sex,
        unit,
        idCard,
      } = args.content;
      let updatedEmployee;

      try {
        const foundEmployee = await Organization.findOne({ employeeName });

        if (foundEmployee) {
          foundEmployee.organizationName = organizationName
            ? organizationName
            : foundEmployee.organizationName;
          foundEmployee.employeeName = employeeName
            ? employeeName
            : foundEmployee.employeeName;
          foundEmployee.employeeNumber = employeeNumber
            ? employeeNumber
            : foundEmployee.employeeNumber;
          foundEmployee.sex = sex ? sex : foundEmployee.sex;
          foundEmployee.unit = unit ? unit : foundEmployee.unit;
          foundEmployee.idCard = idCard ? idCard : foundEmployee.idCard;
          foundEmployee.updatedAt = new Date();

          foundEmployee.save();

          updatedEmployee = foundEmployee;
        } else {
          if (!employeeName) {
            throw new GraphQLError('employee name field must be filled', {
              extensions: {
                code: 'BAD_USER_INPUT',
              },
            });
          }
          const foundUser = await User.findOne({ fullName: employeeName });

          if (!foundUser) {
            throw new GraphQLError('User not exist in employee list', {
              extensions: {
                code: 'NOT_FOUND_ERROR',
              },
            });
          }

          const newEmployee = new Organization({
            organizationName,
            employeeName,
            employeeNumber,
            sex,
            unit,
            idCard,
            createdAt: new Date(),
          });

          await newEmployee.save();

          foundUser.organization = newEmployee.id;
          await foundUser.save();

          updatedEmployee = newEmployee;
        }
      } catch (error) {
        throw new GraphQLError('Invalid argument value', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }

      return updatedEmployee;
    },
    login: async (_root: unknown, args: TLoginInfo) => {
      try {
        const foundUser = await User.findOne({ username: args.username });

        if (!foundUser) {
          throw new GraphQLError('User not found');
        }
        const validated = bcrypt.compareSync(
          args.password,
          foundUser.passwordHash
        );

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
    },
  },
};

export default resolvers;
