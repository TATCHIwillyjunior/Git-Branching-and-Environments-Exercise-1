import dotenv from "dotenv";

const env = process.env.NODE_ENV || "dev";
dotenv.config({ path: `.env.${env}` });

export default {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
};
