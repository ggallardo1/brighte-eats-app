// app/backend/src/tests/schema.test.ts

import request from 'supertest';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from '../schema'; // Import the GraphQL schema
import { createConnection, getConnection } from 'typeorm'; // Import TypeORM for database connection
import * as dotenv from 'dotenv';
import { Lead } from '../entity/Lead';

const app = express(); // Create an Express app
app.use('/graphql', graphqlHTTP({ schema, graphiql: false })); // Set up the /graphql endpoint

describe('GraphQL API', () => {
  beforeAll(async () => {
    // Create a connection to the database (consider using a test database)
    await createConnection({
      "type": "postgres",
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'brighte_eats_test',
      "synchronize": true,
      "logging": false,
      "entities": [Lead]
    });
  });

  afterAll(async () => {
    // Close the database connection after tests
    await getConnection().close();
  });

  it('registers a new lead', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            registerLead(name: "John Doe", email: "john@example.com", mobile: "123456789", postcode: "12345", services: ["delivery", "pick-up"]) {
              id
              name
            }
          }
        `
      });
    expect(response.status).toBe(200);
    expect(response.body.data.registerLead).toBeDefined();
    expect(response.body.data.registerLead.name).toBe("John Doe");
  });

  it('fetches all leads', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            leads {
              id
              name
              email
              mobile
              postcode
              services
            }
          }
        `,
      });

    expect(response.status).toBe(200); // Check for a successful response
    expect(response.body.data.leads).toBeDefined(); // Ensure leads are returned
  });

  it('fetches a single lead by ID', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            lead(id: "1") {
              id
              name
              email
              mobile
              postcode
              services
            }
          }
        `,
      });

    expect(response.status).toBe(200); // Check for a successful response
    expect(response.body.data.lead).toBeDefined(); // Ensure the lead is returned
  });
});
