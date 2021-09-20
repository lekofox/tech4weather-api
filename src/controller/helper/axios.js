import axios from "axios";
require("dotenv").config();

export async function getWeather(city) {
  const api_key = process.env.API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`
    );
    return response;
  } catch (error) {}
}
