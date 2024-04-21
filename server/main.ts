// For using dotenv variables
import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('dist'));

app.get('/api', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

// health cehck endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

export default app;
