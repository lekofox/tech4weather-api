import app from "./app";
import connection from "./config/connection";

const connect = async () => {
  try {
    await connection.authenticate();
    console.log("Server running...");
  } catch (err) {
    console.log(err);
  }
};
app.listen(3333);
