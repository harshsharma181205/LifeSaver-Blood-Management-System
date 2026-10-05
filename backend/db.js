require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;

// dotenv.config() loads the existing .env variables.
// mysql2/promise supports database operations using async/await.
// createPool() configures reusable connections using your five variables. Number() converts the port to a number.
// module.exports makes the pool available through require('./db').