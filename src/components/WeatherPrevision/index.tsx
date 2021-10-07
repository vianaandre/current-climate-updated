import { Flex, List, ListItem } from '@chakra-ui/react';
import CardWeather from './CardWeather';

const WeatherPrevision = () => {
  return (
    <List>
      <ListItem>
        <CardWeather day="Amanhã" graus="19°" rain="12mm" percentage="60%" temMax="19ºC" temMin="29ºC" />
      </ListItem>
      <ListItem>
        <CardWeather day="Amanhã" graus="19°" rain="12mm" percentage="60%" temMax="19ºC" temMin="29ºC" />
      </ListItem>
      <ListItem>
        <CardWeather day="Amanhã" graus="19°" rain="12mm" percentage="60%" temMax="19ºC" temMin="29ºC" />
      </ListItem>
    </List>
  );
};

export default WeatherPrevision;
