import axios from 'axios';

const API_KEY = "712bd882fe90415c3d6da81f8bb481a8";
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?&appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},si`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
