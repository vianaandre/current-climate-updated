import axios from 'axios';

const news = async () => {
  const response = await axios('http://api.mediastack.com/v1/news', {
    method: 'GET',
    params: {
      access_key: process.env.REACT_APP_NEWS,
      languages: 'pt',
      keywords: 'climate',
      limit: '5',
    },
  });

  return response.data;
};

export default news;
