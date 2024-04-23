const typeDefs = `
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
    userCount: Int!
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
