import axios from 'axios';

const weather = async (lat: number, lon: number) => {
  const response = await axios('https://api.openweathermap.org/data/2.5/onecall', {
    method: 'GET',
    params: {
      lat,
      lon,
      lang: 'pt_br',
      units: 'metric',
      appid: '005bae086b2f834f591f43fad4011bb5',
    },
  });

  return response.data;
};

export default weather;
