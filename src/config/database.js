// config.js
require("dotenv").config();



module.exports = {
  username: "vmixwpvavnyasx",
  password: "fdeb024512c9458c15fb272c4eee82468e953e8433ef81f5b0933596ecf7c244",
  database: "d2pkbk8n59hd9a",
  host: "ec2-18-209-143-227.compute-1.amazonaws.com",
  dialect: "postgres",
  ssl:true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};
