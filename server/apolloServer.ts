import { IServerContext } from '@/@types/types';
import logger from '@/utils/logger';
import { ApolloServer } from '@apollo/server';
import { GraphQLError, GraphQLSchema } from 'graphql';
import http from 'http';

// create a GraphQL.js GraphQLSchema instance from GraphQL schema
// for faster GraphQL development.
import { makeExecutableSchema } from '@graphql-tools/schema';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';

const apolloErrorFormatter = (error: unknown) => {
  const isGraphQLError = !(error instanceof Error);

  if (!isGraphQLError) {
    logger.error(error.message);
  }

  let normalizedError;
  if (error instanceof GraphQLError) {
    normalizedError = error;
  } else {
    console.error(error);
    normalizedError = new GraphQLError('Unexpected Error occured', {
      extensions: { code: 'INTERNAL_SERVER_ERROR' },
    });
  }

  return normalizedError;
};

/**
 * @see https://the-guild.dev/graphql/tools/docs/generate-schema
 */
const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

/**
 * @see https://www.apollographql.com/docs/apollo-server/api/express-middleware
 */
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const createApolloServer = (
  httpServer: http.Server<
    typeof http.IncomingMessage,
    typeof http.ServerResponse
  >
) => {
  return new ApolloServer<IServerContext>({
    schema,
    formatError: apolloErrorFormatter,
    // Initialization as before, plus the drain plugin
    // for our httpServer.
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    status400ForVariableCoercionErrors: true,
  });
};

export default createApolloServer;
