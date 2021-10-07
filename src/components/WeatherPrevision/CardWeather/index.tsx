import {
  Box, Heading, Flex, Text, Image,
} from '@chakra-ui/react';

interface CardWeatherProps {
    day: string,
    graus: string,
    rain: string,
    percentage: string,
    temMax: string,
    temMin: string,
}

const CardWeather = ({
  day, graus, rain, percentage, temMax, temMin,
}: CardWeatherProps) => {
  return (
    <Box mb={2}>
      <Heading fontSize="2xl" color="black.600" fontWeight={500} mb={1}>{day}</Heading>
      <Flex bgColor="white.50" flexDirection="row" p={15} align="center" borderRadius="lg" borderWidth="thin" borderColor="white.150">
        <Box mr={5}>
          <Heading fontSize="2xl" color="black.600" fontWeight={500}>{graus}</Heading>
        </Box>
        <Flex flexDirection="column">
          <Flex flexDirection="row" mb={4} align="center">
            <Box w={1} h={8} bgColor="blue.400" borderRadius="lg" mr={4} />
            <Text>Chuva</Text>
            <Flex flexDirection="row" ml="auto" align="center">
              <Image
                src="assets/water.svg"
              />
              <Text mr={2} ml={2}>
                {rain}
              </Text>
              <Text>
                {percentage}
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="row" align="center">
            <Box w={1} h={8} bgColor="yellow.200" borderRadius="lg" mr={4} />
            <Text>Temperatura</Text>
            <Flex ml={5}>
              <Image
                src="assets/temperatureMin.svg"
                mr={2}
              />
              <Text mr={3}>{temMax}</Text>
              <Image
                src="assets/temperature.svg"
                mr={2}
              />
              <Text>{temMin}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardWeather;
