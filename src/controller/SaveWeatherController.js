import { getWeather } from "./helper/axios";
import Weather from "../model/Weather";
import { uuid } from "uuidv4";
class SaveWeatherController {
  async fetchWeatherApi(req, res) {
    try {
      const id = uuid();
      const { city } = req.body;

      const fetch = await getWeather(city);

      const responseBody = {
        city: fetch.data.name,
        country: fetch.data.sys.country,
      };

      const create = await Weather.create({
        id,
        city: responseBody.city,
        country: responseBody.country,
        created_at: new Date(),
      });

      return res.status(200).json(create);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Erro inesperado; Por favor tente novamente",
      });
    }
  }
}

export default new SaveWeatherController();
