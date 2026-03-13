import pkg from "pg";
import config from "./env.js";

const { Pool } = pkg;

const pool = new Pool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

export default pool;
