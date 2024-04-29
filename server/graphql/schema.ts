import createBOW from '@server/graphql/mutations/createBOW';
import createProject from './mutations/createProject';

const typeDefs = `
  type BOWProject {
    projectName: String!
    description: String!
    models: [BOW!]!
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
    projectCount: Int!
    bowCount: Int!
    userCount: Int!
    allProjects: [BOWProject!]!
    allUsers: [User!]!
    findUser(id: ID!): User
    findEmployee(employeeName: String!): Employee
    me: User
  }

  input UmIDCardInput {
    cardNumber: Int!
    securityLevel: String!
  }

  input updateOrganizationInput {
    organizationName: String!
    employeeName: String!
    employeeNumber: String!
    sex: String!
    unit: String!
    idCard: UmIDCardInput!
  }

  type Mutation {
    ${createProject.typeDef}
    ${createBOW.typeDef}

    createUser(
      username: String!
      password: String!
      email: String
      phone: String
      fullName: String
      ): User

    updateUser(
      id: ID!
      password: String
      email: String
      phone: String
      fullName: String
    ): User

    updateEmployee(content: updateOrganizationInput
    ): Employee

    login(
      username: String!
      password: String!
    ): Token
  }
`;

export default typeDefs;
