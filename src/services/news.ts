import axios from 'axios';

const news = async () => {
  const response = await axios('http://api.mediastack.com/v1/news', {
    method: 'GET',
    params: {
      access_key: 'df8af1e6f094ba36f4ecb38804b17b57',
      languages: 'pt',
      keywords: 'climate',
      limit: '5',
    },
  });

  return response.data;
};

export default news;
