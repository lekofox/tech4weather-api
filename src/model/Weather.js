import { Sequelize } from "sequelize";
import Model from "./baseModel";

class Weather extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        city: Sequelize.STRING,
        country: Sequelize.STRING,
        created_at: Sequelize.DATE,
      },
      {
        sequelize,
        underscored: true,

        tableName: "weather",
      }
    );
    return this;
  }
}

export default Weather;
