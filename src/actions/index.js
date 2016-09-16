import Axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = '788939905b612b70dbebdda09880f000';
const OPEN_WEATHER_MAP_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${OPEN_WEATHER_MAP_ROOT_URL}&q=${city},ca`;
  const request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
