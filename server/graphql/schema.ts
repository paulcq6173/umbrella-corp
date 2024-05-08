import createBOW from '@server/graphql/mutations/createBOW';
import findProductById from '@server/graphql/queries/findProductById';
import OrderDirections from './enums/OrderDirections';
import createProduct from './mutations/createProduct';
import createProject from './mutations/createProject';
import createUser from './mutations/createUser';
import employeeMutation from './mutations/employeeMutation';
import login from './mutations/login';
import updateUser from './mutations/updateUser';
import allProducts from './queries/allProducts';
import allProjects from './queries/allProjects';
import allUsers from './queries/allUsers';
import findProjectById from './queries/findProjectById';
import PageInfo from './types/PageInfo';
import Product from './types/Product';
import ProductConnection from './types/ProductConnection';
import User from './types/User';
import UserConnection from './types/UserConnection';

const typeDefs = `
  type BOWProject {
    id: ID!
    projectName: String!
    description: String!
    models: [BOW!]!
    createdAt: String!
    updatedAt: String
  }

  type BOW {
    codeName: String!
    version: String!
    based: [String]
    height: String
    mass: String
    createdVia: [String]
    characteristics: String!
    experimentalType: Boolean!
    massProducted: Boolean!
    imgUrl: String!
  }

  type Employee {
    organizationName: String!
    employeeName: String!
    employeeNumber: String!
    sex: String!
    unit: String!
    idCard: UmIDCard!
    id: ID!
  }

  type UmIDCard {
    cardNumber: Int!
    securityLevel: String!
  }

  type Token {
    value: String!
  }

  ${User.typeDefs}
  ${UserConnection.typeDefs}
  ${Product.typeDefs}
  ${ProductConnection.typeDefs}
  ${PageInfo.typeDefs}
  ${OrderDirections.typeDefs}

  type Query {
    projectCount: Int
    bowCount: Int
    userCount: Int
    ${findProjectById.typeDef}
    findUser(id: ID!): User
    findEmployee(employeeName: String!): Employee
    me: User
  }

  ${allUsers.typeDefs}
  ${allProducts.typeDefs}
  ${findProductById.typeDefs}
  ${allProjects.typeDef}

  input UmIDCardInput {
    cardNumber: Int!
    securityLevel: String!
  }

  input updateOrganizationInput {
    organizationName: String
    employeeName: String!
    employeeNumber: String
    sex: String
    unit: String
    idCard: UmIDCardInput
  }

  input productInfoInput {
    pulishedDate: String!
    manufacturer: String!
  }

  type Mutation {
    ${createProduct.typeDef}
    ${createProject.typeDef}
    ${createBOW.typeDef}
    ${createUser.typeDef}
    ${updateUser.typeDef}
    ${employeeMutation.typeDef}
    ${login.typeDef}
  }
`;

export default typeDefs;
