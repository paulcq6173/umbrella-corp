const typeDefs = `
  type ProductInfo {
    pulishedDate: String!
    manufacturer: String!
  }

  type Product {
    gtin: String!
    name: String!
    slogan: String
    imgUrl: String!
    description: String!
    info: ProductInfo!
    genre: String!
    listPrice: Int!
    ratings: Int
  }
`;

export default { typeDefs };
