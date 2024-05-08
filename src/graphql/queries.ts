import { graphql } from '@/gql';
import {
  PageInfoFragment,
  ProductFragment,
  ProjectFragment,
} from '@/graphql/fragments';

export const LOGGED_IN_USER = graphql(`
  query getLoggedInUser {
    me {
      username
    }
  }
`);

export const GET_PRODUCTS = graphql(`
  ${ProductFragment}
  ${PageInfoFragment}
  query getAllProductsQuery(
    $searchKeyword: String
    $first: Int
    $after: String
    $orderDirection: OrderDirection
    $orderBy: AllProductsOrderBy
  ) {
    allProducts(
      searchKeyword: $searchKeyword
      first: $first
      after: $after
      orderDirection: $orderDirection
      orderBy: $orderBy
    ) {
      edges {
        node {
          ...productFields
        }
        cursor
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
`);

export const GET_PRODUCT = graphql(`
  ${ProductFragment}
  query getProductQuery($productId: ID!) {
    findProductById(id: $productId) {
      ...productFields
    }
  }
`);

export const ALL_PROJECTS = graphql(`
  ${ProjectFragment}
  query allProjectsQuery {
    allProjects {
      ...projectFields
    }
  }
`);

export const GET_PROJECT = graphql(`
  ${ProjectFragment}
  query findProjectQuery($projectId: ID!) {
    findProjectById(id: $projectId) {
      ...projectFields
    }
  }
`);
