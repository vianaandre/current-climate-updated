import {
  Box, Heading, Image, Flex, CircularProgress,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Info from './Info';
import weather from '../../services/weather';
import geolocation from '../../services/geolocation';

interface WeatherCurrentProps {
    temp: number | undefined;
    humidity: number | undefined;
    windSpeed: number | undefined;
    location: string | null | undefined;
}

const WeatherCurrent = ({
  temp, humidity, windSpeed, location,
}: WeatherCurrentProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" bg="white.50" p={35} borderRadius="lg" borderWidth="thin" borderColor="white.150" h={450} justifyContent="center">
      <Box pb={12}>
        {location ? (
          <Heading fontFamily="body" as="h1" size="lg" color="black.600">{location}</Heading>
        ) : <CircularProgress />}
      </Box>
      <Image
        src="/assets/sun.svg"
      />
      <Heading fontFamily="body" mt={12} mb={12} color="black.600" size="xl" as="h2">{`${temp}°`}</Heading>
      <Flex direction="row" inlineSize={230} justifyContent="space-between">
        <Info num={windSpeed} metric="km/h" desc="Vento" bgColor="blue.400" />
        <Info num={humidity} metric="%" desc="Umidade" bgColor="yellow.200" />
      </Flex>
    </Flex>
  );
};

export default WeatherCurrent;
