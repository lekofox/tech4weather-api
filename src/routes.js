import { Router } from "express";
import ListWeatherController from "./controller/ListWeatherController";
import SaveWeatherController from "./controller/SaveWeatherController";

const routes = new Router();

routes.get("/", (req, res) =>
  res.status(200).json({
    message: "Obrigado por acessar!",
  })
);

routes.post("/post", SaveWeatherController.fetchWeatherApi);
routes.get("/list", ListWeatherController.list);
export default routes;
