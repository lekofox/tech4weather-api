// config.js
require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  username: "postgres",
  password: "postgres",
  database: "postgres",
  host: "localhost",
  dialect: "postgres",
};
