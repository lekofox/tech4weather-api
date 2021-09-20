import Weather from "../model/Weather";
import sequelize from "sequelize";

class ListWeatherController {
  async list(req, res) {
    try {
      const result = await Weather.findAll({
        attributes: [
          "city",
          "country",
          [sequelize.fn("count", sequelize.col("city")), "cnt"],
        ],
        group: ["city", "country"],
        order: [[sequelize.col("cnt"), "DESC"]],
        raw: true,
      });
      console.log(result);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Erro inesperado; Por favor tente novamente",
      });
    }
  }
}

export default new ListWeatherController();
