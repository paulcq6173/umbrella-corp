import createBOW from '@server/graphql/mutations/createBOW';
import createProduct from './mutations/createProduct';
import createProject from './mutations/createProject';
import createUser from './mutations/createUser';
import employeeMutation from './mutations/employeeMutation';
import login from './mutations/login';
import updateUser from './mutations/updateUser';
import allProducts from './queries/allProducts';
import allProjects from './queries/allProjects';
import findProductById from './queries/findProductById';
import findProductsByName from './queries/findProductsByName';
import findProjectById from './queries/findProjectById';

const typeDefs = `
  type MedicineInfo {
    pulishedDate: String!
    manufacturer: String!
  }

  type Medicine {
    gtin: String!
    name: String!
    slogan: String
    imgUrl: String!
    description: String!
    info: MedicineInfo!
    genre: String!
    listPrice: Int!
    ratings: Int
  }

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

  type User {
    username: String!
    email: String
    phone: String
    fullName: String
    id: ID!
  }

  type Token {
    value: String!
  }

  type Query {
    projectCount: Int
    bowCount: Int
    userCount: Int
    ${allProducts.typeDef}
    ${findProductById.typeDef}
    ${findProductsByName.typeDef}
    ${allProjects.typeDef}
    ${findProjectById.typeDef}
    allUsers: [User]
    findUser(id: ID!): User
    findEmployee(employeeName: String!): Employee
    me: User
  }

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

  input medicineInfoInput {
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
