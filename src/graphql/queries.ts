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
