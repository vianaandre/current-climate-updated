import {
  Box, Heading, Image, Flex, CircularProgress,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Info from './Info';
import weather from '../../services/weather';
import geolocation from '../../services/geolocation';

interface WeatherCurrentProps {
    lat: number;
    long: number;
}

interface CurrentDataProps {
    temp: number;
    humidity: number;
    windSpeed: number
}

const WeatherCurrent = ({ lat, long }: WeatherCurrentProps) => {
  const [currentData, setCurrentData] = useState<CurrentDataProps | null>(null);
  const [locationData, setLocationData] = useState<null | string>();

  const getLocation = async () => {
    const { name } = await geolocation(lat, long);
    setLocationData(name);
  };

  const getClimate = async () => {
    const { current }: any = await weather(lat, long);
    setCurrentData({
      temp: current.temp,
      humidity: current.humidity,
      windSpeed: current.wind_speed,
    });
  };

  useEffect(() => {
    getClimate();
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" bg="white.50" p={35} borderRadius="lg" borderWidth="thin" borderColor="white.150" h={450} justifyContent="center">
      <Box pb={10}>
        {locationData ? (
          <Heading fontFamily="body" as="h1" size="lg" color="black.600">{locationData}</Heading>
        ) : <CircularProgress />}
      </Box>
      <Image
        src="/assets/sun.svg"
      />
      <Heading fontFamily="body" mt={10} mb={10} color="black.600" size="xl" as="h2">{currentData?.temp}</Heading>
      <Flex direction="row" inlineSize={230} justifyContent="space-between">
        <Info num={currentData?.windSpeed} metric="km/h" desc="Vento" bgColor="blue.400" />
        <Info num={currentData?.windSpeed} metric="%" desc="Umidade" bgColor="yellow.200" />
      </Flex>
    </Flex>
  );
};

export default WeatherCurrent;
