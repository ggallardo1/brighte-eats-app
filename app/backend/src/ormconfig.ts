import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config: ConnectionOptions = {
    type: 'postgres', // Database type
    host: process.env.DB_HOST || 'localhost', // Database host, fallback to 'localhost' if not set
    port: parseInt(process.env.DB_PORT || '5432', 10), // Database port, fallback to 5432
    username: process.env.DB_USERNAME || 'postgres', // Database username, fallback to 'user'
    password: process.env.DB_PASSWORD || 'postgres', // Database password, fallback to 'password'
    database: process.env.DB_NAME || 'brighte_eats', // Database name, fallback to 'dbname'
    synchronize: true, // Automatically synchronize the database schema
    logging: false, // Enable logging for debugging
    entities: ["dist/entity/**/*.js"], // Path to the entities
  };

export default config;
