import { Sequelize } from "sequelize";
import database from "./database";
import Weather from "../model/Weather";

const connection = new Sequelize(database);

Weather.init(connection);

export default connection;
