import {
  Box, Heading, Flex, Text,
} from '@chakra-ui/react';

interface CardWeatherProps {
    day: string,
    graus: string,
}

const CardWeather = ({ day, graus }: CardWeatherProps) => {
  return (
    <Box>
      <Heading>{day}</Heading>
      <Flex>
        <Box>
          {graus}
        </Box>
        <Flex>
          <Box>
            <Box />
            <Text>Chuva</Text>
          </Box>
          <Box />
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardWeather;
