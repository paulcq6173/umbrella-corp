export const FRAG_PRODUCT = `
    fragment productFields on Medicine {
        gtin
        name
        genre
        listPrice
        imgUrl
        info {
          manufacturer
          pulishedDate
        }
        description
        slogan
        ratings
    }
`;

export const FRAG_BOW = `
    fragment bowFields on BOW {
        codeName
        version
        based
        height
        mass
        createdVia
        characteristics
        experimentalType
        massProducted
        imgUrl
    }
`;

export const FRAG_PROJECT = `
    ${FRAG_BOW}
    fragment projectFields on BOWProject {
        id
        projectName
        description
        models {
            ...bowFields
        }
        createdAt
        updatedAt
    }
`;
