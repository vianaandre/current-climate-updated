import { List, ListItem } from '@chakra-ui/react';
import CardWeather from './CardWeather';

interface WeatherPrevisionProps {
    daily: Array<{
        rain: number;
        clouds: number;
        temp: {
            day: number;
            max: number;
            min: number;
        };
    }> | undefined;
}

const WeatherPrevision = ({ daily }: WeatherPrevisionProps) => {
  return (
    <List>
      {daily?.map(({
        rain, clouds, temp,
      }, index) => {
        return (
          <ListItem key={rain}>
            <CardWeather graus={temp.day} rain={rain} percentage={clouds} temMax={temp.max} temMin={temp.min} index={index + 1} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default WeatherPrevision;
