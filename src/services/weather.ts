import axios from 'axios';

const weather = async (lat: number, lon: number) => {
  const response = await axios('https://api.openweathermap.org/data/2.5/onecall', {
    method: 'GET',
    params: {
      lat,
      lon,
      lang: 'pt_br',
      units: 'metric',
      appid: process.env.REACT_APP_WEATHER,
    },
  });

  return response.data;
};

export default weather;
