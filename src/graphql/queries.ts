import { FRAG_PRODUCT, FRAG_PROJECT } from '@/graphql/fragments';
import { gql } from '@apollo/client';

export const LOGGED_IN_USER = gql`
  query getLoggedInUser {
    me {
      username
    }
  }
`;

export const GET_TOKEN = gql`
  query getToken {
    token @client
  }
`;

export const GET_PRODUCTS = gql`
  ${FRAG_PRODUCT}
  query getAllProductsQuery {
    allProducts {
      ...productFields
    }
  }
`;

export const GET_PRODUCT_BY_GTIN = gql`
  ${FRAG_PRODUCT}
  query getProductQuery($gtin: String) {
    findProductById(gtin: $gtin) {
      ...productFields
    }
  }
`;

export const GET_PRODUCT_BY_NAME = gql`
  ${FRAG_PRODUCT}
  query getProductsQuery($keyword: String) {
    findProductByName(keyword: $keyword) {
      ...productFields
    }
  }
`;

export const ALL_PROJECTS = gql`
  ${FRAG_PROJECT}
  query allProjectsQuery {
    allProjects {
      ...projectFields
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  ${FRAG_PROJECT}
  query findProjectQuery($projectId: ID!) {
    findProjectById(id: $projectId) {
      ...projectFields
    }
  }
`;
