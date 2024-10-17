// app/backend/src/server.ts

// Import necessary modules and decorators
import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from 'typeorm';
import { schema } from './schema';
import ormConfig from './ormconfig'; // Import the ORM configuration

const startServer = async () => {
  const app = express();
  app.use(cors());

  // Connect to the database using the config
  await createConnection(ormConfig);

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

startServer().catch((error) => console.error(error));
