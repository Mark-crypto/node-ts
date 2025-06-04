import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const connection = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5432,
});

connection.connect().then(() => {
  console.log(`Database is connected successfully`);
});

export default connection;
