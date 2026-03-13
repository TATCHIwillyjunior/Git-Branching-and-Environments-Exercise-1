import pool from "../config/pool.js";

export const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};
