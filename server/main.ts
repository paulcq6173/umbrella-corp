import logger from '@/utils/logger';
// Apollo Server 4's Express integration, the expressMiddleware function.
import { expressMiddleware } from '@apollo/server/express4';
import User from '@server/models/userModel';
import cors from 'cors';
import 'dotenv/config'; // For using dotenv variables
import express, { Express, Request, Response } from 'express';
import http from 'http';
import jwt from 'jsonwebtoken';
import createApolloServer from './apolloServer';
//import connectToDB from './mongo';

//connectToDB();

const app: Express = express();

// get the port from env variable
const API_PORT = import.meta.env.VITE_PORT || 5000;

const httpServer = http.createServer(app);
const apolloServer = createApolloServer(httpServer);

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`.
await apolloServer.start();

const getCurUser = async (req: Request) => {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.startsWith('Bearer ')) {
    const decodedToken = <jwt.JwtPayload>(
      jwt.verify(auth.substring(7), import.meta.env.VITE_JWT_SEC)
    );

    const { id } = decodedToken;
    const currentUser = await User.findById(id);
    // The object returned by context is given to all resolvers as
    // their third parameter.
    return currentUser;
  }
};

// Middlewares
// express json-parser
app.use(express.json());

app.use('/', express.static('dist'));

app.use(
  '/graphql',
  cors<cors.CorsRequest>({
    origin: [
      'https://umbrella-corp-d4q4.onrender.com',
      'https://studio.apollographql.com',
    ],
  }),
  expressMiddleware(apolloServer, {
    context: async ({ req }: { req: Request }) => ({
      currentUser: await getCurUser(req),
    }),
  })
);

app.get('/api', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

// health cehck endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('Okay!');
});

// Modified server startup
await new Promise<void>((resolve) => app.listen({ port: API_PORT }, resolve));

logger.info(`Server ready at http://localhost:${API_PORT}`);

export default app;
