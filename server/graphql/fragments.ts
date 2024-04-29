export const FRAG_Employee = `
    fragment employeeFields on Employee {
        organizationName: String!
        employeeName: String!
        employeeNumber: Int!
        sex: String!
        unit: String!
        idCard: UmIDCard!
    }
`;

export const FRAG_BOW = `
    fragment bowFields on BOW {
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
`;
