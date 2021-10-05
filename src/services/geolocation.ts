import axios from 'axios';

const geolocation = async () => {
  const response = await axios('https://api.openweathermap.org/geo/1.0/reverse', {
    method: 'GET',
    params: {
      lat: '-24.8426',
      lon: '-54.324',
      lang: 'pt_br',
      appid: '005bae086b2f834f591f43fad4011bb5',
    },
  });

  console.log(response.data[0]);
};

export default geolocation;
