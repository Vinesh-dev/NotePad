const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "3366",
  host: "localhost",
  port: 5432,
  database: "notepad"
});

module.exports = pool;
