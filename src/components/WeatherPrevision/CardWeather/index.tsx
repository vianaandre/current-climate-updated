import {
  Box, Heading, Flex, Text, Image,
} from '@chakra-ui/react';
import getDay from 'date-fns/getDay';
import dayWeek from '../../../utils/dayWeek';

interface CardWeatherProps {
    graus: number;
    rain: number;
    percentage: number;
    temMax: number;
    temMin: number;
    index: number;
}

const CardWeather = ({
  graus, rain, percentage, temMax, temMin, index,
}: CardWeatherProps) => {
  const percentageTransform = percentage > 90 ? (percentage - 5) : percentage;
  const date = index === 1 ? 'Amanhã' : dayWeek(getDay(new Date()) + index);
  const valueRain = isNaN(rain) ? 0 : rain;

  return (
    <Box mb={2} w={{ base: '100%', md: '350px' }}>
      <Heading fontSize="24px" color="black.600" fontWeight={500} mb={1}>{date}</Heading>
      <Flex bgColor="white.50" flexDirection="row" p={15} align="center" borderRadius="lg" borderWidth="thin" borderColor="white.150">
        <Box mr={5}>
          <Heading fontSize={{ base: '18px', md: '2xl' }} color="black.600" fontWeight={500}>{`${Math.ceil(graus)}°`}</Heading>
        </Box>
        <Flex flexDirection="column">
          <Flex flexDirection="row" mb={4} align="center">
            <Box w={1} h={8} bgColor="blue.400" borderRadius="lg" mr={4} />
            <Text fontSize={{ base: '14px', md: '16px' }}>Chuva</Text>
            <Flex flexDirection="row" ml="auto" align="center">
              <Image
                src="assets/water.svg"
              />
              <Text mr={2} ml={2} fontSize={{ base: '14px', md: '16px' }}>
                {`${Math.ceil(valueRain)}mm`}
              </Text>
              <Text fontSize={{ base: '14px', md: '16px' }}>
                {`${percentageTransform}%`}
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="row" align="center">
            <Box w={1} h={8} bgColor="yellow.200" borderRadius="lg" mr={4} />
            <Text fontSize={{ base: '14px', md: '16px' }}>Temperatura</Text>
            <Flex ml={5}>
              <Image
                src="assets/temperatureMin.svg"
                mr={2}
              />
              <Text mr={3} fontSize={{ base: '14px', md: '16px' }}>{`${Math.ceil(temMin)}°`}</Text>
              <Image
                src="assets/temperature.svg"
                mr={2}
              />
              <Text fontSize={{ base: '14px', md: '16px' }}>{`${Math.ceil(temMax)}°`}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardWeather;
