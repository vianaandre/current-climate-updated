import axios from 'axios';

const weather = async () => {
  const response = await axios('https://api.openweathermap.org/data/2.5/onecall', {
    method: 'GET',
    params: {
      lat: '-24.8426',
      lon: '-54.324',
      lang: 'pt_br',
      units: 'metric',
      appid: '005bae086b2f834f591f43fad4011bb5',
    },
  });

  console.log(response.data);
};

export default weather;
