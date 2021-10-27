import axios from 'axios';

interface ResponseProps {
    data: {
        news: any
    }
}

export const getNews = async () => {
  const response = await axios('https://api.currentsapi.services/v1/search', {
    method: 'GET',
    params: {
      apiKey: process.env.REACT_APP_NEWS,
      language: 'pt',
    },
  }) as ResponseProps;

  return response.data.news;
};
