import axios from 'axios';

const geolocation = async (lat: number, lon: number) => {
  const response = await axios('https://api.openweathermap.org/geo/1.0/reverse', {
    method: 'GET',
    params: {
      lat,
      lon,
      lang: 'pt_br',
      appid: process.env.REACT_APP_GEOLOCATION,
    },
  });

  return response.data[0];
};

export default geolocation;
