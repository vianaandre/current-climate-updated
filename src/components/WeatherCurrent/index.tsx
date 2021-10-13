import {
  Box, Heading, Image, Flex, Progress,
} from '@chakra-ui/react';
import Info from './Info';

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
    <div>
      {location ? (
        <Flex flexDirection="column" alignItems="center" bg="white.50" p={35} borderRadius="lg" borderWidth="thin" borderColor="white.150" w={300} h={450} justifyContent="center" mb={{ base: '30px', md: '0px' }}>
          <Box pb={12}>
            <Heading fontFamily="body" as="h1" fontSize="24px" flexWrap="wrap" color="black.600" textAlign="center">{location}</Heading>

          </Box>
          <Image
            src="/assets/sun.svg"
          />
          <Heading fontFamily="body" mt={12} mb={12} color="black.600" fontSize="24px" as="h2">{`${temp}°`}</Heading>
          <Flex direction="row" inlineSize={230} justifyContent="space-between">
            <Info num={windSpeed} metric="km/h" desc="Vento" bgColor="blue.400" />
            <Info num={humidity} metric="%" desc="Umidade" bgColor="yellow.200" />
          </Flex>
        </Flex>
      ) : (
        null
      )}
    </div>
  );
};

export default WeatherCurrent;
